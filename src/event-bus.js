export default {
    install(Vue) {
        const bus = new Vue();
        Vue.prototype.$event = bus;
    }
}