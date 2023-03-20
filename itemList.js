import Item from "./item.js";

const TestItem = new Item (
    "name",
    "client",
    "dateCreated",
    ["area1", "area2"],
    ["value1", "value2", "value3"],
    ["tool1", "tool2", "tool3", "tool4"]
)

const items = [TestItem, TestItem, TestItem, TestItem, TestItem, TestItem, TestItem];

export default items;