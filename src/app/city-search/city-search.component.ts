import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
//import { EventEmitter } from 'events';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>();
  search = new FormControl('',[Validators.minLength(3),Validators.maxLength(50)]);
  constructor() { }

  ngOnInit() {
    
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue:string) => {
      if(!this.search.invalid){
        this.searchEvent.emit(searchValue);
      
      }
    })
  }

}
