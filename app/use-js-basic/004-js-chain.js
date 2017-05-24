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

const getArtistCountry = (artists) => artists
  .filter(artist => artist.country === 'England')
  .map(artist => artist.country);

export const getArtistCountryFromList4 = () => {
  const list = getArtistCountry(artists);
  console.log('artistCountryList2', list);
}