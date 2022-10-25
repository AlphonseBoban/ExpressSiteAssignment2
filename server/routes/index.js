let express = require("express");
let router = express.Router();

let indexController = require("../controllers/index"); 

/* GET home page. */
router.get("/", indexController.displayHomePage);

/* GET home page. */
router.get("/index", indexController.displayHomePage); 

/* GET About me page. */
router.get("/about", indexController.displayaboutpage);

/* GET Projects page. */
router.get("/projects", indexController.displayprojectspage); 

/* GET Services page. */
router.get("/services", indexController.displayservicespage);

/* GET Contact me page. */
router.get("/contact", indexController.displaycontactpage);

module.exports = router;
