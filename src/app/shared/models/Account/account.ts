import {Profile} from '../Profile/profile';
import {Model} from '../model';


export class Account extends Model {
  balance: number;
  currency_id: number;
  funding_source: number;
  is_preferred: number;
  is_public: number;
  pre_authorize: number;
  product_id: number;
  profile_id: number;
  parent: Profile;
  name: string;


  constructor(values: Object = {}, profile) {
    Object.assign(this, values);
    this.parent = profile;

  }


}
