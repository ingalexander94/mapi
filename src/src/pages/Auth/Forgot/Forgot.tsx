import { Link } from "react-router-dom";
import { publicRoutes } from "src/models";
import { useFormik } from "formik";
import { ForgotValidatorForm } from "src/validators";
import styles from "../auth.module.css";

const Forgot = () => {
  const formik = useFormik({
    initialValues: ForgotValidatorForm.initialState,
    validationSchema: ForgotValidatorForm.validatorSchemaForgot,
    validateOnMount: false,
    onSubmit: async ({ new_password, confirm_password }) => {
      console.log(new_password, confirm_password);
    },
  });

  return (
    <article className={styles.authentication}>
      <section className={styles.authentication__wrapper}>
        <h3>MAPI</h3>
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <p>
            Ingrese la dirección de correo electrónico asociada con su cuenta y
            le enviaremos un enlace de recuperación
          </p>
          <div
            className={`${styles.authentication__input} ${
              formik.touched.new_password && formik.errors.new_password
                ? styles.authentication__input_error
                : ""
            }`}
          >
            <label htmlFor="new_password">Nueva contraseña</label>
            <input
              type="password"
              id="new_password"
              name="new_password"
              placeholder="Escribe tu nueva contraseña"
              onBlur={formik.handleBlur}
              value={formik.values.new_password}
              onChange={formik.handleChange}
              autoFocus
            />
            {formik.touched.new_password && formik.errors.new_password ? (
              <span className="animate__animated animate__headShake">
                * {formik.errors.new_password}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <div
            className={`${styles.authentication__input} ${
              formik.touched.confirm_password && formik.errors.confirm_password
                ? styles.authentication__input_error
                : ""
            }`}
          >
            <label htmlFor="confirm_password">Confirmar contraseña</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirma tu nueva contraseña"
              onBlur={formik.handleBlur}
              value={formik.values.confirm_password}
              onChange={formik.handleChange}
            />
            {formik.touched.confirm_password &&
            formik.errors.confirm_password ? (
              <span className="animate__animated animate__headShake">
                * {formik.errors.confirm_password}
              </span>
            ) : (
              <span></span>
            )}
          </div>
          <button type="submit" disabled={!formik.dirty || !formik.isValid}>
            Cambiar contraseña
          </button>
          <Link to={`/${publicRoutes.LOGIN}`}>Ir a iniciar sesión </Link>
        </form>
      </section>
    </article>
  );
};

export default Forgot;
