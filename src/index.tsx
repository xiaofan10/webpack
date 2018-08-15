
import * as React from 'react';
import * as ReactDom from 'react-dom';

class App extends React.Component<{},{}> {
 
  render() {
    return <div>大家sss好</div>
  }
}
const ele = document.createElement('div');
document.body.appendChild(ele);
ReactDom.render(<App />, ele)
