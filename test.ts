import test, { Macro } from 'ava'
import SimplifyNumber from './index'

const convertMacro: Macro = (t, input, expected) => {
  t.is(SimplifyNumber(input), expected)
}
convertMacro.title = (providedTitle, input, expected) => {
  return `${providedTitle} ${input} = ${expected}`.trim()
}

// Thousand
test('Convert to thousand number:', convertMacro, 1000, '1k')
test('Convert to thousand number:', convertMacro, 10000, '10k')
test('Convert to thousand number:', convertMacro, 11000, '11k')
test('Convert to thousand number:', convertMacro, 100000, '100k')
// Million
test('Convert to million number:', convertMacro, 1000000, '1m')
test('Convert to million number:', convertMacro, 10000000, '10m')
test('Convert to million number:', convertMacro, 100000000, '100m')
// Billion
test('Convert to billion number:', convertMacro, 1000000000, '1b')
test('Convert to billion number:', convertMacro, 10000000000, '10b')
test('Convert to billion number:', convertMacro, 100000000000, '100b')
// Trilliun
test('Convert to trilliun number:', convertMacro, 1000000000000, '1t')
test('Convert to trilliun number:', convertMacro, 10000000000000, '10t')
test('Convert to trilliun number:', convertMacro, 100000000000000, '100t')
test('Convert to trilliun number:', convertMacro, 1000000000000000, '1000t')

test('Custom config abbrev', (t) => {
  const num1rb = SimplifyNumber(1000, {
    abbrev: ['rb']
  })

  t.is(num1rb, '1rb')
})

test('Default decimal (2)', (t) => {
  const num1k = SimplifyNumber(11111)
  t.is(num1k, '11.11k')
})

test('Custom decimal (3)', (t) => {
  const num1k = SimplifyNumber(11111, {
    decimal: 3
  })
  t.is(num1k, '11.111k')
})
