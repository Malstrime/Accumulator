import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { Accumulator } from './../../shared/accumulator';

@Component({
    selector: 'acc-list',
    templateUrl: 'acc-list.component.html'
})

export class AccumulatorListComponent {
   // public accumulators: Accumulator[];
   public accumulators = [
       {"AccumulatorId":"0DB021A1-54EB-4AF2-A375-08469EB98C6F","Name":"SV_WorkReductionYear","AccumulatorType":"Fixed","EmploymentLevel":"Employment","IsSynced":false}
   ]

    // constructor (private http: Http){
    //     this.accumulators = this.http.request('./../../shared/accumulator.json')
    //                         .map(res => res.json);
    // }
 }