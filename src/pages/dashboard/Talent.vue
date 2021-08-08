<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <q-select
        v-model="model"
        class="w-full"
        outlined
        :options="options"
      />
      <div class="flex flex-col my-4">
        <div class="flex flex-row justify-center gap-x-3 gap-y-6 max-w-sm">
          <card-product-tools
            v-for="n in 8"
            :key="n"
            v-ripple
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CardProductTools from 'src/components/CardProductTools.vue';

export default defineComponent({
  name: 'Talent',
  components: {
    CardProductTools,
  },
  setup() {
    return {
      model: ref('All Tools'),
      stars: ref(4),
      options: ['Photography Drone', 'Farmer Drone', 'Automatic Tractor', 'Automatic Sprinkler'],
    };
  },
});
</script>
