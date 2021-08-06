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
      <div
        v-for="n in 12"
        :key="n"
        class="flex flex-row gap-3 my-4 justify-center"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="h-auto"
        >
          <card-product
            class="rounded-2xl"
            clickable
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
