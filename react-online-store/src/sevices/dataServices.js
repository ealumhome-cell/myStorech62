const catalog = [
    {
        "title":"Orange",
        "category":"fruit",
        "price":5,
        "image":"orange62.png",
        "_id":"1",
    },
    {
        "title":"Chocolatte",
        "category":"Grocery",
        "price":5,
        "image":"choco62.png",
        "_id":"2",
    },
    {
        "title":"Strawberry",
        "category":"fruit",
        "price":5,
        "image":"straw62.png",
        "_id":"3",
    },
    {
        "title":"Milk",
        "category":"Grocery",
        "price":5,
        "image":"milk62.png",
        "_id":"4",
    },
 
]

class DataService{
    getProducts(){
        return catalog;
    }
}
export default DataService;