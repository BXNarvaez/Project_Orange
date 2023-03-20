class Item {
    constructor (
        name, 
        client, 
        dateCreated, 
        areas, 
        values, 
        tools
    ) {
        this.name = name;
        this.client = client;
        this.dateCreated = dateCreated;
        this.areas = areas;
        this.values = values;
        this.tools = tools;
        this.tags = [areas, values, tools];
    }

    ChangeName(newName) {
        this.name = newName;
    }
}

export default Item;

// Work on the tags, (areas, values, and tools)
// say a user clicks on an AVT, and then it opens a filter for projects with that AVT.