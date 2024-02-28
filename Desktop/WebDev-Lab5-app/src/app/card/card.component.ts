import {Component, EventEmitter, Input} from '@angular/core'
import {ICard} from "../data/cards";

@Component({
  templateUrl: './card.component.html',
  selector: 'app-card',
  styleUrls: ['./card.component.css'],
  interpolation: ['{{', '}}']
})

export class CardComponent {
  @Input() card: ICard

  details = false

  deleteItm = true

  like: number = 0;

  likeIncr() {
    this.like++;
  }

  deleteItem() {
    this.deleteItm = false;
  }

  shareOnWhatsapp(card: ICard) {
    const phoneNumber = "+77001590347";
    const message = `Check out this product: ${card.title} for ${card.price}₸ at ${card.link}`;
    const url = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phoneNumber)}&text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

  shareOnTelegram(card: ICard) {
    const username = "dimash1647"; 
    const message = `Check out this product: ${card.title} for ${card.price}₸ at ${card.link}`;
    const url = `https://t.me/${encodeURIComponent(username)}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  }

}
