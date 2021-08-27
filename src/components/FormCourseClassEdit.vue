<template>
  <q-form
    class="flex flex-col gap-y-2"
    @submit="onSubmit"
  >
    <q-input
      v-model="formData.title"
      label="Nama kursus"
      outlined
    />

    <q-input
      v-model="slug"
      label="Slug"
      hint="*Digunakan sebagai url, bersifat unik"
      outlined
    />

    <q-input
      v-model.number="formData.price.value"
      label="Harga"
      outlined
    />

    <q-input
      v-model.number="formData.discountPrice.value"
      label="Harga setelah diskon (opsional)"
      outlined
    />

    <q-input
      v-model="formData.label"
      label="Label (opsional)"
      outlined
    />

    <div class="w-full flex items-center gap-4">
      <q-img
        :src="thumbnailDisplaySrc"
        class="max-w-xs"
      />

      <q-file
        v-model="selectedThumbnailFile"
        label="Upload Gambar thumbnail"
        accept=".jpg, .jpeg, .png"
        outlined
        use-chips
        class="flex-grow"
      />
    </div>

    <div class="w-full flex items-center gap-4">
      <q-img
        :src="headerMediaDisplaySrc"
        class="max-w-xs"
      />

      <q-file
        v-model="selectedHeaderMediaFile"
        label="Upload Media Header"
        accept=".jpg, .jpeg, .png"
        outlined
        use-chips
        class="flex-grow"
      />
    </div>

    <span class="text-h6">Deskripsi singkat kursus</span>

    <q-editor
      v-model="formData.aboutContent"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
      ]"
    />

    <div class="flex gap-2 pt-2">
      <q-btn
        label="Save"
        type="submit"
        color="green"
        class="rounded-md"
      />

      <q-btn
        label="Reset"
        color="red"
        class="rounded-md"
        @click="onResetClick"
      />
    </div>
  </q-form>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, toRefs, computed,
} from 'vue';
import { slugify } from 'src/helpers';
import type { PropType } from 'vue';
import type { FormCourseClassEdit } from 'src/types';

const defaultDataProps = {
  title: '',
  price: {
    currency: 'IDR',
    value: 0,
  },
  discountPrice: {
    currency: 'IDR',
    value: 0,
  },
  label: '',
  thumbnailSrc: {
    _type: 'FileStorage',
    value: '',
  },
  headerMediaSrc: {
    _type: 'FileStorage',
    value: '',
  },
  aboutContent: '',
  slug: '',
} as FormCourseClassEdit.Props.data;

export default defineComponent({
  name: 'FormCourseClassEdit',
  props: {
    data: {
      type: Object as PropType<FormCourseClassEdit.Props.data>,
      default: () => defaultDataProps,
    },
  },
  emits: ['submit'],
  setup(props, ctx) {
    const formData = ref({ ...defaultDataProps, ...props.data });
    const state = reactive({
      selectedThumbnailFile: null as File | null,
      selectedHeaderMediaFile: null as File | null,
    });
    const thumbnailDisplaySrc = computed(() => (state.selectedThumbnailFile
      ? URL.createObjectURL(state.selectedThumbnailFile)
      : formData.value.thumbnailSrc.value));
    const headerMediaDisplaySrc = computed(() => (state.selectedHeaderMediaFile
      ? URL.createObjectURL(state.selectedHeaderMediaFile)
      : formData.value.headerMediaSrc.value));
    const slug = computed({
      get() {
        return slugify(formData.value.slug || formData.value.title);
      },
      set(v: string) {
        formData.value.slug = v;
      },
    });
    const onResetClick = () => {
      formData.value = { ...defaultDataProps, ...props.data };
      state.selectedThumbnailFile = null;
      state.selectedHeaderMediaFile = null;
    };
    const onSubmit = () => {
      ctx.emit('submit', {
        title: formData.value.title,
        price: formData.value.price,
        discountPrice: formData.value.discountPrice,
        label: formData.value.label,
        aboutContent: formData.value.aboutContent,
        slug: slug.value,
        thumbnailSrc: state.selectedThumbnailFile,
        headerMediaSrc: state.selectedHeaderMediaFile,
      } as FormCourseClassEdit.SubmitPayload);
    };

    return {
      formData,
      ...toRefs(state),
      thumbnailDisplaySrc,
      headerMediaDisplaySrc,
      slug,
      onResetClick,
      onSubmit,
    };
  },
});
</script>
