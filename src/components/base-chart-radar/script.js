import Chart from "chart.js";

export default {
  name: "BaseChartRadar",
  props: {
    backgroundColor: {
      type: String,
      default() {
        return "rgba(65, 80, 117, 0.3)";
      },
    },
    borderColor: {
      type: String,
      default() {
        return "rgb(65, 80, 117)";
      },
    },
    labels: {
      type: Array,
      default() {
        return [];
      },
    },
    size: {
      type: String,
      default() {
        return "large";
      },
    },
    type: {
      type: Number,
      default() {
        return 1;
      },
    },
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      chartId: `base-chart-${new Date().getSeconds()}${new Date().getMilliseconds()}${Math.floor(
        Math.random() * 10000
      )}`,
      dataset: {},
      chart: null,
      sizeConfig: null,
      sizeContainerConfig: null,
      scoreStyle: { display: "none" },
      paddingSize: null,
      radius: 0,
    };
  },
  created() {
    this.setSizeChart();
    this.initDataset();
  },
  beforeDestroy() {},
  mounted() {
    var ctx = document.getElementById(this.chartId).getContext("2d");
    let self = this;
    let plugin = {
      beforeDraw: function() {
        let canvas = self.chart.chart;
        let ctx = canvas.ctx;
        ctx.font = Chart.helpers.fontString(
          10,
          Chart.defaults.global.defaultFontStyle,
          Chart.defaults.global.defaultFontFamily
        );
        ctx.save(); // Why

        // Determine center point and r
        let xCenter = canvas.width / 2;
        let yCenter = canvas.height / 2;
        if (self.size === "large") {
          yCenter = yCenter + 16;
        }
        let r = self.radius;

        //Draw circle scale
        // ctx.beginPath();
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#415075";

        // ctx.arc(xCenter, yCenter, r, 0, 2 * Math.PI);
        // ctx.stroke();

        if (self.type === 1) {
          let currentAngle = (7 * Math.PI) / 180;
          let generalAccumulation = r * currentAngle;
          let arrayNumber = ["60.0", "50.0", "40.0", "30.0"];
          let indexTemp = 0;
          for (let index = 8; index > 1; index--) {
            let currentRadius = (r / 8) * index;
            if (index % 2 == 0) {
              let currentAngle = generalAccumulation / currentRadius;
              // Draw number inside
              let xNumPoint = xCenter;
              let yNumPoint = yCenter + currentRadius;
              switch (self.size) {
                case "large":
                  ctx.font = "10px Noto Sans";
                  ctx.lineWidth = 0.9;
                  xNumPoint -= 9;
                  yNumPoint += 2;
                  break;
                case "medium":
                  ctx.font = "5px Noto Sans";
                  ctx.lineWidth = 0.6;
                  xNumPoint -= 5;
                  yNumPoint += 1;
                  break;
                case "small":
                  ctx.font = "4px Noto Sans";
                  ctx.lineWidth = 0.5;
                  xNumPoint -= 4;
                  yNumPoint += 2;
                  break;
                default:
                  break;
              }
              ctx.fillText(arrayNumber[indexTemp], xNumPoint, yNumPoint);
              indexTemp += 1;

              ctx.beginPath();
              ctx.arc(
                xCenter,
                yCenter,
                currentRadius,
                0.5 * Math.PI + currentAngle / 2,
                0.5 * Math.PI - currentAngle / 2
              );
              ctx.stroke();
            } else {
              switch (self.size) {
                case "large":
                  ctx.lineWidth = 0.4;
                  break;
                case "medium":
                  ctx.lineWidth = 0.25;
                  break;
                case "small":
                  ctx.lineWidth = 0.2;
                  break;
                default:
                  break;
              }
              ctx.beginPath();
              ctx.arc(xCenter, yCenter, currentRadius, 0, 2 * Math.PI);
              ctx.stroke();
            }
          }
        } else {
          let currentAngle = (23 * Math.PI) / 180;
          // let generalAccumulation = r * currentAngle;
          // let arrayNumber = ["60.0", "50.0", "40.0", "30.0"];
          // let indexTemp = 0;
          for (let index = 8; index > 1; index--) {
            let currentRadius = (r / 8) * index;
            if (index % 2 == 0) {
              // Draw number inside
              switch (self.size) {
                case "large":
                  ctx.font = "10px Noto Sans";
                  ctx.lineWidth = 0.9;

                  break;
                case "medium":
                  ctx.font = "5px Noto Sans";
                  ctx.lineWidth = 0.6;

                  break;
                case "small":
                  ctx.font = "4px Noto Sans";
                  ctx.lineWidth = 0.5;

                  break;
                default:
                  break;
              }

              if (index == 6) {
                ctx.beginPath();
                ctx.arc(xCenter, yCenter, currentRadius, 0, 2 * Math.PI);
                ctx.fillStyle = "rgba(255,255,255,0.4)";
                ctx.fill();
              }
              ctx.beginPath();
              ctx.arc(xCenter, yCenter, currentRadius, 0, 2 * Math.PI);
              ctx.stroke();
            } else {
              switch (self.size) {
                case "large":
                  ctx.lineWidth = 0.4;
                  break;
                case "medium":
                  ctx.lineWidth = 0.25;
                  break;
                case "small":
                  ctx.lineWidth = 0.2;
                  break;
                default:
                  break;
              }

              if (index == 5) {
                ctx.beginPath();
                // ctx.fillStyle = "rgba(255,255,255,0.4)";
                ctx.arc(
                  xCenter,
                  yCenter,
                  currentRadius,
                  0.5 * Math.PI + currentAngle / 2,
                  0.5 * Math.PI - currentAngle / 2
                );
                ctx.stroke();
                // ctx.fill();
              } else {
                ctx.beginPath();
                ctx.arc(xCenter, yCenter, currentRadius, 0, 2 * Math.PI);
                ctx.stroke();
              }
            }
          }
        }

        // Draw angle lines and set radius of center point
        let radiusOfCenterPoint = 0;
        let radiusOfSurroundingPoint = 0;
        switch (self.size) {
          case "large":
            ctx.lineWidth = 0.4;
            radiusOfCenterPoint = 3.5;
            radiusOfSurroundingPoint = r + 10;
            break;
          case "medium":
            ctx.lineWidth = 0.25;
            radiusOfCenterPoint = 2;
            radiusOfSurroundingPoint = r + 7;
            break;
          case "small":
            ctx.lineWidth = 0.2;
            radiusOfCenterPoint = 2.4;
            radiusOfSurroundingPoint = r + 5.5;
            break;
          default:
            break;
        }
        let x = r * Math.cos(Math.PI / 3);
        let y = r * Math.sin(Math.PI / 3);
        let xSmallCircle = radiusOfCenterPoint * Math.cos(Math.PI / 3);
        let ySmallCircle = radiusOfCenterPoint * Math.sin(Math.PI / 3);

        ctx.beginPath();
        ctx.moveTo(xCenter + radiusOfCenterPoint, yCenter);
        ctx.lineTo(xCenter + r, yCenter);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xCenter - radiusOfCenterPoint, yCenter);
        ctx.lineTo(xCenter - r, yCenter);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xCenter + xSmallCircle, yCenter + ySmallCircle);
        ctx.lineTo(xCenter + x, yCenter + y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xCenter - xSmallCircle, yCenter + ySmallCircle);
        ctx.lineTo(xCenter - x, yCenter + y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xCenter - xSmallCircle, yCenter - ySmallCircle);
        ctx.lineTo(xCenter - x, yCenter - y);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xCenter + xSmallCircle, yCenter - ySmallCircle);
        ctx.lineTo(xCenter + x, yCenter - y);
        ctx.stroke();

        // Draw center circle point of chart
        ctx.beginPath();
        ctx.arc(xCenter, yCenter, radiusOfCenterPoint, 0, 2 * Math.PI);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#415075";
        ctx.arc(xCenter, yCenter, radiusOfCenterPoint / 2, 0, 2 * Math.PI);
        ctx.fill();

        // Draw points surround chart

        let xSurroundingPoint =
          radiusOfSurroundingPoint * Math.cos(Math.PI / 3);
        let ySurroundingPoint =
          radiusOfSurroundingPoint * Math.sin(Math.PI / 3);
        ctx.beginPath();
        ctx.arc(
          xCenter + radiusOfSurroundingPoint,
          yCenter,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          xCenter - radiusOfSurroundingPoint,
          yCenter,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          xCenter + xSurroundingPoint,
          yCenter + ySurroundingPoint,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          xCenter + xSurroundingPoint,
          yCenter - ySurroundingPoint,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          xCenter - xSurroundingPoint,
          yCenter + ySurroundingPoint,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          xCenter - xSurroundingPoint,
          yCenter - ySurroundingPoint,
          radiusOfCenterPoint / 2 / 0.7,
          0,
          2 * Math.PI
        );
        ctx.fill();

        // Draw text in chart

        let arrowHeight = (r / 8) * 0.6;
        let arrowWidth = 0;
        if (self.type == 2) {
          switch (self.size) {
            case "large":
              arrowWidth = 2.1;
              ctx.font = "8px Noto Sans";
              ctx.fillText("適正体重", xCenter - 16, yCenter + (r / 8) * 5.1);
              break;
            case "medium":
              arrowWidth = 1.2;
              ctx.font = "6px Noto Sans";
              ctx.fillText("適正体重", xCenter - 12, yCenter + (r / 8) * 5.1);
              break;
            case "small":
              arrowWidth = 1.45;
              ctx.font = "4px Noto Sans";
              ctx.fillText("適正体重", xCenter - 8, yCenter + (r / 8) * 5.1);
              break;
            default:
              break;
          }
          ctx.beginPath();
          ctx.moveTo(xCenter, yCenter + (r / 8) * 5.3);
          ctx.lineTo(xCenter, yCenter + (r / 8) * 5.3 + arrowHeight);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(xCenter, yCenter + (r / 8) * 4.7);
          ctx.lineTo(xCenter, yCenter + (r / 8) * 4.7 - arrowHeight);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(
            xCenter - arrowWidth / 2,
            yCenter + (r / 8) * 4.7 - arrowHeight
          );
          ctx.lineTo(
            xCenter,
            yCenter + (r / 8) * 4.7 - arrowHeight - 0.65 * arrowWidth
          );
          ctx.lineTo(
            xCenter + arrowWidth / 2,
            yCenter + (r / 8) * 4.7 - arrowHeight
          );
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(
            xCenter - arrowWidth / 2,
            yCenter + (r / 8) * 5.3 + arrowHeight
          );
          ctx.lineTo(
            xCenter,
            yCenter + (r / 8) * 5.3 + arrowHeight + 0.65 * arrowWidth
          );
          ctx.lineTo(
            xCenter + arrowWidth / 2,
            yCenter + (r / 8) * 5.3 + arrowHeight
          );
          ctx.stroke();

          // 2.1 - 1.42
          // 1.2 - 0.75
          // 1.45 - 1
        }
      },
    };

    this.chart = new Chart(ctx, {
      plugins: [plugin],
      type: "radar",
      data: {
        labels: [...this.labels],
        datasets: [this.dataset],
      },
      options: {
        startAngle: 30,
        elements: {
          line: {
            borderWidth: 1,
          },
        },
        maintainAspectRatio: false,
        responsive: true,
        layout: {
          padding: this.paddingSize ? this.paddingSize : 8,
        },
        legend: {
          display: false,
        },
        tooltips: {
          yAlign: "bottom",
          xAlign: "center",
          xPadding: 8,
          yPadding: 7,
          caretPadding: 4,
          caretSize: 6,
          // position: 'custom',

          bodyAlign: "center",
          backgroundColor: "#415075",
          borderColor: "RGBA(49, 92, 201, 0.3)",
          borderWidth: 1,
          cornerRadius: 4,
          displayColors: false,
          titleFontSize: 9,
          callbacks: {
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            },
            label: function(tooltipItem) {
              return tooltipItem.value;
            },
          },
        },
        scale: {
          // display: false,
          gridLines: {
            display: false,
            color: [
              "#415075",
              "#415075",
              "#415075",
              "#415075",
              "#415075",
              "#415075",
              "#415075",
              "#415075",
              "#415075",
            ],
            circular: true,
          },

          pointLabels: {
            fontSize: 0,
          },

          angleLines: {
            display: false,
            color: "#415075",
            lineWidth: 0.5,
          },
          ticks: {
            display: false,
            beginAtZero: true,
            max: 60,
            min: 20,
            stepSize: 5,
          },
        },
      },
    });

    // for (const key in this.chart.config.data.datasets[0]._meta) {
    //   let arr = this.chart.config.data.datasets[0]._meta[key];
    //   console.log('positions', arr.data);
    // }
  },
  methods: {
    setSizeChart() {
      let sizeConfig = {};
      let sizeContainerConfig = {};
      switch (this.size) {
        case "large":
          sizeConfig.width = "456px";
          sizeConfig.height = "400px";
          sizeContainerConfig.width = "520px";
          sizeContainerConfig.height = "420px";
          sizeContainerConfig.paddingRight = "4px";
          this.paddingSize = {
            left: 47,
            right: 47,
            top: 40,
            bottom: 7,
          };
          this.radius = 177;
          break;
        case "small":
          sizeConfig.width = "212px";
          sizeConfig.height = "212px";
          // sizeConfig.marginRight = "20px";
          sizeContainerConfig.width = "250px";
          sizeContainerConfig.height = "220px";
          sizeContainerConfig.paddingRight = "10px";
          this.radius = 94;
          break;
        case "medium":
          sizeConfig.width = "264px";
          sizeConfig.height = "264px";
          sizeContainerConfig.width = "340px";
          sizeContainerConfig.height = "280px";

          this.scoreStyle.display = "block";
          this.scoreStyle.fontSize = "14px";
          this.scoreStyle.fontWeight = "500";

          this.radius = 120;
          break;
        default:
          sizeConfig.width = "56px";
          sizeConfig.height = "400px";
          sizeContainerConfig.width = "540px";
          sizeContainerConfig.height = "420px";
          this.radius = 177;
          break;
      }
      // console.log(sizeConfig);
      this.sizeConfig = sizeConfig;
      this.sizeContainerConfig = sizeContainerConfig;
    },
    initDataset() {
      let pointRadius = 0;
      switch (this.size) {
        case "large":
          pointRadius = 4;
          break;
        case "medium":
          pointRadius = 2.7;

          break;
        case "small":
          pointRadius = 2;

          break;
        default:
          break;
      }
      let dataSetElement = {
        data: this.dataList,
        backgroundColor: this.backgroundColor,
        borderColor: this.borderColor,
        pointBackgroundColor: this.borderColor,
        pointBorderColor: "#fff",
        fill: true,
        pointRadius: pointRadius,
        pointHoverRadius: pointRadius,
      };
      this.dataset = dataSetElement;
    },
  },
};
