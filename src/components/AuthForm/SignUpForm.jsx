import { Input } from "../../UI/Input";
import { Button } from "../../UI/Button";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../redux/slices/authSlice";
import { Box, CircularProgress, Typography, styled } from "@mui/material";
import { validationAuthSignUp } from "../../helpers/validate/authValidate";
import { FormWrapper } from "../../layout/FormWrapper";
import { useState } from "react";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const { isLoading } = useSelector((state) => state.auth);

  const [checkPassword, setCheckPassword] = useState(false);

  const dispatch = useDispatch();

  const onSubmit = (values) => {
    if (values.password === values.confirmPassword) {
      dispatch(
        signUp({
          email: values.email,
          name: values.name,
          password: values.password,
        })
      );
      setCheckPassword(false);
    } else {
      setCheckPassword(true);
    }
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validateOnChange: false,
    validationSchema: validationAuthSignUp,
  });

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h2>Регистрация</h2>

      <BoxInput>
        <Input
          fullWidth
          label="Почта"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
      </BoxInput>

      <BoxInput>
        <Input
          fullWidth
          label="Имя"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
      </BoxInput>

      <BoxInput>
        <Input
          fullWidth
          label="Пароль"
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
      </BoxInput>

      <BoxInput>
        <Input
          fullWidth
          label="Подвердите пароль"
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
        />

        {errors.confirmPassword && (
          <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
        )}

        {checkPassword ? <ErrorMessage>Пароли не совпадают</ErrorMessage> : ""}
      </BoxInput>

      <Button type="submit">
        {isLoading ? <CircularProgress size="1.5rem" /> : "Зарегистрироваться"}
      </Button>

      <Paragraph>
        Уже зарегистрированы? <Link to={"/sign-in"}>Войти</Link>
      </Paragraph>
    </FormWrapper>
  );
};

const BoxInput = styled(Box)`
  width: 100%;
`;

const ErrorMessage = styled(Typography)(() => ({
  color: "red",
}));

const Paragraph = styled("p")`
  margin-top: -19px;
  & > span {
    color: #30723f;
  }
`;
