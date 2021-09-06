<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <span class="font-bold text-2xl">Pemetaan Lahan</span>
      <q-toolbar class="flex flex-row bg-gray-200 shadow-2">
        <div class="flex items-center gap-1">
          <q-icon
            name="star"
            class="text-yellow-400"
            size="sm"
          />
          <span class="font-bold">
            rating
          </span>
        </div>

        <q-separator
          inset
          vertical
          class="q-mx-md"
          color="primary"
        />

        <div class="flex items-center gap-1">
          <q-icon
            name="groups"
            class="text-red-500"
            size="sm"
          />
          <span class="font-bold">
            totalStudents
          </span>
        </div>

        <q-separator
          inset
          vertical
          class="q-mx-md"
          color="primary"
        />

        <div class="flex items-center gap-1">
          <q-icon
            name="verified_user"
            class="text-blue-500"
            size="sm"
          />
          <span class="font-bold">
            studentsType
          </span>
        </div>
      </q-toolbar>
      <span class="font-bold text-lg mt-4">Pengelolaan Ditawarkan :</span>
      <q-banner
        bordered
        class="w-full h-full text-dark bg-gray-100 shadow-lg rounded-xl"
      >
        <div class="flex items-center justify-start py-2">
          <div class="flex flex-col">
            <span class="font-semibold pt-1 pb-1">Deskripsi</span>
            <span>Deskripsi keahlian</span>
            <span class="font-semibold mb-2 mt-4">Yang ditawarkan :</span>
            <ul
              v-for="n in 4"
              :key="n"
              class="list-disc ml-4"
            >
              <li>
                Some feature
              </li>
            </ul>
          </div>
        </div>
      </q-banner>
      <span class="font-bold text-lg mt-4">Rp. 1.500.000/bln</span>
      <q-btn
        rounded
        color="primary"
        label="Sewa"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppRentDetail',
  // setup() {

  // },
});
</script>
