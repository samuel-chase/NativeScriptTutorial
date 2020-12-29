import { Component } from "@angular/core";
import { User } from "./shared/user/user.model";
import { UserService } from "./shared/user/user.service";

@Component({
  selector: "gr-app",
  template: "<page-router-outlet></page-router-outlet>"
})

@Component({
  selector: "gr-login",
  providers: [UserService],
  moduleId: module.id,
  styleUrls: ["./login/login.component.css"],
  templateUrl: "./login/login.component.html"
})

export class AppComponent {
  user: User;
  isLoggingIn = true;

  //TODO: hardcoded for dev purposes, clear out before Prod
  constructor(private userService: UserService) {
    this.user = new User();
    this.user.email = "samuel.chase@gmail.com";
    this.user.password = "test1234";
  }

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    // TODO: Define
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        },
        (exception) => {
          if (exception.error && exception.error.description) {
            alert(exception.error.description);
          } else {
            alert(exception)
          }
        }
      );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}