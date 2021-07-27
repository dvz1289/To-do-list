$(document).ready(function(){
  console.log("시작!")

  $.ajax({
      url:"",
      data:{},
      type:"",
      success:function(json){
          console.log(json)
      },
      error:function(err){

      }
  })
})

function addTodo(){
    let todo = $(".form-control").val()
    console.log(todo)
    let id = Math.floor(Math.random() * 100000)
    let list_item = `<li class="list-group-item d-flex justify-content-between align-items-center list-${id}">
                ${todo}
                <span class="badge badge-primary badge-pill" onclick="deleteTodo(${id})">삭제</span>
              </li>`

    $(".list-group").append(list_item)
    $(".form-control").val('')
}

function deleteTodo(id){
    $(".list-"+id).remove()
}