import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ list, onToggle, onRemove }) => {
  return (
    <div className="TodoList">
      {list.map((item) => (
        <TodoListItem
          item={item}
          key={item.id}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default TodoList
