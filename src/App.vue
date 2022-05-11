<template>
  <v-app>
    <v-app-bar
      app
      color="teal darken-2"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Senti Menti"
          class="shrink mr-4 ml-2"
          contain
          src="./assets/sm-logo.png"
          transition="scale-transition"
          width="60"
        />
        <v-toolbar-title class="mr-4">Senti Menti</v-toolbar-title>
        <span @click="onClick">Feedback Dashboard</span>
      </div>
    </v-app-bar>

    <v-main  style="background-image: url('https://www.desktopbackground.org/download/2560x1440/2010/07/16/49007_3d-anime-wallpapers-hd-wallpapers-inn_2560x1600_h.jpg');">
      <router-view/>
    </v-main>
  </v-app>
</template>

// <style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   // color: #2c3e50;
// }

// // #nav {
// //   padding: 30px;

// //   a {
// //     font-weight: bold;
// //     color: #2c3e50;

// //     &.router-link-exact-active {
// //       color: #42b983;
// //     }
// //   }
// // }
// </style>
<script>
export default {
  name: "App",
  data: () => ({
  }),
  methods: {
    onClick() {
      this.$router.push({ name: 'FeedbackDashboard'});
    },
  },
};
</script>