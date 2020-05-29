<template functional>
  <div class="tbl_head01 tbl_wrap">
    <table>
      <caption>
        자유게시판 목록
      </caption>
      <thead>
        <tr>
          <th scope="col">번호</th>
          <th scope="col">제목</th>
          <th scope="col">글쓴이</th>
          <th scope="col">조회</th>
          <th scope="col">날짜</th>
        </tr>
      </thead>
      <tr
        v-for="listData in props.boardList"
        :key="listData.wr_id"
        class="list-item"
        style="cursor:pointer;"
        @click="listeners.changeRouteLink(listData.wr_id)"
      >
        <td class="td_num2">{{ listData.wr_id }}</td>
        <td class="td_subject" style="padding-left:0px">
          <div class="bo_tit">
            {{ listData.wr_title }}
          </div>
        </td>
        <td class="td_name sv_use">
          <span class="sv_guest">{{ listData.wr_user }}</span>
        </td>
        <td class="td_num">{{ listData.wr_count }}</td>
        <td class="td_datetime">{{ listData.wr_date }}</td>
      </tr>
    </table>
  </div>
</template>
