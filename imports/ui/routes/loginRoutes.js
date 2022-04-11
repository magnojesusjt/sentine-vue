import LytAuth from '../layouts/LytAuth'
import Login from '../views/Auth/Login.vue'
import ForgotPassword from '../views/Auth/ForgotPassword.vue'
export default {
    path:'/login',
    components:{
        allPageView: LytAuth
    },
    children:[
        {
            path:'',
            name:'login',
            components:{
                sectionView: Login
            }
        },
        {
            path:'/esqueceu-senha',
            name:'forgotPassword',
            components:{
                sectionView: ForgotPassword
            }
        }
    ]
}