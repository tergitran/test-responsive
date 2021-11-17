<template>
  <div id="app">
    <!-- <div class="circle circle-A" id="tooltip-target-1">
      A
    </div> -->
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

    <!-- <b-modal
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
    </b-modal> -->

    <!-- <button class="button" @click="myFunction">Toggle modal</button> -->
    <!-- <div id="modal">
      <div class="content"></div>
    </div> -->

    <!-- <div class="logo"></div>
    <img src="./assets/emp-logo2.svg" />
    <img src="./assets/design.svg" />
    <div style="transform: translate3d(0, 0, 0); margin-botton: 10px">
      <img
        src="./assets/dmp-logo-new.svg"
        style="margin-top: 50px; transform: scale(1);"
        width="32"
      />
    </div>
    <img src="./assets/logo-not-shadow.svg" width="32" />

    <svg height="0" width="0" style="position:absolute;margin-left: -100%;">
      <path
        id="heart-icon"
        d="M16,28.261c0,0-14-7.926-14-17.046c0-9.356,13.159-10.399,14-0.454c1.011-9.938,14-8.903,14,0.454
	C30,20.335,16,28.261,16,28.261z"
      />

      <filter id="shadow">
        <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2" />
      </filter>

      <filter id="shadow2">
        <feDropShadow dx="0" dy="0" stdDeviation="0.2" flood-color="cyan" />
      </filter>

      <filter id="shadow3">
        <feDropShadow
          dx="-0.8"
          dy="-0.8"
          stdDeviation="0"
          flood-color="pink"
          flood-opacity="0.5"
        />
      </filter>
    </svg>

    <div>
      <svg class="icon" style="fill:pink;" viewBox="0 0 32 32">
        <g filter="url(#shadow)">
          <use xlink:href="#heart-icon"></use>
        </g>
      </svg>

      <svg class="icon" style="fill:#FE4365;" viewBox="0 0 32 32">
        <g filter="url(#shadow2)">
          <use xlink:href="#heart-icon"></use>
        </g>
      </svg>

      <svg class="icon" style="fill:pink;" viewBox="0 0 32 32">
        <g filter="url(#shadow3)">
          <use xlink:href="#heart-icon"></use>
        </g>
      </svg>

      <svg width="50" height="50">
        <defs>
          <filter id="floodFilter" filterUnits="userSpaceOnUse">
            <feFlood
              x="0"
              y="0"
              width="50"
              height="50"
              flood-color="green"
              flood-opacity="0.5"
              result="BackgroundImageFix"
            ></feFlood>
          </filter>
        </defs>

        <use style="filter: url(#floodFilter);"></use>
      </svg>
      <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="filter">
            <feColorMatrix
              type="matrix"
              values="-0.191  1.390 -0.393  0.000  0.115 
               0.225  0.330  0.253  0.000  0.115 
               0.721  0.628 -0.542  0.000  0.115 
               0.000  0.000  0.000  1.000  0.000"
            ></feColorMatrix>
          </filter>
        </defs>
        <rect
          fill="gray"
          x="1"
          y="1"
          width="50"
          height="50"
          filter="url(#filter)"
        />
      </svg>
      <svg width="50" height="50">
        <defs>
          <filter id="aquamarin">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="0.0941176470588235 0 0 0 0, 0 0.7686274509803922 0 0 0, 0 0 0.8784313725490196 0 0, 0 0 0 1 0"
            />
          </filter>
        </defs>
        <rect
          fill="gray"
          x="1"
          y="1"
          width="50"
          height="50"
          filter="url(#aquamarin)"
        />
      </svg>
    </div> -->
    <!-- {{ isSafari }} -->
    <img v-if="isSafari" src="./assets/dmp-logo-new-no-shadow.svg" />
    <img v-else src="./assets/dmp-logo-new.svg" />
    <img v-if="isSafari" src="./assets/origin-no-shadow.svg" />
    <img v-else src="./assets/origin.svg" />
    <span>-</span>
    <img src="./assets/origin-no-shadow.svg" />
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
  computed: {
    isSafari() {
      return (
        navigator.vendor &&
        navigator.vendor.indexOf("Apple") > -1 &&
        navigator.userAgent &&
        navigator.userAgent.indexOf("CriOS") == -1 &&
        navigator.userAgent.indexOf("FxiOS") == -1
      );
    },
  },
  methods: {
    myFunction() {
      var app = document.getElementById("app");
      var modal = document.createElement("div");
      var content = document.createElement("div");
      // var content = document.createElement("div");
      content.className = "content";
      modal.id = "modal";
      modal.appendChild(content);
      app.appendChild(modal);

      // var element = document.getElementById("modal");
    },
  },
  created() {
    // let a = navigator.userAgent.indexOf("Safari") != -1;
    // let b = navigator.userAgent.indexOf("Chrome") == -1;
    // let isSafari =
    //   navigator.userAgent.indexOf("Safari") != -1 &&
    //   navigator.userAgent.indexOf("Chrome") == -1;
    // var isSafari =
    //   navigator.vendor &&
    //   navigator.vendor.indexOf("Apple") > -1 &&
    //   navigator.userAgent &&
    //   navigator.userAgent.indexOf("CriOS") == -1 &&
    //   navigator.userAgent.indexOf("FxiOS") == -1;
    // alert("Response:    " + navigator.userAgent);
    // alert("In Safari:    " + isSafari );
    alert("vendor  " + navigator.vendor);
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
// body {
//   margin: 0;

//   .modal-dialog {
//     margin: 24px 16px;
//   }
//   .modal-dialog-scrollable {
//     max-height: calc(100% - 48px);
//   }
// }

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;

//   background-color: #eff4f6;
//   height: calc(100vh - 20px);
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .container {
//     position: absolute;
//     left: 1;
//     top: 20px;
//     // background: #2c3e50;

//     width: max-content;
//     padding: 8px;

//     .child {
//       // background: yellow;
//       min-width: fit-content;
//       margin-bottom: 20px;
//     }
//   }

//   // .logo {
//   //   width: 24px;
//   //   height: 18px;
//   // }
//   .home {
//     width: 44px;
//     height: 36px;
//   }
//   .navi {
//     width: 36px;
//     height: 30px;
//   }
//   .fixed {
//     -webkit-transform: translate3d(0, 0, 0);
//   }
//   object {
//     svg {
//       -webkit-transform: translate3d(0, 0, 0);
//     }
//   }
//   .circle {
//     width: 80px;
//     height: 80px;
//     border-radius: 50%;
//     display: flex;
//     justify-content: center;
//     font-size: 28px;
//     align-items: center;
//     background: yellowgreen;
//   }
// }
* {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
}
.button {
  margin-top: 50px;
  font-size: large;
}
#modal {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  // display: none;
}
.show {
  display: block !important;
  background-color: brown;
}
.content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 280px;
  /* width: 100vh; */
  background-color: blueviolet;
  animation: showModal 4s;
}

.logo {
  // background-image: url("@./assets/emp-logos.svg");
  background-image: url("~@/assets/emp-logo2.svg");
  width: 44px;
  height: 36px;
  display: inline-block;
}

.icon {
  width: 40px;
  height: 40px;
}

@keyframes showModal {
  from {
    background-color: aqua;
    transform: translateY(100%);
  }
  to {
    background-color: blueviolet;
    transform: translateY(0);
  }
}
</style>
