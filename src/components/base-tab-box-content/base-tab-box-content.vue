<template>
  <div class="base-tab-box-content-wrapper">
    <b-tabs
      pills
      :class="{ 'tab-type-1': type == 1, 'tab-type-2': type === 2 }"
    >
      <b-tab v-for="tab in tabList" :key="tab.name">
        <template #title>
          {{ tab.label }}
          <img v-if="type == 2 && tab.isWarning" src="@/assets/warning.svg" />
        </template>
        <slot :name="tab.name"></slot>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script src="./script.js"></script>

<style src="./style.scss" lang="scss"></style>
