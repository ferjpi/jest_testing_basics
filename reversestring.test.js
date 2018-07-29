const reverseString = require('./reversestring') // require llama al archivo en cuestion

test('reverseString function exists', () => {
  expect(reverseString).toBeDefined()
})
test('String reverses', () => {
  expect(reverseString('hello')).toEqual('olleh')
})

test('String reverses with uppercase', () => {
  expect(reverseString('Hello')).toEqual('olleh')
})
