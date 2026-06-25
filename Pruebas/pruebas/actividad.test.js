const { dividir } = require('../funciones/division');
const { validarMail } = require('../funciones/validarMail');

describe('Función dividir', () => {
  test.each([
    [10, 2, 5],
    [12, 3, 4],
    [15, 5, 3]
  ])('divide correctamente %i entre %i', (a, b, esperado) => {
    expect(dividir(a, b)).toBe(esperado);
  });

  test('lanza error cuando el divisor es cero', () => {
    expect(() => dividir(5, 0)).toThrow('El divisor no puede ser cero');
  });

  test.each([
    ['10', 2],
    [10, '2'],
    [null, 2]
  ])('lanza error si los parámetros no son numéricos: %p, %p', (a, b) => {
    expect(() => dividir(a, b)).toThrow('Los parámetros deben ser numéricos');
  });
});

describe('Función validarMail', () => {
  test.each([
    'usuario@example.com',
    'ana@test.org',
    'correo+extra@gmail.com'
  ])('acepta correos válidos con @: %s', (mail) => {
    expect(validarMail(mail)).toBe(true);
  });

  test.each([
    'usuarioexample.com',
    'usuario.example.com',
    'usuarioexample'
  ])('rechaza correos sin @: %s', (mail) => {
    expect(validarMail(mail)).toBe(false);
  });

  test('rechaza mails nulos', () => {
    expect(validarMail(null)).toBe(false);
  });

  test('rechaza cadenas vacías', () => {
    expect(validarMail('')).toBe(false);
  });
});
