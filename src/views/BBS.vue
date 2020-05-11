<template>
  <div class="board">
    <div id="wrapper">
      <div id="container_wr">
        <div id="container">
          <BoardTitle><template slot="board_title">[ {{ GET_BOARD_LIST.board_title }} ]</template></BoardTitle>
          <div id="bo_list" style="width:100%">
            
            <BoardTop :boardCount="GET_BOARD_LIST.board_count" />
            <SearchTop />
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
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    BoardTitle: () => import('../components/board/title.vue'),
    BoardTop: () => import('../components/board/top.vue'),
    SearchTop: () => import('../components/board/search.vue'),
    BoardList: () => import('../components/board/list.vue'),
    BoardBttom: () => import('../components/board/bottom.vue'),
  },
  created () {
    this.setBoardData(this.$route);
  },
  computed: {
    ...mapGetters([
      'GET_BOARD_LIST'
    ])
  },
  methods: {
		...mapActions([
      'FETCH_BOARD'
    ]),
    changeRouteLink (viewid) {
      this.$router.push(`/board/bbs/view/${viewid}`);
    },
    setBoardData (to, isFirst = false) {
      let loader = null;
      if(isFirst) {
        loader = this.$loading.show({
          container: null,
          canCancel: true
        });
      }
      this.FETCH_BOARD(1)
        .then(() => {
          setTimeout(() => {
            if(loader !== null) loader.hide();
          }, 300);
        });
    }
  }
}
</script>