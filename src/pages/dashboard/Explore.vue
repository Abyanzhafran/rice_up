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
          <template v-if="courseClassesDum.length">
            <card-product
              v-for="el, i in courseClassesDum"
              :key="i"
              :title="el.title"
              :trainer-name="el.trainerName"
              :price="el.price"
              :discount-label="el.discountLabel"
              :discount-price="el.discountPrice"
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
  defineComponent, reactive, computed, toRefs, ref,
} from 'vue';
import CardProduct from 'components/CardProduct.vue';
import ClassViewDialog from 'components/ClassViewDialog.vue';
import { useAsyncState } from '@vueuse/core';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';
import { CourseClassRepository } from 'src/repositories';

// Dummy Var
const randBool = () => Math.random() > 0.5;

const generateCourseClass = () => ({
  title: 'Perluasan lahan sengketa dengan Cepat!',
  trainerName: 'BUMN',
  price: Math.random() * 100_000,
  discountPrice: randBool() ? Math.random() * 100_000 : NaN,
  discountLabel: randBool() ? '50%' : '',
});
// End Dummy

export default defineComponent({
  name: 'AppExplore',
  components: {
    CardProduct,
    ClassViewDialog,
  },
  setup() {
    // Dialog
    const dialog = ref(false);
    const position = ref('top');

    const state = reactive({
      // Dummy data
      courseClassesDum: Array.from(Array(8), generateCourseClass),
      // End Dummy
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
      dialog,
      position,

      open(pos: string) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
});
</script>
