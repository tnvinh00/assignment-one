import { MyAlert } from './../../models/alert';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-hello-user',
    templateUrl: './hello-user.component.html',
    styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {
    user: User = new User();
    myalert: MyAlert = new MyAlert();
    public username: string = '';
    IsSayHello: boolean = false;

    constructor() {

    }

    ngOnInit() {
    }

    btnResetUser_Click() {
        this.user.firstname = '';
        this.user.lastname = '';
    }

    btnSayHello_Click() {
        this.IsSayHello = true;
        this.myalert.message = 'Hello ' + this.toCapitalize(this.user.firstname.trim()) + ' ' + this.toCapitalize(this.user.lastname.trim());
        this.myalert.type = 'success';
    }

    // Upper first character
    toCapitalize(text: string): string {
        return text[0].toUpperCase() + text.slice(1);
    }

    alert_Close() {
        this.IsSayHello = false;
    }
}
