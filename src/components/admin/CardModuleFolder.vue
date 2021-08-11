<template>
  <q-card class="product-card shadow-1 rounded-xl">
    <router-link to="/dashboardAdmin/manage_module_list">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section class="flex items-center gap-2">
        <q-icon
          class="text-blue-500"
          name="article"
          size="sm"
        />
        <div class="text-md font-semibold">
          Module Name
        </div>
      </q-card-section>
    </router-link>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardModuleFolder',
  // setup() {

  // },
});
</script>

<style lang="scss">
.product-card {
  width: 170px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
