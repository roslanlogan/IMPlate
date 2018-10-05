import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';


@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: Http, private router: Router, private toasterService: ToasterService) { }


  sendMail(mail) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    var params = 'msg=' + mail.msg + '&phone=' + mail.phone + '&mail=' + mail.mail + '&name=' + mail.name;
    return this.http.post(environment.url + '/mail.php', params, { headers: headers }).subscribe((res: any) => {
      console.log(res.json())
      if (res.ok) {
        this.toasterService.pop('success', 'Sent', res._body);
      } else {
        this.toasterService.pop('warning', 'Error', res._body);
      }

    });
  }
}
