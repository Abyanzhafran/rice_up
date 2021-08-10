<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Manage Modules</span>
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
  name: 'Orek2',
  components: { CardModuleFolder },
  // setup() {

  // },
});
</script>
