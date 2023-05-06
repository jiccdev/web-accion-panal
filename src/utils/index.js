/** Create user validation code */
export const generateValidationCode = () =>
  Math.floor(1000 + Math.random() * 9000);
