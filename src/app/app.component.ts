import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  registerForm!: FormGroup;
  submitted: boolean = false;

  constructor(private fb:FormBuilder ) {
    this.registerForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  submitData(){
    this.submitted = true;
    alert(`Hola ${this.user?.value}`)
    this.registerForm.reset();
  }
  get user() { return this.registerForm.get('username')}
  get email() { return this.registerForm.get('email')}

ngOnInit(): void{}

}
