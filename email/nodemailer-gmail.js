import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "lucasponti22@gmail.com",
		pass: "wpyicwrinhqyhexn",
	},
});

export const enviarMail = (asunto, mensaje, adjunto, to, cb) => {
	const mailOptions = {
		from: "Servidor Node.js",
		to: to,
		subject: asunto,
		html: mensaje,
		attachments: [
			{
				// filename and content type is derived from path
				path: adjunto,
				filename: "foto.jpg",
			},
		],
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