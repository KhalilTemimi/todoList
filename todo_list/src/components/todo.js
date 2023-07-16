import React, {useState} from 'react'

const Todo = () => {
    
    const [newTodo, setNewTodo] = useState("");
    const [todos, setTodos] = useState([]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo === ""){return;};
        setTodos([...todos, {task: newTodo, completed: false}]);
        setNewTodo("");
    };

    const handleDelete = (index) => {
        const fliterdTodos = todos.filter((todo, idx) => {
            return idx !== index;
        });
        setTodos(fliterdTodos);
    };

    const taskDone = (i) => {
        const doneTodos = todos.map((todo, idx) => {
            if (i === idx){
                todo.completed = !todo.completed;
            };
            return todo;
        });
        setTodos(doneTodos);
        //console.log(todos);
    };

    return (
    <div>
        <h1>*** Todo List ***</h1>
        <form onSubmit={(e) => {
                handleSubmit(e);
            }}>
            <input type='text' value={newTodo} onChange={(e) => {
                setNewTodo (e.target.value);
            }}/>
            <input style={{margin:"20px"}} type='submit' value='Add task'/>
        </form>
        {
            todos.map((todo, i) => {
                return(
                    <div key={i}>
                        <div>
                            <input type='checkbox' checked = {todo.completed}
                             onChange={(e) => {
                                taskDone(i);
                            }}/>
                            <span style={{ textDecoration: todo.completed && "line-through"}}>
                                {todo.task}
                            </span>
                            <input style={{margin: "20px", color:"white", backgroundColor:"black" }}
                             type='submit' value="Delete" onClick={(e) => {
                                handleDelete(i);
                             }}/>
                        </div>
                    </div>

                )
            })
        }
    </div>
  )
}

export default Todo