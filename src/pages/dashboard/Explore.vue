<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <div class="flex flex-col w-full gap-4">
        <q-input
          v-model="text"
          filled
          label="Temukan Kelasmu..."
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>
        <div class="flex flex-row justify-between items-center">
          <q-select
            v-model="model"
            outlined
            :options="options"
          />
          <div>
            <q-btn
              class="rounded-lg"
              icon="filter_list"
              padding="sm"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col my-4">
        <div class="flex flex-row justify-center gap-x-3 gap-y-6 max-w-sm">
          <card-product
            v-for="n in 8"
            :key="n"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CardProduct from 'components/CardProduct.vue';

export default defineComponent({
  name: 'Explore',
  components: {
    CardProduct,
  },
  setup() {
    return {
      model: ref('All Tools'),
      text: ref(''),
      options: ['Photography Drone', 'Farmer Drone', 'Automatic Tractor', 'Automatic Sprinkler'],
    };
  },
});
</script>
