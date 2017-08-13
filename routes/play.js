import express from 'express'
const router = express.Router()

/* GET home page. */
router.get('/:id', function(req, res, next) {
  const id = req.param.id
  res.render('play', { title: 'Express' })
})

export default router
