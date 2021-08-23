<template>
  <q-card class="product-card shadow-1 rounded-xl">
    <router-link to="/admin/module/list">
      <img :src="image">

      <q-card-section class="flex items-center gap-2">
        <q-icon
          class="text-blue-500"
          :name="icon"
          size="sm"
        />
        <div class="text-md font-semibold">
          {{ moduleName }}
        </div>
      </q-card-section>
    </router-link>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardModuleFolder',
  props: {
    moduleName: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
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
