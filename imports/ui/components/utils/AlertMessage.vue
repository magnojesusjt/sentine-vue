<template>
    <v-snackbar v-model="snackbar"
        :bottom="y==='bottom'"
        :top="y==='top'"
        :right="x==='right'"
        :left="x==='left'"
        :color="color"
        :multi-line="mode==='multi-line'"
        :vertical="mode==='vertical'"
        :timeout='timeout'>
        <v-card color='transparent' elevation="0">
            <v-card-title>
                <v-icon v-if="icon" dark left>
                    {{icon}}
                </v-icon>
                <span class="white--text">
                    {{title}}
                </span>
                <v-spacer></v-spacer>
                <v-tooltip bottom>
                    <template v-slot:activator='{on}'>
                        <v-btn dark text small v-on='on' @click="snackbar=false">
                            <v-icon small>
                                mdi-window-close
                            </v-icon>
                        </v-btn>
                    </template>
                        <span>
                            Fechar
                        </span>
                </v-tooltip>
            </v-card-title>
            <v-card-text v-if="text">
                <span class="white--text">
                    {{text}}
                </span>
            </v-card-text>
        </v-card>
    </v-snackbar>
</template>

<script>
export default {
    name:"AlertMessage",
    data(){
        return{
            snackbar: false,
            x:'',
            y:'',
            color:'',
            mode:'',
            icon: null,
            title:'',
            text: '',
            timeout: 6000
        }
    },
    methods: {
        showAlertSimple(color, title){
            this.color = color;
            this.title = title;
            this.x='right';
            this.y='top';
            if(color ==='success'){
                this.icon = 'check_circle'
            }else if (color ==='error'){
                this.icon = 'close'
            }else if (color ==='info'){
                this.icon = 'info'
            }else if (color ==='warning'){
                this.icon = 'warning'
            }
            this.text= '';
            this.mode= '';
            this.timeout = 6000;
            this.snackbar = true
        }
    },
}
</script>

<style scoped>
    .v-tooltip__content, v-tooltip__content--fixed{
        z-index: 80000000 !important;
    }
</style>