var express = require('express');
// const { response } = require('../app');
var router = express.Router();

// GET home page.
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', function (req, res, next) {
  res.send('Hello, World!'); // Sends a simple response
});


router.post('/submit', function (req, res, next) {
  const age = req.body.age; // Assuming the form sends a 'name' field
  res.send(`Hello, ${age}! Your data was submitted.`); // Respond with the submitted data
});


router.put('/update/:id', function (req, res, next) {
  const { id } = req.params; // Extract the 'id' from the URL
  const updatedData = req.body; // Get the updated data from the request body

  // Simulate updating the data (this would typically be a database operation)
  res.send(`Updated item with ID ${id}: ${JSON.stringify(updatedData)}`);
});


router.delete('/delete/:id', function (req, res, next) {
  const { id } = req.params; // Extract the 'id' from the URL

  // Simulate deleting the item (usually a database operation)
  res.send(`Deleted item with ID ${id}`);
});


module.exports = router;


