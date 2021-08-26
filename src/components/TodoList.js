import cn from 'classnames'
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md'
import './TodoList.scss'

const TodoList = ({ list }) => {
  return (
    <div className="TodoList">
      {list.map(({ id, todo, checked }) => (
        <div className="TodoListItem" key={id}>
          <div className={cn('checkbox', { checked })}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{todo}</div>
          </div>
          <div className="remove">
            <MdRemoveCircleOutline />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TodoList
