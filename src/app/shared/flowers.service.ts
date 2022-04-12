import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Flower } from "./Flower";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class FlowersService {
    constructor(
        private httpClient: HttpClient
    ){}

    headers = new HttpHeaders({"Content-Type": "application/json"});
    flowers: Flower[] = [];

    quantitySum: Subject<number> = new Subject<number>();
    currentQuantity: number = 0;

    changeQuantity(num: number) {
        this.quantitySum.next(this.currentQuantity);
    }

    getQuantity() {
        return this.quantitySum.asObservable();
    }
    
    addToCart(someId: number, someName: string, somePrice: number, someQuantity: number, someSrc: string, sum: number) {
        if (this.flowers.find(c => c.id === someId)) {
            let index = this.flowers.findIndex(c => c.id === someId);
            let quant1 = this.flowers[index].quantity;
            let quant2 = quant1 + someQuantity
            this.flowers[index].quantity = quant2
            let sum1 = this.flowers[index].sum;
            let sum2 = sum1 + sum;
            this.flowers[index].sum = sum2
        } else {
            this.flowers.push({id: someId, name: someName, price: somePrice, quantity: 
                someQuantity, src: someSrc, sum: sum})
            this.addFlower({id: someId, name: someName, price: somePrice, quantity: 
                someQuantity, src: someSrc, sum: sum})
            .subscribe({
                next: (response)=>console.log(response),
                error: (error)=>console.log(error)
        })
        }
        this.currentQuantity += someQuantity
    }

    addFlower(flower: Flower) {
        return this.httpClient.post("api/flowers", flower, {
            headers: this.headers
        });
    }

    getFlowers() {
        return this.httpClient.get("api/flowers", {
            headers: this.headers
        });
    }

    deleteFlower(flowerID: number) {
        return this.httpClient.delete("api/flowers/" + flowerID, {
            headers: this.headers
        });
    }

    editFlower(flower: Flower) {
        return this.httpClient.put("api/flowers", flower, {
            headers: this.headers
        });  
    }
}