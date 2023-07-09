import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todoItems.map((todo) => (
                <TodoItem key={todo.id} todo={todo} addToSelectedItems={props.addToSelectedItems} isSelected={false}/>
            ))}
        </div>
    );
};

export default TodoList;