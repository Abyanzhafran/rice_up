<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-10 flex flex-col items-center gap-4">
      <q-avatar class="w-20 h-20">
        <img src="https://cdn.quasar.dev/img/avatar.png">
      </q-avatar>

      <span class="font-semibold text-lg pt-2">{{ studentName }}</span>
      <q-banner
        class="w-full text-dark bg-white border-2 border-gray-500 rounded-full"
      >
        <div class="flex justify-center items-center">
          <span class="font-bold text-xl p-0 text-blue-600">
            Kelas Saya
          </span>
        </div>
      </q-banner>

      <q-list
        class="w-full bg-white rounded-2xl"
        bordered
      >
        <q-item
          v-ripple
          to="/dashboardCourse"
          class="border"
          clickable
        >
          <q-item-section>
            <q-item-label class="text-xl line-clamp-2">
              {{ classCourseTitle }}
            </q-item-label>
            <q-item-label class="font-normal">
              {{ agencyName }}
            </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-circular-progress
              show-value
              size="80px"
              :value="classCareerValue"
              :thickness="0.3"
              color="teal"
              track-color="grey-3"
            >
              <span class="m-4 text-xl font-semibold">{{ classCareerValue }}%</span>
            </q-circular-progress>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Account',
  props: {
    studentName: {
      type: String,
      default: 'Just Jack',
    },
    classCourseTitle: {
      type: String,
      default: 'Drone Sebagai Pengawas Lahan',
    },
    agencyName: {
      type: String,
      default: 'Menpertani',
    },
    classCareerValue: {
      type: Number,
      default: 75,
    },
  },
  // setup() {
  //   return {
  //     value: 81,
  //   };
  // },
});
</script>
