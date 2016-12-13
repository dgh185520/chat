/**
 * Created by ZIMAI on 2016/12/12.
 */

Template.postsList.helpers({
    posts:function(){
        return Posts.find({author:"bob-smith",category:"JavaScrip"});
    }
});