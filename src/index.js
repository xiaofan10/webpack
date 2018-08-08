import _ from 'lodash';
import './index.css';
var ele = document.createElement('div');
ele.innerText = _.join(['Hello', 'webpack'], ' ')
document.body.appendChild(ele);