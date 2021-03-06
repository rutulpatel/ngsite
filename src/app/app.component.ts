import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { AppService } from './app.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent implements OnInit {
    firstName: string;
    lastName: string;
    overviewData: any[];

    constructor(private _appService: AppService) {

    }

    ngOnInit(): void {
        console.log('APP_INIT');
        this._appService.getData("overview")
                        .subscribe(data => {
                            this.overviewData = data[0];
                            this.firstName = this.overviewData["firstName"];
                            this.lastName = this.overviewData["lastName"];
                            console.log(this.overviewData);
                        });
    }

   }
