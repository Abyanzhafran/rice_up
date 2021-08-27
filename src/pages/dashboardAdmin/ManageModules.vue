<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="font-bold text-2xl">
          {{ editModule }}
          <q-popup-edit
            v-slot="scope"
            v-model="editModule"
            auto-save
          >
            <q-input
              v-model="scope.value"
              dense
              autofocus
              counter
              @keyup.enter="scope.set"
            />
          </q-popup-edit>
        </span>

        <q-btn
          class="text-dark font-bold"
          label="Add folder"
          flat
          icon="add"
          @click="addFolder"
        />
      </div>
      <div class="flex flex-col my-4 justify-center">
        <div class="flex flex-row justify-start gap-x-6 gap-y-4">
          <template v-if="modulesDump.length">
            <div
              v-for="el, j in modulesDump"
              :key="j"
              class="flex items-start gap-1"
            >
              <card-module-folder
                :icon="el.icon"
                :image="el.image"
                :module-name="el.moduleName"
              />
            </div>
          </template>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, ref,
} from 'vue';
import CardModuleFolder from 'src/components/admin/CardModuleFolder.vue';

// Dump data
const generateModules = () => ({
  moduleName: 'New Folder',
  icon: 'article',
  image: 'https://picsum.photos/280/140',
});
// End Dump

export default defineComponent({
  name: 'ManageModule',
  components: { CardModuleFolder },
  setup() {
    // Dump data
    const state = reactive({
      modulesDump: Array.from(Array(1), generateModules),
    });
    // End Dump

    return {
      editModule: ref('Click me'),
      ...toRefs(state),
      prompt,
    };
  },
  methods: {
    addFolder() {
      this.modulesDump.push({
        moduleName: 'Module Name',
        icon: 'article',
        image: 'https://picsum.photos/100/100',
      });
    },
    deleteFolder(el: number) {
      this.modulesDump.splice(el, 1);
    },
  },
});
</script>
