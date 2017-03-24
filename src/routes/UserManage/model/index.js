import axios from 'axios'

/**
 * 获取用户列表
 *
 * @export
 * @param {number} [currentPage=1] 当前页数
 * @param {number} [pageSize=10] 每页显示条数
 */
export function getUserList (currentPage = 1, pageSize = 10) {
  let url = 'http://zhongxia.duapp.com/rest/getUser.do'
  url += `?page=${currentPage}&pageSize=${pageSize}`
  return axios
    .get(url)
    .catch(function (error) {
      console.log(error)
    })
}
