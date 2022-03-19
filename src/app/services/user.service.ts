import { User } from '../models/user.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: User[] = [
    new User('Maliki', 'BARRY', 'milky@Koder.com', 'jus de bissap', ['jouer à wolfy', 'apprendre']),
    new User('Will', 'Alexander', 'will@will.com', 'jus d\'orange', ['coder', 'boire du café'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}