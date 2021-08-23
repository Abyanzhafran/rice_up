<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
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
        <div class="flex flex-row justify-start gap-x-6 gap-y-4">
          <template v-if="modulesDump.length">
            <card-module-folder
              v-for="el, j in modulesDump"
              :key="j"
              v-ripple
              :icon="el.icon"
              :image="el.image"
              :module-name="el.moduleName"
            />
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import CardModuleFolder from 'src/components/admin/CardModuleFolder.vue';

// Dump data
const generateModules = () => ({
  moduleName: 'Module Name',
  icon: 'article',
  image: 'https://picsum.photos/100/100',
});
// End Dump

export default defineComponent({
  name: 'ManageModule',
  components: { CardModuleFolder },
  setup() {
    // Dump data
    const state = reactive({
      modulesDump: Array.from(Array(7), generateModules),
    });
    // End Dump
    return {
      ...toRefs(state),
    };
  },
});
</script>
