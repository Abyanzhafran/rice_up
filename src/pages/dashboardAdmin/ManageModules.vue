<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Manage Module_exp</span>
      <q-list
        v-for="n in 2"
        :key="n"
        bordered
        class="rounded-borders"
      >
        <q-expansion-item
          expand-separator
          icon="mail"
          label="Modul Teknologi Agraria"
          caption="Pengenalan Teknologi Drone"
          default-opened
        >
          <q-expansion-item
            expand-separator
            :header-inset-level="1"
            icon="perm_identity"
            label="Bab 1"
            caption="Pengenalan drone"
          >
            <q-card>
              <q-card-section>
                <span class="line-clamp-2">
                  {{ lorem }}
                </span>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            :header-inset-level="1"
            icon="signal_wifi_off"
            label="Bab 2"
            caption="Intro drone"
          >
            <q-card>
              <q-card-section>
                <span class="line-clamp-2">
                  {{ lorem }}
                </span>
              </q-card-section>
            </q-card>
          </q-expansion-item>

          <q-expansion-item
            expand-separator
            :header-inset-level="1"
            icon="drafts"
            label="Bab 2"
            caption="Cara menggunakan drone"
          >
            <q-card>
              <q-card-section>
                <span class="line-clamp-2">
                  {{ lorem }}
                </span>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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

export default defineComponent({
  name: 'ManageModules',
  setup() {
    return {
      stars: 4,
      menuList,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste eveniet doloribus ullam aliquid',
    };
  },
});
</script>

<style lang="scss">
  .done {
    text-decoration: line-through;
    color: #bbb;
  }
</style>
