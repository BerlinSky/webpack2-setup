import R from 'ramda';

const artist1 = {
  name: "Ed Sheeran (Also)",
  DOB:  "Feb 17, 1991",
  "address1": "101 Country Road",
  "address2": "Apartment 201",
  country: "England",
  genre: "pop",
  rank: "23",
  income: "55000000.00"
}

const justName1 = R.tryCatch(R.prop('name'), R.always('NotFound'));

const justName2 = R.propOr("defaultValue", 'name');

export const getJustArtistName = () => {
  console.info('justName 1 ========')

  console.log('justName1', justName1(artist1));
  console.log('justName1', justName1(null));
  console.log('justName1', justName1(undefined));

  console.info('justName 2 ========')
  
  console.log('justName2', justName2(artist1));
  console.log('justName2', justName2(null));
  console.log('justName2', justName2(undefined));
}


