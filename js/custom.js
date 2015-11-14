(function(){
	var form = $('form');
	var list = $('#itemsList');
//accept a user input
	form.submit(function(event){
		event.preventDefault();
		var newItemName = $(this).find('input').val();
		console.log(newItemName);
		saveToList(newItemName);
	});
	//store it in a list
	function saveToList(itemName){
		var listItem = '<li><button class=\'delete\'>Delete</button>'+ 
		'<button class=\'complete\'>Complete</button>'+itemName+'</li>';
		$list.prepend(listItem);
	}
//check it off as complete
	list.on('click','.delete',function(){
		$(this).parent().remove();
	})
	//delete
	list.on('click','.complete',addClassComplete);

	function addClassComplete(){
		$(this).parent().toggleClass('complete');
	}


})();














