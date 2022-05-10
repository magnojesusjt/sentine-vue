import LytAuth from '../layouts/LytAuth'
import Login from '../views/Auth/Login.vue'
import ForgotPassword from '../views/Auth/ForgotPassword.vue'
import ResetPassword from '../views/Auth/ResetPassword.vue'
import SetInitialPassword from '../views/Auth/SetInitialPassword.vue'
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
        },
        {
            path:'/resetar-senha/:token',
            name:'resetPassword',
            components:{
                sectionView: ResetPassword
            }
        },
        {
            path:'/registrar-conta/:token',
            name:'enrollAccount',
            components:{
                sectionView: SetInitialPassword
            }
        }
    ]
}