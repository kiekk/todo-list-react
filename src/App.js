import { useState } from 'react'
import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

function App() {
  const [text, setText] = useState('')
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: '할일 1',
      checked: false,
    },
    {
      id: 2,
      todo: '할일 2',
      checked: false,
    },
    {
      id: 3,
      todo: '할일 3',
      checked: false,
    },
    {
      id: 4,
      todo: '할일 4',
      checked: true,
    },
  ])

  const onToggle = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo,
      ),
    )
  }

  const onRemove = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const todo = {
      id: todoList.length + 1,
      todo: text,
      checked: false,
    }
    setTodoList(todoList.concat(todo))
    setText('')
  }

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList list={todoList} />
    </TodoTemplate>
  )
}

export default App
