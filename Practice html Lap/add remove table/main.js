var arrAdd = [];
function add()
{
    var id=0;
    var name = document.querySelector('.name').value;
    var age = document.querySelector('.age').value;
    var item = {
        id:id,
        name:name,
        age:age
    }
    if (name != "" && age != "")
    {
        arrAdd.push(item);
        render();
        clear();
    }
}
function render()
{       
    var table = "";
    for (let i=0;i<arrAdd.length;i++)
    {
        arrAdd[i].id++;
        table+= `
        <tr>
            <td
                <button onclick="deleteBtn(${arrAdd[i].id})" style="color: blue; text-decoration: underline;">Delete</button>
            </td>
            <td>${arrAdd[i].name}</td>
            <td>${arrAdd[i].age}</td>
        </tr>
        `
    }
    document.querySelector('tbody').innerHTML = table;
} 
function clear()
{
    document.querySelector('.name').value = "";
    document.querySelector('.age').value = "";
}
function deleteBtn(idUser)
{
    for (let i=0;i<arrAdd.length;i++)
    {
        if (idUser == arrAdd[i].id)
        {
            arrAdd.splice(i,1);
            render();
        }
    }
}
var deleteUser = document.querySelectorAll('.delete');
for (let i=0;i<deleteUser.length;i++)
{
    deleteUser[i].onclick = function()
    {
        deleteUser[i].parentElement.parentElement.remove();
    }

}