import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  constructor( private route:ActivatedRoute){}

  product :Product | undefined

  ngOnInit(){
       const id:Number  = Number(this.route.snapshot.paramMap.get('id'))
      this.product= products.find(p=> p.id == id)
       


  }

}
