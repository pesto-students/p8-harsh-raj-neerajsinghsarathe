function createIncrement() {
  let count = 0;
  function increment() {
    return count++;
  }
  let message = `Count is ${count}`;

  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();


/*
*    message is not present inside log function, thus it is looking into the parent scope where count value is already 0.
*    Parent scope of log is createIncrement function. Hence the count value is 0 and message value is also 0.
*/

