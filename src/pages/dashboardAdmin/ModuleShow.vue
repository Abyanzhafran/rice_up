<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Module Show</span>
      <q-banner
        inline-actions
        bordered
        class="w-full text-dark bg-white shadow-lg rounded-xl"
      >
        <div class="flex justify-start items-center py-4 gap-4">
          <div>
            <span class="font-bold text-2xl my-2">Apa itu Drone ?</span>
            <p>
              Drone adalah...Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem
            </p>
          </div>
          <div>
            <span class="font-bold text-2xl py-2">
              Informasi
            </span>
            <p>Khusus regional Solo-Jogja</p>
          </div>
        </div>
      </q-banner>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  // setup() {

  // },
});
</script>
