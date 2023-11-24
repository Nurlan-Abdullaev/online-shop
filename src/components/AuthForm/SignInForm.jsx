import { FormWrapper } from "../../layout/FormWrapper";
import { Input } from "../../UI/Input";
import { validationAithSignIn } from "../../helpers/validate/authValidate";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../../UI/Button";
import { signIn } from "../../redux/slices/authSlice";

export const SignInForm = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const submitHandler = () => {
    dispatch(
      signIn({
        email: values.email,
        password: values.password,
      })
    );
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: submitHandler,
    validateOnChange: false,
    validationSchema: validationAithSignIn,
  });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Вход</h2>
      <Input
        error={Boolean(errors?.email)}
        helperText={errors?.email}
        fullWidth
        label="Почта"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <Input
        error={Boolean(errors?.password)}
        helperText={errors?.password}
        fullWidth
        label="Пароль"
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />

      <Button type="submit" loading={isLoading}>
        {/* {isLoading ? <CircularProgress size="1.5rem" /> : "Зарегистрироваться"} */}
        Войти
      </Button>
    </FormWrapper>
  );
};
