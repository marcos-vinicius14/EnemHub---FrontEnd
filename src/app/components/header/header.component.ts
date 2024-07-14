import { Component } from '@angular/core';

import { MatMenuModule, MatMenuTrigger } from  '@angular/material/menu'
import { MatButtonModule } from  '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
}
