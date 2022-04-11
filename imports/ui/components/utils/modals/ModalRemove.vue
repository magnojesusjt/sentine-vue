<template>
    <v-dialog id='modalRemove' max-width="500px" v-model='dialog'>
        <v-card>
            <v-card-title class='headline'>
                <div class="title">
                    Remover {{modalData.typeElement}}
                </div>
            </v-card-title>
                <v-card-text>
                    Tem certeza que quer Remover? {{modalData.preposition}}
                    {{modalData.typeElement}}
                    {{modalData.mainNameElement}}
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="default" text v-on:click="cancel">Não</v-btn>
                    <v-btn color="error" depressed @click="confirma">Sim</v-btn>
                </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        name: 'ModalRemove',
        props: ['modalData'],
        data() {
            return {
                dialog: false,
            }
        },
        methods: {
            confirma(){
                this.$emit(event='id_element', this.modalData._id);
                this.dialog = false
            },
            cancel(){
                this.dialog = false
            }
        }
    }
</script>

<style scoped>

</style>