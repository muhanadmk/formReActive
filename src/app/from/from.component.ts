import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.css']
})
export class FromComponent implements OnInit {

  form: any;
  isParacetamolSelected: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      paracetamol: this.fb.group({
        dosageMg: [''],
        time: [''],
      }),
      ventilation: this.fb.group({
        preOxygenation: [''],
        masqueFacial: [''],
        masqueLarynge: [''],
        laryngoStandrd: [''],
        videoLaryngoscopie: [''],    
        fibroIntubation: [''],
      }),
      precisions: this.fb.group({
        volumeRetransfuseMl: [''],
        precision: [''],
      }),
      chekded: this.fb.group({
        appuiSverifies: [''],
        instalation: [''],
      })
    });
  }

  setParacetamolSelected($event :any) {

    if ($event.target.checked === true) {
      this.isParacetamolSelected = true;
    }

    if ($event.target.checked === false){
      this.isParacetamolSelected = false;
    }

 }

 onSubmit(){
   console.log(this.form.value);
 }
}
