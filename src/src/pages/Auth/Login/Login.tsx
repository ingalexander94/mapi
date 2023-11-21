import { Link } from "react-router-dom";
import { publicRoutes } from "src/models";
import styles from "../auth.module.css";

const Login = () => {
  return (
    <article className={styles.authentication}>
      <section className={styles.authentication__wrapper}>
        <h3>MAPI</h3>
        <form action="" autoComplete="off">
          <div
            className={`${styles.authentication__input} ${styles.authentication__input_error}`}
          >
            <label htmlFor="email">Correo</label>
            <input type="email" id="email" name="email" />
            <span>* El correo es obligatorio</span>
          </div>
          <div className={styles.authentication__input}>
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="button">Iniciar sesión</button>
          <Link to={`/${publicRoutes.RECOVERY}`}>Recuperar contraseña </Link>
        </form>
      </section>
    </article>
  );
};

export default Login;
