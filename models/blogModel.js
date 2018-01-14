const mongoose = require("mongoose");
var Schema = mongoose.Schema,

  BlogSchema = new Schema({
    title: String,
    body: String,
  }, {
    timestamps: {
      createdAt: 'created_at'
    }
  });


mongoose.model("Blog", BlogSchema);

// Export the model
module.exports = mongoose.model("Blog", BlogSchema);
