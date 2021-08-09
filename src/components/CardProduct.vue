<template>
  <q-card
    class="product-card shadow-1 rounded-2xl"
    v-bind="$attrs"
    @click="open('bottom')"
  >
    <q-img
      img-class="product-card__img"
      :src="thumbnailSrc"
      :ratio="4/3"
    />

    <q-card-section class="column items-baseline h-24">
      <h6 class="q-mt-none q-mb-sm full-width text-body1 text-weight-regular ellipsis leading-[1.1]">
        {{ title }}
      </h6>

      <small
        v-if="discountPrice"
        class="text-grey text-strike"
      >
        {{ formatCurrency(discountPrice) }}
      </small>

      <span class="text-body2 text-weight-medium">
        {{ formatCurrency(price) }}
      </span>
    </q-card-section>

    <q-badge
      v-if="discountLabel"
      :label="discountLabel"
      floating
      class="z-index-10"
    />

    <q-separator />

    <div class="flex items-center gap-2 ml-4 py-1">
      <q-icon
        :name="trainerIcon"
        class="text-green-500"
      />

      <small>{{ trainerName }}</small>
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

const formatCurrency = (n: number) => n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

export default defineComponent({
  name: 'CardProduct',
  components: {
    ClassViewDialog,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    trainerName: {
      type: String,
      required: true,
    },
    trainerIcon: {
      type: String,
      default: 'account_circle',
    },
    thumbnailSrc: {
      type: String,
      default: 'https://via.placeholder.com/100',
    },
    price: {
      type: Number,
      default: NaN,
    },
    discountPrice: {
      type: Number,
      default: NaN,
    },
    discountLabel: {
      type: String,
      default: '',
    },
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

      formatCurrency,
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
