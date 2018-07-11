var numeral = require('numeral')
var bcrypt = require('bcrypt-nodejs')
var dateFormat = require('dateformat')
var manifest = require('../services/manifest')

exports.loggedIn = function (req, res, next) {
  if (req.session.user) { // req.session.passport._id
    next()
  } else {
    res.redirect('/login')
  }
}

exports.home = function (req, res) {
  console.log(req.protocol + '://' + req.headers.host)
  res.render('home.ejs', {
    error: req.flash('error'),
    success: req.flash('success'),
    title: 'Demo home page',
    session: req.session,
    manifest: manifest,
    baseUrl: req.protocol + '://' + req.headers.host + '/'
	})
}

exports.signup = function (req, res) {
  if (req.session.user) {
    res.redirect('/home')
  } else {
    res.render('signup', {
      error: req.flash('error'),
      success: req.flash('success'),
      session: req.session
    })
  }
}

exports.login = function (req, res) {
  if (req.session.user) {
    res.redirect('/home')
  } else {
    res.render('login', {
      error: req.flash('error'),
      success: req.flash('success'),
      session: req.session
    })
  }
}
