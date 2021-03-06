// import express from 'express'

const express = require('express')

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// Add POST - /api/login
router.post('/login', (req, res) => {
  // console.log('login接口。')
  // if (req.body.username === 'demo' && req.body.password === 'demo') {
  //   req.session.authUser = { username: 'demo' }
  //   return res.json({ username: 'demo' })
  // }
  // console.log(req.body.tel)
  if (req.body.tel) {
    req.session.tel = req.body.tel
    return res.json({ tel: req.body.tel})
  }
  res.status(401).json({ message: 'Bad credentials' })
})

// Add POST - /api/logout
router.post('/logout', (req, res) => {
  // console.log('logout接口。')
  delete req.session.authUser
  res.json({ ok: true })
})

// Add POST - /api/refresh
router.post('/refresh', (req, res) => {
  if (req.session.tel) {
    req.session.views++
    return res.json({ ok: true })
  }else{
    req.session.views = 1
    return res.json({ ok: false })
  }
})

// Export the server middleware
module.exports = {
  path: '/api',
  handler: router
}
