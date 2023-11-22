import { Link } from "react-router-dom";
import { publicRoutes } from "src/models";
import { useFormik } from "formik";
import { RecoveryValidatorForm } from "src/validators";
import styles from "../auth.module.css";

const Recovery = () => {
  const formik = useFormik({
    initialValues: RecoveryValidatorForm.initialState,
    validationSchema: RecoveryValidatorForm.validatorSchemaRecovery,
    validateOnMount: false,
    onSubmit: async ({ email }) => {
      console.log(email);
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
          <button type="submit" disabled={!formik.dirty || !formik.isValid}>
            Recuperar contraseña
          </button>
          <Link to={`/${publicRoutes.LOGIN}`}>Volver</Link>
        </form>
      </section>
    </article>
  );
};

export default Recovery;
