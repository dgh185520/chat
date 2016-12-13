/**
 * Created by ZIMAI on 2016/12/12.
 */
Meteor.publish("posts",function(){  //服务器发布
    return Posts.find({flagged:false,autothor:autothor});
});