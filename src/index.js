import _ from 'lodash';
import './index.css';
var a = [];
var ele = document.createElement('div');
ele.innerText = _.join(['Hello', 'webpack', 'ok'], ' ')
document.body.appendChild(ele);