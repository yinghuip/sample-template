import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

/**
 * @title Display value autocomplete
 */
@Component({
  selector: "autocomplete-display-example",
  templateUrl: "autocomplete-display-example.html",
  styleUrls: ["autocomplete-display-example.css"]
})
export class AutocompleteDisplayExample implements OnInit {
  constructor(private http: HttpClient) {
    this.getUsers();
    this.getDepot();
  }

  ngOnInit() {}

  users: User[] = [];
  getUsers() {
    this.http.get<User[]>("assets/users.json").subscribe((data: User[]) => this.users = data);
  }
  depot:string[]=[];
    getDepot() {
    this.http.get<string[]>("assets/depot.json").subscribe((data: string[]) => this.depot = data);
  }
}

export class User {
  public UserName: string;
  public Timezone: number;
}

export class UserDepot{
  public UserName:string;
  public Depot:string;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
