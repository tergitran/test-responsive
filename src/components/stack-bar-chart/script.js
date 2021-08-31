import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default {
  name: "StackBarChart",
  props: {
    labels: {
      type: Array,
      default: [],
    },
    dataList: {
      type: Array,
      default: [[], []],
    },
  },
  data() {
    return {
      isStackChart: true,
      chart: null,
      chartId: Math.random()
        .toString(36)
        .substring(7),
      isMoblie: true,
    };
  },
  mounted() {
    let ctx = document.getElementById(this.chartId).getContext("2d");

    // let draw = Chart.elements.Point.prototype.draw;
    // Chart.elements.Point.prototype.draw = function() {
    //   console.log("this", this);
    //   let ctx = this._chart.ctx;

    //   let _stroke = ctx.stroke;
    //   ctx.stroke = function() {
    //     ctx.save();
    //     ctx.shadowColor = "rgba(154, 185, 205, 0.7)";
    //     ctx.shadowBlur = 10;
    //     ctx.shadowOffsetX = 0;
    //     ctx.shadowOffsetY = 4;
    //     _stroke.apply(this, arguments);
    //     console.log("ctx", ctx);
    //     ctx.restore();
    //   };
    //   draw.apply(this, arguments);
    // };
    let self = this;
    if (this.isStackChart) {
      Chart.elements.Point.prototype.draw = function() {
        // console.log("haha", chartArea);
        var vm = this._view;
        var ctx = this._chart.ctx;
        // console.log("this", this);
        // console.log("ctx", ctx);

        // var pointStyle = vm.pointStyle;
        // var rotation = vm.rotation;
        // var radius = vm.radius;
        var x = vm.x;
        var y = vm.y;
        ctx.save();

        ctx.beginPath();
        ctx.strokeStyle = "white";
        ctx.shadowColor = "rgba(154, 185, 205, 0.2)";
        ctx.shadowBlur = 4;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 2;
        ctx.lineWidth = 4;

        if (this._index == self.dataList[0].length - 1) {
          ctx.fillStyle = "#5425A2";
          ctx.arc(x, y, 6, 0, 2 * Math.PI);
        } else {
          ctx.fillStyle = "#8A9CB9";
          ctx.arc(x, y, 3.5, 0, 2 * Math.PI);
        }
        ctx.stroke();
        ctx.fill();

        ctx.restore();

        // ctx.fillText("A", x, y);
      };
    }

    let plugin = {
      beforeDatasetsDraw: function(chart) {
        let ctx = chart.chart.ctx;
        var chartArea = chart.chartArea;

        //  var ctx = chart.chart.ctx;

        var yRangeEnd = chart.config.data.yRangeEnd;

        // var xaxis = chart.scales["x-axis-0"];
        var yaxis = chart.scales["y-axis-0"];

        var yRangeEndPixel = yaxis.getPixelForValue(yRangeEnd);

        ctx.save();

        //  var chartArea = chart.chartArea;

        ctx.beginPath();
        ctx.rect(
          chartArea.left,
          chartArea.top,
          chartArea.right - chartArea.left,
          yRangeEndPixel - chartArea.top
        );
        ctx.fillStyle = "rgba(223,228,236, 0.3)";
        ctx.fill();
      },
    };
    this.chart = new Chart(ctx, {
      type: "bar",
      plugins: [plugin, ChartDataLabels],

      data: {
        labels: this.labels,
        datasets: [
          {
            label: "残業時間",
            backgroundColor: "#5425A2",
            data: this.dataList[0],
          },
          {
            label: "法定休日労働時間",
            backgroundColor: "rgba(216, 45, 76, 0.5)",
            data: this.dataList[1],
          },
          {
            label: "法定休日",
            backgroundColor: "transparent",
            data: this.totalValue,
            type: "line",

            borderColor: "#8A9CB9",
            borderWidth: 0.5,
            borderDash: [2, 2],
            pointBorderColor: "#fff",
            pointBorderWidth: 2,
            lineTension: 0,
            pointBackgroundColor: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                // return "#D82D4C";
                return "#5425A2";
              }
              return "#8A9CB9";
            },
            order: -1,
          },
        ],
        yRangeEnd: 45,
      },
      options: {
        animation: {
          onComplete: function(animation) {
            if (!self.rectangleSet) {
              var sourceCanvas = self.chart.canvas;
              console.log("animation", animation);
              console.log("source canvas", sourceCanvas);
              console.log("selfe chart", self.chart);
              var copyWidth = self.chart.scales["y-axis-0"].width;
              var copyHeight = self.chart.scales["y-axis-0"].height + 10;
              var targetCtx = document
                .getElementById("myChartAxis")
                .getContext("2d");
              console.log("targetCtx", targetCtx);
              targetCtx.canvas.width = copyWidth;
              targetCtx.canvas.height = copyHeight;
              targetCtx.drawImage(
                sourceCanvas,
                0,
                0,
                copyWidth,
                copyHeight,
                0,
                0,
                copyWidth,
                copyHeight
              );

              var sourceCtx = sourceCanvas.getContext("2d");

              // Normalize coordinate system to use css pixels.

              sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
              self.rectangleSet = true;
            }
          },
          onProgress: function() {
            if (self.rectangleSet === true) {
              console.log("self ongfprojgea", self);
              var copyWidth = self.scales["y-axis-0"].width;
              var copyHeight = self.scales["y-axis-0"].height + 10;
              var sourceCtx = self.chart.canvas.getContext("2d");
              sourceCtx.clearRect(0, 0, copyWidth, copyHeight);
            }
          },
        },
        plugins: {
          // Change options for ALL labels of THIS CHART
          datalabels: {
            formatter: (value, ctx) => {
              let datasets = ctx.chart.data.datasets; // Tried `.filter(ds => !ds._meta.hidden);` without success
              // console.log("datasets", datasets, ctx);
              if (ctx.datasetIndex === datasets.length - 2) {
                let sum = 0;
                datasets.map((dataset, index) => {
                  if (index != 2) sum += dataset.data[ctx.dataIndex];
                });
                return sum;
              } else {
                return "";
              }
            },
            anchor: "end",
            align: "end",
            color: "#52688B",
            font: {
              size: 10,
              weight: 500,
            },
          },
        },
        tooltips: {
          displayColors: true,
          callbacks: {
            mode: "x",
          },
        },
        elements: {
          point: {
            hoverBorderWidth: 2,
            radius: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                return 6;
              }
              return 4;
            },
            hoverRadius: function(context) {
              if (context.dataIndex == context.dataset.data.length - 1) {
                return 6;
              }
              return 4;
            },
          },
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "#52688B",
                fontSize: 8,
              },
              maxBarThickness: 32,
            },
          ],
          yAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
                max: 90,
                callback: function(value) {
                  if (value == 0 || value == 80) return value + "h";
                  return "";
                },
                fontColor: "#52688B",
                fontSize: 8,
                padding: 4,
                fontStyle: "bold",
              },
              gridLines: {
                // display: false,
                drawBorder: false,
                drawTicks: false,
                color: "#F4F6F9",
                zeroLineColor: "#DFE4EC",
              },
              type: "linear",
            },
          ],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
      },
    });
  },
  computed: {
    totalValue() {
      return this.dataList[0].map(
        (value, index) => value + this.dataList[1][index]
      );
    },
  },
};
