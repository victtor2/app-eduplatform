import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart/cart.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, FooterComponent, CartComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'edu-plataform';

  constructor(private cartService: CartService){}

  isCartVisible(){
    return this.cartService.isCartVisible();
  }
}
