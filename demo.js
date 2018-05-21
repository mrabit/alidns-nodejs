var ALIDNS = require('./alidns');
var config = require('./config');


var client = ALIDNS({
  accesskeyId: config.accesskeyId,
  accesskeySecret: config.accesskeySecret
});

// API概览 :
// https://help.aliyun.com/document_detail/29740.html
client.queryData({
  Action: "DescribeDomainRecords",
  DomainName: 'mrabit.com',
  PageSize: 2
}, function(err, res) {
  if (err) return console.log(err);
  console.log('success', JSON.stringify(res));
});
