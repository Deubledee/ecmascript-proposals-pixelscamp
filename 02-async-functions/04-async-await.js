// example 4

const getById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id === 1 ?
        resolve({name: `myItem${id}`})
        : reject('boooom')
    }, 3000)
  })
}

async function test() {
  const firstId = 1
  const secondId = 2

  let firstItem, secondItem;

  try {
    [ firstItem, secondItem ] = await Promise.all([
       getById(firstId),
       getById(secondId)
    ]);
  } catch (err) {
    console.log('boom', err);
  }

  console.log({first: firstItem, second: secondItem})
}

test()
