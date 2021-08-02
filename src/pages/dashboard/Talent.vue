<template>
  <q-page class="flex justify-center mx-6">
    <div class="w-full mx-auto pt-10 flex flex-col items-center gap-4">
      <q-select
        v-model="model"
        outlined
        :options="options"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Talent',
  setup() {
    return {
      model: ref('Mesin Air'),
      options: ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'],
    };
  },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
