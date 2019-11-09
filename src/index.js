import Vue from 'vue';
import PolicyPage from './components/policy-page';

let vm;

// history is for the router inside the microfrontend
window.mountPolicyPage = (containerId, history) => {
    vm = new Vue({
        render: h => h(PolicyPage)
    }).$mount();

    document.getElementById(containerId).appendChild(vm.$el);
};

window.unmountPolicyPage = (containerId, history) => {
    vm.$destroy();
};