<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-2 flex flex-col items-center gap-4">
      <q-select
        v-model="model"
        class="w-full"
        outlined
        :options="options"
      />
      <div class="flex flex-col my-4">
        <div class="flex flex-row justify-center gap-x-3 gap-y-6 max-w-sm">
          <card-product-tools
            v-for="(el, n) in courseTools"
            :key="n"
            v-ripple
            :title="el.title"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, toRefs,
} from 'vue';
import CardProductTools from 'src/components/CardProductTools.vue';

const generateCourseTools = () => ({
  title: 'Photography Drone',
});

export default defineComponent({
  name: 'Talent',
  components: {
    CardProductTools,
  },
  props: {
    options: {
      type: Array,
      default: ['Photography Drone', 'Farmer Drone'],
    },
  },
  setup() {
    const state = reactive({
      courseTools: Array.from(Array(8), generateCourseTools),
    });

    return {
      model: ref('All Tools'),
      stars: ref(4),
      ...toRefs(state),
    };
  },
});
</script>
