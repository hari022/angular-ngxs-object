import {Profile} from '../Profile/profile';
import {GetAccounts} from './account.actions';
import {State, Select} from '@ngxs/store';
import {AccountState} from './account.state';

export class AccountSet {

  parent: Profile;
  elems: Object[];

  // @Select(AccountState.accounts) accounts$;

  constructor(profile: Profile) {
    this.parent = profile;
    this.store.dispatch(new GetAccounts(profile));
    this.elems = this.accounts$;
  }
}
