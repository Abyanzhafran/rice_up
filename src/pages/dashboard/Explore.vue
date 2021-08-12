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
            v-for="el, i in courseClasses"
            :key="i"
            :title="el.title"
            :trainer-name="el.trainerName"
            :price="el.price"
            :discount-label="el.discountLabel"
            :discount-price="el.discountPrice"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, toRefs,
} from 'vue';
import CardProduct from 'components/CardProduct.vue';

const randBool = () => Math.random() > 0.5;

const generateCourseClass = () => ({
  title: 'Perluasan lahan sengketa dengan Cepat!',
  trainerName: 'BUMN',
  price: Math.random() * 100_000,
  discountPrice: randBool() ? Math.random() * 100_000 : NaN,
  discountLabel: randBool() ? '50%' : '',
});

export default defineComponent({
  name: 'Explore',
  components: {
    CardProduct,
  },
  props: {
    options: {
      type: Array,
      default: ['Photography Drone', 'Farmer Drone'],
    },
  },
  setup() {
    const state = reactive({
      courseClasses: Array.from(Array(8), generateCourseClass),
    });

    // return toRefs(state);
    return {
      model: ref('All Tools'),
      text: ref(''),
      ...toRefs(state),
    };
  },
});
</script>
