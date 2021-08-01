<template>
  <q-layout view="lHh Lpr lFf" class="flex items-center justify-center">
    <q-header elevated>

      <q-toolbar class="flex justify-between">
        <q-btn
          flat
          dense
          icon="notifications"
          aria-label="Notification"
        />

        <div class="font-semibold text-lg">
          Jack Hoodward
        </div>

        <div>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        </div>
      </q-toolbar>

    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

export default {
  // setup() {

  // },
};
</script>
