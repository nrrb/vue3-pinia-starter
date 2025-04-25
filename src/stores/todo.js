import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])

  function addTodo(text) {
    if (text.trim) {
      todos.value.push({ text, done: false })
    }
  }

  function toggleTodo(index) {
    todos.value[index].done = !todos.value[index].done
  }

  return { todos, addTodo, toggleTodo }
})
