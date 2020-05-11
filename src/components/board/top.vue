<template functional>
  <div id="bo_btn_top">
    <div id="bo_list_total">
      <span>Total <i style="color:red;">{{ props.boardCount }}</i>건</span>
    </div>
    <ul class="btn_bo_user">
      <li>
        <router-link class="btn_b01 btn" :to="`/board/bbs/write`">글쓰기</router-link>
      </li>        	        
    </ul>
  </div>
</template>
