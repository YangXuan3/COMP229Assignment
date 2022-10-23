/*
    File name: index.js
    Student name: Yang Xuan
    StudentID: 301186289
    Date: Oct 23, 2022
*/
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage); 
/* GET home page. */
router.get('/home', indexController.displayHomePage); 
/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);
/* GET products page. */
router.get('/projects', indexController.displayProjectsPage);
/* GET Services page. */
router.get('/services', indexController.displayServicesPage);
/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);

/*GET Route for displaying the Login Page */
router.get('/login',indexController.displayLoginPage);
/*POST Route for processing the Login Page */
router.post('/login',indexController.processLoginPage);
/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/*GET to perform user logout */
router.get('/logout',indexController.performLogout)
module.exports = router;
