import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { fromObservable } from "../interop/fromObservable";
import { startWith } from "rxjs";

const BE_URL = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
    providedIn: 'root'
})

export class PostsService {

    constructor(private http: HttpClient) { }

    public getPosts() {
        // You need a default value, or else it'll call signal called before error, so use second argument as []
        return fromObservable(this.http.get(BE_URL), []);
    }
}


