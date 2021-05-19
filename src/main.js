//入口文件
import "./mock";
import Vue from 'vue';
import App from './App.vue';
import './styles/global.less';
import router from "./router";
import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;
import store from "@/store";
import eventBus from "./eventBus";
store.dispatch("setting/fetchSetting")





import vLoading from "./directive/loading";
import vLazy from "./directive/lazy";
Vue.directive("loading", vLoading);
Vue.directive("lazy", vLazy);


const vm = new Vue({
  router,
  store,
  render: (h) => {
    return h(App);
  },
}).$mount("#app");

