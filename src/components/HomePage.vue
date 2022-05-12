<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <v-card class="mx-auto mt-5" max-width="450">
          <v-img
            class="white--text align-end"
            height="300px"
            src="../assets/feedback.jpeg"
          >
          </v-img>

          <v-card-subtitle class="pb-0 mt-4">
            Please share your happiness level and feedback
          </v-card-subtitle>

          <v-card-subtitle class="mb-5">
            <Rating @ratingChange="changeRating" :passed-rating="rating" />
          </v-card-subtitle>

          <v-card-text class="text--primary px-6">
            <v-textarea
              outlined
              filled
              label="Feedback"
              auto-grow
              v-model="feedbackString"
            ></v-textarea>
          </v-card-text>

          <v-card-actions class="px-6 py-4">
            <v-btn color="orange" @click="submitFeedback">Submit</v-btn>
            <v-btn color="orange" @click="resetForm">Reset</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Rating from "../components/Rating";
import { postFeedback } from "../../networkCall.service.js";

export default {
  name: "HomePage",
  data: () => ({
    feedbackString: "",
    rating: 0,
  }),
  components: {
    Rating,
  },
  methods: {
    async submitFeedback() {
      const response = await postFeedback({ feedback: this.feedbackString });
      console.log("response:", response);
      this.$router.push({
        name: "Thankyou",
        params: { response: response.data },
      });
    },
    resetForm() {
      console.log("reset", this.rating);
      this.feedbackString = "";
      this.rating = 0;
    },
    changeRating(newRating) {
      this.rating = newRating;
    },
  },
};
</script>
