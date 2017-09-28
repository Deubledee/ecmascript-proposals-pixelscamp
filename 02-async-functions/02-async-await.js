// example 2

const getFakeData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 3000);
  });
}

async function timer() {
  return await getFakeData();
}

timer().then((x) => {
  console.log(x);
});
