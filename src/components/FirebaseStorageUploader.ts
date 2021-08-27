// import { computed } from 'vue';
// import { createUploaderComponent } from 'quasar';
// import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
// import { fbApp } from 'src/firebase';

// const storage = getStorage(fbApp)

// export default createUploaderComponent({
//   name: 'FirebaseStorageUploader',
//   props: {
//     path: {
//       type: String,
//       required: true,
//     },
//   },
//   emits: [
//     // ...your custom events name list
//   ],
//   injectPlugin({ props, emit, helpers }) {
//     // can call any other composables here
//     // as this function will run in the component's setup()
//     const storageRef = computed(() => ref(storage, props.path))
//     // [ REQUIRED! ]
//     // We're working on uploading files
//     const isUploading = computed(() => {
//       // return <Boolean>
//     });

//     // [ optional ]
//     // Shows overlay on top of the
//     // uploader signaling it's waiting
//     // on something (blocks all controls)
//     const isBusy = computed(() => {
//       // return <Boolean>
//     });

//     // [ REQUIRED! ]
//     // Abort and clean up any process
//     // that is in progress
//     const abort = () => {
//       // ...
//     };

//     // [ REQUIRED! ]
//     // Start the uploading process
//     const upload = () => {
//       const queue = Array.from(helpers.queuedFiles.value);

//       queue.forEach((el) => {
//         const filename = el.name;
//         const fileref = ref(storageRef.value, filename);

//         uploadBytesResumable(fileref, el)

//       })
//     };

//     return {
//       isUploading,
//       isBusy,
//       abort,
//       upload,
//     };
//   },
// });
