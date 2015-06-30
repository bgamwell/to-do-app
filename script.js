$(function() {

  console.log("Javascript works!");

  var $newToDo = $("#new-item"); //grabs user input from the form; "new-item" is the ID of the form itself

  var $toDoName = $("#item-name"); //this specifies that the user input in the submit field will be the name of the actual item

  var $toDoList = $("#todo-list"); //defines <ul> as the parent of any item we decide to append under it

  var $resetButton = $("#reset");

  //appending any "toDoName" to toDoList

  $newToDo.on("submit", function(event){
    event.preventDefault(); // the "default" is to reload the page; we want to prevent this!
    $toDoList.append("<li>" + $toDoName.val() + "</li>");
    $newToDo[0].reset();
  });

  $resetButton.on("click", function(event){
    $toDoList.remove();
  });

  $toDoList.on("click", "li", function(event) {
    $(this).addClass("done");
  });

});
