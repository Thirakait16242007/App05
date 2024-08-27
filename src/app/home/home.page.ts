import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  items=[
    {
      id:1,
      name:'Product A',
      price: 200,
      detail:'this is a product A',
      imageURL: 'https://img.salehere.co.th/p/1200x0/2022/09/30/4zgfatslpavb.jpg',
    },
    {
      id:2,
      name:'Product B',
      price: 250,
      detail:'this is a product B',
      imageURL: 'https://files.gqthailand.com/uploads/best-hats-caps-buckets-for-men-1.jpg',
    },
    {
      id:3,
      name:'Product C',
      price: 300,
      detail:'this is a product C',
      imageURL: 'https://drx7pnvuocl0e.cloudfront.net/media/catalog/product/cache/16bf2ab692fb97ab65dc88e51ac592fb/2/4/240123-2694.jpg',
    },
    {
      id:4,
      name:'Product D',
      price: 350,
      detail:'this is a product D',
      imageURL: 'https://down-th.img.susercontent.com/file/257ddbce18f264229198fd947e53eb2e',
    }
  ]
}
