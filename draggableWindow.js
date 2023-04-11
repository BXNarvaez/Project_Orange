class DraggableWindow {
    constructor(div, item) {
        this.div = div;
        if(div.parentNode) this.parent = div.parentNode.element;
        this.item = item;
        this.width;
        this.height;
        this.posX;
        this.posY;
        this.centerX;
        this.centerY;
    }

    SetSize(width = 300, height = 225) {
        this.div.style.width = width + "px";
        this.div.style.height = height + "px";
        this.width = width;
        this.height = height;
        this.UpdateCenterPoint();
    }

    SetPosition(x, y) {
        this.div.style.left = x + "px";
        this.div.style.top = y + "px";
        this.posX = x;
        this.posY = y;
    }

    UpdateCenterPoint() {
        this.centerX = this.width / 2;
        this.centerY = this.height / 2;
    }
}

export function InstantiateWindow (item) {
    let draggableWindow = new DraggableWindow(document.createElement('div'), item);
    draggableWindow.div.setAttribute("class", 'dragWind');

    let headerDiv = draggableWindow.div.appendChild(document.createElement('h3'));
    headerDiv.setAttribute("class", 'dragWindHeader title');

    headerDiv.setHTML(draggableWindow.item.name);

    let contentDiv = draggableWindow.div.appendChild(document.createElement('div'));
    contentDiv.setAttribute("class", 'dragWindContent');

    let wrapperDiv = contentDiv.appendChild(document.createElement('div'));
    wrapperDiv.setAttribute("class", 'contentBox');

    wrapperDiv.insertAdjacentHTML('afterbegin',
        `
        <img src="${draggableWindow.item.media}" scrolling="no">
        `
    );

    let tagList = document.createElement('div');
    tagList.setAttribute("class", "tagList");
    let tags = draggableWindow.item.tags

    for (let i = 0; i < draggableWindow.item.tags.length; i++) {
        tags[i].forEach(element => {
            let tag = document.createElement("div")
            let type;

            if(i == 0) {type = "tag area"}
            else if (i == 1) {type = "tag value"}
            else if (i == 2) {type = "tag tool"}

            tag.setAttribute("class", type);
            tag.setHTML(element);
            tagList.appendChild(tag);
        });
    }

    wrapperDiv.append(tagList);
    wrapperDiv.insertAdjacentHTML('beforeend', `
    <div>${draggableWindow.item.client}</div>
    <div>${draggableWindow.item.dateCreated}</div>
    <div>${draggableWindow.item.description}</div>
    `)

    return draggableWindow;
}

export function SetTransform(draggableWindow, width = 300, height = 225, x, y) {
    draggableWindow.div.style.width = width + "px";
    draggableWindow.div.style.height = height + "px";
    draggableWindow.UpdateSize(width, height);

}