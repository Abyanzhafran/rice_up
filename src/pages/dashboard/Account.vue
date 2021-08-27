<template>
  <q-page
    padding
    class="w-full max-w-screen-sm mx-auto flex justify-center"
  >
    <div class="w-full pt-10 flex flex-col items-center gap-4">
      <q-avatar
        :icon="($auth.user && $auth.user.photoURL) ? `img:${$auth.user.photoURL}` : 'person'"
        size="5rem"
        class="bg-gray-200"
      />

      <span class="font-semibold text-lg pt-2">{{ String($auth.user?.displayName) }}</span>

      <q-banner
        class="w-full text-dark bg-white border-2 border-gray-500 rounded-full"
      >
        <div class="flex justify-center items-center">
          <span class="font-bold text-xl p-0 text-blue-600">
            Kelas Saya
          </span>
        </div>
      </q-banner>

      <q-list
        v-if="myCourseClasses.length"
        class="w-full bg-white rounded-2xl"
      >
        <q-item
          v-for="el in myCourseClasses"
          :key="el._uid"
          v-ripple
          :to="{name: 'CourseDetail', params: {courseSlug: el.course.slug}}"
        >
          <q-item-section>
            <q-item-label class="text-xl line-clamp-2">
              {{ el.course.name }}
            </q-item-label>

            <q-item-label class="font-normal">
              {{ el.course.trainerName }}
            </q-item-label>
          </q-item-section>

          <q-item-section avatar>
            <q-circular-progress
              show-value
              size="80px"
              :value="el.progress"
              :thickness="0.3"
              color="teal"
              track-color="grey-3"
            >
              <span class="m-4 text-xl font-semibold">{{ el.progress }}%</span>
            </q-circular-progress>
          </q-item-section>
        </q-item>
      </q-list>

      <span
        v-else
        class="w-full max-w-prose py-10 text-body2 text-gray-400 text-center"
      >
        Anda belum mengikuti kelas, silahkan menuju ke eksplorasi untuk mengikuti kelas 🙏
      </span>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { asyncComputed } from '@vueuse/core';
import { MyCourseClassUseCases } from 'src/useCases/MyCourseClass';
import type { MyCourseClass } from 'src/data/MyCourseClass';

const countProgressPercent = (progress: MyCourseClass['progress']) => {
  if (progress.length) {
    const sum = progress.reduce((acc, el) => {
      acc += el.completion;
      return acc;
    }, 0);

    return sum / progress.length;
  }

  return 0;
};

export default defineComponent({
  name: 'Account',
  props: {
    classCourseTitle: {
      type: String,
      default: 'Drone Sebagai Pengawas Lahan',
    },
    agencyName: {
      type: String,
      default: 'Menpertani',
    },
    classCareerValue: {
      type: Number,
      default: 75,
    },
  },
  setup() {
    const myCourseClasses = asyncComputed(async () => {
      const snapshots = await MyCourseClassUseCases.getAll();

      return snapshots.map((el) => {
        const { progress, ...data } = el.data();

        return {
          ...data,
          _uid: el.id,
          progress: countProgressPercent(progress),
        };
      });
    }, []);

    return {
      myCourseClasses,
      countProgressPercent,
    };
  },
});
</script>
