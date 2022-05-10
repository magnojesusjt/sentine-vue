<template>
    <v-menu offset-y>
        <template v-slot:activator="{on}">
            <v-btn color="default" dark text v-on="on" class="mr-5">
                Magno  
                <v-icon>
                    keyboard_arrow_down
                </v-icon>
            </v-btn>
        </template>
        <v-list>
            <v-list-item>Conta</v-list-item>
            <v-list-item>Sair</v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    export default {
        name: 'UserLogged'
    }
</script>

<style scoped>

</style>