<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <q-video
        class="rounded-2xl w-full h-48"
        src="https://www.youtube.com/embed/IuV0wQckAps"
      />
      <span class="font-bold text-2xl text-left text-blue-700">Drone Sebagai Pengawas Lahan</span>
      <q-btn-dropdown
        v-for="n in 1"
        :key="n"
        class="bg-white text-dark font-bold w-full rounded-xl"
        label="Fitur Drone AX470"
        align="between"
        icon="local_activity"
      >
        <q-list>
          <q-item
            v-close-popup
            clickable
          >
            <q-item-section class="flex flex-row justify-between items-center">
              <div class="flex items-center">
                <q-avatar
                  icon="play_circle_filled"
                  text-color="primary"
                  font-size="32px"
                />
                <q-item-label>{{ vidName }}</q-item-label>
              </div>
              <div />
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// const vidNames = [
//   {
//     name: 'Set up Drone',
//   },
//   {
//     name: 'Start Fly',
//   },
// ];

export default defineComponent({
  name: 'Course',
  props: {
    vidName: {
      type: String,
      default: 'Set up Drone',
    },
  },
  // setup() {
  //   return {
  //     vidNames,
  //   };
  // },
});
</script>
