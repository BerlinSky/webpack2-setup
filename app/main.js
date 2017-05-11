import $ from 'jquery';

async function asyncTimeout(delay = 10) {
  return await new Promise((resolve) => {
    setTimeout(() => resolve('OK'), delay);
  });
}

const asyncResult = () => asyncTimeout().then( x => {
  console.log(x);
});

$(function () {
  console.log('here');
  asyncResult();
});
