<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
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
      </div>
      <q-list padding>
        <q-item
          v-for="n in 5"
          :key="n"
          v-ripple
          clickable
        >
          <q-item-section
            top
            thumbnail
          >
            <img
              src="https://cdn.quasar.dev/img/mountains.jpg"
              class="rounded-xl"
            >
          </q-item-section>

          <q-item-section>
            <q-item-label>Pemetaan Lahan</q-item-label>
            <q-item-label caption>
              Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.
            </q-item-label>
          </q-item-section>

          <q-item-section
            side
            class="flex gap-1"
          >
            <q-icon
              name="star"
              color="yellow"
            />
            <q-item-label
              caption
              class="mr-1"
            >
              4.8
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppRent',
  // setup() {

  // },
});
</script>
