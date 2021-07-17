import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Laptop } from 'src/app/models/laptop.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-laptop-details',
  templateUrl: './laptop-details.component.html',
  styleUrls: ['./laptop-details.component.css']
})
export class LaptopDetailsComponent implements OnInit {

  currentLaptop: Laptop = {
    id:'',
    name: '',
    price: '',
   
  };
  message = '';

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private httpClient:HttpClient) { }

  ngOnInit(): void {
    this.message = '';
    this.getLaptop(this.route.snapshot.params.id);
  }

  getLaptop(id: string): void {
    this.productService.get(id)
      .subscribe(
        data => {
          this.currentLaptop = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updateLaptop(): void {
    this.message = '';

    this.productService.update(this.currentLaptop.id, this.currentLaptop)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'This product was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteLaptop(): void {
    this.productService.delete(this.currentLaptop.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/laptops']);
        },
        error => {
          console.log(error);
        });
  }

}
