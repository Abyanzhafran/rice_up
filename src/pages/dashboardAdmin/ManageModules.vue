<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="font-bold text-2xl">Manage Modules</span>
        <q-btn
          class="text-dark font-bold"
          label="Add folder"
          flat
          icon="add"
        />
      </div>
      <div class="flex flex-col my-4 justify-center">
        <div class="flex flex-row justify-center gap-x-3 gap-y-6 max-w-sm">
          <card-module-folder
            v-for="n in 8"
            :key="n"
            v-ripple
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardModuleFolder from 'src/components/admin/CardModuleFolder.vue';

export default defineComponent({
  name: 'ManageModule',
  components: { CardModuleFolder },
  // setup() {

  // },
});
</script>
