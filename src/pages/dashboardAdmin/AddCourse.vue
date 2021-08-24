<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between mx-5 pb-4">
        <span class="font-bold text-2xl">Manage Course</span>
        <q-btn
          class="text-dark font-bold"
          label="Add More Course"
          flat
          icon="add"
        />
      </div>
      <q-list>
        <q-expansion-item
          v-for="(n, input) in inputs"
          :key="input"
          expand-icon-toggle
          popup
        >
          <template #header>
            <q-item-section>
              <div class="flex items-center gap-2">
                <q-icon
                  :name="n.icon"
                  size="sm"
                />
                <span>{{ n.order }}</span>
              </div>
            </q-item-section>
            <q-btn
              icon="delete"
              color="red"
              round
              flat
            />
          </template>
          <q-card>
            <q-card-section class="flex flex-col gap-2">
              <q-input
                v-for="(i, formList) in formLists"
                :key="formList"
                v-model="text"
                outlined
                :label="i.labelForm"
              />
              <q-uploader
                class="mt-4"
                url="http://localhost:4444/upload"
                label="Upload Thumbnail"
                color="primary"
                square
                flat
                bordered
                clas
                style="max-width: 300px"
              />
              <div class="flex gap-2 pt-2">
                <q-btn
                  class="rounded-md"
                  color="green"
                  label="Save"
                />
                <q-btn
                  class="rounded-md"
                  color="red"
                  label="Reset"
                />
              </div>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

const formLists = [
  {
    labelForm: 'Title',
  },
  {
    labelForm: 'Price',
  },
  {
    labelForm: 'Discount Price',
  },
  {
    labelForm: 'Free Label',
  },
];

const inputs = [
  {
    order: 'Untitled',
    icon: 'class',
  },
  {
    order: 'Untitled',
    icon: 'class',
  },
];

export default defineComponent({
  name: 'AddCourse',
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
