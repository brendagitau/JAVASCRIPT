/* Mkulima Platform

Mkulima is a new Kenyan business-to-business (B2B) agro-startup focusing on connecting grocery vendors to 
rural farmers. This is through their online marketplace where farmers can trade vegetables and fruits with 
grocery vendors. To begin with, farmers have to register on the platform and log in. Thereafter, they can 
upload their products with respective prices. On the other hand, grocery vendors can signup and log in to 
the platform to place their bulk order requests. 


Create a class Mkulima that will keep a list of farms and products. A single farm record should contain id, 
farm name, farmer, phone number, and address. A single grocery vendor record should contain id, store name, 
and phone number. A product should have id, name, and price fields. 


Users of the system should be able to:
 addFarm - params: farmId, name, farmer, phone, address

 removeFarm - params: farmId

 updateFarm - params: farmId, name, farmer, phone, address

 getFarm - params: farmId - returns a farm object

 addProduct - params: productId, name, price

 removeProduct - params: productId

 updateProduct - params: productId, name, price

 getProduct - params: productId - returns a product object

 printProducts - No param, console logs a list of product items with their prices.

calculateOrderCost - params: productId, quantity


class Mkulima {

  

  constructor() {

    this.farms = [];

    this.products = [];

    this.orders = [];

  }


  // ...complete the rest 


}


Assignment Rules: 
Share your assignment with your class rep by 9:00 am Monday, as a GitHub link.

This is an open laptop - open book assignment. However, do not copy your classmate. 

Your class rep should share all your assignment GitHub links and send them to me on an excel 
sheet by 1:00 pm on Monday the 10th.

*/

class Mkulima{
 
 
     constructor (farms,vendors,products,)
    {
         this.farms = [];
         this.vendors = [];
         this.products = [];
     
    }
     
    }
    class Farm extends Mkulima{
       constructor(farmId,name,farmer,phoneNumber,address){
       super(farmId,name,farmer,phoneNumber,address);
       console.log(this.farms.push(farmId,name,farmer,phoneNumber,address))
       }
    }
    let farm1= new Farm("ID00341","Wangombe","thengefarms","07234543",00202);
    console.log(farm1)
     let farm2= new Farm("ID00342","Warigia","raelfarms","07987654",00101);
    console.log(farm2)
     
    /*  class Removefarm extends Mkulima{
         constructor(farmId,name,farmer,phoneNumber,address){
            super(farmId,name,farmer,phoneNumber,address);
              return this.farms.shift(farmId);
          }
        }
          console.log( Removefarm);*/
     
     
     const FARMS={
       farmId:"ID00343",
       name:"Ndegwa",
       farmer:"hopefarms",
       phoneNumber:"07345678",
       address:"00303",
      set FARMS(updateFarm){
         return this.Farm=updateFarm
       }
     };
     console.log(AddFARM);
      const ADDFARMS={
       farmId:"id00345",
       name:"Waiganjo",
       farmer:"ngirifarms",
       phoneNumber:"07654321",
       address:"00404",
      get getFarm(){
         return this.farmId
       }
     };
     console.log(ADDFARMS.farmId);
  
         class Product extends Mkulima{
       constructor(productId,name,price)
       {
         super(productId,name,price);
         console.log(this.FARMS.push(productId,name,price))
         }
       }
       let product1= new Product("pearl","lentils",200);
    console.log(product1)
     
    const PRODUCTS={
     productId:"1011",
     name:"beans",
     price:145,
     set  PRODUCT(updateProduct){
       return this.Product=updateProduct
     }
    };
    console.log(PRODUCTS);
     
     
     
    const PRODUCT={
     productId:"pearl",
     name:"lentils",
     price:200,
     get getPRODUCT(){
       return th
    is.productId
     }
    };
    console.log(product.getProduct);
     