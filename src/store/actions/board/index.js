import * as api from '../../../api/index.js'
import { textareaEncode, textareaDecode } from '../../../utils/index.js'
export default {
  async FETCH_BOARD({ commit }, { bid, kword }) {
    const response = await api.board.FETCH_BOARD({ bid, kword })
    commit('FETCH_BOARD', response.data)
    return response
  },
  async DETAIL_BOARD({ commit }, payload) {
    const response = await api.board.DETAIL_BOARD(payload.bid)
    response.data.wr_content = textareaDecode(response.data.wr_content)
    if (payload.pageType == 'view') {
      response.data.wr_content = textareaEncode(response.data.wr_content)
    }
    commit('DETAIL_BOARD', response.data)
    return response
  },
  async INSERT_BOARD(_, payload) {
    const response = await api.board.INSERT_BOARD(payload)
    return response
  },
  // async INSERT_BOARD ({ commit }, payload) {
  //   const response = await api.board.INSERT_BOARD(payload);
  //   commit('FETCH_BOARD', response.data);
  //   return response;
  // },
  async UPDATE_BOARD(_, payload) {
    const response = await api.board.UPDATE_BOARD(payload)
    return response
  },
  async DELETE_BOARD(_, payload) {
    const response = await api.board.DELETE_BOARD(payload)
    return response
  },
  async UPDATE_POS_BOARD({ commit }, payload) {
    const response = await api.board.UPDATE_POS_BOARD(payload)
    commit('FETCH_BOARD', response.data)
    return response
  },
}
