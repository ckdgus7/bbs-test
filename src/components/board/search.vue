<template>
  <div style="float: right;">
    검색 :
    <input
      type="text"
      ref="searchtext"
      @keydown.enter="inputEvent"
      placeholder="검색어입력"
      style="height: 30px; width: 200px;margin-bottom: 10px;"
    />
    |
    <button type="button" @click.prevent="onClickSearchButton">검색</button>
    |
    <button type="button" @click.prevent="onClickResetButton">초기화</button>
  </div>
</template>
<script>
export default {
  props: {
    inputEvent: {
      type: Function,
      default: () => {},
    },
    buttonEvent: {
      type: Function,
      default: () => {},
    },
    resetSearch: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    onClickSearchButton() {
      this.buttonEvent(this.$refs.searchtext.value)
    },
    onClickResetButton() {
      this.$refs.searchtext.value = ''
      this.resetSearch()
    },
  },
}
</script>
