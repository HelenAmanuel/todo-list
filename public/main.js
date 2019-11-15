var trash = document.querySelectorAll(".fa-trash");

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
          window.location.reload()
        })
      })
    });
