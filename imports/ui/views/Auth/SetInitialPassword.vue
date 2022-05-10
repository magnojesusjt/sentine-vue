<template>
    <div>
        <div class="title">
            Definir senha
        </div>
        <v-form @submit.prevent="setPassword">
            <v-text-field v-model="user.password" id="inputPassword"
                        :append-icon="showPass.new?'mdi-eye':'mdi-eye-off'"
                        :type="showPass.new?'text':'password'"
                        nome="password" label="Nova senha"
                        @click:append="showPass.new=!showPass.new"
                        autocomplete="new-password">

            </v-text-field>
            <v-text-field v-model="user.confirmPassword" id="inputConfirmPassword"
                        :append-icon="showPass.confirm?'mdi-eye':'mdi-eye-off'"
                        :type="showPass.confirm?'text':'password'"
                        nome="confirmPassword" label="Confirmar senha"
                        @click:append="showPass.confirm=!showPass.confirm"
                        autocomplete="new-password">

            </v-text-field>
            <div>
                <div class="d-flex justify-start mt-0">
                    <v-btn type="submit" color='primary' rounded>Definir senha</v-btn>
                </div>
            </div>
        </v-form>
    </div>
</template>

<script>
export default ({
    name:'SetInitialPassword',
    data(){
        return {
            user:{
                password: '',
                confirmPassword: ''
            },
            showPass:{
                new: false,
                confirm: false
            }
        }
    },
    methods:{
        resetPassword(){

        }
    }
})
</script>
