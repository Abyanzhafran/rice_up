<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex flex-col gap-4">
        <q-avatar size="8rem">
          <img
            src="https://cdn.quasar.dev/img/avatar.png"
            class="bg-gray-200"
          >
        </q-avatar>
        <q-input
          v-model="text"
          :label="String($auth.user?.displayName)"
        >
          <template #append>
            <q-btn
              round
              dense
              flat
              icon="create"
            />
          </template>
        </q-input>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AppEditBiodata',
  setup() {
    return {
      text: ref(''),
    };
  },
});
</script>
