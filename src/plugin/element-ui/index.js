import Vue from 'vue';
import Element from 'element-ui';
import './var.less'

let theme = 'light'

var head = document.getElementsByTagName('HEAD').item(0);
var style = document.createElement('link');
style.href = `/theme/${theme}/index.css`;
style.rel = 'stylesheet';
style.type = 'text/css';
head.appendChild(style);

Object.defineProperty(window, '_theme', {
  get() { return theme; },
  set(val) {
    theme = val;
    style.href = `/theme/${theme}/index.css`;
    document.documentElement.setAttribute("data-theme", theme);
  }
});


Vue.use(Element, { size: 'small', zIndex: 3000 });