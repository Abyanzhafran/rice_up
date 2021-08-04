<template>
  <simple-layout>
    <q-page
      padding
      class="max-w-screen-sm mx-auto px-8 flex flex-col justify-center gap-y-16"
      :style-fn="pageStyle"
    >
      <div>
        <h2 class="font-bold text-3xl text-gray-700 leading-normal">
          Halo 👋
        </h2>
        <h2 class="font-bold text-3xl text-gray-700 leading-normal">
          Selamat Datang!
        </h2>
        <p class="text-sm text-gray-500">
          Pelajari keahlian baru, dan mulai akses kelasmu sekarang
        </p>
      </div>

      <div class="flex flex-col gap-y-12 items-stretch">
        <q-btn
          label="Login with Google"
          icon="img:/google-brand.svg"
          rounded
          unelevated
          class="bg-white text-gray-900 before:border before:border-blue-300"
        />

        <span class="text-sm text-gray-700 text-center">Belum punya akun? <router-link
          to="/"
          class="text-blue-500"
        >Daftar sekarang</router-link></span>
      </div>
    </q-page>
  </simple-layout>
</template>

<script lang="ts">
import SimpleLayout from 'layouts/SimpleLayout.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageWelcome',
  components: { SimpleLayout },
  methods: {
    pageStyle(offset: number) {
      return { height: `calc(100vh - ${offset}px)` };
    },
  },
});
</script>
