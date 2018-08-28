const db = require('../database/models.js');

module.exports = {
  fetch: (req, res) => {
    console.log('In GET...');
    const { listName } = req.query;
    db.Todo.findAll({
      where: {
        list_name: listName
      }
    })
      .then(todos => {
        if (todos) {
          res.status(200).send(todos);
        } else {
          res.status(404).send('List not Found');
        }
      })
      .catch(err => res.status(404).send(err));
  },
  post: (req, res) => {
    console.log('In POST...');
    const { todo, listName } = req.body;
    db.Todo.create({
      name: todo,
      list_name: listName
    })
      .then(todo => {
        res.status(201).send(todo);
      })
      .catch(err => {
        res.status(404).send(err);
      });
  },
  delete: (req, res) => {
    console.log('In DELETE...');
    const { todo } = req.query;
    db.Todo.destroy({
      where: { name: todo }
    })
      .then(() => {
        res.status(202).send('Todo deleted');
      })
      .catch(err => {
        res.status(404).send(err);
      });
  }
};
