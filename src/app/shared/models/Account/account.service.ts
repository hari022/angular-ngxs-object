import {Injectable} from '@angular/core';
import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Profile} from '../Profile/profile';
import {GetAccounts} from './account.actions';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private store: Store) {
  }

  getAccounts(profile: Profile) {
    this.store.dispatch(new GetAccounts(profile));
  }
}
