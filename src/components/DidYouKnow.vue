<template>
  <v-row class="mt-4">
    <v-card max-width="700" class="mx-auto pa-4">
      <v-img src="../assets/did-you-know.png" max-height="90" contain />
      <h4 class="mt-3">{{ currentFact }}</h4>
      <v-btn small outlined color="blue-grey" class="mt-4 white--text" @click="nextFact">
        Know More
        <v-icon right dark> mdi-arrow-right-circle </v-icon>
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "DidYouKnow",
  data: () => ({
    facts: [
      "In 2016 many world leaders adopted the United Nation’s 17 global goals/ Sustainable Development goals to improve life all around the world and preserve the earth’s resources and fight climate change.",
      "The concept of circular economy looks beyond societies current take-make-dispose model to create a more restorative economy which designs out waste, keeps products and materials in use for as long as possible and regenerates natural systems.",
      "Climate change is defined as a change of climate that is attributed directly or indirectly to human activity, that alters the composition of the global atmosphere and that is in addition to natural climate variability over a comparable time period.",
      "China is the worlds top polluter emitting 10,357 metric tons of carbon dioxide, followed by the United States, India, Russia and Japan.",
      "Mpumalanga province in South Africa has the highest levels of air pollution in the world, in terms of nitrogen dioxide levels, due to a high concentration of coal power plants. ",
      "Human-caused emissions of carbon dioxide need to fall 45% from 2010 levels by 2030 and reach  net-zero around 2050 to limit climate change catastrophe.",
      "Energy is the dominant contributor to climate change, accounting for around 60% of total global greenhouse gas emissions.",
      "If people worldwide switched to energy efficient light bulbs the world would save 105 billion euros annually.",
      "Lighting accounts for 15% of global electricity use. Switching to LEDs will use 90% less energy and last far longer than with the use of incandescent lights.",
      "70% of the world is covered by water, yet only 2.5% of it is fresh and only 1% of it is easily accessible for human use.",
      "The right to safe drinking water was first recognized by the UN General Assemble and Human Rights Council as part of binding international law in 2010.",
      "Water use has grown at more than twice the rate of population increase in the last century.",
      "The use of water efficient fittings and fixtures has the ability to cut water use in homes by 45%",
      "If the entire world ate like the average American, there would not be enough water in the world to sustain the global population.",
      "Plant-rich diets reduce emissions and tend to the healthier, leading to lower rates of chronic disease.",
      "Agricultural Emissions could be reduced by as much as 70% by adopting a vegan diet and 63% by adopting a vegetarian diet.",
      "Nearly half of the solid waste produced globally is organic or biodegradable.",
      "When organic matter is landfilled it decomposes and produces gas methane which is up to 34 times more powerful than carbon dioxide over a century, thus contributing to climate change.",
      "When organic matter is composed, organic matter is converted into stable soil carbon, “ while retaining water and nutrients of the original waste matter.” This results in carbon sequestration and the production of a high quality fertilizer.",
      "Recycling one ton of paper saves 2584l of oil, 26498l of water and 2.5 cubic meters of landfill space.",
      "Germany has the best recycling rate in the world followed by Austria, South Korea and Wales.",
      "Recycled paper produces about 25% fewer total emissions than conventional paper",
      "Recycling one ton of paper saves 17 trees.",
      "The process of Afforestation ( creating new forests where there were none ) creates a carbon sink. This draws in and holds on to carbon and distributes it into the soil.",
      "The production of plastic is largely reliant on fossil hydrocarbons, which are non-renewable resources which contribute to climate change. ",
      "Plastic bags and Styrofoam containers can take up to thousands of years to decompose leading to marine animal death and the contamination of soil and water.",
      "The most common finds during international coal clean-ups are cigarette butts, plastic beverage bottles, plastic bottle caps, food wrappers, plastic grocery bags, plastic lids, straws and stirrers, glass beverage bottles, glass beverage bottles, other kinds of plastic bags, and foam take-away containers.",
      "36 millions people live in modern slavery today, many of who are working in the supply chains of western brands such as that of the fast fashion industry. ",
      "The world’s indigenous population makes up just 5% of the global population yet protects 80% of global biodiversity.",
    ],
    requestedIndex: 0,
    currentFact: "",
  }),
  mounted() {
    this.shuffle(this.facts);
    this.currentFact = this.facts[this.requestedIndex % this.facts.length];
    this.feedbackResponse = this.$route.params.response;
    console.log("test", this.$route.params.response);
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      this.facts = array;
    },
    nextFact() {
      this.requestedIndex = this.requestedIndex + 1;
      this.currentFact = this.facts[this.requestedIndex % this.facts.length];
    },
  },
};
</script>
