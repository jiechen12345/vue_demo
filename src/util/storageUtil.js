/**
 * Created by jiechen on 2018/8/23.
 * 使用local storage
 * 1.函數
 * 2.對象
 */
/* 向外暴露兩個功能 */
const TODOS_KEY = 'todos_key'
export default {
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  },
  readTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  }
}
