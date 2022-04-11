<template>
        <div>
            <div class="d-flex flex-row justify-start mb-4">
                <v-btn color="primary" icon :to='{name:"login"}'>
                    <v-icon>arrow_back</v-icon>
                </v-btn>
                <div class='title'>
                    Voltar para tela de login
                </div>
            </div>
            <v-from @submit.prevent='forgotPassword'>
                <v-text-field v-model="user.mat" id="inputMat" name="matricula" type='text' label='Matricula'></v-text-field>
                <v-text-field v-model="user.cpf" id="inputCpf" name="CPF" type='text' label='CPF'></v-text-field>
                <div class="d-flex justify-start">
                <v-btn type='submit' rounded color='primary' transition='fade' >Recuperar senha</v-btn>
            </div>
            </v-from>
        </div>
</template>

<script>
export default {
    name:'ForgotPassword',
    data(){
        return{
            user : {
                mat : ''
            }
        }
    },
    methods:{
        forgotPassword(){

        }
    }
}
</script>

<style scoped>

</style>