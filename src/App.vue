<template>
  <div id="app">
    <div class="circle circle-A" id="tooltip-target-1">
      A
    </div>
    <b-tooltip target="tooltip-target-1" triggers="hover">
      I am tooltip <b>component</b> content!
    </b-tooltip>
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
