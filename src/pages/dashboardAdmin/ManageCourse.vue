<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between">
        <span class="font-bold text-2xl">Manage Class Courses</span>
        <q-btn
          to="/admin/add_course"
          class="text-dark font-bold"
          label="Add course"
          flat
          icon="add"
        />
      </div>
      <div class="flex flex-col my-4 justify-center">
        <div class="flex flex-row justify-start gap-x-6 gap-y-4">
          <template v-if="courseClassesDum.length">
            <!-- <router-link to="admin/add_course"> -->
            <card-product
              v-for="el, i in courseClassesDum"
              :key="i"
              :title="el.title"
              :trainer-name="el.trainerName"
              :price="el.price"
              :discount-label="el.discountLabel"
              :discount-price="el.discountPrice"
            />
            <!-- </router-link> -->
          </template>
          <div class="flex items-center justify-center px-8">
            <q-btn
              to="/admin/add_course"
              round
              color="primary"
              icon="shopping_cart"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import CardProduct from 'src/components/CardProduct.vue';

// Dummy Var
const randBool = () => Math.random() > 0.5;

const generateCourseClass = () => ({
  title: 'Perluasan lahan sengketa dengan Cepat!',
  trainerName: 'BUMN',
  price: Math.random() * 100_000,
  discountPrice: randBool() ? Math.random() * 100_000 : NaN,
  discountLabel: randBool() ? '50%' : '',
});
// End Dummy

export default defineComponent({
  name: 'ManageCourse',
  components: {
    CardProduct,
  },
  setup() {
    const state = reactive({
      // Dummy data
      courseClassesDum: Array.from(Array(8), generateCourseClass),
      // End Dummy
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>
