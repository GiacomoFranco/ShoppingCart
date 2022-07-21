import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css']
})
export class NavDrawerComponent implements OnInit {

  @Output() closeMenuEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.closeMenuEmitter.emit();
  }
}
