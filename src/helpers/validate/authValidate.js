import * as yup from "yup";

const validationAuthSignUp = yup.object().shape({
  email: yup.string().required("Почта обязателное поле!"),
  name: yup.string().required("Имя обязателное поле!"),
  password: yup
    .string()
    .min(5, "Пароль должен быть больше 5 симбоволов!")
    .max(100)
    .required("Пароль обязательное поле!"),

  confirmPassword: yup
    .string()
    .required("Подвердите пароль обязательное поле!"),
});

const validationAithSignIn = yup.object().shape({
  email: yup.string().required("Почта обязателное поле!"),
  password: yup
    .string()
    .min(5, "Пароль должен быть больше 5 симбоволов!")
    .max(100)
    .required("Пароль обязательное поле!"),
});

export { validationAuthSignUp, validationAithSignIn };
