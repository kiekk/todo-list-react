import { useState } from 'react'
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss'

const TodoInsert = ({ onInsert }) => {
  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    onInsert(text)
    setText('')
  }

  return (
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
    </div>
  )
}

export default TodoInsert
