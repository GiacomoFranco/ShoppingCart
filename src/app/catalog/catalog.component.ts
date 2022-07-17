import { Component, OnInit } from '@angular/core';
import { CatalogServiceService } from './catalog-service.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog-component',
  templateUrl: 'catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponentComponent implements OnInit {

  constructor( private catalogComponent : CatalogServiceService) { }

  ngOnInit(): void {
  }

  catalogItems : Product[] = this.catalogComponent.catalogItems;

}
