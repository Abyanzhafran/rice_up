<template>
  <q-card class="product-card rounded-2xl">
    <router-link :to="{name: 'AppStuffDetail', params: {stuffId: 'asdads'}}">
      <q-card-section class="p-2 flex justify-center">
        <img
          :src="thumbnailToolsSrc"
          class="rounded-2xl"
          :ratio="4/3"
        >
        <span class="font-semibold my-2 mt-2">
          {{ title }}
        </span>
      </q-card-section>
    </router-link>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardProductTools',
  props: {
    title: {
      type: String,
      required: true,
    },
    thumbnailToolsSrc: {
      type: String,
      default: 'https://via.placeholder.com/200',
    },
  },
});
</script>

<style lang="scss">
.product-card {
  width: 170px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 2 2;
  }
}
</style>
