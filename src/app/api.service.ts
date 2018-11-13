import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Post} from './post';
import {Profile} from './shared/models/Profile/profile';
import {Account} from './shared/models/Account/account';
import {getType} from '@angular/core/src/errors';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  getData() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(map(response => {
      //return response.map((x) => new Post(x.body, x.id, x.title, x.userId));
      return response.map((x) => new Post(x));

    }));
  }

  getProfile() {
    // return this.http.get<Profile[]>('https://waypay-test.firebaseio.com/profiles.json').pipe(map(response => {
    //     console.log(response)
    //     return response.map((x) => new Profile(x));
    // }));

    return this.http.get<Profile[]>('https://waypay-test.firebaseio.com/profiles.json').pipe(map(response => {
      return response.map((x) => new Profile(x));

    }));
  }

  getAccounts(parent) {
    return this.http.get<Account[]>('https://waypay-test.firebaseio.com/accounts.json?orderBy="profile_id"&startAt=' + parent.getId() + '&endAt=' + parent.getId()).pipe(map(response => {
      // temp method since firebase is sending us back an object rather than a Json array
      // we can remove it later
      let data = Array.from(Object.keys(response), k => response[k]);
      return data.map((x) => new Account(x, parent));
    }));
  }

}
