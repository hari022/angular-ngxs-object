import {Account} from './account';
import {Profile} from '../Profile/profile';

export class GetAccounts {

  static readonly type = '[Account] GetAccounts';

  constructor(public parent: Profile) {
  }

}
