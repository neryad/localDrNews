import { Component, OnInit } from '@angular/core';
import { NewsService } from './shared/services/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'localDrNews';
  constructor(private newsService: NewsService) {}
  ngOnInit(): void {
    this.loadNews('listin');
  }

  loadNews(mediaName: string) {
    this.newsService.getNews(mediaName).subscribe((res) => {
      console.log(res);
    });
  }
}
