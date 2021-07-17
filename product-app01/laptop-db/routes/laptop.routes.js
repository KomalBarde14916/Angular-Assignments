module.exports = app => {
    const laptops = require("../controllers/laptop.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", laptops.create);
  
    router.get("/", laptops.findAll);
    
    router.get("/:id", laptops.findOne);
  
    router.put("/:id", laptops.update);
  
    router.delete("/:id", laptops.delete);
  
    router.delete("/", laptops.deleteAll);
  
    app.use('/api/laptops', router);
  };
  