var trash = document.querySelectorAll(".fa-trash");
// //for button (still working on subtracting completed item and keypress event listener)
// let addItemBtn = document.querySelector('#addItemBtn')
//
// let notCompleted = document.querySelector('#remainingTasks').innerHTML = 0
// //this targets the btn to clear all
// let clearAll = document.querySelector('.clearAll')
// //this targets the btn to clear completed Tasks
// let clearCompleted = document.querySelector('.clearCompleted')
//
//
// //Adds input to DOM
// addItemBtn.addEventListener('click', ()=>{
//   let inputItem = document.querySelector('input')
//
//   let tasks = document.querySelector('.tasks')
//
//   let taskList = document.createElement('li')
//
//   if (inputItem.textContent == ''){
//   taskList.appendChild(document.createTextNode(inputItem.textContent))
//   }
//
// //clicking on the task list allows the CSS style to apply by drwing a line through it
//   taskList.addEventListener('click', ()=>{
//     event.target.classList.toggle('completed')
//   })
//
// //this updates the list inside the ul(tasks) and keep adding
//   tasks.appendChild(taskList)
//   inputItem.value=''
//   notCompleted++
//
// //this updates in the dom the count of the list remaining/not completed
// document.querySelector('#remainingTasks').value = notCompleted
// })
//
// //on click of the clearAllTasks button this targets both ul and li and removes them
// clearAll.addEventListener('click', ()=> {
//   let removeTasks = document.querySelectorAll('.task')
//   removeTasks.forEach(el => {
//     el.parentNode.removeChild(el)
//     document.querySelector('#remainingTasks').innerHTML = 0
//     notCompleted
//   })
//
// })
//
// clearCompleted.addEventListener('click', ()=>{
//   let tasks = document.querySelectorAll('.completed')
//   tasks.forEach(el =>{
//     el.parentNode.removeChild(el)
//   })
//   document.querySelector('#remainingTasks').innerHTML =
//   document.querySelectorAll('#tasks li').length
//   notCompleted=document.querySelectorAll('#tasks li').length
// })
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        // alert("Clicking on trash")
        //needs to determine what it is deleting and stores it in a variable.
        const task = this.parentNode.parentNode.childNodes[1].innerText
        // const task = this.parentNode.parentNode.childNodes[0].textContent
        // alert(task);
        //Wants to make a delete request and will go to server.
        fetch('taskList', {
          method: 'Delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            pants:task
          })
        }).then(function (response) {
          // window.location.reload()
        })
      })
    });

//
// Array.from(trash).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const name = this.parentNode.parentNode.childNodes[1].innerText
//         const msg = this.parentNode.parentNode.childNodes[3].innerText
//         fetch('messages', {
//           method: 'delete',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({
//             'name': name,
//             'msg': msg
//           })
//         }).then(function (response) {
//           window.location.reload()
//         })
//       });
// });
