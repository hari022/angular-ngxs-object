import {Model} from '../model';

export class Profile extends Model {
  nick_name: string;
  owner_id: number;
  profile_name: string;
  profile_origin_id: number;
  status: string;
  user_id: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);

  }


}
