let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');
let businessContactController = require('../controllers/businessContact');
function requireAuth(req,res,next)
{
    //check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
//connect to business contact model
let BusinessContact = require('../model/businessContact');

//GET ROUTE for the business contact page - READ OPERATION
router.get('/',businessContactController.displayBusinessContact);
/*GET Route for displaying the Add page - CREATE operation*/
router.get('/add',requireAuth,businessContactController.displayAddPage);

/*POST Route for processing the Add page - CREATE operation*/
router.post('/add',requireAuth,businessContactController.processAddPage);



/*GET Route for displaying the Edit page - UPDATE operation*/
router.get('/update/:id',requireAuth,businessContactController.displayUpdatePage);
/*POST Route for processing the Edit page - UPDATE operation*/
router.post('/update/:id',requireAuth,businessContactController.processUpdatePage);
/*GET to perform Deletion - DELETE operation*/
router.get('/delete/:id',requireAuth,businessContactController.performDelete);
module.exports = router;