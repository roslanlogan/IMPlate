import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MailService } from '../../service/mail/mail.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  mailForm: any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  allFieldError = false;
  constructor(private mailService: MailService) {
    this.mailForm = new FormGroup({
      name: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      phone: new FormControl('', Validators.required),
      msg: new FormControl('', Validators.required)
    });
  }
  map = {
    lat: 51.678418,
    lng: 7.809007,
  };
  ngOnInit() {
  }

  sendMail(mail) {
    this.allFieldError = true;
    if (this.mailForm.valid && (this.mailForm.dirty || this.mailForm.touched)) {
      this.allFieldError = false;
      this.mailService.sendMail(mail);
      this.mailForm.reset();
    }
  }
}
