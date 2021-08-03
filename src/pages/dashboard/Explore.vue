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
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Explore',
  setup() {
    return {
      model: ref('All Tools'),
      options: ['Photography Drone', 'Farmer Drone', 'Automatic Tractor', 'Automatic Sprinkler'],
    };
  },
});
</script>
