import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import styles from "../assets/Login.module.scss";

const Login = () => {
  return (
    <div className="col-12 col-sm-8 mx-auto">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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
