import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'app-date-info',
    template: ``
})

export class DateInfoComponent implements OnInit {
    @Output()
        public dateNow = new EventEmitter<Date>();
    
    ngOnInit () {
        setInterval(() => {
            this.dateNow.emit(new Date());  
        }, 100)
    }
}