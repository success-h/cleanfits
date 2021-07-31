require('dotenv').config()
const http2 = require('http2')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')

// API ROUTES
const pricing = require('./api/routes/pricing')
const users = require('./api/routes/users')
const orders = require('./api/routes/orders')

// // MONGO DB Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB
mongoose
	.connect(db, { useNewUrlParser: true, useCreateIndex: true })
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err))

// SPECIFY ENVIRONMENT
const dev = process.env.NODE_ENV !== 'production'

// DEFINE PORT TO RUN SERVER
const PORT = process.env.PORT || 4000

///INIT APP WITH EXPRESS
const app = express()

function requireHTTPS(req, res, next) {
	// The 'x-forwarded-proto' check is for Heroku
	if (
		!req.secure &&
		req.get('x-forwarded-proto') !== 'https' &&
		process.env.NODE_ENV !== 'development'
	) {
		return res.redirect('https://' + req.get('host') + req.url)
	}

	// return res.redirect('http://' + req.get('host') + req.url);
	next()
}

// EXPRESS MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))
app.use('/api/v1', pricing)
app.use('/api/v1', users)
app.use('/api/v1', orders)
app.post('/api/v1/send', (req, res) => {
	const { name, email, message } = req.body

	const output = `
    <p>Cleanfits Contact Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${name}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${message}</p>
  `

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		// host: 'mail.YOURDOMAIN.com',
		// port: 587,
		port: 465,
		host: 'smtp.gmail.com',
		secure: true, // true for 465, false for other ports
		auth: {
			user: 'francis.udejiofficial@gmail.com', // generated ethereal user
			pass: 'desales9563' // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	// setup email data with unicode symbols
	let mailOptions = {
		from: `"Cleanfits Customer" <${email}>`, // sender address
		to: 'francis.udejiofficial@gmail.com', // list of receivers
		subject: 'Contact Request', // Subject line
		text: 'Hello! Cleanfits Team', // plain text body
		html: output // html body
	}

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).json({
				msg: 'Your Email has unable to be sent, try again.'
			})
		}
		console.log('Message sent: %s', info.messageId)
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

		res.status(200).json({
			msg: 'Email has been sent'
		})
	})
})

app.post('/api/v1/confirm', (req, res) => {
	const { email, ref, cart, total } = req.body

	const output = `
    <p>Cleanfits Order Request</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Email: ${email}</li>
    </ul>
    <h3>Order Details:</h3>
    <ul>
      <li>Order Id: ${ref}</li>
      <li>Order total: ${total}</li>
      <li>Order Id: ${ref}</li>
    </ul>
    <h3>Confirmation</h3>
    <p>
      You recently paid to have your laundry cleaned and delivered, a Cleanfits representative will be in contact soon
    </p>

    <p>Kind Regards</p>
    <p>Cleanfits Team.</p>
  `

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		// host: 'mail.YOURDOMAIN.com',
		// port: 587,
		port: 465,
		host: 'smtp.gmail.com',
		secure: true, // true for 465, false for other ports
		auth: {
			user: 'francis.udejiofficial@gmail.com', // generated ethereal user
			pass: 'desales9563' // generated ethereal password
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	// setup email data with unicode symbols
	let mailOptions = {
		from: `"Cleanfits Customer" <francis.udejiofficial@gmail.com>`, // sender address
		to: `${email}`, // list of receivers
		subject: 'Order Request', // Subject line
		text: 'Hello there,', // plain text body
		html: output // html body
	}

	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).json({
				msg: 'Your Email has unable to be sent, try again.'
			})
		}
		console.log('Message sent: %s', info.messageId)
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))

		res.status(200).json({
			msg: 'Email has been sent'
		})
	})
})

if (!dev) {
	app.use(express.static('client/build'))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

app.listen(PORT, err => {
	if (err) console.log(err) && false
	console.log(`SERVER STARTED ON PORT ${PORT}`)
})
