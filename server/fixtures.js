/**
 * Created by ZIMAI on 2016/12/12.
 */
if(Posts.find().count()===0){
    Posts.insert({
        title:"微博",url:"http://weibo.com"
    });
    Posts.insert({
        title:"微信",url:"http://weixin.com"
    });
    Posts.insert({
        title:"QQ",url:"http://QQ.com"
    })
}