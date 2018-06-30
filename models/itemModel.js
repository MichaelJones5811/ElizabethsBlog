const mongoose = require("mongoose");
var Schema = mongoose.Schema,

  ItemSchema = new Schema({
    title: String,
    pic: String,
    price: Number,
    qty: Number,
  }, 
  {
    timestamps: {
      createdAt: 'created_at'
    }
  });


mongoose.model("Item", ItemSchema);

// Export the model
module.exports = mongoose.model("Item", ItemSchema);