<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="dark"
        navigation-icon="radio_button_unchecked"
        navigation
        padding
        height="210px"
        class="bg-transparent text-dark"
      >
        <q-carousel-slide
          name="style"
          class="flex flex-col flex-nowrap"
        >
          <q-card
            class="rounded-2xl p-2 bg-red-500 w-full"
            flat
            bordered
          >
            <q-card-section
              horizontal
              class="h-32"
            >
              <q-card-section class="flex items-center w-80">
                <div class="flex flex-col gap-2">
                  <div class="flex gap-1 items-center">
                    <span class="text-white font-semibold">Lebih Murah</span>
                    <q-icon
                      name="local_offer"
                      class="text-yellow-300"
                      size="xs"
                    />
                  </div>
                  <span class="uppercase text-2xl text-white font-bold">flash sale!</span>
                  <div>
                    <q-badge
                      rounded
                      color="yellow-8"
                    >
                      <span class="font-bold">
                        2.2.21
                      </span>
                    </q-badge>
                  </div>
                </div>
              </q-card-section>

              <q-img
                class="col-5 rounded-xl"
                src="~assets/Stationary.jpg"
              />
            </q-card-section>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide
          name="tv"
          class="column no-wrap flex-center"
        >
          <q-card
            class="rounded-2xl"
            flat
            bordered
          >
            <q-card-section
              horizontal
              class="h-32"
            >
              <q-card-section class="flex items-center">
                {{ lorem }}
              </q-card-section>

              <q-img
                class="col-5"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
          </q-card>
        </q-carousel-slide>
        <q-carousel-slide
          name="layers"
          class="column no-wrap flex-center"
        >
          <q-card
            class="rounded-2xl"
            flat
            bordered
          >
            <q-card-section
              horizontal
              class="h-32"
            >
              <q-card-section class="flex items-center">
                {{ lorem }}
              </q-card-section>

              <q-img
                class="col-5"
                src="https://cdn.quasar.dev/img/parallax2.jpg"
              />
            </q-card-section>
          </q-card>
        </q-carousel-slide>
      </q-carousel>

      <div class="flex justify-between w-full">
        <span class="font-bold text-2xl text-left">Kelas Populer</span>
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
import { useAsyncState } from '@vueuse/core';
import CardProduct from 'src/components/CardProduct.vue';
import ClassViewDialog from 'components/ClassViewDialog.vue';
import { CourseClassUseCases } from 'core/CourseClass/UseCases';
import { CourseClassRepository } from 'src/repositories';

const slides = [
  {
    name: 'tv',
  },
  {
    name: 'hp',
  },
  {
    name: 'laptop',
  },
  {
    name: 'mount',
  },
];

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
      slide: 'style',
      lorem: 'Beli Kelas Lebih Murah',
      slides,
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
