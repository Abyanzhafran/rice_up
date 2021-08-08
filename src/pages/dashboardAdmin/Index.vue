<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Module Editor</span>
      <q-editor
        v-model="editor"
        class="w-full"
        :definitions="{
          save: {
            tip: 'Save your work',
            icon: 'save',
            label: 'Save',
            handler: saveWork
          },
          upload: {
            tip: 'Upload to cloud',
            icon: 'cloud_upload',
            label: 'Upload',
            handler: uploadIt
          }
        }"
        :toolbar="[
          ['bold', 'italic', 'strike', 'underline'],
          ['upload', 'save']
        ]"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useQuasar } from 'quasar';

export default defineComponent({
  setup() {
    const $q = useQuasar();

    return {
      editor: ref(
        'After you define a new button,'
        + ' you have to make sure to put it in the toolbar too!',
      ),

      saveWork() {
        $q.notify({
          message: 'Saved your text to local storage',
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
        });
      },
      uploadIt() {
        $q.notify({
          message: 'Server unavailable. Check connectivity.',
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
        });
      },
    };
  },
});
</script>
