
function component():HTMLElement {
  let a: string = "my name is Fan";
  const ele: HTMLElement = document.createElement('div');
  ele.innerHTML = a;
  document.body.appendChild(ele);
  return ele;
}
let element = component();



// if(module.hot) {
//   module.hot.accept('',function () {
//     document.body.removeChild(element);
//     element = component(); // 重新渲染页面后，component 更新 click 事件处理
//     document.body.appendChild(element);
//   });
// }
