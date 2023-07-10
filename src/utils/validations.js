export const loginValidation = {
  minLength: {
    value: 9,
    message: "Минимум 9 символов",
  },
  maxLength: {
    value: 35,
    message: "Максимум 35 символов",
  },
  pattern: {
    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    message: "Email не соответствует формату",
  },
};

export const passwordValidation = {
  minLength: {
    value: 8,
    message: "Минимум 8 символов",
  },
  maxLength: {
    value: 25,
    message: "Максимум 25 символов",
  },
};
