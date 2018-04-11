import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Item } from '../models/item';
import { AddItemRequest } from '../models/add-item-request';
import { ItemResponse } from '../models/edit-item-response';

@Injectable()
export class ApiService {

    url: string;

    constructor(public http: HttpClient) {
        this.url = 'http://localhost:56180/api/';
    }

    getTest() {
        return 'Hello from ApiService';
    }

    GetAllItems(): Observable<ItemResponse> {
        return this.http.get<ItemResponse>(this.url + 'items');
    }
    
    addItem(value:AddItemRequest): Observable<any> {
        return this.http.post(this.url + 'items',value);
    }


}
