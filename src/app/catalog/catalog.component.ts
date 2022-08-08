import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from './catalog.service';
import { Product } from './product';
@Component({
  selector: 'app-catalog-component',
  templateUrl: 'catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  constructor( private catalogSvs : CatalogService, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  get catalogItems() : Product[]{
    const catalogItems = this.catalogSvs.catalogItems

    if (this.router.snapshot.queryParamMap.get('orderBy') === 'price') {
      catalogItems.sort((a,b) => b.price - a.price);
    }

    return catalogItems;
  }

}
