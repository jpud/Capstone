//We also need to import the Pizza model and instantiate an instance of Express Router module.

const { Router } = require("express");
const Pizza = require("../models/Pizza");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM ("/") = pizza
router.post("/", (request, response) => {
  const newPizza = new Pizza.model(request.body);
  newPizza.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get (read) all records from the collection
router.get("/", (request, response) => {
  Pizza.model.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Pizza.model.findById(request.params.id, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

//class example for crust - Can't get to work
router.get("/crust/:crust", (request, response) => {
  Pizza.model.find({ crust: request.params.crust }, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Delete a record
router.delete("/:id", (request, response) => {
  Pizza.model.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

//To set up an update operation, we are going to create a new PUT route that finds the record in the database and updates the specified fields. We can achieve this by doing:
router.put("/:id", (request, response) => {
  const body = request.body;
  Pizza.model.findByIdAndUpdate(
    //Stacked Parameters - 1st One
    request.params.id,

    {
      $set: {
        // Take note that the customer is not included, so it can't. This is how you update your records.
        crust: body.crust,
        cheese: body.cheese,
        sauce: body.sauce,
        toppings: body.toppings
      }
    },

    {
      new: true,
      upsert: true
    },

    (error, record) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(record);
    }
  );
});
// export the router variable to be used in the index.js file
module.exports = router;
