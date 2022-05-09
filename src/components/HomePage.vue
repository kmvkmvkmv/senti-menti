<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <v-card class="mx-auto mt-5" max-width="450" height="800">
          <v-img
            class="white--text align-end"
            height="300px"
            src="../assets/feedback.jpeg"
          >
          </v-img>

          <v-card-subtitle class="pb-0 mt-4">
            Please provide rating and feedback
          </v-card-subtitle>

          <v-card-subtitle class="mb-5">
            <v-rating color="red" hover length="5" size="30"></v-rating>
          </v-card-subtitle>

          <v-card-text class="text--primary px-6">
            <v-textarea
              name="input-7-1"
              filled
              label="Comments"
              auto-grow
            ></v-textarea>
          </v-card-text>

          <v-card-actions class="px-6">
            <v-btn color="orange">Submit</v-btn>
            <v-btn color="orange">Reset</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { fetchRandomMeal } from "../../networkCall.service.js";

export default {
  name: "HomePage",
  async mounted() {
    console.log("response:", await fetchRandomMeal());
  },
};
</script>
