/**
 * Validates if email is valid.
 *
 * @param {string} email
 * @returns {boolean}
 */
export function emailValidator (email) {
  const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
  return re.test(String(email).toLowerCase())
}

/**
 * Validates if cpf is valid.
 *
 * @param {string} cpf
 * @returns {boolean}
 */
export function cpfValidator (cpf) {
  return 0
}
