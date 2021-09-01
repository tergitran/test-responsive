<template>
  <div id="app">
    <!-- <div class="circle circle-A" id="tooltip-target-1">
      A
    </div> -->
    <button
      @click="$bvModal.show('modal-1')"
      class="circle circle-A"
      id="tooltip-target-1"
    >
      A
    </button>
    <a class="circle circle-A" id="tooltip-target-2">
      B
    </a>
    <!-- <b-tooltip target="tooltip-target-1" triggers="hover focus">
      I am tooltip <b>component</b> content!
    </b-tooltip> -->
    <b-tooltip target="tooltip-target-1" triggers="hover">
      Thanks <b>Linh 2K</b> !
    </b-tooltip>
    <b-tooltip target="tooltip-target-2" triggers="hover">
      Thanks <b>Linh 2K</b> !
    </b-tooltip>

    <b-modal id="modal-1" scrollable title="Scrollable Content">
      <p class="my-4" v-for="i in 20" :key="i">
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </b-modal>
  </div>
</template>

<script>
// import BaseChartLine from "./components/base-chart-line/base-chart-line.vue";
// import BaseTabBoxContent from "./components/base-tab-box-content/base-tab-box-content.vue";
// import MeasureResult from "./components/measure-result/measure-result.vue";
// import StackBarChart from "./components/stack-bar-chart/stack-bar-chart.vue";

export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  background-color: #eff4f6;
  height: calc(100vh - 20px);
  display: flex;
  align-items: center;
  justify-content: center;

  .circle {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    font-size: 28px;
    align-items: center;
    background: yellowgreen;
  }
}
</style>
