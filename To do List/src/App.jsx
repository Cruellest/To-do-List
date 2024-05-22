import { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';
import Filter from './components/Filter';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const [search, setSearch] = useState('');

  const [filter, setFilter] = useState('All');

  const [order, setOrder] = useState('Asc');


  const addTodo = (text,category) => {

    const newTodo = [...todos,{
      id: todos.length + 1,
      text,
      category,
      isCompleted: false
    }];

    setTodos(newTodo);
  }

  const removeTodo = (id) => {
    const newTodo = [...todos];

    const filteredTodo = newTodo.filter(todo=> todo.id !== id);

    setTodos(filteredTodo);
  }

  const completeTodo = (id) => {
    const newTodo = [...todos];

    newTodo.forEach(todo => {
      if (todo.id === id){
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodos(newTodo);
  }


  return (
    <div className='App'>

      <h1>
        Lista de Tarefas
      </h1>
    	<Search search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setOrder={setOrder}/>
        
        <div className="todo-list">
        {/**  Adicione um loop para renderizar cada tarefa na lista de tarefas e realiza um filtro */ }   
        {todos
          // Filtra as tarefas de acordo com o filtro selecionado.
          .filter((todo) => {
            if (filter === 'All') {
              return true;
            } else if (filter === 'Completed') {
              return todo.isCompleted;
            } else {
              return !todo.isCompleted;
            }
          })
          .filter((todo) =>
            // Filtra as tarefas que contém o texto da pesquisa.
            // toLocaleLowerCase() é um método que retorna a string em minúsculo.
            // includes() é um método que verifica se a string contém a substring passada como argumento.
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          // Ordena as tarefas de acordo com a ordem selecionada. 
          // Realiza a comparação entre as strings de acordo com a ordem selecionada. No caso "a" e ""b" são os textos das tarefas.
          .sort((a, b) => {
            if (order === 'Asc') {
              // localeCompare() é um método que compara duas strings e retorna um número que indica se a string é maior, menor ou igual a outra string.
              return a.text.localeCompare(b.text);
            } else {
              return b.text.localeCompare(a.text);
            }
          })
          .map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}  />
        ))}
      </div>
      {/**  Adicione o componente TodoForm.*/}
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
