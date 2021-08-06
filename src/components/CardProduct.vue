<template>
  <q-card
    class="product-card shadow-1"
    @click="open('bottom')"
  >
    <q-img
      img-class="product-card__img"
      src="https://placeimg.com/500/300/nature"
    />

    <q-card-section
      class="column items-baseline"
      style="height: 6rem;"
    >
      <h6
        class="q-mt-none q-mb-sm full-width text-body1 text-weight-regular ellipsis"
        style="line-height: 1.1;"
      >
        Lorem
      </h6>

      <small
        class="text-grey text-strike"
      >
        Rp. 21.000
      </small>

      <span class="text-body2 text-weight-medium">
        Rp. 20.000
      </span>
    </q-card-section>

    <q-badge
      label="50%"
      floating
      class="z-index-10"
    />

    <q-separator />

    <div class="flex items-center gap-2 ml-4 py-1">
      <q-icon
        name="spa"
        class="text-green-500"
      />

      <small>Menpertani</small>
    </div>
  </q-card>
  <class-view-dialog
    v-model="dialog"
    :position="position"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ClassViewDialog from 'components/ClassViewDialog.vue';

export default defineComponent({
  name: 'CardProduct',
  components: {
    ClassViewDialog,
  },
  setup() {
    const dialog = ref(false);
    const position = ref('top');

    return {
      dialog,
      position,

      open(pos: string) {
        position.value = pos;
        dialog.value = true;
      },
    };
  },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.product-card {
  width: 170px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
