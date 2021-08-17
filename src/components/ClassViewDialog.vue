<template>
  <q-dialog>
    <q-card
      class="w-full -mb-8"
      style="border-radius: 30px"
    >
      <q-card-section class="rounded-2xl">
        <q-scroll-area
          class="w-full"
          style="height: 500px"
        >
          <div class="w-full pt-2 flex flex-col items-center gap-4">
            <div class="flex flex-col justify-start w-full gap-4 px-auto">
              <q-video
                class="rounded-2xl w-full h-48"
                src="https://www.youtube.com/embed/OhESSZIXvCA"
              />
              <span class="font-bold text-2xl text-blue-700">{{ classCourseTitle }}</span>
              <div class="flex flex-row gap-2 text-lg">
                <span class="font-bold">
                  {{ formatCurrency(price) }}
                </span>
                <small
                  v-if="discountPrice"
                  class="text-strike"
                >
                  {{ formatCurrency(discountPrice) }}
                </small>
              </div>
              <div class="flex flex-row items-center gap-2">
                <q-icon
                  name="spa"
                  class="text-green-500"
                  size="sm"
                />
                <span class="font-bold">{{ agencyName }}</span>
                <q-separator
                  class="bg-dark"
                  vertical
                />
                <span>{{ agencyName }}</span>
              </div>
              <q-toolbar class="flex flex-row bg-gray-200 shadow-2">
                <div class="flex items-center gap-1">
                  <q-icon
                    name="star"
                    class="text-yellow-400"
                    size="sm"
                  />
                  <span class="font-bold">
                    {{ rating }}
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
                    {{ totalStudents }}
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
                    {{ studentsType }}
                  </span>
                </div>
              </q-toolbar>
              <span class="font-bold text-2xl text-left">Tentang Kelas</span>
              <q-banner
                bordered
                class="w-full h-full text-dark bg-gray-100 shadow-lg rounded-xl"
              >
                <div class="flex items-center justify-start py-2">
                  <div class="flex flex-col">
                    <span class="font-semibold pt-1 pb-2">Persyaratan :</span>
                    <ul
                      v-for="n in 4"
                      :key="n"
                      class="list-disc ml-4"
                    >
                      <li>
                        {{ classRequirement }}
                      </li>
                    </ul>
                    <span class="font-semibold mb-2 mt-4">Deskripsi</span>
                    <span>{{ classDescription }}</span>
                  </div>
                </div>
              </q-banner>
              <q-btn
                class="mb-8"
                rounded
                color="primary"
                label="Daftar Kelas"
              />
            </div>
          </div>
        </q-scroll-area>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const formatCurrency = (n: number) => n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' });

export default defineComponent({
  name: 'ClassViewDialog',
  props: {
    classCourseTitle: {
      type: String,
      default: 'Drone Sebagai Pengawas Lahan',
    },
    agencyName: {
      type: String,
      default: 'Menpertani',
    },
    agencyType: {
      type: String,
      default: 'Instansi Negara',
    },
    rating: {
      type: Number,
      default: 8.6,
    },
    totalStudents: {
      type: Number,
      default: 2000,
    },
    studentsType: {
      type: String,
      default: 'Umum',
    },
    classRequirement: {
      type: String,
      default: 'Bertempat tinggal di Solo-Jogja',
    },
    classDescription: {
      type: String,
      default: 'Kelas ini mempelajari pengawasan lahan menggunakan teknologi drone',
    },
    price: {
      type: Number,
      default: NaN,
    },
    discountPrice: {
      type: Number,
      default: NaN,
    },
  },
  setup() {
    return {
      formatCurrency,
    };
  },
});
</script>

<style lang="scss">
// /* width */
// ::-webkit-scrollbar {
//   width: 10px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   background: #f1f1f1;
// }

// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: #888;
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #555;
// }
</style>
