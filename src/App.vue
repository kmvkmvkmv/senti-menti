<template>
  <v-app>
    <v-app-bar
      app
      color="teal darken-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-4 ml-2"
          contain
          src="./assets/sm-logo.png"
          transition="scale-transition"
          width="60"
        />

        <h2>Senti Menti</h2>
      </div>
    </v-app-bar>

    <v-main  style="background-image: url('https://www.desktopbackground.org/download/2560x1440/2010/07/16/49007_3d-anime-wallpapers-hd-wallpapers-inn_2560x1600_h.jpg');">
      <HomePage/>
    </v-main>
  </v-app>
</template>

<script>
import HomePage from './components/HomePage';

export default {
  name: 'App',

  components: {
    HomePage,
  },

  data: () => ({
    //
  }),
};
</script>
