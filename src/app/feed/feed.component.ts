import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { News } from '../models';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

    news: News[] = [];

    constructor(
        private newsService: NewsService
    ) { }

    ngOnInit(): void {
        this.getNews()
    }

    getNews() {
        this.newsService.getNews().subscribe((data) => {
            this.news = data
        });
    }
}
