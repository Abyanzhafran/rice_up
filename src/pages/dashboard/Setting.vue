<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex flex-col justify-start items-center"
  >
    <q-list class="self-stretch">
      <q-item-label header>
        Akun
      </q-item-label>

      <q-item
        v-ripple
        clickable
        @click="logout"
      >
        <q-item-section avatar>
          <q-avatar
            icon="logout"
            class="text-red-500"
          />
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-red-500">
            Keluar
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { signOut } from 'firebase/auth';
import { auth } from 'src/firebase';

export default defineComponent({
  name: 'Setting',
  methods: {
    logout() {
      this.$auth.isAwaiting = true;
      this.$auth.afterUnauthHandlerOnce.push(() => {
        void this.$router.push('/welcome');
      });
      void signOut(auth);
    },
  },
});
</script>
