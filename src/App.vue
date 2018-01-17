<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
     <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapGetters, mapMutations} from 'vuex';
  import Navbar from './components/Navbar.vue';

export default {
  name: 'app',
  components:{
    appNavbar: Navbar
  },
  methods: {
    ...mapMutations([
      
    ]),
    ...mapActions([

    ])
  },
  computed: {
    ...mapState([

    ]),
    ...mapGetters([

    ])
  },

}
</script>

<style>

</style>
