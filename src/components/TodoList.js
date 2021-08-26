import TodoListItem from './TodoListItem'
import './TodoList.scss'

const TodoList = ({ list }) => {
  return (
    <div className="TodoList">
      {list.map((item) => (
        <TodoListItem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default TodoList
