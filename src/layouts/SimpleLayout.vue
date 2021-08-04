<template>
  <q-layout view="hhh LpR fff">
    <q-header
      bordered
      class="bg-white text-gray-700"
    >
      <q-toolbar>
        <q-toolbar-title>
          Bertani-App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot>
        <router-view />
      </slot>
    </q-page-container>

    <q-footer
      bordered
      class="bg-white text-gray-500"
    >
      <q-toolbar>
        <small>Copyright &copy; 2021 All rights reserved</small>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SimpleLayout',
});
</script>
