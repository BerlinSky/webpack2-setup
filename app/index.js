// import "./main.scss";

async function asyncTimeout(delay = 10) {
  return await new Promise((resolve) => {
    setTimeout(() => resolve('OK'), delay);
  });
}

const asyncResult = () => asyncTimeout().then( x => {
  console.log(x);
});

function component () {
  asyncResult();

  const element = document.createElement('div');

  element.innerHTML = 'Hello, the world!!???!!';

  return element;
}

document.body.appendChild(component());
