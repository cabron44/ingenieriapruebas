const { suma } = require('../funciones/suma');
const { dividir } = require('../funciones/division');
const { validarMail } = require('../funciones/validarMail');

describe('Pruebas de suma', () => {
  test.each([
    [2, 3, 5],
    [10, 20, 30],
    [-40, -30, -70]
  ])('%i + %i = %i', (a, b, esperado) => {
    expect(suma(a, b)).toBe(esperado);
  });

  test.each([
    ['a', 5],
    [5, 'a'],
    ['5', '5']
  ])('lanza error si alguno de los parámetros no es numérico: %p, %p', (a, b) => {
    expect(() => suma(a, b)).toThrow('error');
  });
});

describe('Pruebas de división', () => {
  test.each([
    [10, 2, 5],
    [12, 3, 4],
    [15, 5, 3]
  ])('dividir %i entre %i = %i', (a, b, esperado) => {
    expect(dividir(a, b)).toBe(esperado);
  });

  test('lanza error si el divisor es cero', () => {
    expect(() => dividir(8, 0)).toThrow('El divisor no puede ser cero');
  });

  test.each([
    ['10', 2],
    [10, '2'],
    [null, 2]
  ])('lanza error si los parámetros no son numéricos: %p, %p', (a, b) => {
    expect(() => dividir(a, b)).toThrow('Los parámetros deben ser numéricos');
  });
});

describe('Pruebas de validación de mails', () => {
  test.each([
    'usuario@example.com',
    'ana@test.org',
    'correo+extra@gmail.com'
  ])('acepta mails válidos con @: %s', (mail) => {
    expect(validarMail(mail)).toBe(true);
  });

  test.each([
    'usuarioexample.com',
    'usuario.example.com',
    'usuarioexample'
  ])('rechaza mails sin @: %s', (mail) => {
    expect(validarMail(mail)).toBe(false);
  });

  test('rechaza mails nulos', () => {
    expect(validarMail(null)).toBe(false);
  });

  test('rechaza cadenas vacías', () => {
    expect(validarMail('')).toBe(false);
  });
});