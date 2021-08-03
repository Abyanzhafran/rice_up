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

<<<<<<< HEAD
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
            <q-item
              v-ripple
              clickable
              :active="menuItem.label === 'Outbox'"
            >
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" />
              </q-item-section>
              <q-item-section>
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
            <q-separator
              v-if="menuItem.separator"
              :key="'sep' + index"
            />
          </template>
        </q-list>
      </q-scroll-area>
=======
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="640"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="h-[calc(100%-150px)] mt-[150px] border-r">
          <q-list>

            <template v-for="(menuItem, index) in menuList" :key="index">
              <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>
>>>>>>> 7b0d4a373df59caff64cc4eed1044d2d1d09ee26

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

<<<<<<< HEAD
    <q-page-container>
      <q-page padding>
        <p
          v-for="n in 15"
          :key="n"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit nihil praesentium molestias a adipisci, dolore vitae odit,
          quidem consequatur optio voluptates asperiores pariatur eos numquam
          rerum delectus commodi perferendis voluptate?
        </p>
      </q-page>
    </q-page-container>
  </q-layout>
=======
      <q-page-container>
        <slot />
        <router-view />
      </q-page-container>
    </q-layout>
>>>>>>> 7b0d4a373df59caff64cc4eed1044d2d1d09ee26
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
  {
    icon: 'error',
    label: 'Spam',
    separator: true,
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
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
