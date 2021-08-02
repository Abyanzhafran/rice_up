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

        <span class="font-bold text-lg text-dark pt-2">Jack Hoodward</span>

        <q-btn
          class="rounded-lg"
          padding="sm"
          outline
          icon="settings"
          color="black"
        />
      </q-toolbar>
    </q-header>
    <q-footer bordered class="bg-white text-primary">
      <q-tabs
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
        v-model="tab"
      >
        <q-tab name="home" label="Home" icon="home" />
        <q-tab name="explorasi" label="Explorasi" icon="explore" />
        <q-tab name="talenta" label="Talenta" icon="grid_view" />
        <q-tab name="akun" label="Akun" icon="person" />
      </q-tabs>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageAccount',
  setup() {
    return {
      tab: ref('akun'),
    };
  },
});
</script>
