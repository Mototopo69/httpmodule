import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa-service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pagina2',
  imports: [CommonModule],
  templateUrl: './pagina2.html',
  styleUrl: './pagina2.css',
})
export class Pagina2 implements OnInit {
  data: any[] = [];

  constructor(private nasa: NasaService) {}

  ngOnInit() {
    this.nasa.getApod().subscribe((risposta: any) => {
      console.log(risposta); // ✅ Controllo in console
      this.data = risposta;
    });
  }
}
