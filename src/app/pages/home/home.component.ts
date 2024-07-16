import { Component } from '@angular/core';
import { SectionHeroComponent } from '../../components/section-hero/section-hero.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SectionHeroComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
