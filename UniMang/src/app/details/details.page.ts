import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { MangaService } from '../services/manga.service';
import { HighlightScoreDirective } from '../directives/highlight-score.directive'; // <--- Importe aqui

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [
    IonicModule, 
    CommonModule, 
    HttpClientModule, 
    CapitalizePipe,
    HighlightScoreDirective 
  ],
})
export class DetailsPage implements OnInit {
  manga: any;

  constructor(private route: ActivatedRoute, private mangaService: MangaService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mangaService.getMangaById(id).subscribe((res: any) => {
        this.manga = res.data;
      });
    }
  }
}