<template>
    <v-row>
        <v-col xs='12' sm='8' md='4' class='d-flex flex-column justify-space-around pa-12'> 
            <div class="text-center">
                <img src="./img/camera.gif" alt="" style="width: 200px; display: block; margin: auto;">
                <router-view name='sectionView'></router-view>
            </div>
        </v-col>
        <v-col xs='12' sm='4' md='8' class='right-side d-flex flex-column justify-center'>
            <div  class="display-3 font-weight-medium mr-10 text-right white--text">
                
            </div>
        </v-col>
       
    </v-row>
</template>

<script>

export default ({
    name:'LytAuth'
})

</script>

<style scoped>

    .display-3{
        z-index: 2;
        margin-top: 350px;
    }

    .right-side{
        background-image: url('./img/COI.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: .7;
        /* color: var(--body-color); */
        height: 100vh;
        position: relative;
    }
</style>