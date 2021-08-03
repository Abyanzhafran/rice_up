<template>
  <q-page class="flex justify-center mx-6">
    <div class="w-full mx-auto pt-10 flex flex-col items-center gap-4">
      <q-select
        v-model="model"
        outlined
        :options="options"
      />
      <div
        v-for="n in 12"
        :key="n"
        class="flex flex-row gap-6 my-2 justify-center"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="w-40 h-auto flex gap-1"
        >
          <q-img
            class="rounded-lg"
            src="https://placeimg.com/500/300/nature"
            :ratio="4/3"
          />
          <span class="font-bold">Drone Photography</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Talent',
  setup() {
    return {
      model: ref('All Tools'),
      stars: ref(4),
      options: ['Photography Drone', 'Farmer Drone', 'Automatic Tractor', 'Automatic Sprinkler'],
    };
  },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
