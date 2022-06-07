import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
})
export class FromComponent implements OnInit {

  form: any;
  isParacetamolSelected: boolean = false;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this._fb.group({
      paracetamol: this._fb.group({
        dosageMg: [''],
        time: [''],
      }),
      ventilation: this._fb.group({
        preOxygenation: [''],
        masqueFacial: [''],
        masqueLarynge: [''],
        laryngoStandrd: [''],
        videoLaryngoscopie: [''],
        fibroIntubation: [''],
      }),
      precisions: this._fb.group({
        volumeRetransfuseMl: [''],
        precision: ['', Validators.required],
      }),
      chekded: this._fb.group({
        appuiSverifies: [''],
        instalation: [''],
      }),
      imc: this._fb.group({
        poids: [''],
        taile: [''],
      })
    }, {
      updateOn: 'blur'
    });
  }

  setParacetamolSelected($event: any) {

    if ($event.target.checked === true) {
      this.isParacetamolSelected = true;
    }

    if ($event.target.checked === false) {
      this.isParacetamolSelected = false;
    }

  }

  calcImc() {
    const imcInput = this.form.value.imc;
    if (imcInput.poids || imcInput.poids < 0) {
      console.log('err poids moins zero');
    }

    if (imcInput.taile || imcInput.taile < 0) {
      console.log('err taile moins zero');
    }

    let imcCalc = (imcInput.poids) / (imcInput.taile * imcInput.taile);
    console.log(imcCalc);

  }

  checkVentilation(control : FormControl){
    const ventilation = this.form.value.ventilation;
    if (ventilation != null){
      if (!ventilation.masqueFacial && !ventilation.masqueLarynge
        && ventilation.laryngoStandrd){
        return {errCehckOne: true}
      }
    }
  return null
  }


  onSubmit() {
    console.log(this.form.value);
  }
}
