<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <div class="flex flex-col w-full gap-4">
        <q-input
          v-model="search"
          filled
          label="Temukan Kelasmu..."
        >
          <template #append>
            <q-icon name="search" />
          </template>
        </q-input>

        <div class="flex flex-row justify-between items-center">
          <q-select
            v-model="selectedCategory"
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
          <template v-if="courseClasses.length">
            <card-product
              v-for="el, i in courseClasses"
              :key="i"
              :title="el.title"
              :trainer-name="el.trainerName"
              :price="el.price"
              :discount-label="el.discountLabel"
              :discount-price="el.discountPrice"
            />
          </template>

          <span
            v-else
            class="text-gray-500"
          >
            <q-icon name="error" />
            Tidak ada yang dapat ditampilkan
          </span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, computed, toRefs,
} from 'vue';
import CardProduct from 'components/CardProduct.vue';
import { useAsyncState } from '@vueuse/core';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';
import { CourseClassRepository } from 'src/repositories';

export default defineComponent({
  name: 'Explore',
  components: {
    CardProduct,
  },
  setup() {
    const state = reactive({
      search: '',
      selectedCategory: 'All Tools',
      options: ['Photography Drone', 'Farmer Drone'],
    });
    const useCase = new CourseClassUseCases(CourseClassRepository);
    const { state: courses } = useAsyncState(useCase.getAll(), []);
    const courseClasses = computed(() => courses.value.map((c) => ({
      title: c.title,
      trainerName: c.trainer.name,
      price: c.price,
      thumbnailSrc: c.thumbnailSrc.value,
      discountPrice: c.discountPrice,
      discountLabel: c.discountLabel,
    })));

    return {
      ...toRefs(state),
      courseClasses,
    };
  },
});
</script>
