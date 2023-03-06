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
    }

    ChangeName(newName) {
        this.name = newName;
    }
}

export default Item;