<template>
  <!-- 콘텐츠 시작 { -->
  <div id="wrapper">
    <div id="container_wr">
      <div id="container">
        <header>
          <h2>
            <span class="bo_v_tit">제목 : {{ GET_BOARD.wr_title }}</span>
          </h2>
        </header>
        <!-- skin : basic -->
        <section id="bo_w">
          <!-- 게시물 작성/수정 시작 { -->
          <form
            name="fupdate"
            id="fupdate"
            @submit.prevent="updateBoardData"
            method="post"
            enctype="multipart/form-data"
            style="width:100%"
          >
            <div class="bo_w_info write_div">
              <label for="wr_name" class="sound_only"
                >이름<strong>필수</strong></label
              >
              <input
                type="text"
                name="wr_name"
                ref="wr_name"
                id="wr_name"
                v-model="wr_name"
                required
                class="frm_input half_input required"
                placeholder="이름"
              />
            </div>

            <div class="bo_w_tit write_div">
              <label for="wr_subject" class="sound_only"
                >제목<strong>필수</strong></label
              >

              <div id="autosave_wrapper" class="write_div">
                <input
                  type="text"
                  name="wr_subject"
                  ref="wr_subject"
                  v-model="wr_subject"
                  id="wr_subject"
                  required
                  class="frm_input full_input required"
                  size="50"
                />
              </div>
            </div>

            <div class="write_div">
              <label for="wr_content" class="sound_only"
                >내용<strong>필수</strong></label
              >
              <div class="wr_content ">
                <span class="sound_only">웹에디터 시작</span>
                <textarea
                  id="wr_content"
                  name="wr_content"
                  ref="wr_content"
                  v-model="wr_content"
                  class=""
                  maxlength="65536"
                  style="width:100%;height:300px"
                ></textarea>
                <span class="sound_only">웹 에디터 끝</span>
              </div>
            </div>
            <div class="btn_confirm write_div">
              <a href="" @click.prevent="updateCancel" class="btn_cancel btn"
                >취소</a
              >
              <button
                type="submit"
                id="btn_submit"
                accesskey="s"
                class="btn_submit btn"
              >
                작성완료
              </button>
            </div>
          </form>
        </section>
        <!-- } 게시물 작성/수정 끝 -->
      </div>
    </div>
  </div>
  <!-- } 콘텐츠 끝 -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      wr_id: '',
      wr_name: '',
      wr_subject: '',
      wr_content: '',
    }
  },
  computed: {
    ...mapGetters(['GET_BOARD']),
  },
  created() {
    this.setBoardData(this.$route)
  },
  mounted() {
    this.$refs.wr_name.focus()
  },
  methods: {
    ...mapActions(['DETAIL_BOARD', 'UPDATE_BOARD']),
    getBoardNum(to) {
      return {
        bid: 1,
        wr_id: to.params.viewid,
      }
    },
    setBoardData(to) {
      this.DETAIL_BOARD({
        bid: this.getBoardNum(to),
        pageType: 'update',
      }).then(({ data }) => {
        this.wr_id = data.wr_id
        this.wr_name = data.wr_user
        this.wr_subject = data.wr_title
        this.wr_content = data.wr_content
      })
    },
    updateBoardData() {
      const bid = 'bbs'
      const { wr_id, wr_name, wr_subject, wr_content } = this
      this.UPDATE_BOARD({ bid, wr_id, wr_name, wr_subject, wr_content }).then(
        () => {
          this.$router.push({
            path: `/board/bbs/view/${wr_id}`,
          })
        },
      )
    },
    updateCancel() {
      const viewid = this.$route.params.viewid
      this.$router.push(`/board/bbs/view/${viewid}`)
    },
  },
}
</script>

<style></style>
