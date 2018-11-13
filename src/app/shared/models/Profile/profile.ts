import {Model} from '../model';
import {Account} from '../Account/account';
import {Select, Store} from '@ngxs/store';
import {AccountSet} from '../Account/account.set';
import {GetAccounts} from '../Account/account.actions';
import {AccountService} from '../Account/account.service';


export class Profile extends Model {
  nick_name: string;
  owner_id: number;
  profile_name: string;
  profile_origin_id: number;
  status: string;
  user_id: number;
  accounts: AccountSet;

  constructor(values: Object = {}, accountService: AccountService) {
    Object.assign(this, values);

  }

  getAccounts() {
    console.log('THIS!!!!!!');
    console.log(this);
    this.accountService.getAccounts(this);
    // this.store.dispatch(new GetAccounts(this));
    // this.accounts = new AccountSet(this);
    // return this.accounts;
    // if accounts is null
    // then call
    //this.store.dispatch((new GetAccounts(this))
    //this.accounts = new AccountSet(this)
    //}
    // return this.accounts
  }


}
