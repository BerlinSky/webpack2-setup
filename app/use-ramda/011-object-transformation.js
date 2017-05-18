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

const moreBios = {
  name: "Ed Sheeran",
  hobby: "ski, tennis",
  rank: "10",
  income: "55000000.00",
  professionalWork: {
    instruments: "gitar, piano"
  }
}

const transformations = {
  name: R.toUpper,
  rank: R.add(20),
  professionalWork: {
    discography: {
      album: {
        title: R.toLower,
        year: R.inc
      }
    }
  }
}

export const artistInfoTransformed = () => {
  const transform = R.evolve(transformations);
  console.log("tranformed", transform(artist1));
}

export const artistInfoMerged = () => {
  const info = R.merge(artist1, moreBios);
  console.log('artistInfo', info);
}





