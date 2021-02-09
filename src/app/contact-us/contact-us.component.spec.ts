import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ContactUsComponent } from './contact-us.component';

describe('ContactUsComponent', () => {
  let component: ContactUsComponent;
  let fixture: ComponentFixture<ContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactUsComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[Email - check - Invalid] - should check email field is not valid',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        let email = component.contactForm.form.controls['email'];
        expect(email.valid).toBeFalsy();
        expect(component.contactForm.valid).toBeFalsy();
        email.setValue('abc');
        expect(email.errors['email']).toBeTruthy();
      });
    })
  );

  it('[Name -required ] should check that the name field is not left blank',
    waitForAsync(() => {
      fixture.whenStable().then(() => {
        let name = component.contactForm.form.controls['name'];
        expect(name.valid).toBeFalsy;
        expect(component.contactForm.valid).toBeFalsy();
        expect(name.errors['required']).toBeTruthy();
      });
    })
  );
});
