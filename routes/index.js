var express = require('express');
var router = express.Router();

const todoItems = [
  {
    id: 1,
    title: 'First item',
    body: 'Content of first item.'
  },
  {
    id: 2,
    title: 'Second item',
    body: 'Content of second item.'
  },
  {
    id: 3,
    title: 'Third item',
    body: 'Content of third item.'
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TODO App', 'items': todoItems });
});

router.get('/item/:id', (req, res, next) => {
  const itemId = parseInt(req.params.id);
  const item = todoItems.find((item) => {
    return item.id === itemId
  });
  res.render('item', { title: 'TODO App', 'item': item });
});

router.post('/item/:id', (req, res, next) => {
  const itemId = parseInt(req.params.id);
  const item = todoItems.find((item) => {
    return item.id === itemId
  });

  const updatedItem = req.body;
  item.title = updatedItem.title;
  item.body = updatedItem.body;

  console.log(`Updated item: ${JSON.stringify(updatedItem)}`);

  res.redirect('/');
});

module.exports = router;
