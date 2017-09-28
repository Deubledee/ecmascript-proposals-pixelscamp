// example 1
async function asyncFive() {
  let value = await Promise
              .resolve(5);
  return value;
}

asyncFive().then(x => {
  console.log(x)
})
