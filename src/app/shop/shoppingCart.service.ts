import { Subject } from "rxjs";

export class ShoppingCartService {
    boughtProductList: {id: number; name: string; price: number; quantity: number; src: string, sum: number}[] = [];

    quantitySum: Subject<number> = new Subject<number>();
    currentQuantity: number = 0;

    changeQuantity(num: number) {
        this.quantitySum.next(this.currentQuantity);
    }

    getQuantity() {
        return this.quantitySum.asObservable();
    }
    
    addToCart(someId: number, someName: string, somePrice: number, someQuantity: number, someSrc: string, sum: number) {
        if (this.boughtProductList.find(c => c.id === someId)) {
            let index = this.boughtProductList.findIndex(c => c.id === someId);
            let quant1 = this.boughtProductList[index].quantity;
            let quant2 = quant1 + someQuantity
            this.boughtProductList[index].quantity = quant2
        } else {
            this.boughtProductList.push({id: someId, name: someName, price: somePrice, quantity: 
            someQuantity, src: someSrc, sum: sum})
        }
        this.currentQuantity += someQuantity
    }

    getProductList () {
        return this.boughtProductList;
    }

    deleteProduct(boughtP: any) {
        const index = this.boughtProductList.indexOf(boughtP);
        this.boughtProductList.splice(index, 1)
    }
    
}
