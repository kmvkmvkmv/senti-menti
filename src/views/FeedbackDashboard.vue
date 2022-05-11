<template>
  <div>
  <v-row>
      <v-col class="mx-6 my-6">
      <v-card class="px-4 py-4">
      <h3 class="pl-2 pb-1">{{feedbackCount}} Responses</h3>
      <v-divider></v-divider>
      <div class="d-flex pt-2">
      <v-icon
          color="green"
          class="mr-2"
          large
        >
          mdi-emoticon-happy
        </v-icon>
  <v-progress-linear
      v-model="positiveFeedbackPercentage"
      color="green"
      class="mt-1"
      height="25"
    >
      <strong class="mt-1">{{ Math.ceil(positiveFeedbackPercentage) }}%</strong>
    </v-progress-linear>
    </div>
    <br>
    <div class="d-flex">
    <v-icon
          color="amber"
          large
          class="mr-2"
        >
          mdi-emoticon-neutral
        </v-icon>
    <v-progress-linear
      v-model="neutralFeedbackPercentage"
      color="amber"
      class="mt-1"
      height="25"
    >
      <strong>{{ Math.ceil(neutralFeedbackPercentage) }}%</strong>
    </v-progress-linear>
    </div>

    <br>
  <div class="d-flex">
  <v-icon
          color="red"
          large
          class="mr-2"
        >
          mdi-emoticon-sad
        </v-icon>
 <v-progress-linear
      v-model="negativeFeedbackPercentage"
      color="red"
      class="mt-1"
      height="25"
    >
      <strong>{{ Math.ceil(negativeFeedbackPercentage) }}%</strong>
    </v-progress-linear>
</div>
    <br>
    </v-card>
    <v-card class="px-4 py-4 text-center mt-6">
      <div class="d-flex" style="justify-content: center"><h1 class="pr-2">{{feedbackCount}}</h1> <span class="pt-3">Total Responses</span></div>
      <div class="d-flex" style="justify-content: center"><h1 class="pr-2">{{feedbackCount}}</h1> <span  class="pt-3"> Comments </span></div>
      <div class="d-flex" style="justify-content: center"><h1 class="pr-2">{{Math.ceil(positiveFeedbackPercentage)}}% </h1> <span  class="pt-3"> Positive Percentage </span></div>
    </v-card>
    </v-col>
  <v-col class="mx-6 my-6">
    <v-card class="px-4 py-4">
    <h3 class="pl-2 pb-1">Feedback Messages</h3>
      <v-divider></v-divider>
      <v-list-item v-for="item in feedbackData" :key="item">
      <v-list-item-content>
        <v-list-item-title><h4>Analysis : {{item.analysis}}</h4></v-list-item-title>
        Message : {{item.feedback}}
      </v-list-item-content>
    - </v-list-item>
    </v-card>
  </v-col>
  </v-row>
  </div>
  
</template>

<script>
import { getAllFeedbacks } from "../../networkCall.service.js";

export default {
  name: "FeedbackDashboard",
  data: () => ({
    feedbackData: [],
    skill: 20,
    knowledge: 33,
    power: 78,
    positiveFeedback: '',
    negativeFeedback: '',
    neutralFeedback: '',
    positiveFeedbackPercentage: '',
    negativeFeedbackPercentage: '',
    neutralFeedbackPercentage: '',
    feedbackCount: 0,
  }),
  components: {
  },
  methods: {
  },
  async mounted() {
    this.feedbackData = await getAllFeedbacks();
    this.feedbackCount = this.feedbackData.length;
    this.positiveFeedback = this.feedbackData.filter(x => x.analysis === 'Positive');
    this.negativeFeedback = this.feedbackData.filter(x => x.analysis === 'Negative');
    this.neutralFeedback = this.feedbackData.filter(x => x.analysis === 'Neutral');
    this.positiveFeedbackPercentage = (this.positiveFeedback.length/this.feedbackCount)*100;
    this.negativeFeedbackPercentage = (this.negativeFeedback.length/this.feedbackCount)*100;
    this.neutralFeedbackPercentage = (this.neutralFeedback.length/this.feedbackCount)*100;
  },
};
</script>
