<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center items-center"
  >
    <div class="w-full pt-2 flex flex-col items-center">
      <div class="flex items-center gap-2">
        <q-icon
          name="spa"
          class="text-green-500"
          size="lg"
        />
        <span class="text-2xl font-bold text-blue-600">RiceUP</span>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SplashScreen',
});
</script>
