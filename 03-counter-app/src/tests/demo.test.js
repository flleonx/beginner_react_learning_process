
describe('demo.test.js tests', () => {
  test('the strings must be equal', () => {
    // 1. Statements
    const msg = 'Hello World';

    // 2. Stimulus
    const msg2 = "Hello World";

    // 3. See the behavior

    expect( msg ).toBe( msg2 );

  });
});
