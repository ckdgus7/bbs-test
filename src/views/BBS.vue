<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle>
            <template slot="board_title"
              >[ {{ GET_BOARD_LIST.board_title }} ]
            </template>
          </BoardTitle>
          <div
            id="bo_list"
            style="width:100%"
            @changeRouteLink="changeRouteLink"
          >
            <BoardTop :boardCount="GET_BOARD_LIST.board_count" />
            <SearchTop
              :input-event="onInputEnterEvent"
              :button-event="onButtonClickEvent"
            />
            <BoardList
              :boardList="GET_BOARD_LIST.list"
              @changeRouteLink="changeRouteLink"
            />
            <BoardBttom />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    components: {
      BoardTitle: () => import('../components/board/title.vue'),
      BoardTop: () => import('../components/board/top.vue'),
      SearchTop: () => import('../components/board/search.vue'),
      BoardList: () => import('../components/board/list.vue'),
      BoardBttom: () => import('../components/board/bottom.vue'),
    },
    data() {
      return {
        keyword: '',
        timeout: null,
      }
    },
    computed: {
      ...mapGetters(['GET_BOARD_LIST']),
    },
    watch: {
      keyword: {
        immediate: true,
        handler(kword) {
          if (kword) {
            this.FETCH_BOARD({
              bid: 1,
              kword: this.keyword,
            })
          } else {
            this.FETCH_BOARD(1)
            return
          }
        },
      },
    },
    methods: {
      ...mapActions(['FETCH_BOARD']),
      onInputEnterEvent(e) {
        this.keyword = e.target.value
      },
      onButtonClickEvent(inputValue) {
        const val = inputValue || ''
        this.keyword = val
      },
      changeRouteLink(viewid) {
        this.$router.push(`/board/bbs/view/${viewid}`)
      },
    },
  }
</script>
