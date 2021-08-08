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
        <div />
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

export default defineComponent({
  components: {
    CardProduct,
  },
  setup() {
    return {
      slide: ref('style'),
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
      slides,
    };
  },
});
</script>
