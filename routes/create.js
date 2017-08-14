import express from 'express'
import game from '../game'
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('create', { title: 'Create New Game' })
})

router.post('/', function(req, res, next) {
  const words = req.body.words
  game.create(words)
})

export default router
