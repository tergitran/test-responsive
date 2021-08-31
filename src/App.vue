<template>
  <div id="app">
    <div :style="{ width: '560px' }">
      <BaseTabBoxContent :tabList="tabListVer1" :type="1"> </BaseTabBoxContent>
    </div>

    <div class="chart-box">
      <div class="chart-box__header">
        <div class="chart-box__header__left">
          <img src="@/assets/health.svg" />
          <label class="chart-name">フィジカルヘルス</label>
        </div>
        <div class="chart-box__header__right">
          最終診断結果 2021/45
        </div>
      </div>
      <div class="chart-box__content">
        <BaseTabBoxContent :tabList="tabList" :type="2">
          <template v-slot:tab-1>
            <div class="measure-box">
              <div class="measure-box__top">
                <div class="name">BMI</div>
                <div class="standard-value">基準値：18.5〜24.9</div>
              </div>
              <div class="measure-box__bottom">
                <MeasureResult></MeasureResult>
                <!-- <BaseChartLine
                  :dataset="[13.3, 12.5, 12.7, 14.5, 13.7]"
                  :min="11"
                  :max="15"
                  :standardMin="12.5"
                  :standardMax="14.5"
                  :labels="['2017', '2018', '2019', '2020', '2021']"
                  :isWarning="false"
                ></BaseChartLine> -->
              </div>
            </div>
            <div class="measure-box">
              <div class="measure-box__top">
                <div class="name">BMI</div>
                <div class="standard-value">基準値：18.5〜24.9</div>
              </div>
              <div class="measure-box__bottom">
                <MeasureResult
                  :result="{
                    value: 15.9,
                    unit: 'cm',
                    isWarning: true,
                  }"
                ></MeasureResult>
                <!-- <BaseChartLine
                  :dataset="[13.3, 12.5, 12.7, 14.5, 11.3]"
                  :min="11"
                  :max="15"
                  :standardMin="12.5"
                  :standardMax="14.5"
                  :labels="['2017', '2018', '2019', '2020', '2021']"
                  :isWarning="true"
                ></BaseChartLine> -->
              </div>
            </div>
          </template>
          <template v-slot:tab-2>
            <div class="measure-box">
              <div class="measure-box__top">
                <div class="name">BMI</div>
                <div class="standard-value">基準値：18.5〜24.9</div>
              </div>
              <div class="measure-box__bottom">
                <MeasureResult></MeasureResult>
                <!-- <BaseChartLine
                  :dataset="[13.3, 12.5, 12.7, 14.5, 13.7]"
                  :min="11"
                  :max="15"
                  :standardMin="12.5"
                  :standardMax="14.5"
                  :labels="['2017', '2018', '2019', '2020', '2021']"
                  :isWarning="true"
                ></BaseChartLine> -->
              </div>
            </div>
          </template>
        </BaseTabBoxContent>
      </div>
    </div>

    <div :style="{ marginTop: '30px' }">
      <StackBarChart
        :labels="stackBarData.labels"
        :dataList="stackBarData.dataList"
      ></StackBarChart>
    </div>
    <div :style="{ marginTop: '30px', paddingBottom: '30px' }" v-if="isLoaded">
      <!-- :dataset="[13.3, 45.5, 17, 14.5, 3.3]" -->
      <BaseChartLine
        :dataset="dataset"
        :standardMin="standardMin"
        :standardMax="standardMax"
        :labels="labelList"
        :isWarning="true"
      ></BaseChartLine>
    </div>
  </div>
</template>

<script>
import BaseChartLine from "./components/base-chart-line/base-chart-line.vue";
import BaseTabBoxContent from "./components/base-tab-box-content/base-tab-box-content.vue";
import MeasureResult from "./components/measure-result/measure-result.vue";
import StackBarChart from "./components/stack-bar-chart/stack-bar-chart.vue";

export default {
  name: "App",
  components: {
    BaseChartLine,
    BaseTabBoxContent,
    MeasureResult,
    StackBarChart,
  },
  data() {
    return {
      isLoaded: false,
      currentTabIndex: 0,
      tabList: [
        {
          name: "tab-1",
          label: "身体測定",
          isWarning: true,
        },
        {
          name: "tab-2",
          label: "貧血",
          isWarning: false,
        },
        {
          name: "tab-3",
          label: "血圧",
          isWarning: false,
        },
        {
          name: "tab-4",
          label: "血糖",
          isWarning: false,
        },
        {
          name: "tab-5",
          label: "肝機能",
          isWarning: true,
        },
        {
          name: "tab-6",
          label: "脂質",
          isWarning: false,
        },
      ],
      tabListVer1: [
        {
          name: "tab-1",
          label: "メンタリティマネジメント",
        },
        {
          name: "tab-2",
          label: "ストレス",
        },
        {
          name: "tab-3",
          label: "エンゲージメント",
        },
      ],
      stackBarData: {
        labels: ["2021/1", "2", "3", "4", "5"],
        dataList: [
          [22, 29, 35, 44, 32],
          [12, 2, 9, 25, 32],
        ],
        // labels: [
        //   "2021/1",
        //   "2",
        //   "3",
        //   "4",
        //   "5",
        //   "6",
        //   "7",
        //   "8",
        //   "9",
        //   "10",
        //   "11",
        //   "12",
        // ],
        // dataList: [
        //   [22, 29, 35, 16, 28, 21, 39, 27, 35, 44, 14, 27],
        //   [12, 2, 9, 12, 8, 12, 19, 6, 3, 12, 9, 7],
        // ],
      },
      dataset: [],
      labelList: [],
      standardMin: null,
      standardMax: null,
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        this.isLoaded = true;
        console.log(json);
        this.dataset = [23.3, 15.5, 37, 24.5, 13.3];
        this.labelList = ["2017", "2018", "2019", "2020", "2021"];

        this.standardMin = 10;
        this.standardMax = 35;
      });
  },
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

  padding: 50px;

  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .chart-box {
    box-sizing: border-box;
    width: 560px;
    height: 560px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(100px);
    border-radius: 4px;

    padding: 24px;
    font-family: Noto Sans CJK JP;
    display: flex;
    flex-direction: column;

    &__header {
      display: flex;
      justify-content: space-between;
      &__left {
        display: flex;
        align-items: center;

        font-weight: bold;
        font-size: 14px;
        color: #19202b;

        img {
          margin-right: 8px;
        }

        label {
          margin-bottom: 0;
        }
      }
      &__right {
        font-weight: 500;
        font-size: 11px;
        line-height: 15px;
        color: #8a9cb9;
        font-family: Manrope;
      }
    }

    &__content {
      margin-top: 26px;
      flex: 1;

      .measure-box {
        margin: 30px 16px;
        &__top {
          display: flex;
          justify-content: space-between;

          .name {
            color: #19202b;
            font-weight: bold;
            font-size: 16px;
            line-height: 16px;
          }
          .standard-value {
            font-size: 10px;
            line-height: 14px;
            color: #52688b;
            font-family: "Manrope", sans-serif; // ko nhan

            background: #f4f6f9;
            border-radius: 10px;
            padding: 2px 8px;
          }
        }
        &__bottom {
          margin-top: 4px;

          display: flex;
          justify-content: space-between;

          .left-content {
            background: #f4f6f9;
            border-radius: 4px;

            width: 224px;
            height: 96px;
          }
        }
      }
    }
  }
}
</style>
