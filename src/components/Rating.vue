<template>
  <div class="text-center">
    <v-rating v-model="rating">
      <template v-slot:item="props">
        <v-icon
          :color="props.isFilled ? genColor() : 'grey lighten-1'"
          x-large
          @click="props.click"
        >
          {{ genIcon(props.isFilled) }}
        </v-icon>
      </template>
    </v-rating>
  </div>
</template>

<script>
export default {
  name: "Rating",
  data: () => ({
    colors: ["red", "orange", "yellow darken-1", "green lighten-3", "green"],
    rating: 0,
  }),
  methods: {
    genColor() {
      return this.colors[this.rating - 1];
    },
    genIcon(isFilled) {
        if(isFilled){
            switch (this.rating) {
                case 0:
                    return 'mdi-emoticon-angry';
                case 1:
                    return 'mdi-emoticon-angry';
                case 2:
                    return 'mdi-emoticon-sad';
                case 3:
                    return 'mdi-emoticon-neutral';
                case 4:
                    return 'mdi-emoticon-happy';
                case 5:
                return 'mdi-emoticon';
                default:
                    break;
            }
        }
        return "mdi-star-circle-outline";
    }
  },
};
</script>