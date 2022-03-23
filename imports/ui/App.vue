<template>
    <v-app>
        <v-container>
            <h1>Olá mundo</h1>
            <v-btn color="primary" @click="openAlert">
                Abrir
            </v-btn>
        </v-container>
        <alert-message ref="refAlertMessageTest">

        </alert-message>
    </v-app>
</template>

<script>
import AlertMessage from "./components/utils/AlertMessage.vue"
export default {
    name: 'App',
    components:{
        AlertMessage
    },
    methods: {
        openAlert () {
            this.$refs.refAlertMessageTest.showAlertSimple(color="success", title="Sucesso !!!")
        }
    }
}
</script>

<style scoped>

</style>