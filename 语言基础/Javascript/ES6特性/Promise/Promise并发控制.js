let taskLiving = 0
let taskQueue = [] // 任务队列
let max = 5

/**
 * 【任务收集器】，只做两件事：
 * 1. 发起5个'线程'，每个'线程'分别执行自己的[task]
 * 2. 超过5个'线程'之后，把后面的任务存储起来
 * @注意: 如果是异步任务，需要用Promise把[task]封装起来
 **/
function threadManager(task) {
  if (taskLiving >= max) {
    taskQueue.push(task)
  } else {
    thread(task)
  }
  taskLiving ++
}

/**
 * 【任务触发器】，只做一件事：
 * 递归自己，反复调用任务队列，直到任务队列为空
 * @说明：
 * 因为线程管理器[threadManager]已经发起了5个'线程'，
 * 每个 [thread] 执行完一个任务后，只负责递归自己就好了，
 * 这样就可以保持同时5个'线程'的任务在跑
 **/
async function thread(task) {
  await task()
  taskLiving --
  if (taskQueue.length > 0) {
    thread(taskQueue.shift())
  }
}

let loop = 10
while(loop--) {
  threadManager(() => {
    return new Promise((s, j) => {
      setTimeout(() => {
        console.log('running task')
        return s()
      }, 2000)
    })
  })
}