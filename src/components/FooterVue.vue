<template>
    <v-card >
      <v-footer
        padless
        color="#A3CEF1"
      >
        <v-card
          flat
          tile
          width="100%"
          class="lighten-1 text-center"
          color="#A3CEF1"
        >
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
              color="#274C77"
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text>
            Алешина Анастасия — <strong>Copyright 2023</strong>
            <p><a href="mailto:aialeshina@edu.hse.ru">aialeshina@edu.hse.ru</a></p>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </template>


<script>
import FooterVue from './FooterVue.vue'
  export default {
    name: FooterVue,
    data: () => ({
      icons: [
        'mdi-home',
        'mdi-email',
        'mdi-calendar',
        'mdi-delete',
      ],
    }),
  }
</script>
