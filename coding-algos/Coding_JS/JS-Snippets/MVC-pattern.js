class ShoppingCartModel
{ 
   //write code here
    constructor(itemName, itemNumber, itemQuantity, itemPrice) {
        this.itemName = itemName;
        this.itemNumber = itemNumber;
        this.itemQuantity = itemQuantity;
        this.itemPrice = itemPrice;
    }
    getItemNumber() {
        return this.itemNumber;
    }
    getItemName() {
        return this.itemName;
    }
    getItemQuantity() {
        return this.itemQuantity;
    }
    getItemPrice() {
        return this.itemPrice;
    }
} 

class ShoppingCartView  
{
    constructor(){
        this.controller = null;
    }
    registerWith(controller) {
        this.controller = controller;
        this.controller.addView(this); 
    }
    
    displayItem(itemNumber,itemName,itemQuantity,itemPrice) 
    { 
        console.log(`Item Number: ${itemNumber}\nItem: ${itemName}\nQuantity: ${itemQuantity}\nPrice: ${itemPrice}`); 
    } 

    buyItem(itemName, itemQuantity, itemPrice) {
        this.controller.buyItem(itemName, itemQuantity, itemPrice);
    }
    changeItemQuantity(itemNumber, newQuantity) {
        this.controller.changeItemQuantity(itemNumber, newQuantity);
    }

    //write code here
} 

class ShoppingCartController  
{ 
    constructor(){
        this.model = null;
        this.view = null;
        this.itemList = [];
    }
    
    addView(view) {
        this.view = view;
    }
    addModel(model) {
        this.model = model;
    }
    //write code here 
    buyItem(itemName, itemQuantity, itemPrice) {
        this.addModel(new ShoppingCartModel(itemName, this.itemList.length, itemQuantity, itemPrice));
        this.itemList.push(this.model);
        this.updateView();        
    }
    changeItemQuantity(itemNumber, itemQuantity) {
        for (let i = 0; i < this.itemList.length; i++){
            if (this.itemList[i].itemNumber === itemNumber) {
                this.itemList[i].itemQuantity = itemQuantity;
            }
        }
        this.updateView();
    }
    updateView() {
        this.itemList.forEach((val) => {
            this.view.displayItem(val.itemNumber, val.itemName, val.itemQuantity, val.itemPrice);
        })
    }



} 