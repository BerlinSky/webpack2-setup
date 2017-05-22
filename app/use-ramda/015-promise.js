import R from 'ramda';

/*eslint-disable no-unused-vars*/

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

const artistStream1 = () => new Promise((res, rej) => res(artist1));

const artistStream2 = () => new Promise((res, rej) => res(artist2));

export const artistStreams = () => {
  Promise.all([artistStream1(), artistStream2()])
    .then(R.zipObj(['artistA', 'artistB']))
    // .then(R.zip(['artistA', 'artistB']))
    // .then(R.fromPairs)
    .then(console.log)
}