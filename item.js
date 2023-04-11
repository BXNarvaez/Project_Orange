class Item {
    constructor (
        name = "name", 
        client, 
        dateCreated, 
        areas, 
        values, 
        tools,
        media = null,
        description = "Lol Lorem Ipsum ammirite?"
    ) {
        this.name = name;
        this.client = client;
        this.dateCreated = dateCreated;
        this.areas = areas;
        this.values = values;
        this.tools = tools;
        this.tags = [areas, values, tools];
        this.media = media;
        this.description = description;
    }

    ChangeName(newName) {
        this.name = newName;
    }

    AddTag(tag, kind) {
        
    }

    UpdateDescription(newDescription) {

    }
}

export default Item;

// Work on the tags, (areas, values, and tools)
// say a user clicks on an AVT, and then it opens a filter for projects with that AVT.