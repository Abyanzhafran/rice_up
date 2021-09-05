<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="text-2xl font-bold">{{ title }}</span>
        <q-btn
          to="/app/notification"
          class="text-blue-600 font-bold bg-white"
          round
          icon="arrow_back"
        />
      </div>
      <div class="flex flex-col mt-4 gap-6">
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">
              {{ avatarName }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption>
              {{ notifDate }}
            </q-item-label>
          </q-item-section>
        </q-item>
        <p class="ml-5">
          {{ notifContent }}
        </p>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppInviteNotification',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Undangan Kelas Kursus',
    },
    notifContent: {
      type: String,
      required: true,
      default: 'Selamat pembelian kelas kursus anda berhasil...',
    },
    avatarName: {
      type: String,
      default: 'John Andrean',
    },
    notifDate: {
      type: Date,
      default: '11/10/2016, 11:49:36 AM',
    },
  },
  // setup() {
  //   return {

  //   };
  // },
});
</script>
