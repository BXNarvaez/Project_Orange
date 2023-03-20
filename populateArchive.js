import items from './itemList.js';

const archiveContent = items.map((item) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('grid-item');

    itemDiv.insertAdjacentHTML('afterbegin', `
    <iframe alt="Media Here"></iframe>
    `);

    let tagList = document.createElement('div');
    tagList.setAttribute("class", "tagList");
    let tags = item.tags

    for (let i = 0; i < item.tags.length; i++) {
        tags[i].forEach(element => {
            let tag = document.createElement("div")
            let type;

            if(i == 0) {type = "tag area"}
            else if (i == 1) {type = "tag value"}
            else if (i == 2) {type = "tag tool"}

            tag.setAttribute("class", type)
            tag.innerHTML = (element)
            tagList.appendChild(tag);
        });
    }

    itemDiv.append(tagList)

    itemDiv.insertAdjacentHTML('beforeend', `
    <div>${item.name}</div>
    <div>${item.client}</div>
    <div>${item.dateCreated}</div>
    `)
    return itemDiv;
});

const gridContainer = document.querySelector('.grid-container');

archiveContent.forEach((item) => {
    gridContainer.appendChild(item);
});