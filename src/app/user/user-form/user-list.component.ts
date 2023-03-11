import { Component } from "@angular/core";
import { User, UserServiceService } from "src/app/service/user.service";
import { BrowserModule } from '@angular/platform-browser'

@Component({
    selector: 'user-list',
    template: `
        <h3>Users</h3>
        <div *ngFor="let user of users">
            <h4>{{user.name}}, {{user.email}}</h4>
        </div>
    `,
    standalone: true,
    imports: [BrowserModule]
})

export class UserListComponent {

    constructor(private userService: UserServiceService) { }

    users = this.userService.getUsers();

}