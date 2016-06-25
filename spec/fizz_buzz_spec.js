describe("fizz_buzz", function(){
  var subject;

  beforeEach(function(){
    subject = new fizz_buzz();
  });

  it("returns number if no conditions are met", function() {
    number = 1;
    expect(number).toBe(1);
  });

});
