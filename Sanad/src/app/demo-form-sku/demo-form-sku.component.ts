import { Component, OnInit } from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-demo-form-sku',
  templateUrl: './demo-form-sku.component.html',
  styleUrls: ['./demo-form-sku.component.css']
})
export class DemoFormSkuComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku' : ['ABC123', Validators.required]
    })
    this.sku = this.myForm.controls['sku'];
  }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }

}
