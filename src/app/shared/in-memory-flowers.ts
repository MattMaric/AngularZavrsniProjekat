import { InMemoryDbService } from "angular-in-memory-web-api";
import { Flower } from "./Flower";

export class InMemoryFlowers implements InMemoryDbService {
    createDb() {
        const flowers: Flower[] = [


        ];
        return {flowers};
    }
}