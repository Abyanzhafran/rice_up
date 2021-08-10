<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Manage Module</span>
      <q-list
        bordered
        class="rounded-borders"
      >
        <q-expansion-item
          expand-separator
          :icon="moduleIcon"
          :label="moduleLabel"
          :caption="moduleCaption"
          default-opened
        >
          <q-expansion-item
            expand-separator
            :header-inset-level="1"
            :icon="chapIcon"
            :label="chapLabel"
            :caption="chapCaption"
          >
            <q-card>
              <q-card-section>
                <span class="line-clamp-2">
                  {{ chapReview }}
                </span>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ManageModules',
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
