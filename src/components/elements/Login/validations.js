export const loginValidation = {
    required: "Поле обязательно",
    minLength: {
        value: 9,
        message: "Минимум 9 символов"
    },
    maxLength: {
        value: 40,
        message: "Максимум 40 символов"
    },
    pattern: {
        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: "Email не соответствует формату"
    }
  };

  export const passwordValidation = {
    required: "Поле обязательно",
    minLength: {
        value: 8,
        message: "Минимум 8 символов"
    },
    maxLength: {
        value: 20,
        message: "Максимум 20 символов"
    },
  };