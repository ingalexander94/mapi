import { Link } from "react-router-dom";
import styles from "../auth.module.css";
import { publicRoutes } from "src/models";

const Forgot = () => {
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
            <label htmlFor="password">Nueva contraseña</label>
            <input type="password" id="password" name="password" />
            <span>* La contraseña es obligatoria</span>
          </div>
          <div className={styles.authentication__input}>
            <label htmlFor="password">Confirmar contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button">Cambiar contraseña</button>
          <Link to={`/${publicRoutes.LOGIN}`}>Iniciar sesión </Link>
        </form>
      </section>
    </article>
  );
};

export default Forgot;
