var express = require('express');
var wechat = require('./lib/wechat');

var log = require('debug')('weixin-werewolf');

// 启动服务
var app = express();

var config = {
  token: 'feiyuitravel',
  appid: 'wx5d34f7a9cb77d517',
  encodingAESKey: '3GyljhUVInXIcHR0KmIXX30sazb3SrgBNnBQ4RSLM5W'
};

app.use(express.query());
app.use('/wechat', wechat(config, function (req, res, next) {
  // 微信输入信息都在req.weixin上
  var message = req.weixin;
  if (message.MsgType === 'text') {
    if(message.Content === 'create') {
      res.reply([
      {    
            title: '新建狼人杀房间',
            description: '请在打开页面输入人数',
            picurl: 'http://weixin-werewolf.herokuapp.com/images/create_room.jpg',
            url: 'http://weixin-werewolf.herokuapp.com'
      }    
      ]);
    }    
  }
}));

// 在环境变量提供的 $PORT 或 3000 端口监听
var port = process.env.PORT || 3000;
app.listen(port, function(){
log("Listening on %s", port);
});

// 微信接口地址只允许服务放在 80 端口
// 所以需要做一层 proxy
app.enable('trust proxy');
