<template>
  <v-app-bar app dark dense src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
    <v-toolbar-title>
      Sentinela
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <user-logged></user-logged>
    <template v-slot:extension>
      <v-tabs model="optionSelected" align-with-title>
        <v-tab v-for="option in options" :key="option.title" v-text="option.title">

        </v-tab>
      </v-tabs>
    </template>
  </v-app-bar>
</template>

<script>
  import UserLogged from '../../components/UserLogged/UserLogged.vue'
  export default {
    components:{
      UserLogged
    },
     data(){
       return {
         optionSelected: 0,
         options: [
           {
           icon:'person',
           title:'Usuários'
         },
         {
           icon:'user-tag',
           title:'Perfil'
         }
         ]
       }
     }
  }
</script> 

 
<!-- <template>
 <div>

  <v-toolbar class="primary">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
          Sentinela
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="error">
          sair
      </v-btn>

      
  </v-toolbar>

  <v-navigation-drawer
      v-model="drawer" absolute bottom temporary dark>
      <v-layout mt-4 column align-center>
          <v-flex>
              <v-avatar>
                  <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
              </v-avatar>
          </v-flex>
          <v-flex>
              <p class="white--text mt-2 headline">
                  Usuário Teste
              </p>
          </v-flex>
      </v-layout>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
 </div>

  



 
</template>
<script>
  export default {
    data: () => ({
      drawer: false,
      group: null,
      items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
  }
</script> -->