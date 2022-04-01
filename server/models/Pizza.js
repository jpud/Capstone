//require mongoose into our model file so that we can define a Schema and Model.
const mongoose = require("mongoose");

//To create the schema, we will declare it like so:
const pizzaSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true
  },
  crust: {
    type: String,
    required: true
  },
  cheese: String,
  sauce: {
    type: String,
    required: true
  },
  toppings: [String]
});

//After we have declared our schema, we will pass that schema to a Mongoose model with:
const Pizza = mongoose.model("Pizza", pizzaSchema);

//Finally, we need to export both the Pizza Schema and Model so they can be used in the index.js.
module.exports = {
  schema: pizzaSchema,
  model: Pizza
};
