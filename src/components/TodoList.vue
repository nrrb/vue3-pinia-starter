<script setup>
import { useTodos } from '@/composables/useTodos'

const { newTodo, total, todos, add, toggle } = useTodos()
</script>
<template>
  <main>
    <h1>Todo List</h1>
    <input v-model="newTodo" placeholder="Add a new todo" @keyup.enter="add" />
    <button @click="add">Add</button>

    <p>Total todos: {{ total }}</p>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
        @click="toggle(index)"
        :style="{ textDecoration: todo.done ? 'line-through' : 'none' }"
      >
        {{ todo.text }}
      </li>
    </ul>
  </main>
</template>
