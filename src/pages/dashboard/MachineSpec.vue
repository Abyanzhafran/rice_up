<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-sm mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col">
      <div class="container mx-auto">
        <div class="flex gap-4">
          <q-img
            src="~assets/DJI-Agras-MG-1P.jpg"
            :ratio="4/3"
          >
            <div class="absolute-bottom text-2xl font-semibold text-center">
              DJI Agras MG-1P
            </div>
          </q-img>
          <span class="font-bold text-2xl">DJI Agras MG-1P</span>
          <p>{{ desc }}</p>
        </div>
        <q-table
          class="mt-4"
          :rows="rows"
          row-key="name"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

const rows = [
  {
    name: 'Stator Size',
    spec: '60mm x 10 mm',
  },
  {
    name: 'KV',
    spec: '130 rpm/V',
  },
  {
    name: 'Max Thrust',
    spec: '5.1 kg/rotor',
  },
  {
    name: 'Max Power',
    spec: '770 W',
  },
  {
    name: 'Max Thrust',
    spec: '5.1 kg/rotor',
  },
  {
    name: 'Max Power',
    spec: '770 W',
  },
  {
    name: 'Max Thrust',
    spec: '5.1 kg/rotor',
  },
  {
    name: 'Max Power',
    spec: '770 W',
  },
];

export default defineComponent({
  name: 'MachineSpec',
  setup() {
    return {
      desc: 'DJI Agras MG-1 Agriculture Drone adalah octocopter yang dirancang untuk aplikasi penyemprotPowerful Stable Octocopter Design pestisida cair, pupuk dan herbisida, membawa tingkat baru dalam efisiensi dan pengelolaan ke sektor pertanian.',
      rows,
    };
  },
});
</script>
