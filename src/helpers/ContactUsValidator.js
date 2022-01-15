const EmailValidator = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return emailRegex.test(email);
};

const PhoneValidator = (phone) => {
  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4,5})$/;
  return phoneRegex.test(phone);
};

const QuestionValidator = (question) => {
  return question.length > 0;
};

export { EmailValidator, PhoneValidator, QuestionValidator };
