import {Profile} from '../Profile/profile';

export class Account {
  balance: number;
  currency_id: number;
  funding_source: number;
  is_prefferd: number;
  is_public: number;
  pre_authorize: number;
  product_id: number;
  profile_id: number;
  parent: Profile;

  // constructor(body: string,
  //             id: number,
  //             title: string,
  //             userId: number) {
  //
  //   this.body = body;
  //   this.id = id;
  //   this.title = title;
  //   this.userId = userId;
  //
  // }

  constructor(values: Object = {}, profile) {
    Object.assign(this, values);
    this.parent = profile;

  }


  // getId() {
  //     return this.owner_id;
  // }
  // //
  // getTitle() {
  //     return this.title;
  // }
}
