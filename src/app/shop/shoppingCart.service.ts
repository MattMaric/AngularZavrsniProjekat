export class ShoppingCartService {
    boughtProduct!: { id: number; name: string; price: number; quantity: number }
    boughtProductList = [ 
        {
           
        }
    ];
    
    addToCart(someObject: {}, someId: number, someName: string, somePrice: number) {
        /*if (this.boughtProductList.find(c => c.id === someId))*/
        this.boughtProductList.push(someObject)
        console.log(this.boughtProductList)
    }
}
