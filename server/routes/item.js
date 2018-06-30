const express = require('express');
const router = express.Router();
const item = require("../../models/itemModel");

router.post('/additem', function(req, res) {
    console.log('posting an new item');
    console.log(req.body);
    var newItem = new item(req.item);
    newItem.save(function(err, item){
        
        if(err) {
            var serverMessage = {
              message:  'Error inserting the new service999'
            }
            console.log(serverMessage);

            res.send(serverMessage);
        } else {
            res.json(item);
        }

    })

})
module.exports = router;