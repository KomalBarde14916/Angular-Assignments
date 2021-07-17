import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models/laptop.model';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  laptop: Laptop = {
    
    name: '',
    price: '',
    
  };
  submitted = false;

  constructor(private productService: ProductService,httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  saveLaptop(): void {
    const data = {
      name: this.laptop.name,
      price: this.laptop.price
    };

    this.productService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

   

  newLaptop(): void {
    this.submitted = false;
    this.laptop = {
      name: '',
      price: '',
     
    };
  }

}
