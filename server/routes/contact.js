let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// connect to the contact model
let Contact = require("../models/contact");

let contactController = require("../controllers/contact");

// Get Route for the Contact list page- READ operation
router.get("/", contactController.displayContactList);

// Get Route for displaying the Add page- CREATE operation
router.get("/add", contactController.displayAddPage );

// Post Route for processing the Add page- CREATE operation
router.post("/add", contactController.processAddPage);

// Get Route for displaying the Edit page- UPDATE operation
router.get("/edit/:id", contactController.displayEditPage);

// Post Route for processing the Edit page- UPDATE operation
router.post("/edit/:id", contactController.processEditPage);

// Get to perform deletion- DELETE operation
router.get("/delete/:id", contactController.performDelete);

module.exports = router;