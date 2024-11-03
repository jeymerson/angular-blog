import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomeComponent} from './pages/home/home.component'
//remover
import {BigCardComponent} from "./components/big-card/big-card.component"
import {MenuBarComponent} from "./components/menu-bar/menu-bar.component"
import {MenuTitleComponent} from "./components/menu-title/menu-title.component"
import {SmallCardComponent} from "./components/small-card/small-card.component"
// até aqui
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, BigCardComponent, MenuBarComponent, SmallCardComponent, MenuTitleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog';
}
