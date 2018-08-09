import _ from 'lodash';
import './index.css';
//import printMe from './print.js';
var a = [];
var ele = document.createElement('div');
ele.innerText = _.join(['Hello', 'webpack', 'ok'], ' ')
document.body.appendChild(ele);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    //printMe();
  })
}