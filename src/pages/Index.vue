<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto row items-center justify-evenly"
  >
    <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
    <q-btn
      class="bg-yellow-400"
      label="Primary"
    />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ExampleComponent from 'components/CompositionComponent.vue';
import { Todo, Meta } from 'components/models';

export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    return { todos, meta };
  },
});
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
