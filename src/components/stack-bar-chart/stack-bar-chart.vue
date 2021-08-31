<template>
  <div class="chart-wrapper">
    <div class="stack-bar-chart-wrapper">
      <div class="chart-bar-container">
        <canvas :id="chartId"></canvas>
      </div>
    </div>
    <canvas id="myChartAxis" height="0" width="0"></canvas>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.scss" lang="scss" scoped></style>
