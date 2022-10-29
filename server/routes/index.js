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

/* Get Route for displaying the Login page */
router.get("/login", indexController.displayLoginPage );

/* Post Route for processing the Login page */
router.post("/login", indexController.processLoginPage);

/* Get Route for displaying the Register page */
router.get("/register", indexController.displayRegisterPage );

/* Post Route for processing the Register page */
router.post("/register", indexController.processRegisterPage);

/* Get to perform User Logout */
router.get("/logout", indexController.performLogout);


module.exports = router;
