- `git revert [hash]`
恢复已经推送到远程仓库的版本
会额外产生一个版本记录，如果要做得人不知鬼不觉，可以使用 `git filter-branch`

- `git reset --hard [hash]` 
这个指令也可以做到，但是hash之后的所有信息，包括**暂存区，本地仓库和远程仓库的版本，其他人的提交版本**，都会被一并抹除，，所以要谨慎使用