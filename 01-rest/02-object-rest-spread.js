// object spread & rest example
// in node since v8.2.1 (flagged)

// ({first, second} = {a: 1, b: 2}) //NOTE: a and b will be undef

({first, second} = {first: 1, second: 2})
console.log(first)
console.log(second)


let x, y, z;
({x, y, ...z} = {x: 10, y: 20, c: 30, d: 40})
console.log(z)
