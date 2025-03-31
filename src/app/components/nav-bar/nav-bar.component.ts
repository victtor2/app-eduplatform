import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
    selector: 'app-nav-bar',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private cartService: CartService, private authService: AuthService) { }

  openCart(){
    this.cartService.showCart();
  }

}
