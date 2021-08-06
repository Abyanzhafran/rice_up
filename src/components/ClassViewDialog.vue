<template>
  <q-dialog>
    <q-card
      class="w-full rounded-t-2xl"
      bordered
      flat
    >
      <q-card-section>
        <div class="w-full pt-2 flex flex-col items-center gap-4">
          <div class="flex flex-col justify-start w-full gap-4 px-auto">
            <q-video
              class="rounded-2xl w-full h-48"
              src="https://www.youtube.com/embed/OhESSZIXvCA"
            />
            <span class="font-bold text-2xl text-blue-700">Drone Sebagai Pengawas Lahan</span>
            <div class="flex flex-row gap-2 text-lg">
              <span class="font-bold">
                Rp 123.321
              </span>
              <span
                class="done"
                style="font-size: 14px"
              >
                Rp 180.000
              </span>
            </div>
            <div class="flex flex-row items-center gap-2">
              <q-icon
                name="spa"
                class="text-green-500"
                size="sm"
              />
              <span class="font-bold">Menpertani</span>
              <q-separator
                class="bg-dark"
                vertical
              />
              <span>Instansi Negara</span>
            </div>
            <q-toolbar class="flex flex-row bg-gray-200 shadow-2">
              <div class="flex items-center gap-1">
                <q-icon
                  name="star"
                  class="text-yellow-400"
                  size="sm"
                />
                <span class="font-bold">
                  8.6
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
                  2000
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
                  Semua
                </span>
              </div>
            </q-toolbar>
            <span class="font-bold text-2xl text-left">Tentang Kelas</span>
            <span>Selama ini pengawasan lahan</span>
            <q-btn
              rounded
              color="primary"
              label="Daftar Kelas"
            />
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClassViewDialog',
});
</script>
