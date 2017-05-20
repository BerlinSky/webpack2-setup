import R from 'ramda';
import $ from 'jquery';

const jq = R.constructN(1, $);
const animate = R.invoker(2, 'animate');
const slideDown = R.invoker(0,'slideDown');

const moveElement = R.compose(
  slideDown,
  animate({height: '300px', opacity: '0.4'}, "slow"),
  animate({width: '300px', opacity: '0.8'}, "slow"),
  animate({height: '100px', opacity: '0.4'}, "slow"),
  animate({width: '100px', opacity: '0.8'}, "slow"),
  jq
)

export const moveElements = () => {
  $('body').html('<div id="main" style="width: 100%; text-align: center"></div>');
  const itemOne = $('#main').after('<div style="background:#bf21b0;height:100px;width:100px;position:relative;"></div>');
  const itemTwo = $('#main').after('<div style="background:#98bf21;height:100px;margin-left:100px;width:100px;position:relative;"></div>');
  const itemThree = $('#main').after('<div style="background:#ec735c;height:100px;margin-left:200px;width:100px;position:relative;"></div>');

  moveElement(itemOne);
  moveElement(itemTwo);
  moveElement(itemThree);
}