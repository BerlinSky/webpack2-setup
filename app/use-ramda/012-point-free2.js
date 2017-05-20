import R from 'ramda';

const artists = [
  {
    name: "Ed Sheeran",
    DOB:  "Feb 17, 1991",
    "address1": "101 Country Road",
    "address2": "Apartment 201",
    country: "England",
    genre: "pop",
    rank: "23",
    income: "55000000.00"
  },
  {
    name: "Chrryl Cole",
    DOB:  "June 30, 1983",
    "address1": "101 Broadway",
    "address2": "Studio F",
    country: "England",
    genre: "dance-pop",
    rank: "123",
    income: "21000000.00"
  },
  {
    name: "Chris Stapleton",
    DOB:  "April 15, 1978",
    "address1": "101 Main Street",
    "address2": "Flat T",
    country: "USA",
    genre: "country",
    rank: "3",
    income: "19000000.00"
  }
]

export const compareOutputs = () => {
  const getCountry = R.prop('country');

  const thisArtist = R.find(R.propEq('name', 'Ed Sheeran'));
  const thisArtistFrom = R.compose(getCountry, thisArtist);

  console.log('thisArtistFrom', thisArtistFrom(artists));

  const thatArtist = R.find(R.propEq('name', 'Chrryl Cole'));
  const thatArtistFrom = R.compose(getCountry, thatArtist);

  console.log('thatArtistFrom', thatArtistFrom(artists));

  const anotherArtist = R.find(R.propEq('name', 'Chris Stapleton'));
  const anotherArtistFrom = R.compose(getCountry, anotherArtist);

  console.log('thatArtistFrom', anotherArtistFrom(artists));

  // const fromSameCountry = R.converge(R.equals, [thisArtistFrom, thatArtistFrom])
  const fromSameCountry = R.converge(R.equals, [thisArtistFrom, anotherArtistFrom])

  console.log('fromSameCountry', fromSameCountry(artists));

  // whole idea is to convert if (a === b) to 
}