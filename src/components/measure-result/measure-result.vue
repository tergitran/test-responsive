<template>
  <div class="measure-result-wrapper">
    <div class="score">
      {{ result.value }} <span>{{ result.unit }}</span>
    </div>
    <div v-if="result.isWarning" class="advice-warning">
      <img src="@/assets/warning-white.svg" />改善アドバイス
    </div>
    <div v-else class="advice-normal">改善アドバイス</div>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.scss" lang="scss" scoped></style>
