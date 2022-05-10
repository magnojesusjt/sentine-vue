<template>
    <v-container fluid>
        <header-view></header-view>
        <v-content>
            <router-view name="sectionView"></router-view>
        </v-content>
        <footer-view></footer-view>
    </v-container>
</template>

<script>
import HeaderView from './shared/HeaderView.vue'
import FooterView from './shared/FooterView.vue'
export default {
    name: 'LytAuth',
    components:{
        HeaderView,
        FooterView
    }
}
</script>

<style scoped>

</style>>