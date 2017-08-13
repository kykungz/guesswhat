import express from 'express'
import game from '../game'
const router = express.Router()

/* GET home page. */
router.post('/', function(req, res, next) {
  const words = req.body.words
  game.create(words)
})

export default router
