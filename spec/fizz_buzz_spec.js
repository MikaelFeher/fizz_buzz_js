describe("fizz_buzz", function() {

  it("returns number if no conditions are met", function() {
    expect(fizz_buzz(1)).toEqual(1);
  });
  it("returns 'fizz' if number is divisible by 3", function() {
    expect(fizz_buzz(3)).toEqual('Fizz');
  });
  it("returns 'buzz' if number is divisible by 5", function() {
    expect(fizz_buzz(5)).toEqual('Buzz');
  });
  it("returns 'fizzbuzz' if number is divisible by 15", function(){
    expect(fizz_buzz(15)).toEqual('FizzBuzz');
  });
  it("Throws 'Oops, the number must be greater than 0", function(){
    expect(function() { fizz_buzz(0); } ).toThrow(new Error('Oops, the number must be greater than 0'));
  });
});
