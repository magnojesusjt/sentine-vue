import loginRoutes from './loginRoutes'
import LytSPA from '../layouts/LytSPA'
export default [
    {
        path: '*',
        redirect:'/login',
    },
    loginRoutes,
    {
        path: '/',
        components:{
            allPageView: LytSPA
        },
        children:[
            
        ]
    }
]