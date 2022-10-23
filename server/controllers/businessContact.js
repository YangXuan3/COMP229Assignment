/*
    File name: businessContact.js
    Student name: Yang Xuan
    StudentID: 301186289
    Date: Oct 23, 2022
*/
let express = require ('express');
let router = express.Router();
let mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let BusinessContact = require('../model/businessContact');
module.exports.displayBusinessContact = (req,res,next)=>{
    BusinessContact.find((err,businessContact)=>{
        if(err)
        {
        return console.error(err);
        }
        else
        {
         //console.log(BusinessContact);
         res.render('businessContact/list', {title:'Business Contact', BusinessContact:businessContact, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.displayAddPage = (req,res,next)=>{
    res.render('businessContact/add',{title:'Add business contact', displayName: req.user ? req.user.displayName : ''})

}

module.exports.processAddPage = (req,res,next)=>{
    let newBusinessContact = BusinessContact({
        "name": req.body.name,
        "number":req.body.number,
        "email":req.body.email,
        "description":req.body.description
    });
    BusinessContact.create(newBusinessContact,(err,BusinessContact)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/businessContact');
        }
    });
    }
    
        module.exports.displayUpdatePage = (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.findById(id,(err,businessToEdit)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.render('businessContact/update',{title:'Update Business Contact', businessContact: businessToEdit, displayName: req.user ? req.user.displayName : ''});
                    
                }
            });
            }

        module.exports.processUpdatePage = (req,res,next)=>{
            let id = req.params.id
            console.log(req.body);
            let updatedBusinessContact = BusinessContact({
                "_id":id,
                "name":req.body.name,
                "number":req.body.number,
                "email":req.body.email,
                "description":req.body.description
            });
            BusinessContact.updateOne({_id:id}, updatedBusinessContact,(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContact');
                }
            });
        }

        module.exports.performDelete= (req,res,next)=>{
            let id = req.params.id;
            BusinessContact.remove({_id:id},(err)=>{
                if(err)
                {
                    console.log(err);
                    res.end(err);
                }
                else
                {
                    res.redirect('/businessContact');
                }
            });
            }