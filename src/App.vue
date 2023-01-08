<template>
  <v-app>
    <NavBar />
    <v-navigation-drawer
        v-model="drawer"
        absolute
        top
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><router-link to="/">Главная</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/original">Вождение</router-link></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><router-link to="/contact">Контакты</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/trainer">Тренажер</router-link></v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title><router-link to="/top10">Топ-10</router-link></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-main class="body">
      <router-view />
    </v-main>
    <FooterVue />
  </v-app>
</template>


<script>
import NavBar from '@/components/NavBar.vue'
import FooterVue from '@/components/FooterVue.vue';


export default {
  components: {
    NavBar,
    FooterVue
  },
  name: "App",

  data: () => ({
    drawer: false,
    group: null,
  }),
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style>
.body {
  background-color: #e195521c;
}
</style>
