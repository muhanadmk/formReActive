import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
})
export class FromComponent implements OnInit {

  public form: any;
  isParacetamolSelected: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      paracetamol: this.fb.group({
        dosageMg: [null, [Validators.required]],
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
        precision: [null, Validators.required],
      }),
      chekded: this.fb.group({
        appuiSverifies: [''],
        instalation: [''],
      }),
      imc: this.fb.group({
        poids: [0],
        taile: [0],
      })
    },{
      updateOn: 'blur'
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

 CalcImc(){
   const imcInput = this.form.value.imc; 
  if (imcInput.poids || imcInput.poids < 0) {
    console.log('err poids moins zero');
  }

  if (imcInput.taile || imcInput.taile < 0) {
    console.log('err taile moins zero');
  }
  
  let imcCalc= (imcInput.poids ) / (imcInput.taile * imcInput.taile);
  console.log(imcCalc);
  
 }

 onSubmit(){
   console.log(this.form.value);
 }
}
