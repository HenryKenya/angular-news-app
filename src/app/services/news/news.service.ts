import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class NewsService {

  newsArray = String['']

  constructor(){}
  getNewsItems():Observable<String[]>{
    const news = ['Habari', 'Taarifa']
    const newsItems = of(news)
    
    return newsItems
  

  }
}