document.getElementById('todolist').addEventListener('submit', saveToDo);

function saveToDo(event){
	var d = new Date()
	  event.preventDefault();
	var getId =  d.getTime();
	var getInput = document.getElementById("todobox").value;
	var todo = {id: getId, todo: getInput}
  
   if(localStorage.getItem('toDoList') === null){
	     var toDoList = [];
		 toDoList.push(todo);
		 localStorage.setItem('toDoList', JSON.stringify(toDoList));
   }else{
	   var toDoList = JSON.parse(localStorage.getItem('toDoList'));
	    toDoList.push(todo);
		 localStorage.setItem('toDoList', JSON.stringify(toDoList));
   }
      
	    document.getElementById('todolist').reset();
    	getToDo();

}

function getToDo(){
	var toDoList = JSON.parse(localStorage.getItem('toDoList'));
	var ShowToDo = document.getElementById('ShowToDoList');
	ShowToDoList.innerHTML = ''; //Causes elemnts to dup and also when item deleted not to refeash page.
	for(var i = 0; i < toDoList.length; i++){
		var id = toDoList[i].id;
		var toDoText = toDoList[i].todo;
		
		ShowToDoList.innerHTML +=  
		'<hr>'+     
		'<p>' +toDoText+ '</p><br />'+
		'<a href="#" onclick="deleteToDo(\''+id+'\')">Delete</a>';
	}
}

	function deleteToDo(id){
		var toDoList = JSON.parse(localStorage.getItem('toDoList'));
		for(var i=0; i < toDoList.length; i++){
			if(toDoList[i].id == id){
				toDoList.splice(i,1);
			}
		}
		localStorage.setItem('toDoList', JSON.stringify(toDoList));
		getToDo();
	}