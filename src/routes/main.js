const { response, request } = require("express")
const express = require("express")
const Contact = require("../models/contact")
const Detail = require("../models/detail")
const Service = require("../models/Service")
// const { router } = require("server")
const routes = express.Router()
// const Detail =require("../models/detail")

routes.get('/', async (req, res) => {
    // res.send("this is response")

    const details = await Detail.findOne({ "_id": "632eb5335896283ddc7b3c0f"})
    // console.log(details)
    const services=await Service.find()
    res.render("index", {
        details: details,
        services:services

    })
})
routes.get('/gallery', (req, res) => {
    // res.send("this is gallary")
    res.render("gallery")
})

routes.post("/process-contact-form",async (req,response)=>{
    console.log('this is form is submitted')
    console.log(req.body)
    //save the data to db
    try{
        const data=await Contact.create(request.body)
        console.log(data)
        response.redirect("/")
    }catch(e){
        console.log(e)
        response.redirect("/")
    }
})
// module.exports=router;
module.exports = routes;