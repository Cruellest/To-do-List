import React from 'react'
import { useState } from 'react'

function TodoForm({ addTodo }) {

    // Adicione os estados para controlar o valor do input e a categoria selecionada.
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    // Adicione um evento para controlar o valor do input.
   const handleSubmit = (e) => {
       e.preventDefault();
       console.log("Enviou formulário")
       if (!value || !category) {
           return;
       }
       console.log(value, category);
       // Adicione um evento do todo para enviar o formulário.
        addTodo (value, category);
       // Limpar os campos
       setValue('');
       setCategory('');
       
    }

    return (
        <div>
            <h2>Criar Tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite o nome da tarefa" value={value} onChange={(e)=> setValue(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Seleciona uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Adicionar Tarefa</button>
            </form> 
        </div>
    );
}

export default TodoForm;