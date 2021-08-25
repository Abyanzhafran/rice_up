<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <span class="font-bold text-2xl">Manage List</span>
          <q-btn
            to="/admin"
            class="text-blue-600 font-bold bg-white"
            round
            icon="arrow_back"
          />
        </div>
        <q-btn
          class="text-dark font-bold"
          label="Add Module"
          flat
          icon="add"
          @click="addModule"
        />
      </div>
      <q-list
        class="w-full bg-white"
        bordered
      >
        <template v-if="modulesListDump.length">
          <q-item
            v-for="el, i in modulesListDump"
            :key="i"
            :module-icon="moduleIcon"
            :module-label="moduleLabel"
            :module-caption="moduleCaption"
            class="border"
          >
            <q-item-section avatar>
              <q-avatar :icon="moduleIcon" />
            </q-item-section>
            <q-item-section>
              <router-link to="/admin/module/edit">
                <q-item-label lines="1">
                  {{ moduleLabel }}
                </q-item-label>
                <q-item-label caption>
                  {{ moduleCaption }}
                </q-item-label>
              </router-link>
            </q-item-section>
            <q-item-section side>
              <q-btn
                flat
                round
                icon="more_vert"
                size="md"
              >
                <q-menu
                  auto-close
                  transition-show="jump-down"
                  transition-hide="jump-up"
                >
                  <q-list>
                    <q-item clickable>
                      <q-item-section>Edit</q-item-section>
                    </q-item>
                    <q-item
                      clickable
                      @click="deleteModule"
                    >
                      <q-item-section>Remove</q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { toRefs } from '@vueuse/core';

// Dump data
const generateModuleList = () => ({
  moduleIcon: 'mail',
  moduleLabel: 'Modul Teknologi Agraria',
  moduleCaption: 'Pengenalan Teknologi Drone',
});
// End dump
export default defineComponent({
  name: 'ManageModuleList',
  props: {
    moduleIcon: {
      type: String,
      default: 'mail',
      required: true,
    },
    moduleLabel: {
      type: String,
      default: 'Modul Teknologi Agraria',
      required: true,
    },
    moduleCaption: {
      type: String,
      default: 'Pengenalan Teknologi Drone',
      required: true,
    },
  },
  setup() {
    // Dump data
    const state = reactive({
      modulesListDump: Array.from(Array(4), generateModuleList),
    });
    // End Dump

    return {
      ...toRefs(state),
    };
  },
  methods: {
    addModule() {
      this.modulesListDump.push({
        moduleIcon: 'mail',
        moduleLabel: 'Intro Drone',
        moduleCaption: 'Pengenalan Teknologi Drone',
      });
    },
    deleteModule(el) {
      this.modulesListDump.splice(el, 1);
    },
  },
});
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>
