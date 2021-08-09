<template>
  <q-card class="product-card rounded-2xl">
    <router-link to="/dashboardMobile/explore">
      <q-card-section class="p-2">
        <img
          src="~assets/Drone.jpg"
          class="rounded-2xl"
        >
        <div class="font-semibold pt-2 pl-2">
          {{ lorem }}
        </div>
      </q-card-section>
    </router-link>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardProductTools',
  setup() {
    return {
      lorem: 'Photography Drone',
    };
  },
});
</script>

<style lang="scss">
.product-card {
  width: 170px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
