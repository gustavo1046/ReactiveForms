import { Component } from '@angular/core';
import { FormComponent } from '../../Components/form/form.component';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

}
