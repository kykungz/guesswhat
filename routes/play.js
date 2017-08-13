import express from 'express'
import game from '../game'
const router = express.Router()

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const id = req.params.id
  if (game.hasRoom(id)) {
    res.render('play', { title: 'Express' })
  } else {
    next()
  }
})

export default router
