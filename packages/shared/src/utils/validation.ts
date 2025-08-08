/**
 * Validerer et dansk CPR-nummer
 */
export const isValidCPR = (cpr: string): boolean => {
  const cleaned = cpr.replace(/\D/g, '');
  if (cleaned.length !== 10) return false;

  const weights = [4, 3, 2, 7, 6, 5, 4, 3, 2, 1];
  const sum = cleaned
    .split('')
    .map(Number)
    .reduce((acc, digit, i) => acc + digit * weights[i], 0);

  return sum % 11 === 0;
};

/**
 * Validerer en email adresse
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validerer et dansk telefonnummer
 */
export const isValidPhoneNumber = (phone: string): boolean => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === 8;
};
