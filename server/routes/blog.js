const express = require('express');
const router = express.Router();
const blog = require("../../models/blogModel");

router.post('/addblog', function(req, res) {
    console.log('Posting an New Service');
    console.log(req.body);
    var newBlog = new blog(req.body);


    newBlog.save(function(err, blog) {

        if(err) {
            var serverMessage = {
              message:  'Error inserting the new service999'
            }
            console.log(serverMessage);

            res.send(serverMessage);
        } else {
            res.json(blog);
        }
    });

});

router.get('/getblog',function(req,res){
   blog.find().exec(function(error,blogRes){
       if(error){
           console.log("there is an error");
           res.send(error);
           return;

       }
       else {
        res.json(blogRes);
       }
   })

})

module.exports = router;
