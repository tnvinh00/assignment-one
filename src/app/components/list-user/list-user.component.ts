import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/user.service';

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
    user: User = new User();
    listUsers: User[] = [];
    constructor(
        private userService: UserService,
    ) { }

    ngOnInit() {
        this.listUsers = this.userService.getlistUsers();
        console.log(this.listUsers)
    }

    btnAddUser_Click(){
        let newuser = {
            firstname: this.toCapitalize(this.user.firstname.trim()),
            lastname: this.toCapitalize(this.user.lastname.trim())
        }
        this.userService.addUser(newuser);
        this.user = new User();
    }

    deleteUser_Click(index: number) {
        this.userService.deleteUser(index);
    }
    // Upper first character
    toCapitalize(text: string): string {
        return text[0].toUpperCase() + text.slice(1);
    }
}
