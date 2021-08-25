<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between mx-5 pb-4">
        <span class="font-bold text-2xl">Manage Course</span>
        <q-btn
          class="text-dark font-bold"
          label="Add More Course"
          flat
          icon="add"
          @click="addMoreCourse"
        />
      </div>
      <template v-if="listsDump.length">
        <q-list>
          <q-expansion-item
            v-for="(el, n) in listsDump"
            :key="n"
            expand-icon-toggle
            popup
          >
            <template #header>
              <q-item-section>
                <div class="flex items-center gap-2">
                  <q-icon
                    :name="el.icon"
                    size="sm"
                  />
                  <span>{{ el.title }}</span>
                </div>
              </q-item-section>
              <q-btn
                icon="delete"
                color="red"
                round
                flat
                @click="deleteCourse"
              />
            </template>
            <q-card>
              <q-card-section class="flex flex-col gap-2">
                <q-input
                  v-for="(i, formList) in formLists"
                  :key="formList"
                  v-model="text"
                  outlined
                  :label="i.labelForm"
                />
                <q-uploader
                  class="mt-4"
                  url="http://localhost:4444/upload"
                  label="Upload Thumbnail"
                  color="primary"
                  square
                  flat
                  bordered
                  clas
                  style="max-width: 300px"
                />
                <div class="flex gap-2 pt-2">
                  <q-btn
                    class="rounded-md"
                    color="green"
                    label="Save"
                  />
                  <q-btn
                    class="rounded-md"
                    color="red"
                    label="Reset"
                  />
                </div>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </template>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, ref, reactive, toRefs,
} from 'vue';

const formLists = [
  {
    labelForm: 'Title',
  },
  {
    labelForm: 'Price',
  },
  {
    labelForm: 'Discount Price',
  },
  {
    labelForm: 'Free Label',
  },
];

const generateList = () => ({
  icon: 'class',
  title: 'Untitled',
});

export default defineComponent({
  name: 'AddCourse',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
  setup() {
    const state = reactive({
      listsDump: Array.from(Array(3), generateList),
    });

    return {
      text: ref(''),
      ph: ref(''),
      ...toRefs(state),
      formLists,
    };
  },
  methods: {
    addMoreCourse() {
      this.listsDump.push({
        title: 'Untitled_1',
        icon: 'class',
      });
    },
    deleteCourse(el) {
      this.listsDump.splice(el, 1);
    },
  },
});
</script>
