function todoList(){
    var item = document.getElementById("todoInput").value
    // console.log(item,"item")
    var text = document.createTextNode(item)
    // console.log(text,"text")
    var newItem = document.createElement("li")
    // console.log(newItem)
    newItem.appendChild(text)
    
    document.getElementById("todoList").appendChild(newItem)
   
}
