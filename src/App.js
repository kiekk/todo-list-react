import './App.css'
import { MdAdd, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md'
import './style.scss'

function App() {
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
          <div className="TodoListItem">
            <div className="checkbox">
              <MdCheckBox />
              <div className="text">할일1</div>
            </div>
            <div className="remove">
              <MdRemoveCircleOutline />
            </div>
          </div>
          <div className="TodoListItem">
            <div className="checkbox">
              <MdCheckBox />
              <div className="text">할일1</div>
            </div>
            <div className="remove">
              <MdRemoveCircleOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
