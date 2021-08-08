<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab
            name="module"
            label="Module"
          />
          <q-tab
            name="video"
            label="Video"
          />
        </q-tabs>

        <q-separator />

        <q-tab-panels
          v-model="tab"
          animated
        >
          <q-tab-panel
            class="h-full"
            name="module"
          >
            <span class="font-bold text-2xl my-2">Apa itu Drone ?</span>
            <p>
              Drone adalah...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
            </p>
            <span class="font-bold text-2xl py-2">
              Informasi
            </span>
            <p>Khusus regional Solo-Jogja</p>
          </q-tab-panel>

          <q-tab-panel name="video">
            <span class="font-bold text-2xl py-2">Bagaimana drone beroprasi ?</span>
            <q-video
              class="rounded-2xl w-full h-48"
              src="https://www.youtube.com/embed/IuV0wQckAps"
            />
          </q-tab-panel>

          <q-tab-panel name="movies">
            <div class="text-h6">
              Movies
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      tab: ref('module'),
    };
  },
});
</script>
