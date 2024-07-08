const expressAsyncHandler= require("express-async-handler");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: auth.host,
	port: auth.PORT,
	secure: false,
	auth: {
		user: auth.username,
		pass: auth.password,
	},
});

const sendEmail= expressAsyncHandler(async (req, res) => {
	const { mail } = req.body;
	console.log(mail);
})