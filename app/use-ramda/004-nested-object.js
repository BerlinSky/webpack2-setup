import R from 'ramda';

const artist1 = {
  name: "Ed Sheeran",
  DOB:  "Feb 17, 1991",
  "address1": "101 Country Road",
  "address2": "Apartment 201",
  country: "England",
  genre: "pop",
  rank: "23",
  income: "55000000.00",
  professionalWork: {
    discography: {
      album: {
        title: "Shortland Street",
        year: "2014"
      },
      songList: {
        title: "Home and Away",
        year: "2011"
      }
    }
  }
}

const artist2 = {
  name: "Chrryl Cole",
  DOB:  "June 30, 1983",
  "address1": "101 Broadway",
  "address2": "Studio F",
  country: "England",
  genre: "dance-pop",
  rank: "123",
  income: "21000000.00",
  professionalWork: {
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
  }  
}

const albumTitle = R.path(['professionalWork', 'discography', 'album', 'title']);
const albumTitleWithDefaultValue = R.pathOr('No Title', ['professionalWork', 'discography', 'album', 'title']);

export const getArtistAlbumTitle = () => {
  const title1 = albumTitle(artist1);
  const title2 = albumTitle(artist2);

  const title3 = albumTitleWithDefaultValue(artist1);
  const title4 = albumTitleWithDefaultValue(artist2);

  console.log('title1', title1);
  console.log('title2', title2);
  
  console.log('title3', title3);
  console.log('title4', title4);
}