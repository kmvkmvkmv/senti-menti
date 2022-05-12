<template>
  <v-app>
    <v-app-bar app color="teal darken-2" dark>
      <div class="d-flex align-center">
        <v-img
          role="button"
          @click="toHome"
          alt="Senti Menti"
          class="shrink mr-4 ml-2"
          contain
          src="./assets/sm-logo.png"
          transition="scale-transition"
          width="50"
        />
        <v-toolbar-title class="mr-4 blue--text"><h4>Senti Menti</h4></v-toolbar-title>
      </div>
      <v-btn @click="toDashboard" text>Feedback Dashboard</v-btn>
    </v-app-bar>

    <v-main
      style="
        background-image: url('https://www.desktopbackground.org/download/2560x1440/2010/07/16/49007_3d-anime-wallpapers-hd-wallpapers-inn_2560x1600_h.jpg');
      "
    >
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({}),
  methods: {
    toDashboard() {
      this.$router.push({ name: "FeedbackDashboard" });
    },
    toHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
