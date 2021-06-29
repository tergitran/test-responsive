<template>
  <div class="base-chart-radar-wrapper" :style="sizeContainerConfig">
    <div class="chart-labels">
      <template v-if="type == 1">
        <div class="label-container" :class="`top-left__${size}`">
          周囲からのサポート
          <div :style="scoreStyle">48.2</div>
        </div>
        <div class="label-container" :class="`top-right__${size}`">
          仕事の負担感
          <div :style="scoreStyle">52.1</div>
        </div>
        <div class="label-container" :class="`left__${size}`">
          プライベート
          <div :style="scoreStyle">53.5</div>
        </div>
        <div class="label-container" :class="`right__${size}`">
          <div>組織の</div>
          <div>マネジメント</div>
          <div :style="scoreStyle">49.8</div>
        </div>
        <div class="label-container" :class="`bottom-left__${size}`">
          物理的環境
          <div :style="scoreStyle">44.5</div>
        </div>
        <div class="label-container" :class="`bottom-right__${size}`">
          周囲との人間関係
          <div :style="scoreStyle">54.7</div>
        </div>
      </template>
      <template v-else>
        <div class="label-container" :class="`top-left-t2__${size}`">
          血圧
          <div :style="scoreStyle">48.2</div>
        </div>
        <div class="label-container" :class="`top-right-t2__${size}`">
          適正体重
          <div :style="scoreStyle">52.1</div>
        </div>
        <div class="label-container" :class="`left-t2__${size}`">
          血糖
          <div :style="scoreStyle">53.5</div>
        </div>
        <div class="label-container" :class="`right-t2__${size}`">
          血液検査
          <div :style="scoreStyle">49.8</div>
        </div>
        <div class="label-container" :class="`bottom-right-t2__${size}`">
          脂質
          <div :style="scoreStyle">44.5</div>
        </div>
        <div class="label-container" :class="`bottom-left-t2__${size}`">
          肝機能
          <div :style="scoreStyle">54.7</div>
        </div>
      </template>
    </div>
    <div class="chart-container">
      <canvas :id="chartId" :style="sizeConfig"></canvas>
    </div>
  </div>
</template>
<script src="./script.js"></script>
<style src="./style.scss" lang="scss" scoped></style>
