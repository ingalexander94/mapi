import * as Yup from "yup";

interface InitialStateFormLogin {
  email: string;
  password: string;
}

export class LoginValidatorForm {
  static initialState: InitialStateFormLogin = {
    email: "",
    password: "",
  };

  static validatorSchemaLogin = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "No es un correo válido"
      )
      .required("El correo es necesario"),
    password: Yup.string()
      .min(6, "Debe tener mínimo 6 caracteres")
      .max(20, "Debe tener máximo 20 caracteres")
      .required("La contraseña es necesaria"),
  });
}
