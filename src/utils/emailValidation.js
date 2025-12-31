/**
 * Valida formato de email
 * @param {string} email - Email a validar
 * @returns {boolean} - true si el email es válido
 */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

/**
 * Valida que el email no sea solo espacios
 * @param {string} email - Email a validar
 * @returns {boolean} - true si el email no está vacío
 */
export const isEmailNotEmpty = (email) => {
  return email.trim().length > 0
}

