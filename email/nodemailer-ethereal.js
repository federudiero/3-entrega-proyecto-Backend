import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	host: "smtp.ethereal.email",
	port: 587,
	auth: {
		user: "corene.kassulke@ethereal.email",
		pass: "Jc2TuQYPnDQrPuaGeQ",
	},
});

export const enviarMail = (asunto, mensaje, cb) => {
	const mailOptions = {
		from: "Servidor Node.js",
		to: "corene.kassulke@ethereal.email",
		subject: asunto,
		html: mensaje,
	};

	transporter.sendMail(mailOptions, (err, info) => {
		/*
        if(err) {
            console.log(err)
            //return err
        }
        else console.log(info)
        */
		cb(err, info);
	});
};