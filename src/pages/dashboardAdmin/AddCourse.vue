<template>
  <q-page
    padding
    class="w-full bg-gray-50 max-w-screen-lg mx-auto flex justify-center items-start"
  >
    <div class="w-full pt-2 flex flex-col gap-4">
      <div class="flex justify-between mx-5 pb-4">
        <span class="font-bold text-2xl">Manage Course</span>
        <q-btn
          label="Add More Course"
          icon="add"
          flat
          class="text-dark font-bold"
          @click="onAddCourseClick"
        />
      </div>

      <q-list v-if="courseClasses.length">
        <q-expansion-item
          v-for="el in courseClasses"
          :key="el._uid"
          expand-icon="edit"
          expanded-icon="close"
          popup
        >
          <template #header>
            <q-item-section>
              <div class="flex items-center gap-2">
                <q-icon
                  name="class"
                  size="sm"
                />
                <span>{{ el.title }}</span>
              </div>
            </q-item-section>

            <q-btn
              icon="delete"
              color="negative"
              round
              flat
              @click="onDeleteCourseClick(el._uid)"
            />
          </template>

          <q-card>
            <q-card-section class="flex flex-col gap-2">
              <form-course-class-edit
                :data="el"
                class="w-full"
                @submit="payload => onCourseFormSubmit(el._uid, payload)"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>

      <span
        v-else
        class="w-full max-w-prose py-10 text-body2 text-gray-400 text-center"
      >Anda tidak memiliki kelas, silahkan tambahkan kelas untuk menambahkan</span>
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent, reactive, toRefs, computed,
} from 'vue';
import { Notify } from 'quasar';
import FormCourseClassEdit from 'components/FormCourseClassEdit.vue';
import { CourseClassUseCases } from 'src/useCases/CourseClass';
import { useAuthState } from 'src/use/AuthState';
import { getErrMsg } from 'src/uiHelpers';
import type { CourseClassObject } from 'src/data/CourseClass';
import type { FormCourseClassEdit as TFormCourseClassEdit } from 'src/types';

interface RequiredCourseItemProps {
  _uid: string;
  title: string;
}

export default defineComponent({
  name: 'AddCourse',
  components: { FormCourseClassEdit },
  setup() {
    const authState = useAuthState();
    const state = reactive({
      courseClasses: [] as CourseClassObject[],
      // if true it will push new item into `courseClasses`
      isAppendNewCourse: false,
    });
    const courseClassesUI = computed<(RequiredCourseItemProps | CourseClassObject)[]>(
      () => (state.isAppendNewCourse
        ? [{ _uid: 'new-instance', title: 'Untitled' }, ...state.courseClasses]
        : state.courseClasses));
    const updateCourseClassList = async () => {
      const data = await CourseClassUseCases.getAuthorizedListOnly();
      state.courseClasses = await Promise.all(data.map((el) => CourseClassUseCases.SnapshotToObject(el)));
    };

    authState.afterAuthHandlerOnce.push(updateCourseClassList);

    return {
      ...toRefs(state),
      courseClasses: courseClassesUI,
      updateCourseClassList,
    };
  },
  methods: {
    onAddCourseClick() {
      this.isAppendNewCourse = true;
    },
    onDeleteCourseClick(id: string) {
      if (id === 'new-instance') {
        this.isAppendNewCourse = false;
      }
    },
    onCourseFormSubmit(id: string, payload: TFormCourseClassEdit.SubmitPayload) {
      if (id === 'new-instance') {
        CourseClassUseCases.create(payload)
          .then(() => {
            this.isAppendNewCourse = false;
            void this.updateCourseClassList();
          })
          .catch((err) => Notify.create({ type: 'negative', message: getErrMsg(err) }));
      }
      // void CourseClassUseCases
      //   .update({
      //     _uid: id,
      //     ...payload,
      //   });
    },
  },
});
</script>
