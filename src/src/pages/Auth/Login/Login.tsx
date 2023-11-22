import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { privateRoutes, publicRoutes } from "src/models";
import { LoginValidatorForm } from "src/validators";
import { AuthContext } from "src/context/auth";
import { UIContext } from "src/context/ui";
import styles from "../auth.module.css";

const Login = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const { setUserAuth } = authContext;
  const uiContext = useContext(UIContext);
  const { toggleCheking, uiState } = uiContext;

  const formik = useFormik({
    initialValues: LoginValidatorForm.initialState,
    validationSchema: LoginValidatorForm.validatorSchemaLogin,
    validateOnMount: false,
    onSubmit: ({ email, password }) => {
      if (formik.isValid && !uiState.checking) {
        toggleCheking();
        console.table({ email, password });
        setTimeout(() => {
          setUserAuth({ email, password, fullname: "Alexander" });
          toggleCheking();
          navigate(`/${privateRoutes.PRIVATE}`, { replace: true });
        }, 2000);
      }
    },
  });

  return (
    <article className={styles.authentication}>
      <section className={styles.authentication__wrapper}>
        <h3>MAPI</h3>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <div
            className={`${styles.authentication__input} ${
              formik.touched.email && formik.errors.email
                ? styles.authentication__input_error
                : ""
            }`}
          >
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu correo electrónico"
              onBlur={formik.handleBlur}
              value={formik.values.email}
              onChange={formik.handleChange}
              autoFocus
            />

            {formik.touched.email && formik.errors.email ? (
              <span className="animate__animated animate__headShake">
                * {formik.errors.email}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div
            className={`${styles.authentication__input} ${
              formik.touched.password && formik.errors.password
                ? styles.authentication__input_error
                : ""
            }`}
          >
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu contraseña"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <span className="animate__animated animate__headShake">
                * {formik.errors.password}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <button type="submit" disabled={!formik.dirty || !formik.isValid}>
            Iniciar sesión
          </button>
          <Link to={`/${publicRoutes.RECOVERY}`}>Recuperar contraseña </Link>
        </form>
      </section>
    </article>
  );
};

export default Login;
