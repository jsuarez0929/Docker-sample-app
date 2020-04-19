window.onload = function(){
    input_enter = document.getElementById('input-text');
    ul_element = document.getElementById('item-list');
    input_enter.addEventListener('keypress', add_item_key);
    ul_element.addEventListener('click', remove_item);
}

function add_item_key(e){
    if(`${e.code}` == 'Enter'){
        add_item();
    }
}

function add_item() {
    reset_error_msg();
    var input = document.getElementById('input-text').value;

    if(input == '') {
        show_error_msg();
    }
    else {
        append_item(input);
        document.getElementById('input-text').value = "";        
    }
}

function remove_item(event){
    var element = event.target;
    if(element.tagName == 'IMG') {
        li_element = element.parentNode.parentNode.parentNode;
        ul_element = li_element.parentNode;
        ul_element.removeChild(li_element);
    }
    console.log(event.target);
}

function clear_list(){
    reset_error_msg();
    list = document.getElementById('item-list');

    while(list.hasChildNodes()){
        list.removeChild(list.firstChild);
    }
}

function append_item(input){
    list = document.getElementById('item-list');
    //Create li elem
    item = document.createElement('li');
    item.setAttribute("class", "item")
    
    //create div w img elem
    img = document.createElement('img');
    img.setAttribute('src','imgs/error.png');
    img_div = document.createElement('div');
    img_div.setAttribute('class', 'close_icon');
    img_div.setAttribute('id', 'close-button');
    img_div.appendChild(img);
    
    //create div for text
    txt_div = document.createElement('div');
    txt_div.setAttribute('class', 'item-text');
    txt_div.innerHTML = input;
    
    //create main div and attach text and img
    main_div = document.createElement('div');
    main_div.appendChild(txt_div);
    main_div.appendChild(img_div);
    
    item.appendChild(main_div);
    list.appendChild(item);
}

function show_error_msg(){
    error_div = document.getElementById('error-msg');
    label = document.createElement('label');
    label.setAttribute("class", "alert alert-danger");
    label.setAttribute("role", "alert");
    label.innerHTML = "Field is Empty";
    error_div.appendChild(label);
}

function reset_error_msg(){
    document.getElementById('error-msg').innerHTML = "";
}


/**
 * <li class="item">
        <div>
            <div class="item-text"style="float: left; width: 90%;">
                s
            </div>
            <div class="close_icon" style="float: right;">
                <img src="error.png">
            </div>
        </div>
    </li>
 */