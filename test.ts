import test from 'ava'
import SimplifyNumber from './index'

test('Thousand to K', (t) => {
  const num1k = SimplifyNumber(1000)
  t.is(num1k, '1k')

  const num10k = SimplifyNumber(10000)
  t.is(num10k, '10k')

  const num11k = SimplifyNumber(11000)
  t.is(num11k, '11k')
})

test('Million to m', (t) => {
  const num1k = SimplifyNumber(1000000)
  t.is(num1k, '1m')
})

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
