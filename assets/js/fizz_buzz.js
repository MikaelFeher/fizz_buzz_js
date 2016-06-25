function fizz_buzz(number) {
  if(number <= 0){
    throw new Error('Oops, the number must be greater than 0');
  }else if (number % 15 == 0){
    return 'FizzBuzz';
  }else if(number % 3 == 0){
    return 'Fizz';
  }else if(number % 5 == 0){
    return 'Buzz';
  }else {
    return number;
  }
};
