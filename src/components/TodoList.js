import TodoItem from './TodoItem';

const TodoList = (props) => {
    return (
        <div>
            {props.todoItems.map((todo) => (
                // Rendering TodoItem component for each todo item in the todoItems array
                // Passing key, todo item, addToSelectedItems function, and isSelected flag as props
                <TodoItem key={todo.id} todo={todo} addToSelectedItems={props.addToSelectedItems} isSelected={false} />
            ))}
        </div>
    );
};

export default TodoList;
