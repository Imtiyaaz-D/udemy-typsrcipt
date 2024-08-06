import axios from 'axios';
import { response } from 'express';


const url = 'https://jsonplaceholder.typicode.com/todos/1'

interface Todo  {
    id: number;
    title: string;
    completed: boolean;
}


axios.get(url).then(response => {

    const todo = response.data  as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    // console.log(`
    // The Todo with ID: ${id}
    // Has a title of: ${title} 
    // Is it finish? ${completed}
    // `)
    logTodo(id, title, completed);
})


const logTodo = ( id:number , title: string , completed:boolean ) =>{
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it completed? ${completed}
    
    `)
}

// const today = new Date ();
// today.getMonth()

// const person  = {
//     age = 20
// };


// class Color {

// }
// const red = new Color();
