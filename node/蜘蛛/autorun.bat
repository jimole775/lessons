node -v

@echo off
IF ERRORLEVEL 1 (START iexplore.exe http://nodejs.org/dist/v0.6.3/node-v0.6.3.msi
pause ��װnode���֮��) ELSE IF ERRORLEVEL 0 ECHO ϵͳ���Ѿ���node,����Ҫ��װ

IF NOT EXIST %cd%\node_modules\cheerio (ECHO ���ڰ�װ������,��ȴ�...
npm install -g cheerio
npm install cheerio --save-dev)

IF NOT EXIST %cd%\node_modules\q (ECHO ���ڰ�װ������,��ȴ�...
npm install -g q
npm install q --save-dev)

ECHO �������Ѿ���,�������г���...
node spider.js
