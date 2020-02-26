QUnit.module('MAIN MODULE', {})  

QUnit.test('TEST salCal', assert => {
  assert.equal(salCal(2, 5,'n'), "n your pay is 10", 'Positive hour and wage')
  assert.equal(salCal(-10, -10, 'n'), "n you have entered an invaild number please try again",'Negative pay and hour')
  assert.equal(salCal(-10, 10,'n'), "n you have entered an invaild number please try again", 'Negative hour and positive pay')
  assert.equal(salCal(10, -10,'n'), "n you have entered an invaild number please try again", 'Positive hour and negative pay')
  assert.equal(salCal(2.5, 2.5,'n'), "n your pay is 6.25", 'testing float')
})