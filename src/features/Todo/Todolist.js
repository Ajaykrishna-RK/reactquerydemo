import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todosApi";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useState } from "react";
import { BsUpload} from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai"

function Todolist() {
  const [newtodo, setNewtodo] = useState("");
  const queryClient = useQueryClient();

  const {
    data: todos,
    error,
    isError,
    isLoading,
  } = useQuery("todos", getTodos);

  const addTodoMutation = useMutation(addTodo,{
    onSuccess:()=>{
        // invalidates cache and refresh
        queryClient.invalidateQueries("todos")
    }
  })
  const updateTodoMutation = useMutation(updateTodo,{
    onSuccess:()=>{
        // invalidates cache and refresh
        queryClient.invalidateQueries("todos")
    }
  })
  const deleteTodoMutation = useMutation(deleteTodo,{
    onSuccess:()=>{
        // invalidates cache and refresh
        queryClient.invalidateQueries("todos")
    }
  })

  const handleSubmit = (e) =>{
e.preventDefault()
addTodoMutation.mutate({userId:1,title:newtodo,completed:false})
setNewtodo(' ')
  }

  const newItemSection = (
    <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo">Enter a new todo item</label>
        <div className="new-todo">
            <input
                type="text"
                id="new-todo"
                value={newtodo}
                onChange={(e) => setNewtodo(e.target.value)}
                placeholder="Enter new todo"
            />
        </div>
        <button className="submit">
       <BsUpload/>
        </button>
    </form>
)

let content 

if(isLoading){
    content = <p>Loading...</p>
}else if(isError){
    content = <p>{error.message}</p>
}else{
    content = todos.map((todo) => {
        return (
            <article key={todo.id}>
                <div className="todo">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        id={todo.id}
                        onClick={() =>
                            updateTodoMutation.mutate({ ...todo, completed: !todo.completed })
                        }
                    />
                    <label htmlFor={todo.id}>{todo.title}</label>
                </div>
                <button className="trash" onClick={() => deleteTodoMutation.mutate({ id: todo.id })}>
                <AiOutlineDelete/>
                </button>
            </article>
        )
    })
}


  return (
  <main>
{newItemSection}
{content}

  </main>
  );
}

export default Todolist;
