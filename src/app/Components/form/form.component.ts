import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  #fb = inject(FormBuilder)

  public SignForm = this.#fb.group({
    name: [''],
    email: [''],
    birth: [],
    password: ['']
  })
  
  public Submit(){
    if(this.SignForm.valid){
      console.log(this.SignForm.value);
    } 
  }
}

