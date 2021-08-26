import { useState, useRef, useCallback } from 'react'
import './App.css'
import TodoTemplate from './components/TodoTemplate'
import TodoList from './components/TodoList'
import TodoInsert from './components/TodoInsert'

function App() {
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

  const nextId = useRef(5)

  const onToggle = useCallback(
    (id) => {
      setTodoList(
        todoList.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      )
    },
    [todoList],
  )

  const onRemove = useCallback(
    (id) => {
      setTodoList(todoList.filter((todo) => todo.id !== id))
    },
    [todoList],
  )

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        todo: text,
        checked: false,
      }
      setTodoList(todoList.concat(todo))
      nextId.current += 1
    },
    [todoList],
  )

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList list={todoList} onToggle={onToggle} onRemove={onRemove} />
    </TodoTemplate>
  )
}

export default App
