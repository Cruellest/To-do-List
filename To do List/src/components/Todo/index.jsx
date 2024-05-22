import React from 'react'

const Todo = ({todo, removeTodo, completeTodo}) => {
    return (
        <div className='todo' style={ {textDecoration: todo.isCompleted ? "line-through": ""}}>
            <div className='content'>
                <p>
                    {/**  
                 * Objeto todo é um objeto que representa uma tarefa a ser realizada. 
                 * Ele possui as seguintes propriedades:
                 * id: um número que identifica a tarefa.
                 * text: uma string que contém o texto da tarefa.
                 * category: uma string que contém a categoria da tarefa.
                 * isCompleted: um booleano que indica se a tarefa foi completada ou não.
                 * O texto da tarefa é exibido dentro de um elemento <p> com a classe content.
                 *  
                 * text é a propriedade que contém o texto da tarefa.
                */}
                    {todo.text}
                </p>
                <p>
                    {/**  
                 * O texto da categoria é exibido dentro de um elemento <p> com a classe category.
                 *  
                 * category é a propriedade que contém a categoria da tarefa.
                */}
                    ({todo.category})
                </p>
            </div>
            <div>
                <button className='complete'onClick={()=> completeTodo(todo.id)} >Completar</button>
                <button className='remove' onClick={()=> removeTodo(todo.id)}>Deletar</button>
            </div>
        </div>
    );
}

export default Todo;