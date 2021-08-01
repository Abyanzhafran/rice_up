<template>
  <q-page class="flex justify-center">
    <div class="pt-10 flex flex-col items-center gap-4">
      <q-avatar class="w-20 h-20">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>

      <span class="font-semibold text-lg pt-2">Jack Hoodward</span>
      <q-btn class="capitalize w-56" outline color="black">Kelas Saya</q-btn>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageAccount",
  // setup() {

  // },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
