import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ list, onToggle }) => {
  return (
    <div className="TodoList">
      {list.map((item) => (
        <TodoListItem item={item} key={item.id} onToggle={onToggle} />
      ))}
    </div>
  )
}

export default TodoList
