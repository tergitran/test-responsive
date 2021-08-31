import Chart from "chart.js";

export default {
  name: "BaseChartLine",
  props: {
    // min: Number,
    // max: Number,
    standardMin: Number,
    standardMax: Number,
    labels: {
      type: Array,
      default() {
        return [];
      },
    },
    dataset: {
      type: Array,
      default() {
        return [];
      },
    },
    isWarning: {
      type: Boolean,
      default() {
        return false;
      },
    },
    // max: Number,
  },
  data() {
    return {
      love: "I LOVE YOU HUONG ❤",
      chart: null,
      chartLineId: Math.random()
        .toString(36)
        .substring(7),
      chartData: {
        range: {
          min: null,
          max: null,
        },
      },
      datasets: [],
    };
  },
  mounted() {
    this.initChart();
    console.log("mounted");
    var ctx = document.getElementById(this.chartLineId).getContext("2d");
    let self = this;

    let plugin = {
      beforeDraw: function(chart) {
        let ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;

        // ctx.beginPath();
        // ctx.rect(
        //   chartArea.left,
        //   chartArea.top,
        //   chartArea.right - chartArea.left + 20,
        //   chartArea.bottom - chartArea.top
        // );
        // ctx.fillStyle = "white";
        // ctx.fill();

        let space = (chartArea.bottom - chartArea.top) / 4;

        ctx.beginPath();
        ctx.moveTo(chartArea.left + 0.5, chartArea.top + space);
        ctx.lineTo(
          chartArea.right - chartArea.left + 80,
          chartArea.top + space
        );
        ctx.strokeStyle = "#F4F6F9";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(chartArea.left + 0.5, chartArea.top + 2 * space);
        ctx.lineTo(
          chartArea.right - chartArea.left + 80,
          chartArea.top + 2 * space
        );
        ctx.strokeStyle = "#F4F6F9";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(chartArea.left + 0.5, chartArea.top + 3 * space);
        ctx.lineTo(
          chartArea.right - chartArea.left + 80,
          chartArea.top + 3 * space
        );
        ctx.strokeStyle = "#F4F6F9";
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(
          chartArea.left + 0.5,
          chartArea.top - 0.5,
          chartArea.right - chartArea.left + 22,
          chartArea.bottom - chartArea.top + 1
        );
        ctx.strokeStyle = "#DFE4EC";
        ctx.stroke();

        ctx.fillStyle = "#3A486C";
        ctx.font = "8px Manrope";

        ctx.fillText(
          self.chartData.range.max,
          self.paddingTickNumber(chartArea.left, self.chartData.range.max),
          chartArea.top + 8
        ); // 8 ngay sat axis - padding 3

        let average = (self.chartData.range.max + self.chartData.range.min) / 2;
        average = Math.round(average);
        ctx.fillText(
          average,
          self.paddingTickNumber(chartArea.left, average),
          chartArea.top + 2 * space + 4
        ); // 8 ngay sat axis - padding 3
        ctx.fillText(
          self.chartData.range.min,
          self.paddingTickNumber(chartArea.left, self.chartData.range.min),
          chartArea.top + 4 * space - 1
        ); // 8 ngay sat axis - padding 3
      },
      beforeDatasetsDraw: function(chart) {
        let ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;

        //  var ctx = chart.chart.ctx;

        var yRangeBegin = chart.config.data.yRangeBegin;
        var yRangeEnd = chart.config.data.yRangeEnd;

        // var xaxis = chart.scales["x-axis-0"];
        var yaxis = chart.scales["y-axis-0"];

        var yRangeBeginPixel = yaxis.getPixelForValue(yRangeBegin);
        var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);

        ctx.save();

        //  var chartArea = chart.chartArea;

        ctx.beginPath();
        ctx.rect(
          chartArea.left,
          chartArea.top,
          chartArea.right - chartArea.left + 20,
          yRangeEndPixel - chartArea.top
        );
        ctx.fillStyle = "rgba(223,228,236, 0.3)";
        ctx.fill();

        ctx.beginPath();
        ctx.rect(
          chartArea.left,
          yRangeBeginPixel,
          chartArea.right - chartArea.left + 20,
          chartArea.bottom - yRangeBeginPixel
        );
        ctx.fillStyle = "rgba(223,228,236, 0.3)";
        ctx.fill();
        ctx.restore();

        ctx.beginPath();
        ctx.rect(
          chartArea.left,
          chartArea.top - 1,
          chartArea.right - chartArea.left + 20,
          chartArea.bottom - chartArea.top + 1
        );
        ctx.clip();
      },
    };
    this.chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "line",
      plugins: [plugin],

      // The data for our dataset
      data: {
        // labels: ["2017", "2018", "2019", "2020", "2021"],
        labels: this.labels,
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            borderColor: "#018AD2",
            borderWidth: 0.5,
            data: this.dataset,
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            lineTension: 0,
          },
        ],
        yRangeBegin: this.standardMin,
        yRangeEnd: this.standardMax,
      },

      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          display: false,
        },
        tooltips: {
          enabled: true,
        },
        layout: {
          padding: {
            top: 4,
            left: 18,
          },
        },
        elements: {
          point: {
            pointBackgroundColor: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                // return "#D82D4C";
                return self.isWarning ? "#D82D4C" : "#018AD2";
              }
              return "#8A9CB9";
            },
            hoverBorderWidth: 2,
            radius: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                return 6;
              }
              return 3.5;
            },
            hoverRadius: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                return 6;
              }
              return 3.5;
            },
          },
        },
        scales: {
          xAxes: [
            {
              // display: false,
              ticks: {
                fontColor: "#3A486C",
                fontSize: 8,
                padding: 6,
              },
              gridLines: {
                // display: false,
                drawBorder: false,
                zeroLineColor: "transparent",
                color: "#DFE4EC",
                drawTicks: false,
                z: -1,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                display: false,
                padding: 3,
                callback: function(value) {
                  let { max, min } = self.chartData.range;
                  let average = (max + min) / 2;
                  if (value == max || value == min || value == average)
                    return value;
                  return "";
                },
                fontColor: "#3A486C",
                fontSize: 8,
                stepSize:
                  (this.chartData.range.max - this.chartData.range.min) / 4,
                min: this.chartData.range.min,
                max: this.chartData.range.max,
              },
              gridLines: {
                display: false,
                drawBorder: false,
                z: -2,
                drawTicks: false,
              },
            },
            {
              position: "right",
              ticks: {
                // padding: 120,
                display: false,
                // padding: 3,
                callback: function(value) {
                  let { max, min } = self.chartData.range;
                  let average = (max + min) / 2;
                  if (value == max || value == min || value == average)
                    return value;
                  return "";
                },
                fontColor: "#3A486C",
                fontSize: 8,
                stepSize:
                  (this.chartData.range.max - this.chartData.range.min) / 4,
                min: this.chartData.range.min,
                max: this.chartData.range.max,
              },
              gridLines: {
                display: false,
                drawBorder: false,
                drawTicks: true,
                color: "#F4F6F9",
                z: -2,
                // maxTicksLimit: 2,
                tickMarkLength: 20,
                zeroLineColor: "#DFE4EC",
              },
            },
          ],
        },
      },
    });
  },
  methods: {
    paddingTickNumber(chartAreaLeft, value) {
      let length = value.toString().length;
      switch (length) {
        case 1:
          return chartAreaLeft - 7;
        case 2:
          return chartAreaLeft - 11;
        case 3:
          return chartAreaLeft - 15;
        default:
          break;
      }
    },
    initChart() {
      this.datasets = [
        {
          label: "My First dataset",
          fill: false,
          borderColor: "#018AD2",
          borderWidth: 0.5,
          data: JSON.parse(JSON.stringify(this.dataset)),
          pointBorderColor: "red",
          pointBorderWidth: 2,
          lineTension: 0,
        },
      ];

      let maxLine = Math.max(...this.dataset);
      let minLine = Math.min(...this.dataset);
      let height = maxLine - minLine;

      let max = maxLine + height / 3;
      let min = minLine - height / 3;

      this.chartData.range.min = Math.round(min);
      this.chartData.range.max = Math.round(max);
    },
  },
  watch: {
    dataset: function(changedData, oldData) {
      console.log("datasets", this.datasets, oldData);
      this.datasets = [
        {
          label: "My First dataset",
          fill: false,
          borderColor: "#018AD2",
          borderWidth: 0.5,
          data: JSON.parse(JSON.stringify(changedData)),
          pointBorderColor: "red",
          pointBorderWidth: 2,
          lineTension: 0,
        },
      ];
      this.chart.data.datasets = JSON.parse(JSON.stringify(this.datasets));
      this.chart.update();
      console.log("oldd", this.chart.data.datasets);
    },
  },
};
