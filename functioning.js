let addInput = document.querySelector('#Add-task');

let addButton = document.querySelector('#Add');

let output = document.querySelector('#output-container');

//Commented html i.e. to be created in javascript


let todos = [];

// let del = document.querySelector('#del-task');
// let up = document.querySelector('#upshift');
// let down = document.querySelector('#downshift');

// let addedTask = document.querySelector('#added-task');

// addButton.addEventListener('click', (event) => {
//     let todo = addInput.value;
//     todo = todo.trim(); //Remove Extra Spaces
//     if (todo == '') {
//         alert("Enter Some Task");
//     } else {
//         // console.log(todo);
//         addTodo(todo);
//         addInput.value = "";
//         update(todo);
//     }
// })

// function addTodo(todo) {


//     todos.push(todo);
//     let addedHtml = `
//     <div class="task" >
//     <input type="button" value="X" id="del-task">
//     <input type="button" value="↑" id="upshift">
//     <input type="button" value="↓" id="downshift">
//     <input type="text" id="added-task" disabled value='${todo}'>
// </div>`

//     output.innerHTML += addedHtml;
// }

// function update(todo) {
//     let task = document.querySelectorAll('.task');

//     // task.forEach((t) => {
//     //     // console.log(t);
//     //     var $curr = t;
//     //     console.log($curr)
//     //     t.addEventListener('click', (e) => {
//     //         // console.log(e.target.id);
//     //         if (e.target.id == 'del-task') {
//     //             console.log("Delete this task")
//     //             t.remove();
//     //         } else if (e.target.id == 'upshift') {
//     //             console.log(t.prev())
//     //             console.log("Shift Up")
//     //         } else if (e.target.id == 'downshift') {
//     //             console.log(t.next())
//     //             console.log("Shift Down")
//     //         }
//     //     })
//     // })

//     for (let i = 0; i < task.length; i++) {

//         task[i].addEventListener('click', (e) => {
//             // console.log(e.target.id)
//             if (e.target.id == 'del-task') {
//                 console.log("Delete this task")
//                 task[i].remove();

//             } else if (e.target.id === 'upshift') {
//                 console.log("Shift Up")
//                 console.log(task[i])
//                 console.log(task[i - 1]);
//                 var curr = task[i];
//                 var next = task[i - 1];
//                 task[i - 1] = curr;
//                 task[i] = next;

//             } else if (e.target.id === 'downshift') {
//                 console.log("Shift Down")
//                 console.log(task[i])
//                 console.log(task[i + 1]);
//                 var curr = task[i];
//                 var next = task[i + 1];
//                 task[i], task[i + 1] = task[i + 1], task[i];
//             }

//         })


//     }
// }




//render the section
const todoLoader = () => {
    let htmlContent = "";
    todos.map((item, index) => {

        if (index == 0 && index == todos.length - 1) {
            //single length
            htmlContent += `<div class="task" >
            <input type="button" onclick="deleteHandler(${index})" value="X" id="del-task">
            <input type="button" disabled onclick="shiftHandler('up', ${index})" value="↑" id="upshift">
            <input type="button" disabled onclick="shiftHandler('downf', ${index})" value="↓" id="downshift">
            <input type="text" id="added-task" disabled value='${item}'>
        </div>`
        } else if (index == 0) {
            htmlContent += `<div class="task" >
            <input type="button" onclick="deleteHandler(${index})" value="X" id="del-task">
            <input type="button" disabled onclick="shiftHandler('up', ${index})" value="↑" id="upshift">
            <input type="button"  onclick="shiftHandler('downf', ${index})" value="↓" id="downshift">
            <input type="text" id="added-task" disabled value='${item}'>
        </div>`
        } else if (index == todos.length - 1) {
            htmlContent += `<div class="task" >
            <input type="button" onclick="deleteHandler(${index})" value="X" id="del-task">
            <input type="button" onclick="shiftHandler('up', ${index})" value="↑" id="upshift">
            <input type="button" disabled onclick="shiftHandler('downf', ${index})" value="↓" id="downshift">
            <input type="text" id="added-task" disabled value='${item}'>
        </div>`
        } else {
            htmlContent += `<div class="task" >
            <input type="button" onclick="deleteHandler(${index})" value="X" id="del-task">
            <input type="button" onclick="shiftHandler('up', ${index})" value="↑" id="upshift">
            <input type="button" onclick="shiftHandler('downf', ${index})" value="↓" id="downshift">
            <input type="text" id="added-task" disabled value='${item}'>
        </div>`
        }


    });

    document.getElementById('output-container').innerHTML = htmlContent;
    return;
}


//add the todo

function addTodo() {
    let value = document.getElementById('Add-task').value;

    todos.push(value);

    todoLoader();
    return;

}


function deleteHandler(index) {
    todos.splice(index, 1);
    todoLoader();
    return;
}


function shiftHandler(dir, index) {


    let ele = todos[index];
    dir == 'up' ? (todos[index] = todos[index - 1], todos[index - 1] = ele) : (todos[index] = todos[index + 1], todos[index + 1] = ele)

    todoLoader();

}


//handle button clicks