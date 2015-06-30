$(function() {

  console.log("Javascript works!");



  var $newToDo = $("#new-item"); //grabs user input from the form; "new-item" is the ID of the form itself

  var $toDoName = $("#item-name"); //this specifies that the user input in the submit field will be the name of the actual item

  var $toDoList = $("#todo-list"); //defines <ul> as the parent of any item we decide to append under it

  var $toDoEntered = $(".todo-entered") //this grabs all of the to-do items that have been entered and added to the page

  //appending any "toDoName" to toDoList

  $newToDo.on("submit", function(event){
    event.preventDefault(); // the "default" is to reload the page; we want to prevent this!
    $toDoList.append("<li class='todo-entered'>" + $toDoName.val() + "</li>");
  });

});
