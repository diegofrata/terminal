import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from '../../../node_modules/rxjs';

export interface UserAccount {
    username: string;
    password: string;
    admin: boolean;
}

@Injectable()
export class LoginService {
    private users = [
        { username: 'guest', password: '', admin: false },
        { username: 'root', password: '123', admin: true }
    ];

    currentUser = new ReplaySubject<UserAccount>(1);

    login(username, password) {
        const account = this.users.find(x => x.username === username);

        if (!account) throw 'invalid username.';

        if (account.password !== password) throw 'invalid password.';

        this.currentUser.next(account);
    }

}