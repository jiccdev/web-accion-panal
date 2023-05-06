/** Create user validation code */
export const generateValidationCode = () =>
  String(Math.floor(1000 + Math.random() * 9000));
