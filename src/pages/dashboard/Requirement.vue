<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <q-banner
        inline-actions
        bordered
        class="w-full text-dark bg-white shadow-lg rounded-xl"
      >
        <span class="font-bold text-xl">
          Requirements
        </span>
      </q-banner>
      <q-stepper
        v-model="step"
        vertical
        color="primary"
        animated
      >
        <q-step
          :name="1"
          title="Pelatihan Hanya Tersedia di Kota :"
          icon="settings"
          :done="step > 1"
        >
          Solo-Jogja
        </q-step>
      </q-stepper>
      <div class="q-gutter-sm">
        <q-checkbox
          v-model="isAgree"
          label="Saya menjetujui persyaratan dan ketentuan berlaku"
        />
      </div>
      <q-btn
        v-if="isAgree == false"
        color="primary"
        label="Submit"
        disable
        @click="confirm"
      />
      <q-btn
        v-else
        color="primary"
        label="Submit"
        @click="confirm"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'AppRequirement',
  setup() {
    const $q = useQuasar();

    function confirm() {
      $q.dialog({
        title: 'Konfirmasi',
        message: 'Yakin data tim sudah benar ?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        // console.log('>>>> OK')
      }).onOk(() => {
        // console.log('>>>> second OK catcher')
      }).onCancel(() => {
        // console.log('>>>> Cancel')
      })
        .onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
        });
    }

    return {
      step: ref(1),
      isAgree: ref(false),
      confirm,
    };
  },
});
</script>
