import R from 'ramda';

const artist1 = {
  name: "Ed Sheeran",
  DOB:  "Feb 17, 1991",
  "address1": "101 Country Road",
  "address2": "Apartment 201",
  country: "England",
  genre: "pop",
  rank: "23",
  income: "55000000.00"
}

const artist2 = {
  name: "Chrryl Cole",
  DOB:  "June 30, 1983",
  "address1": "101 Broadway",
  "address2": "Studio F",
  country: "England",
  genre: "dance-pop",
  rank: "123",
  income: "21000000.00"
}

const getArtistName = () => {
  const artistName = R.prop('name');
  
  console.log('artist1', artistName(artist1));
  console.log('artist2', artistName(artist2));
}

const trimArtistInfo = () => {
  const artist = R.pick(['name', 'genre']);

  console.log('artist1', artist(artist1));
  console.log('artist2', artist(artist2));
}

const pickArtistInfo = () => {
  const artist = R.pickBy(v => Number(v));

  console.log('artist1', artist(artist1));
  console.log('artist2', artist(artist2));
}

const getkArtistAddressInfo = () => {
  const artist = R.pickBy((v, k) => R.contains('address', k));

  console.log('artist1', artist(artist1));
  console.log('artist2', artist(artist2));
}

const avoidkArtistAddressInfo = () => {
  const artist = R.omit(['address1', 'address2']);

  console.log('artist1', artist(artist1));
  console.log('artist2', artist(artist2));
}

export const selectArtistInfo = () => {
  getArtistName();
  trimArtistInfo();
  pickArtistInfo();
  getkArtistAddressInfo();
  avoidkArtistAddressInfo();
}


