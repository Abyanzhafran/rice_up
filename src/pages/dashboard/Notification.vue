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
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>
          <q-item-section>List item</q-item-section>
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
  name: 'Notification',
  // setup() {

  // },
});
</script>
