interface ErrorMessage {
  [key: string]: string;
}

const errorMessages: ErrorMessage = {
  required: 'Este campo es requerido.',
  pattern: 'La entrada no es válida.',
  minlength: 'Este campo debe ser de al menos 5 caracteres.',
};

export function validatorErroMessage(validatorName: string): string {
  return errorMessages[validatorName] ?? '';
}
