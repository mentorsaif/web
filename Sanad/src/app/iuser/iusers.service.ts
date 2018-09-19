import { Injectable, inject, Inject } from '@angular/core';
import { Subject, BehaviorSubject } from "rxjs";
import { Iuser } from './iuser.model';

@Injectable()
export class UsersService{
    currentUser: Subject<Iuser> = new BehaviorSubject<Iuser>(null);

    public setCurrentuser(newUser: Iuser): void{
        this.currentUser.next(newUser);
    }
}

export const userServiceInjectables: Array<any> = [
    UsersService
];