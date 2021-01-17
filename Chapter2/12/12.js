const myUrl = 'http://www.example.com/?id=123456&name=lion&age=28';
console.log(myUrl.split('&'));
console.log(myUrl.split(/&|\?/));

const Java = 'JavaScript';
console.log(Java.split(''));
console.log(Java.split());
