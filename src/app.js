// console.log('Hello Abhi');
const { response } = require('express');
const express = require('express')
const app = express()
const routes = require('./routes/main.js')
const hbs = require("hbs")
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const Detail = require("./models/detail")
const Service = require("./models/Service")

// /static/css/Style.css
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static', express.static("public"))
app.use('', routes)


//temp engine
app.set('view engine', 'hbs')
app.set("views", "views")

hbs.registerPartials("./views/partials")
// hbs.registerPartials(__dirname + '/views/partials');


//db connection
mongoose.connect("mongodb://localhost/website_tut", () => {
    console.log("db connected..")
    // Service.create([
    //     {
    //         icon:'',
    //         title:'provide best courses',
    //         description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at laboriosam perferendis mollitia porro,',
    //         linkText:'https://www.linkedin.com/in/abhishek-tekalkar-636932128/',
    //         link:'https://www.linkedin.com/in/abhishek-tekalkar-636932128/'
    //     }
    // ])
    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://media-exp1.licdn.com/dms/image/D4D03AQFdgvGY1qdVXg/profile-displayphoto-shrink_800_800/0/1662913665925?e=1669248000&v=beta&t=zVCpK_6uCVoiwGpT6bOJOk84K2uPJ-hdp-dfbF4aknI",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },
    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallary"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact-us",
    //             url:"/contact-us"
    //         },
    //     ]
    // })

    mongoose.connect
})

app.listen(process.env.PORT | 5556, () => {
    console.log(" started")
}); 