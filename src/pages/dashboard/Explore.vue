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
              :price="el.price.value"
              :discount-label="el.label"
              :discount-price="el.discountPrice.value"
              @click="open('bottom')"
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

      <class-view-dialog
        v-model="dialog"
        :position="position"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs,
} from 'vue';
import { useAsyncState } from '@vueuse/core';
import CardProduct from 'components/CardProduct.vue';
import ClassViewDialog from 'components/ClassViewDialog.vue';
import { CourseClassUseCases } from 'src/useCases/CourseClass';

export default defineComponent({
  name: 'AppExplore',
  components: {
    CardProduct,
    ClassViewDialog,
  },
  setup() {
    const state = reactive({
      dialog: false,
      position: 'top',
      search: '',
      selectedCategory: 'All Tools',
      options: ['Photography Drone', 'Farmer Drone'],
    });
    const { state: courses } = useAsyncState(async () => {
      const res = await CourseClassUseCases.getAll();

      return Promise.all(res
        .map(async (el) => {
          const data = await CourseClassUseCases.SnapshotToObject(el);

          return {
            title: data.title,
            trainerName: data.trainer.name,
            price: data.price,
            thumbnailSrc: data.thumbnailSrc,
            discountPrice: data.discountPrice,
            label: data.label,
          };
        }));
    }, []);

    return {
      ...toRefs(state),
      courseClasses: courses,

      open(pos: string) {
        state.position = pos;
        state.dialog = true;
      },
    };
  },
});
</script>
