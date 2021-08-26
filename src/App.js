import { useState } from 'react'
import './App.css'
import {
  MdAdd,
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import './style.scss'
import cn from 'classnames'

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
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">
        <form className="TodoInsert" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="할 일을 입력하세요"
            value={text}
            onChange={onChange}
          />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
        <div className="TodoList">
          {todoList.map(({ id, todo, checked }) => (
            <div className="TodoListItem" key={id}>
              <div
                className={cn('checkbox', { checked })}
                onClick={() => onToggle(id)}
              >
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                <div className="text">{todo}</div>
              </div>
              <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
