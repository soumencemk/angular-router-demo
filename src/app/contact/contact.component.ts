import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createInvalidEmailDomainValidator } from './InvalidEmailDomain';

const invalidEmailDomain = createInvalidEmailDomainValidator(['gmail.com','yahoo.com','hotmail.com']);

@Component({  
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],  
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderemail: new FormControl('', [
      Validators.required,
      Validators.email,
      invalidEmailDomain,
    ]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  submitForm() {
    console.log(this.contactForm.valid);
  }
}
