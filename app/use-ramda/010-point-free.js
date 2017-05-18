import R from 'ramda';

const albums = [
  {
    title: "Shortland Street",
    year: "2014"
  },
  {
    title: "Home and Away",
    year: "2011"
  },
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

const albumsOfYear = R.useWith(R.find, [R.propEq('year'), R.identity]);

export const getAlbumOfYearPointFree = () => {
  console.log(albumsOfYear("2010", albums));
}