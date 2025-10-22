// Create a new router
const express = require("express");
const router = express.Router();

// Get the current date and time using JS
const currentDate = new Date();

// Handle the main routes

router.get("/", (req, res) => res.send("Hello World!")); 
router.get("/about", (req, res) => res.send ("<h1>This is the about page</h1>"));
router.get("/contact", (req, res) => res.send ("<h1>This is the contact page</h1><p>You can contact us at xxx@gold.ac.uk</p>"));
router.get("/date", (req, res) => {
    // Shows the current date and time using the variable
    res.send(`<h1>Current Date and Time</h1><p>${currentDate}</p>`);
});


// Export the router object so index.js can access it
module.exports = router;
