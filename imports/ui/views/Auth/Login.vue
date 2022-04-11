<template>
    <div class="login-wrapper">
        <v-from @submit.prevent="login" autocomplete="nope">
            <v-text-field id='inputUser' v-model="user.email" autocomplete="off"
            label="Matricula" name='matricula' prepend-icon="person" color='primary' type="text">

            </v-text-field>
            <v-text-field id='inputPassword' v-model="user.password" autocomplete="off"
            label="Senha" name='senha' prepend-icon="lock" color='primary' type="password">

            </v-text-field>
            <div class="d-flex justify-end">
                <v-btn color='primary' text :to="{name:'forgotPassword'}" small>Esqueceu senha?</v-btn>
            </div>
            <div class="d-flex justify-start">
                <v-btn type='submit' rounded color='primary' transition='fade' >Entrar</v-btn>
            </div>
        </v-from>
            <alert-message ref='refAlertLogin'></alert-message>
    </div>
</template>

<script>
import AlertMessage from '../../components/utils/Alerts/AlertMessage.vue'
export default {
    name:'Login',
    components:{
        AlertMessage
    },
    data(){
        return{
            user:{
                email:'',
                password:'',
            }
        }
    },
    methods:{
        login(){

        }
    }
}
</script>

<style scoped>
    .login-wrapper{
        margin-top:45px;
    }
</style>