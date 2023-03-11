import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User, UserServiceService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule]
})
export class UserFormComponent {

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required]
  }
  )

  onSubmit() {
    if (this.userForm.valid) {
      const { name, email } = this.userForm.value;
      this.userService.addUser({
        name,
        email
      } as User);
    }

  }

}
