<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-rating color="red" hover length="5" size="64" value="3"></v-rating>
        <v-textarea
          name="input-7-1"
          filled
          label="Label"
          auto-grow
          value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
        ></v-textarea>
        <v-btn depressed color="primary"> Submit </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomePage",
};
</script>
