<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="flex justify-between bg-white px-6 py-4">
        <q-btn
          class="rounded-lg"
          :to="{name: 'AppNotification'}"
          padding="sm"
          outline
          icon="notifications"
          color="amber"
        />

        <span class="font-bold text-lg text-dark pt-2">{{ String($auth.user?.displayName) }}</span>

        <q-btn
          class="rounded-lg"
          :to="{name: 'AppSettings'}"
          padding="sm"
          outline
          icon="settings"
          color="black"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <slot>
        <router-view />
      </slot>
    </q-page-container>

    <q-footer
      bordered
      class="bg-white text-primary"
    >
      <q-tabs
        v-model="tab"
        no-caps
        active-color="primary"
        indicator-color="transparent"
        class="text-grey"
      >
        <q-route-tab
          label="Home"
          name="home"
          icon="home"
          :to="{name: 'AppHome'}"
          exact
        />
        <q-route-tab
          label="Explorasi"
          name="explorasi"
          icon="explore"
          :to="{name: 'AppExplore'}"
          exact
        />
        <q-route-tab
          label="Alat"
          name="alat"
          icon="grid_view"
          :to="{name: 'AppStuff'}"
          exact
        />
        <q-route-tab
          label="Sewa"
          name="sewa"
          icon="vpn_key"
          :to="{name: 'AppRent'}"
          exact
        />
        <q-route-tab
          label="Akun"
          name="akun"
          icon="person"
          :to="{name: 'AppAccount'}"
          exact
        />
      </q-tabs>
    </q-footer>
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
