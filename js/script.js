
var todo_list = []
var isMenuOpen = true
const task__container = document.querySelector('.tasks__items__container')

function loadTasks(){
    
    if(todo_list.length == 0){
        task__container.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> No Tasks Available'
        task__container.style.textAlign = "center"
    }else{
        task__container.innerHTML = ''
    }

    for(let i=0 ; i < todo_list.length ; i++){
        let task_item = document.createElement('div')
        task_item.className = "task__item"
        task_item.accessKey = i
        task__container.appendChild(task_item)
        let task_ribbon = document.createElement('div')
        task_ribbon.className = 'task__ribbon'
        task_item.appendChild(task_ribbon)
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        task_item.appendChild(checkbox)

        let task_desc = document.createElement('div')
        task_desc.className = 'task__desc'
        task_item.appendChild(task_desc)

        let task_title = document.createElement('h3')
        task_title.innerHTML = todo_list[i][0]
        task_desc.appendChild(task_title)

        let location = document.createElement('p')
        location.innerHTML = '<i class="fa-solid fa-earth-americas"></i> '+todo_list[i][1]
        task_desc.appendChild(location)

        let delete_btn = document.createElement('i')
        delete_btn.className = 'fa-solid fa-circle-minus'
        delete_btn.setAttribute('onclick', 'deleteTask(event)')
        task_item.append(delete_btn)


    }

}

function deleteTask(e){
    e = e || window.event
    var target = e.target || e.srcElement
    let index = target.parentElement.accessKey
    todo_list.splice(parseInt(index), 1)
    loadTasks()
}

loadTasks()
function addItem(){
    const title_ele = document.getElementById('title')
    const location_ele = document.getElementById('location')
    const desc_ele = document.getElementById('desc')
    
    let todo_item = [title_ele.value, location_ele.value, desc_ele.value]
    
    todo_list.push(todo_item)
    
    // title_ele.value  = ""
    // location_ele.value = ""
    // desc_ele.value = ""
    
    loadTasks()
}


function menuToggle(){
    let menuToggleBtn = document.getElementById('menu-toggle')
    let sideBar = document.querySelector('.sidebar')
    let mainContent = document.querySelector('.main__content')
    let menuHide = document.getElementsByClassName('menuHide')
    console.log(menuHide)
    if(isMenuOpen){
        menuToggleBtn.className = "fa-solid fa-bars"
        sideBar.style.flexBasis = "0"
        mainContent.style.flexBasis = "100%"
        for(let i=0 ; i < menuHide.length ; i++){
            menuHide[i].style.display =  'none'
        }
        isMenuOpen = false
    }else{
        menuToggleBtn.className = "fa-solid fa-arrow-left"
        for(let i=0 ; i < menuHide.length ; i++){
            menuHide[i].style.display =  'block'
        }
        mainContent.style.flexBasis = "70%"
        sideBar.style.flexBasis = "30%"
        isMenuOpen = true
    }
}

function toggleTask(){
    console.log('called')
    document.querySelector('.input__container').style.display = 'none'
    document.querySelector('.tasks__container').style.display = 'block'
}

function addTaskBtn(){
    document.querySelector('.input__container').style.display = 'flex'
    document.querySelector('.tasks__container').style.display = 'none'
}


