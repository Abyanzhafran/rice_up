<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="flex justify-between bg-white px-6 pt-6">
        <q-btn
          class="rounded-lg"
          padding="sm"
          outline
          icon="notifications"
          color="amber"
        />

        <q-btn
          class="rounded-lg"
          padding="sm"
          outline
          icon="settings"
          color="black"
        />
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
