let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
let arr = ['Ngân', 'Mến', 'Thế Anh'];

function start() {
    renderArr(arr);
}
start();
//search
let inputSearch = $('#input-search');

let search = $('.search');
inputSearch.onfocus = function() {
    inputSearch.value = '';
}
search.onclick = function(event) {
    event.preventDefault();
    let value= inputSearch.value;
    if(value == '') {
        $('.notification').innerHTML = 'The name is required! Please try again!';
    } else {
        searchArr(arr,value);
        $('.notification').innerHTML = '';
    }
   
}
//hàm tìm kiếm trong mảng
function searchArr (data,value) {
    let newArr = data.filter(element=>{
        return !element.search(value)
    })
    console.log(newArr);
    renderArr(newArr);
} 
//hàm rendercode
function renderArr(data) {
    let html = '';
    data.forEach((element, index) => {
        return html += `
        <tr>
            <td>${index + 1}</td>
            <td>${element}</td>
            <td><button id="edit" onclick="update(${index})"  style="padding:4px 16px; margin:4px 0">Edit</button></td>
            <td><button id="delete" onclick = "delete1(${index})" style="padding:4px 16px;">Delete</button></td>
        </tr>`
    });
    html1 = `
    <table border="1px">
    <tr>
        <th colspan="4">STUDENT MANAGE</th>
    </tr>
    <tr>
        <th>STT</th>
        <th>Name</th>
        <th>EDIT</th>
        <th>DELETE</th>
    </tr>
    ${html}
    </table>`
    $('#table-arr').innerHTML = html1;
}
//create 
let create = $('.create-arr');
let inputCreate = $('#input-create');
inputCreate.onfocus = function() {
    inputCreate.value = '';
}
create.onclick = function (event) {
    event.preventDefault();
    let value = inputCreate.value;
    if(value == '') {
        $('.notification').innerHTML = 'The name is required! Please try again!';
    } else {
        arr.push(value);
        renderArr(arr);
        $('.notification').innerHTML = ' Create Student Success!';
    }
}
//update
function update (id) {
    let value = prompt('Nhập giá trị cần thay thế:')
    arr[id] = value;
    $('.notification').innerHTML = 'Update student success!';
    renderArr(arr);
}
//delete
function delete1 (id) {
    arr = arr.filter((ele,index)=>{
        return index != id;
    })
    $('.notification').innerHTML = 'Delete student success!';
    renderArr(arr);
}
