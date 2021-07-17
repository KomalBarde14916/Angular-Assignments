const Laptop = require("../db/models").laptops;

exports.create = (req, res) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  const laptop = {
    name: req.body.name,
    price: req.body.price,
    
  };
 
  Laptop.create(laptop)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the laptop."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Laptop.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving laptop."
      });
    });
};


exports.findOne = (req, res) => {
  const id = req.params.id;

  Laptop.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving laptop with id=" + id
      });
    });
};


exports.update = (req, res) => {
  const id = req.params.id;

  Laptop.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Laptop was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update laptop with id=${id}. Maybe laptop was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating laptop with id=" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Laptop.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Laptop was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete laptop with id=${id}. Maybe laptop was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete laptop with id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Laptop.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Laptop were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all laptops."
      });
    });
};


