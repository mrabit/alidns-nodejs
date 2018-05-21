var ALIDNS = require('./alidns');
var config = require('./config');


var DNS = ALIDNS({
  accesskeyId: config.accesskeyId,
  accesskeySecret: config.accesskeySecret
});

// API概览 :
// https://help.aliyun.com/document_detail/29740.html?spm=a2c4g.11186623.6.585.yINpwr
DNS.queryData({
  DomainName: 'mrabit.com',
  pageSize: 2
}, function(err, res) {
  if (err) return console.log(err);
  console.log('success', JSON.stringify(res));
});
