import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
    theme:{
        options:{
            customproperties:true
        },
        themes:{
            light:{
                primary: '#01697d',
                secondary: '#002744',
                accent: '#8c191d',
                error: 'd64143',
                info: '#5bc0de',
                success: '#5cb85c',
                warning: '#f0ad4e',
            }
        },
        icons:{
            iconfont: 'md'
        },
        lang:{
            locale: {
                pt
            },
            current: 'pt'
        }
    }
});
