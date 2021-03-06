import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useUser } from "../../../contexts/UserProvider";

const Register = () => {
  const navigator = useNavigate();
  const [error, setError] = useState("");
  const { setUser } = useUser();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Email invalide";
      }

      if (!values.password) {
        errors.password = "Requis";
      }

      return errors;
    },
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/user/`, values)
        .then(({ data: { credential } }) => {
          setUser({
            token: credential,
          });
          navigator("/admin");
        })
        .catch((err) => {
          setError(err.response.data.message);
        });
    },
  });

  return (
    <div className="register">
      <div className="register-form">
        <h1>Créer un compte</h1>
        <p className="error">{error}</p>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="email">
            Email
            {formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
            <input
              className="register-input"
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </label>
          <label htmlFor="password">
            Mot de passe
            {formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
            <input
              className="register-input"
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </label>
          <button className="register-button" type="submit">
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
