import * as Yup from "yup";

interface InitialStateFormRecovery {
  email: string;
}

export class RecoveryValidatorForm {
  static initialState: InitialStateFormRecovery = {
    email: "",
  };

  static validatorSchemaRecovery = Yup.object({
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        "No es un correo válido"
      )
      .required("El correo es necesario"),
  });
}
