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
        <q-toolbar-title>Admin</q-toolbar-title>
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
      <q-scroll-area class="h-[calc(100%)] border-r">
        <q-list>
          <q-item
            v-for="(menuItem, index) in menuList"
            :key="index"
            v-ripple
            :to="menuItem.link"
            clickable
            exact
          >
            <q-item-section avatar>
              <q-icon :name="menuItem.icon" />
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
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
    icon: 'library_books',
    label: 'Manage Modules',
    link: '/admin',
  },
  {
    icon: 'class',
    label: 'Manage Course',
    link: '/admin/add_course',
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
