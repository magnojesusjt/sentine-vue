import {Meteor} from 'meteor/meteor';
import Vue from 'vue';
import vuetify from '../../ui/plugins/vuetify';
import '../../ui/plugins/index'

import App from '../../ui/App'

Meteor.startup(function (){
    new Vue({
        vuetify,
        render: h=>h(App)
    }).$mount("app")
})