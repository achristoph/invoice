import { Product } from './product'

export class Invoice {
    constructor(
        public customerName: string,
        public date: string,
        public number: string,
        public lineItems?: Product[]
    ) { }
}
