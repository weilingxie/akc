import * as emailjs from "emailjs-com";
import getConfig from "../helpers/getConfig";

const sendEmail = async (email, phone, question) => {
  const config = await getConfig();
  const newContent = {
    from_name: email,
    to_name: config.email,
    subject: `Question from email=> ${email}, and phone=> ${phone} from AKC website`,
    message: question,
    phone: phone,
  };

  await emailjs.send(
    config.emailService,
    config.emailTemplate,
    newContent,
    config.emailUserId
  );

  return Promise.resolve();
};

export { sendEmail };
