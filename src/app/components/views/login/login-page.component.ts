import {Component, OnInit} from '@angular/core';
import {Router, Routes} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  isButtonEnabled: boolean;

  constructor(
    private router: Router) {
  }

  ngOnInit() {
  }

  public verifyDetailsAndRoute(): void {
    this.router.navigate(['/home']);
  }

  public checkInputs(event: Event): void {
    if ((event.target as HTMLInputElement).value !== '') {
      this.isButtonEnabled = true;
    } else {
      this.isButtonEnabled = false;
    }
  }
}
