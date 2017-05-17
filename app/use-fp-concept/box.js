export const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  log: () => `Box(${x})`
})


// const Box = x =>
// ({
//   map: f => Box(f(x)),
//   fold: f => f(x),
//   inspect: () => `Box(${x})`
// })