import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import { publicRoutes } from "src/models";

const Recovery = () => {
  return (
    <article className={styles.authentication}>
      <section className={styles.authentication__wrapper}>
        <h3>MAPI</h3>
        <form action="" autoComplete="off">
          <p>
            Ingrese la dirección de correo electrónico asociada con su cuenta y
            le enviaremos un enlace de recuperación
          </p>
          <div
            className={`${styles.authentication__input} ${styles.authentication__input_error}`}
          >
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" />
            <span>* El correo es obligatorio</span>
          </div>
          <button type="button">Recuperar contraseña</button>
          <Link to={`/${publicRoutes.LOGIN}`}>Volver </Link>
        </form>
      </section>
    </article>
  );
};

export default Recovery;
