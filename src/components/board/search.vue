<template>
  <div style="float: right;">검색 : 
    <input type="text" @keyup="searchList" ref="searchtext" placeholder="검색어입력" style="height: 30px; width: 200px;margin-bottom: 10px;">
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import lodash from 'lodash';
export default {
  data () {
    return {
      kword: ''
    }
  },
  watch: {
    kword: lodash.debounce( function() {
      if(this.$route.params.bid) {
        this.FETCH_BOARD({ 
          bid: 1, 
          kword: this.kword
        });
      }
    }, 200)
  },
  methods: {
		...mapActions([
      'FETCH_BOARD'
    ]),
    searchList () {
      this.kword = this.$refs.searchtext.value;
    }
  }
}
</script>
