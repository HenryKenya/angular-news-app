import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";

import { News } from "src/app/_models/news";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  // the base URL
  public baseUrl = environment.BASE_URL;

  //to execute all news items
  private currentNewsSubject: BehaviorSubject<News>;

  //return all news items
  public currentNews: Observable<News>;

  // http options used for making API calls
  private httpOptions: any;


  constructor(private http: HttpClient) {
    // this.currentNewsSubject = new BehaviorSubject<News>(news);
    this.currentNews = this.currentNewsSubject.asObservable();
    this.httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Accept: "application/json"
      })
    };
  }

  public get allCurrentNews(): News {
    return this.currentNewsSubject.value;
    
  }

  getCurrentNews(title: string) {
    return this.http.get<any>(this.baseUrl+"posts").subscribe(news =>
     
     console.log(news)
    )
     
  }
}
