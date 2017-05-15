import R from 'ramda';

const artistList = {
  TourYear: 2015,
  artists: [
    {
      name: "Ed Sheeran",
      DOB:  "Feb 17, 1991",
      "address1": "101 Country Road",
      "address2": "Apartment 201",
      country: "England",
      genre: "pop",
      rank: "23",
      income: "55000000.00",
      discography: [
        {
          title: "Shortland Street",
          year: "2014"
        },
        {
          title: "Undateable",
          year: "2015"
        },
        {
          title: "Home and Away",
          year: "2011"
        }
      ]
    },
    {
      name: "Chrryl Cole",
      DOB:  "June 30, 1983",
      "address1": "101 Broadway",
      "address2": "Studio F",
      country: "England",
      genre: "dance-pop",
      rank: "123",
      income: "21000000.00",
      discography: [
        {
          title: "3 words",
          year: "2011"          
        },
        {
          title: "Messey Little Raindrops",
          year: "2009"          
        },
        {
          title: "A Million Lights",
          year: "2010"          
        }
      ]
    },
    {
      name: "Chris Stapleton",
      DOB:  "April 15, 1978",
      "address1": "101 Main Street",
      "address2": "Flat T",
      country: "USA",
      genre: "country",
      rank: "3",
      income: "19000000.00",
      discography: [
        {
          title: "Travler",
          year: "2011"          
          
        },
        {
          title: "From a Room",
          year: "2014"          
        }
      ]
    }
  ]
}

const artists = R.prop('artists');
const discographies = R.chain(R.prop('discography'));
const albumYear = R.pluck("year");
const uniqueAlbumYear = R.compose(R.uniq, albumYear, discographies, artists)

export const getUniqueAlbumYear = () => {
  const years = uniqueAlbumYear(artistList);
  console.log('years', years);
}