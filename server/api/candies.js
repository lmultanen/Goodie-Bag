const Candy = require('../db/models/Candy')
const router = require('express').Router()


router.get('/', async (req,res,next) => {
    try {
      const candies = await Candy.findAll();
      console.log(candies)
      res.send(candies)
    } catch (err) {
      next(err)
    }
  })

module.exports = router;