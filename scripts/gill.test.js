QUnit.module('MAIN MODULE', {})
QUnit.test('TEST salCal', assert => {
  assert.equal(salCal(2, 5), 10, 'Positive hour and wage')
  assert.equal(salCal(-10, -10),0,'Negative pay and hour')
  assert.equal(salCal(-10, 10), 0, 'Negative hour and positive pay')
  assert.equal(salCal(10, -10), 0, 'Positive hour and negative pay')
  assert.equal(salCal(2.5, 2.5),6.25, 'testing float')
})