export const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  log: () => `box(${x})`
})

export const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
})

// const Left = x =>
// ({
//   map: f => Left(x),
//   fold: (f, g) => f(x),
//   inspect: () => `Left(${x})`
// })

// const fromNullable = x =>
//   x != null ? Right(x) : Left(null)

// const findColor = name =>
//   fromNullable({red: '#ff4444', blue: '#3b5998', yellow: '#fff68f'}[name])

// const res = findColor('blue')
//             .map(c => c.slice(1))
//             .map(c => c.toUpperCase())
//             .fold(e => 'no color', x => x)


// const artist1 = {
//   name: "Ed Sheeran",
//   DOB:  "Feb 17, 1991",
//   "address1": "101 Country Road",
//   "address2": "Apartment 201",
//   country: "England",
//   genre: "pop",
//   rank: "23",
//   income: "55000000.00"
// }

// const readPropWithBox = d =>
//   Box(d)
//     .map(x => x.name)
//     // .log(console.log)
//     .fold(x => x)

// export const testBox = () => {
//   console.log('box', readPropWithBox(artist1));
// }