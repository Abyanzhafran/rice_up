<template>
  <q-layout view="hHh Lpr lff">
    <q-header
      elevated
      class="bg-gray-900"
    >
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="drawer = !drawer"
        />
        <q-toolbar-title>Header</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above
      :width="200"
      :breakpoint="500"
      bordered
      class="bg-grey-3"
    >
      <q-scroll-area class="h-[calc(100%-150px)] mt-[150px] border-r">
        <q-list>
          <template
            v-for="(menuItem, index) in menuList"
            :key="index"
          >
            <q-expansion-item
              expand-icon-toggle
              expand-separator
              label="Pengenalan Drone"
              class="font-bold"
            >
              <q-card>
                <q-card-section class="flex flex-col font-normal">
                  <span
                    v-for="n in 3"
                    :key="n"
                  >
                    Apa itu Drone ?
                  </span>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </template>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top h-[150px]"
        src="https://cdn.quasar.dev/img/material.png"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar
            size="56px"
            class="q-mb-sm"
          >
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <div class="text-weight-bold">
            Razvan Stoenescu
          </div>
          <div>@rstoenescu</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <slot />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref } from 'vue';

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true,
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false,
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false,
  },
];

export default {
  name: 'DashboardLayout',
  setup() {
    return {
      drawer: ref(false),
      menuList,
    };
  },
};
</script>
