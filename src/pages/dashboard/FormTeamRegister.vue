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
          Register Your Team
        </span>
      </q-banner>
      <q-list>
        <q-expansion-item
          v-for="(n, input) in inputs"
          :key="input"
          popup
          :icon="n.icon"
          :label="n.order"
        >
          <q-separator />
          <q-card>
            <q-card-section class="flex flex-col gap-2">
              <q-input
                v-for="(i, formList) in formLists"
                :key="formList"
                v-model="text"
                outlined
                :label="i.labelForm"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
      <q-btn
        to="/admin/requirement"
        color="primary"
        label="Next"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

const formLists = [
  {
    labelForm: 'Email',
  },
];

const inputs = [
  {
    order: 'First Person',
    icon: 'person',
  },
  {
    order: 'Second Person',
    icon: 'person',
  },
  {
    order: 'Third Person',
    icon: 'person',
  },
];

export default defineComponent({
  name: 'FormTeamRegister',
  // props: {
  //   nameForm: {
  //     type: String,
  //     default: 'Username',
  //   },
  //   emailForm: {
  //     type: String,
  //     default: 'Someemail@gmail.com',
  //   },
  //   addressForm: {
  //     type: String,
  //     default: 'San francisco, 17, mountain view',
  //   },
  //   phoneNumberForm: {
  //     type: String,
  //     default: '081267245',
  //   },
  // },
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
      text: ref(''),
      ph: ref(''),
      formLists,
      inputs,
      confirm,
    };
  },
});
</script>
