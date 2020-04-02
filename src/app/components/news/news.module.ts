import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
// import { HttpClient, HttpHeaders } from "@angular/common/http";

import { NewsComponent } from './news.component'
import { AppComponent } from '../../app.component'
import { NewsService } from "./../../services/news/news.service";


@NgModule({
  declarations: [AppComponent, NewsComponent],
  imports: [BrowserModule],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
