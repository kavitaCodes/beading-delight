import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  @ViewChild('f', { static: true }) contactForm: NgForm;
  defaultText = 'We would love to hear from you!';
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.contactForm);
    this.contactForm.reset();
  }

  deleteText() {
    this.defaultText = '';
  }
}
