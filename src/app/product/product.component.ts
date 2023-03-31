import { Component, OnInit } from "@angular/core";



@Component({
    selector: "app-product",
    templateUrl: "./product.component.html",
    // template: `
    //     <p class="info">
    //          The product name is {{pName}}  with product ID {{pId}} and status is {{pStatus}}
    //     </p>
    // `,

    styleUrls: ["./product.component.scss"]
    //     styles: [
    //         `
    //         .info{
    //     background-color: #ededed;
    //     padding: 1rem;
    //     border: 1px solid #ccc;
    //     border-radius: 5px;
    // }
    //         `
    //     ]
})
export class ProductComponent implements OnInit {

    pName: string = "samSung M31";
    pId: number = 123;
    pStatus: string = "InTransistion";
    isDisabled: boolean = true;
    constructor() {

    }
    ngOnInit(): void {
        console.log(`Product Component is initi`);
        setTimeout(() => {
            this.isDisabled = false
        }, 4000);
    }

}