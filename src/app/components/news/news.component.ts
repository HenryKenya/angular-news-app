import { Component, OnInit } from '@angular/core';
import { NewsService } from './../../services/news/news.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  theNews = ''
  eachNews = []
  constructor(private newsService: NewsService) { }

  ngOnInit() {
  }
  showNews(){
    this.newsService.getNewsItems().subscribe(theNews => this.eachNews = theNews)

    return this.eachNews
    
    
  ;
   

        
    
  }
}
