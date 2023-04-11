function NewDraggableWindow (item) {
    var windowDiv = document.createElement('div');
    windowDiv.classList.add('dragWind');

    var headerDiv = windowDiv.appendChild(document.createElement('h3'));
    headerDiv.classList.add('dragWindHeader title');

    headerDiv.setHTML(item.name);

    var contentDiv = windowDiv.appendChild(document.createElement('div'));
    contentDiv.classList.add('dragWindContent');

    var wrapperDiv = contentDiv.appendChild(document.createElement('div'));
    wrapperDiv.classList.add('contentBox');

    wrapperDiv.setHTML(
        `
        <img src="${item.}" scrolling="no">
        `
    );


}