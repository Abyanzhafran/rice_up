<template>
  <q-page class="flex items-center justify-center">
    <p v-for="n in 30" :key="n">Lorem ipsum dolor sit amet</p>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageAccount',
  // setup() {

  // },
});
</script>
