<template>
  <div id="app">
    <!-- <div class="circle circle-A" id="tooltip-target-1">
      A
    </div> -->
    <div class="container">
      <div class="child">Test Logo</div>
      <img class="logo" src="@/assets/emp-logo2.svg" />
    </div>
    <!-- <button
      @click="$bvModal.show('modal-1')"
      class="circle circle-A"
      id="tooltip-target-1"
    >
      A
    </button>
    <a class="circle circle-A" id="tooltip-target-2">
      B
    </a>
    <b-tooltip target="tooltip-target-1" triggers="hover">
      Thanks <b>Linh 2K</b> !
    </b-tooltip>
    <b-tooltip target="tooltip-target-2" triggers="hover">
      Thanks <b>Linh 2K</b> !
    </b-tooltip> -->

    <b-modal
      id="modal-1"
      scrollable
      title="Scrollable Content"
      :hide-footer="true"
    >
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

export default {
  name: "App",
  data() {
    return {
      chartBarData: {},
    };
  },
  created() {
    let labels = [];
    let dataList = [[], []];
    let initYear = 2000;
    let num = 300;
    let temp = num + initYear;
    while (initYear < temp) {
      labels.push(initYear.toString());
      initYear++;
      dataList[0].push(Math.floor(Math.random() * 30));
      dataList[1].push(Math.floor(Math.random() * 30));
    }
    console.log("labels", labels);
    console.log("dataList", dataList);
    this.chartBarData = { labels, dataList };
    console.log("chartBarData", this.chartBarData);
  },
};
</script>

<style lang="scss">
body {
  margin: 0;

  .modal-dialog {
    margin: 24px 16px;
  }
  .modal-dialog-scrollable {
    max-height: calc(100% - 48px);
  }
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
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
    position: absolute;
    left: 1;
    top: 20px;
    // background: #2c3e50;

    width: max-content;
    padding: 8px;

    .child {
      // background: yellow;
      min-width: fit-content;
      margin-bottom: 20px;
    }
  }

  // .logo {
  //   width: 24px;
  //   height: 18px;
  // }
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
