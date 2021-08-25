<template>
  <q-card class="product-card shadow-1 rounded-xl">
    <router-link to="/admin/module/list">
      <img
        v-ripple
        :src="image"
        class="h-32"
      >
    </router-link>

    <q-card-action
      class="flex flex-row items-center justify-between p-2 ml-2"
    >
      <span>
        <q-icon
          class="text-blue-500 mr-1"
          :name="icon"
          size="sm"
        />
        {{ moduleName }}
      </span>
      <q-btn
        flat
        round
        icon="more_vert"
        size="md"
      >
        <q-menu
          auto-close
          transition-show="jump-down"
          transition-hide="jump-up"
        >
          <q-list>
            <q-item clickable>
              <q-item-section>Edit</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Remove</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>
    </q-card-action>
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
  width: 220px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
