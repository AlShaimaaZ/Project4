import { checkForURL } from '../checkForURL'

test('checking module', () => {
    expect(checkForURL('https://www.google.com')).toBe(true)
    expect(checkForURL('1.1.1.1')).toBe(false)
})