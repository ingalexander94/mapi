import { Link } from "react-router-dom";
import { publicRoutes } from "src/models";
import { useFormik } from "formik";
import { RecoveryValidatorForm } from "src/validators";
import styles from "../auth.module.css";
import { useContext } from "react";
import { SettingsContext } from "src/context/settings";

const Recovery = () => {
  const settingsContext = useContext(SettingsContext);
  const {
    settingsState: { translated_text },
  } = settingsContext;

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
          <p>{translated_text.text_recovery}</p>
          <div
            className={`${styles.authentication__input} ${
              formik.touched.email && formik.errors.email
                ? styles.authentication__input_error
                : ""
            }`}
          >
            <label htmlFor="email">{translated_text.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={translated_text.write_email}
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
            {translated_text.recovery_password}
          </button>
          <Link to={`/${publicRoutes.LOGIN}`}>{translated_text.back}</Link>
        </form>
      </section>
    </article>
  );
};

export default Recovery;
