import items from './itemList.js';

const archiveContent = items.map((item) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('grid-item');

    itemDiv.innerHTML = `
    <iframe alt="Media Here"></iframe>
    <div>${item.name}</div>
    <div>${item.client}</div>
    <div>${item.dateCreated}</div>
    `;

    return itemDiv;
});

const gridContainer = document.querySelector('.grid-container');

archiveContent.forEach((item) => {
    gridContainer.appendChild(item);
});