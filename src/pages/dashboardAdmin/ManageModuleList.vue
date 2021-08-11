<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="font-bold text-2xl">Manage List</span>
        <q-btn
          to="/dashboardAdmin"
          class="text-blue-600 font-bold bg-white"
          round
          icon="arrow_back"
        />
      </div>
      <q-list
        class="w-full bg-white"
        bordered
      >
        <q-item
          v-for="n in 3"
          :key="n"
          v-ripple
          class="border"
          clickable
        >
          <q-item-section avatar>
            <q-avatar :icon="moduleIcon" />
          </q-item-section>
          <q-item-section>
            <router-link to="/dashboardAdmin/module_editor">
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
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
  // setup() {
  //   return {

  //   };
  // },
});
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>
