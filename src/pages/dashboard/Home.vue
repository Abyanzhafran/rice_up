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
import { defineComponent, reactive, toRefs } from 'vue';
import CardProduct from 'src/components/CardProduct.vue';

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

const randBool = () => Math.random() > 0.5;

const generateCourseClass = () => ({
  title: 'Perluasan lahan sengketa dengan Cepat!',
  trainerName: 'BUMN',
  price: Math.random() * 100_000,
  discountPrice: randBool() ? Math.random() * 100_000 : NaN,
  discountLabel: randBool() ? '50%' : '',
});

export default defineComponent({
  components: {
    CardProduct,
  },
  setup() {
    const state = reactive({
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      slides,
      courseClasses: Array.from(Array(8), generateCourseClass),
    });

    return toRefs(state);
  },
});
</script>
