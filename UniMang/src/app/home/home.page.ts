import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MangaService } from '../services/manga.service';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { HighlightScoreDirective } from '../directives/highlight-score.directive';
import { TruncatePipe } from '../pipes/truncate.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [
  IonicModule,
  CommonModule,
  FormsModule,
  HttpClientModule,
  RouterModule,
  CapitalizePipe,
  TruncatePipe,
  HighlightScoreDirective
  ],
})
export class HomePage {
  searchTerm = '';
  mangas: any[] = [];

  constructor(private mangaService: MangaService, private router: Router) {}

  searchManga() {
    if (this.searchTerm.trim() === '') return;
    this.mangaService.getMangas(this.searchTerm).subscribe((res: any) => {
      this.mangas = res.data;
    });
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
