import { AfterViewInit, Component, OnChanges,OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'parent-life',
  imports: [],
  templateUrl: './parent-life.component.html'
})
export class ParentLifeComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit  {

  constructor() {
    console.log('Parent constructor');
  }

  ngOnInit() {
    console.log('Parent Init');
  }

  ngOnDestroy() {
    console.log('Parent Destroy');
  }
  ngOnChanges() {
    console.log('Parent Changes');
  }
  ngAfterViewInit() {
    console.log('Parent AfterViewInit');
  }

}
