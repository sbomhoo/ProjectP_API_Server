/**
 * server.js
 * server 가동 명령어 :  node mongodb-server.js
 */
 var back         = require('./back/routes/route'); // 추가
 var express     = require('express');
 var app         = express();
 var path        = require('path');
 var bodyParser  = require('body-parser');
 var mongoose    = require('mongoose');
  
 
 // =========== [ 미들 웨어 셋팅 ] ===============
 // bodyParser 셋팅
 app.use(bodyParser.urlencoded({ extended: true }));    
 app.use(bodyParser.json());     
 
 // '/api'로 시작하는 요청이 올 때 ./back/routes/route 경로 코드 실행 
 app.use( '/api' ,back);     
 
 // 그 외의 호출은 react 실행
 /**
 app.use( '/' ,express.static(path.join(__dirname, './front/build')));  
 app.get('*', function(req,resp){
     resp.sendFile( path.join(__dirname, './front/build/index.html'))
 }) */
 
 
 // =========== [ mongoose 세팅 ] ===============
 // CONNECT TO MONGODB SERVER
 var db = mongoose.connection;
 db.on('error', console.error);
 db.once('open', function(){
      // CONNECTED TO MONGODB SERVER
      console.log("Connected to mongod server");
 });
 mongoose.connect('mongodb://localhost/moonjin_db');
  
 // =========== [RUN SERVER] ===============
 var port = process.env.PORT || 8080;
 var server = app.listen(port, function(){
  console.log("Express server has started on port " + port)
 });
  