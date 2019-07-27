

$(document).ready(function(){
    $.getJSON('/api/todos')
    .then(addTodos)

    $('#todoInput').keypress(function(event) {
        if(event.which == 13) {
            createTodo();
        }
    })
})

function addTodos (todos) {
   todos.forEach(todo=> {
    let newTodo = $('<li class = "task">'+ todo.name +'</li>')

    if(todo.completed) {
        newTodo.addClass('done')
    }
    $('.list').append(newTodo)
   });
}

function createTodo () {
    let userInput = $('#todoInput').val();
    
    $.post('/api/todos', {name : userInput }).then(newTodo => {
        console.log(newTodo)
    }).catch(err => {
        console.log(err)
    })
    // .then(newTodo => {
    //     console.log(newTodo)
    //     .catch(err => console.log(err))
    // })
}