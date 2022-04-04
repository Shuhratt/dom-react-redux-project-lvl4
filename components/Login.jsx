import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "../assets/Login.module.scss";
import { loginFetcher } from "../api/login";
import { setLocalStorage } from "../lib/storage/set-locale-storage";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigate = useNavigate();

  return (
    <div className="col-12 col-sm-8 mx-auto">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, { setSubmitting, setFieldError }) => {
          const data = await loginFetcher(values);

          if (data) {
            const { token } = data;
            setLocalStorage("token", token);
            setTimeout(() => navigate("../"), 300);
          } else {
            setFieldError("email", "Не верный логин");
            setFieldError("password", "Не верный пароль");
          }

          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={styles.login}>
            <div className={styles.login__box}>
              <h1 className="text-center">Войти</h1>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="div" />
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="div" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-secondary"
              >
                Войти
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
