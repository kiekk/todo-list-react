import './App.css'
import { MdAdd, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import './style.scss'

function App() {
  const todoList = [
    {
      id: 1,
      todo: '할일 1',
      done: false,
    },
    {
      id: 2,
      todo: '할일 2',
      done: false,
    },
    {
      id: 3,
      todo: '할일 3',
      done: false,
    },
    {
      id: 4,
      todo: '할일 4',
      done: false,
    },
  ]

  return (
    <div className="TodoTemplate">
      <div className="app-title">일정 관리</div>
      <div className="content">
        <form className="TodoInsert">
          <input type="text" placeholder="할 일을 입력하세요" />
          <button type="submit">
            <MdAdd />
          </button>
        </form>
        <div className="TodoList">
          {todoList.map((todo) => (
            <div className="TodoListItem" key={todo.id}>
              <div className="checkbox">
                <MdCheckBox />
                <div className="text">{todo.todo}</div>
              </div>
              <div className="remove">
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
