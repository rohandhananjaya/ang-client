import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) { }

  onSubmit(form: any) {
    if (form.valid) {
      const loginData = {
        username: form.value.username,
        password: form.value.password
      };

      this.http.post('https://localhost:7152/login', loginData)
        .subscribe(
          {
            next: (response) => {
              console.log('Login successful', response);
              this.successMessage = 'Login successful!';
              this.errorMessage = '';
            },
            error: (error) => {
              console.error('Login failed', error);
              this.errorMessage = 'Login failed. Please check your credentials.';
              this.successMessage = '';
            }
          }
        );
    }
  }
}