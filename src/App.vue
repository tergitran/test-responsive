<template>
  <div id="app">
    <!-- <DropDragScreen /> -->
    <!-- <SortTableTest /> -->
    <!-- <VueDrag /> -->
    <!-- <EasyDnd /> -->
    <!-- <BaseChartRadar :labels="['A', 'B', 'C']" />
    <div @click="getFile">browser file</div> -->
    <div class="f-size-12">font size 12</div>
    <div class="f-size-6">font size 6</div>
    <div class="f-size-6 prev">font size 6</div>
  </div>
</template>

<script>
// import DropDragScreen from "./views/drop-drag-screen/drop-drag-screen";
// import SortTableTest from "./views/sortablejs-test/sortablejs-test.vue";
// import VueDrag from "./views/vue-drag/vue-drag.vue";
// import VueDrag from "./views/vue-drag/vue-drag.vue";
// import EasyDnd from "./views/easy-dnd/easy-dnd.vue";
// import BaseChartRadar from "./components/base-chart-radar/base-chart-radar.vue";
export default {
  name: "App",
  components: {
    // DropDragScreen,
    // SortTableTest,
    // VueDrag,
    // EasyDnd,
    // BaseChartRadar,
  },
  data() {
    return {
      chartBarData: {},
    };
  },
  computed: {},
  methods: {
    async getFile() {
      // open file picker, destructure the one element returned array
      const pickerOpts = {
        types: [
          {
            description: "Text",
            accept: {
              // "image/*": [".png", ".gif", ".jpeg", ".jpg"],
              "text/csv": [".csv"],
            },
          },
        ],
        excludeAcceptAllOption: true,
        multiple: false,
      };

      let fileHandle;

      [fileHandle] = await window.showOpenFilePicker(pickerOpts);
      console.log("FILE HANDLE", fileHandle);

      const fileData = await fileHandle.getFile();
      console.log("filedata", fileData);

      new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileData);
        reader.onload = () =>
          resolve({
            success: true,
            data: reader.result,
            content: reader.result.split(",")[1],
          });

        reader.onerror = (error) =>
          resolve({
            success: false,
            data: error,
          });
      }).then((res) => {
        console.log("res", res);
      });

      // run code with our fileHandle
    },
  },
  created() {},
};
</script>

<style lang="scss">
#app {
  // background: #f4f6f9;
  text-align: center;
  .f-size-12 {
    font-size: 12px;
  }
  .f-size-6 {
    font-size: 6px;
  }
  .prev {
    font-size: 6px;
    -webkit-text-size-adjust: none;
    text-size-adjust: none;
  }
}
</style>
