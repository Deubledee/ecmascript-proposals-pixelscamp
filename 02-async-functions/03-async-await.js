// example 3

const getById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({name: `myItem${id}`})
    }, 3000)
  });
}

async function test() {
  const firstId = 1
  const secondId = 2

  let firstItem, secondItem

  await getById(firstId)
    .then(item => {
      firstItem = item
    }).catch (err => {
      console.log('boom 1')
    });

  await getById(secondId)
    .then(item => {
      secondItem = item
    }).catch (err => {
      console.log('boom 2')
    });

  console.log({first: firstItem, second: secondItem})
}

test()
