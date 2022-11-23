const accountSid = "AC3e0778b40aaklsjndaklsjdn";
const authToken = "fbcc751fe13a5s1d63a5s1d992d73d";

import twilio from "twilio";

const client = twilio(accountSid, authToken);

export const enviarSMS = async (mensaje, numero) => {
	try {
		let rta = await client.messages.create({
			body: mensaje,
			from: "+12182204899",
			to: numero,
		});
		return rta;
	} catch (error) {
		return error;
	}
};