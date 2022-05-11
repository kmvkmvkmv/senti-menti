<template>
  <v-container>
    <v-row class="text-center white--text">
      <v-col>
        <v-card max-width="700" class="mx-auto pa-4">
          <div>
            <!-- <h1 class="mt-4 mb-8 blue--text display-1">Thank you</h1> -->
            <v-img src="../assets/thank-you.png" max-height="150px" contain />
            <div class="mb-5">
              <v-icon color="green" size="100"> mdi-check-circle </v-icon>
            </div>

            <h2 class="mb-2">
              Thanks for your feedback!
              {{
                isNegativeFeedback()
                  ? ""
                  : `It means a lot to us, just like you do!
              We really appreciate you giving us a moment of your time today.
              Thanks for being you.`
              }}
            </h2>

            <h3 v-if="isNegativeFeedback()" class="mb-2 deep-orange--text">
              We are sorry for the inconvenience, we have redirected your
              feedback to the respective department. If you need further help
              please reach out to
              <a href="mailto:sfeedback@bank-support.com"
                >feedback@bank-support.com</a
              >
            </h3>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <DidYouKnow v-if="!isNegativeFeedback()" />
  </v-container>
</template>

<script>
import DidYouKnow from "../components/DidYouKnow";

export default {
  name: "Thankyou",
  components: {
    DidYouKnow,
  },
  data: () => ({
    feedbackResponse: "",
  }),
  mounted() {
    this.feedbackResponse = this.$route.params.response;
    console.log("test", this.$route.params.response);
  },
  methods: {
    isNegativeFeedback() {
      if (
        this.feedbackResponse === "Positive" ||
        this.feedbackResponse === "Very Positive"
      ) {
        return false;
      }
      return true;
    },
  },
};
</script>
