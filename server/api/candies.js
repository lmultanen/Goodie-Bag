const Candy = require('../db/models/Candy')
const router = require('express').Router()


router.get('/', async (req,res,next) => {
    try {
      const candies = await Candy.findAll();
      res.send(candies)
    } catch (err) {
      next(err)
    }
  })

router.get('/:id', async (req,res,next) => {
    try {
        const candy = await Candy.findByPk(req.params.id)
        res.send(candy)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', async (req,res,next) => {
    try {
        const candy = await Candy.findByPk(req.params.id)
        res.send(await candy.update(req.body))
    } catch (err) {
        next(err)
    }
})

module.exports = router;