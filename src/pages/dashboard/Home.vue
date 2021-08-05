<template>
  <q-page class="w-full max-w-screen-sm mx-auto flex justify-center mx-6">
    <div class="w-full mx-auto pt-2 flex flex-col items-center gap-4">
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
      <div
        v-for="n in 12"
        :key="n"
        class="flex flex-row gap-3 my-2 justify-center"
      >
        <div
          v-for="i in 2"
          :key="i"
          class="h-auto"
        >
          <card-product class="rounded-2xl" />
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
