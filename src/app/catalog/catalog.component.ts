import { Component, OnInit } from '@angular/core';
import { CatalogService } from './catalog.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog-component',
  templateUrl: 'catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private catalogComponent : CatalogService) { }

  ngOnInit(): void {
  }

  catalogItems : Product[] = this.catalogComponent.catalogItems;

}
