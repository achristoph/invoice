import { Component, OnInit } from '@angular/core';
import { Invoice } from './invoice';
import { Product } from './product'

@Component({
    selector: 'invoice-form',
    templateUrl: './invoice-form.component.html'
})
export class InvoiceFormComponent implements OnInit {
    invoice = new Invoice('John', '1/1/2000', '1');
    products: Product[] = [new Product('Cleaner', 100), new Product('Sweeper', 200), new Product('Shiner', 300)]
    filteredProducts: Product[];
    lineItems: Product[] = [];
    product: Product;
    isHidden: boolean = true;

    ngOnInit() {
    }
    createInvoice(f: any) {
        this.isHidden = false;
    }
    searchProduct(v: string) {
        this.filteredProducts = this.products.filter(p => p.name.toLowerCase().indexOf(v) > -1);
    }
    addProduct(v: any) {
        if (this.lineItems.find(li => li.name === v.product.name)) return;
        if (!this.invoice.lineItems) {
            this.invoice.lineItems = this.lineItems;
        }
        v.product.qty = 1;
        this.lineItems.push(v.product)
    }
    removeProduct(v: any) {
        let i = this.lineItems.findIndex(li => li.name === v.name);
        this.lineItems.splice(i, 1);
    }
    newInvoice() {
        this.invoice = new Invoice('', '', '');
        this.lineItems = [];
        this.isHidden = true;
    }
    displayFn(product: Product): any {
        return product ? product.name : product;
    }
    displayInvoice() {
        return JSON.stringify(this.invoice);
    }
}
