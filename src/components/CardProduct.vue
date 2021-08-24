<template>
  <q-card
    class="product-card cursor-pointer rounded-2xl shadow-1"
    :title="title"
  >
    <q-img
      img-class="product-card__img"
      :src="thumbnailSrc"
      :ratio="4/3"
    />

    <q-card-section class="column items-baseline h-28">
      <h6 class="mt-0 mb-2 full-width text-base font-semibold leading-[1.1] line-clamp-2">
        {{ title }}
      </h6>

      <small
        v-if="discountPrice"
        class="text-grey text-strike"
      >
        {{ formatCurrency(discountPrice) }}
      </small>

      <span class="text-sm font-medium">
        {{ formatCurrency(price) }}
      </span>
    </q-card-section>

    <q-badge
      v-if="discountLabel"
      :label="discountLabel"
      floating
      rounded
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
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// import ClassViewDialog from 'components/ClassViewDialog.vue';

const formatCurrency = (n: number) => n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

export default defineComponent({
  name: 'CardProduct',
  // components: {
  //   ClassViewDialog,
  // },
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
.product-card {
  width: 170px;
  // max-width: 250px !important;

  &__img {
    border-radius: $generic-border-radius $generic-border-radius 0 0;
  }
}
</style>
