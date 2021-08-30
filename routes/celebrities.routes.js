// starter code 
const router = require("express").Router();
const CelebrityModel = require('../models/Celebrity.model')

// GET '/celebrities/create'
router.get('/', (req, res, next) => {
    const{name, occupation, catchPhrase} = req.body
    CelebrityModel.create({name, occupation, catchPhrase})
        .then((celebrity) => {
            console.log('Your new celebrity is:', celebrity)
            res.render('/new-celebrity')
        })
        .catch((err) => {console.log(err)});
})

module.exports = router;
