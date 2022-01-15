import * as emailjs from "emailjs-com";
const Config = require("../config.json");

const sendEmail = async (email, phone, question) => {
  const newContent = {
    from_name: email,
    to_name: Config.email,
    subject: `Question from email=> ${email}, and phone=> ${phone} from AKC website`,
    message: question,
    phone: phone,
  };

  await emailjs.send(
    Config["email-service"],
    Config["email-template"],
    newContent,
    Config["email-userId"]
  );

  return Promise.resolve();
};

export { sendEmail };
