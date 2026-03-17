import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable decarator provide a infromation regarding how to create an object of the service and resolve / inject the depedencies when they required
@Injectable({
  providedIn: 'root', // create a single object throughout your application and provide the same onject instance when they required
})
export class DataService {

  url = "https://jsonplaceholder.typicode.com/posts"

  // constructor injection : we can able to inject the external objects /depedencies into your DataService at the time of object creation
  constructor(private http: HttpClient) { }

  // Observable : it is a stream of data that can be observed and subscribed to. It allows you to handle asynchronous data and events in a reactive programming style.
  getData(): Observable<Data[]> {
    return this.http.get<Data[]>(this.url);
  }
}

// with the help of interfaces i can represent my data receving / sending formate
export interface Data {
  "userId": Number,
  "id": Number,
  "title": String,
  "body": String
}