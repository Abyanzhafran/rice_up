<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <q-banner
        inline-actions
        bordered
        class="w-full text-dark bg-white shadow-lg rounded-xl"
      >
        <div class="flex justify-between items-center py-2">
          <span class="font-bold text-xl">
            Notifikasi
          </span>
          <q-btn
            class="text-blue-600 font-bold normal-case"
            flat
            label="Mark all as read"
            @click="isMark = !isMark"
          />
        </div>
      </q-banner>
      <q-list
        class="w-full bg-white"
        bordered
      >
        <q-item
          v-for="n in 4"
          :key="n"
          v-ripple
          class="border"
          clickable
          to="/app/invite_notif"
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label lines="1">
              {{ notifTitle }}
            </q-item-label>
            <q-item-label caption>
              {{ notifDate }}
            </q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-item-label caption>
              <q-icon
                name="info"
                :color="[isMark ? 'green' : 'grey']"
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Notification',
  props: {
    notifTitle: {
      type: String,
      default: 'Yuk, lihat berbagai macam kelas kursus yang ada',
    },
    notifDate: {
      type: Date,
      default: '11/10/2016, 11:49:36 AM',
    },
  },
  setup() {
    return {
      isMark: ref(true),
    };
  },
});
</script>
