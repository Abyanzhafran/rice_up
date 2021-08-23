<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="font-bold text-2xl">Manage List</span>
        <q-btn
          to="/admin"
          class="text-blue-600 font-bold bg-white"
          round
          icon="arrow_back"
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
            v-ripple
            :module-icon="moduleIcon"
            :module-label="moduleLabel"
            :module-caption="moduleCaption"
            :chap-icon="chapIcon"
            :chap-label="chapLabel"
            :chap-caption="chapCaption"
            :chap-review="chapReview"
            class="border"
            clickable
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
              <q-item-label caption>
                <q-icon
                  name="info"
                  color="green"
                  size="xs"
                />
              </q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { toRefs } from '@vueuse/core';
import { defineComponent, reactive } from 'vue';

// Dump data
const generateModuleList = () => ({
  moduleIcon: 'mail',
  moduleLabel: 'Modul Teknologi Agraria',
  moduleCaption: 'Pengenalan Teknologi Drone',
  chapIcon: 'description',
  chapLabel: 'Bab 1',
  ChapLabel: 'Pengenalan Drone',
  ChapReview: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid',
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
    chapIcon: {
      type: String,
      default: 'description',
    },
    chapLabel: {
      type: String,
      default: 'Bab 1',
    },
    chapCaption: {
      type: String,
      default: 'Pengenalan Drone',
    },
    chapReview: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid',
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
});
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>
