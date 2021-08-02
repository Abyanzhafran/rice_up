<template>
  <q-page class="flex justify-center mx-6">
    <div class="w-full mx-auto pt-10 flex flex-col items-center gap-4">
      <q-avatar class="w-20 h-20">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>

      <span class="font-semibold text-lg pt-2">Jack Hoodward</span>
      <q-btn
        class="capitalize w-56"
        outline
        color="black"
      >
        Kelas Saya
      </q-btn>
      <q-card
        class="mx-auto rounded-2xl"
        flat
        bordered
      >
        <q-card-section
          class="p-3 flex items-center gap-4"
          horizontal
        >
          <div class="w-auto">
            <div class="text-xl line-clamp-2">
              Drone sebagai pengawas lahan
            </div>
            <div class="font-normal">
              Menpertani
            </div>
          </div>
          <div>
            <q-circular-progress
              show-value
              size="86px"
              :value="value"
              :thickness="0.3"
              color="teal"
              track-color="grey-3"
            >
              <span class="m-4 text-xl font-semibold">{{ value }}%</span>
            </q-circular-progress>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Account',
  setup() {
    return {
      value: 81,
    };
  },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
