import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    listUsers: User [] = [
        {
            firstname: 'Vĩnh',
            lastname: 'Trịnh'
        }
    ]
    constructor() { }
    OnInit(){
    }

    getlistUsers(): User[] {
        return this.listUsers;
    }

    addUser(user: User){
        this.listUsers.push(user);
    }

    clearUsers(){
        this.listUsers = [];
        return this.listUsers;
    }

    deleteUser(index: number){
        this.listUsers.splice(index, 1);
    }
}
