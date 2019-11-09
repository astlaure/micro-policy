import Vue from 'vue';
import PolicyPage from './components/policy-page';

var vm = new Vue({
    render: h => h(PolicyPage)
}).$mount();

document.getElementById('root').appendChild(vm.$el);