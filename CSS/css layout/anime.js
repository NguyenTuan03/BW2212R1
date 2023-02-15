var ListArr = [];
var listCenterArr = [];
var listQueue = [];
let list = document.querySelectorAll('.nav-list');
function listSong()
{
    let listSong = document.querySelectorAll('.song');
    let listName = document.querySelectorAll('.song-name');
    let listViews = document.querySelectorAll('.views');
    let center = document.querySelector('.center');
    var itemCenter = {
        song: center.querySelector('.center-song').getAttribute('src'),
        name: center.querySelector('.center-header__name').innerText,
        view: center.querySelector('.center-header__view').innerText
    }
    listCenterArr.push(itemCenter);
    for (let i=0;i<list.length;i++)
    {
        list[i].onclick = function()
        {
            var item = {
                song: listSong[i].getAttribute('src'),
                name: listName[i].innerText,
                view: listViews[i].innerText
            }
            ListArr.push(item);
            swapElements(ListArr[i],listCenterArr[0]);
            render();
            console.log(ListArr);
            console.log(listCenterArr);
        }
    }
}
listSong();
function render()
{
    var html;
    var navList;
    for (let i=0;i<ListArr.length;i++)
    {
        html = `<video class="center-song" width="100%" controls src="${ListArr[i].song}"></video>
        <div class="center-header">
            <span class="center-header__name">${ListArr[i].name}</span>
            <span class="center-header__view">${ListArr[i].view}</span>
        </div>
        <div class="center-author">Justin beiber</div>
        <div class="center-detail">This song gives me chills and goosebumps all over my heart and my heavy soul amazing banger uplifting song totally yeah this song is very deep emotional song ever I have struggled with my demons and survived suicide attempts and this song really heals my pain from that struggle I had dealt with in my life alaxander your voice has connected me in a positive way thanks to your music for comfort and joy loved your song it touched deeply inside me u definitely are amazing vocalist man I adore you bro I love you so much Alexander keep rocking your music saved my life 😘🤘🔥🤟🕯🙏</div>`
    }
    document.querySelector('.center').innerHTML = html;
    for (let i=0;i<list.length;i++)
    {
        var listItems = {
            song:list[i].querySelector('.song').getAttribute('src'),
            name:list[i].querySelector('.song-name').innerText,
            view:list[i].querySelector('.views').innerText
        }
        listQueue.push(listItems);
        navList = `
        <video class="song" width="100%" height="120" src="${list[i].src}"></video>
        <div class="nav-list__name">
            <span class="song-name">${list[i].name}</span>
            <span class="views">${list[i].view}</span>
        </div>`
    }
    document.querySelectorAll('.nav-list').innerHTML = navList
}
const swapElements = (index1, index2) => {
    let temp = index1;
    index1 = index2;
    index2 = temp;
};
