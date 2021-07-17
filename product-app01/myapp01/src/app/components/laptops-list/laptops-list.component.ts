import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Laptop } from 'src/app/models/laptop.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})
export class LaptopsListComponent implements OnInit {

  laptops?: Laptop[]=[];
  currentLaptop: Laptop = {};
  currentIndex = -1;
  name = '';

 

  constructor(private productService: ProductService,httpClient:HttpClient) { }

  ngOnInit(): void {
    this.retrieveLaptops();
    
  }
  
 

  




  retrieveLaptops(): void {
    this.productService.getAll()
      .subscribe(
        data => {
          this.laptops = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveLaptops();
    this.currentLaptop = {};
    this.currentIndex = -1;
  }

  setActiveLaptops(laptop: Laptop, index: number): void {
    this.currentLaptop = laptop;
    this.currentIndex = index;
  }

  removeAllLaptops(): void {
    this.productService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  
}


