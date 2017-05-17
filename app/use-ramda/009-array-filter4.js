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

const albumsOfYear = R.find(R.propEq('year', "2009"));

export const getAlbumOfYear = () => {
  console.log(albumsOfYear(albums));
}