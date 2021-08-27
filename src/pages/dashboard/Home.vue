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

      <div class="self-center flex flex-col my-4">
        <div class="flex flex-row justify-start gap-x-3 gap-y-6 max-w-sm">
          <template v-if="courseClasses.length">
            <card-product
              v-for="el, i in courseClasses"
              :key="i"
              :title="el.title"
              :trainer-name="el.trainerName"
              :thumbnail-src="el.thumbnailSrc"
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
import CardProduct from 'src/components/CardProduct.vue';
import ClassViewDialog from 'components/ClassViewDialog.vue';
import { CourseClassUseCases } from 'src/useCases/CourseClass';

const slides = [
  { name: 'tv' },
  { name: 'hp' },
  { name: 'laptop' },
  { name: 'mount' },
];

export default defineComponent({
  components: {
    CardProduct,
    ClassViewDialog,
  },
  setup() {
    const state = reactive({
      dialog: false,
      position: 'top',
      slide: 'style',
      lorem: 'Beli Kelas Lebih Murah',
      slides,
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
