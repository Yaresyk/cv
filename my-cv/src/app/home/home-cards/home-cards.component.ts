import { Component, OnInit } from '@angular/core';

interface Item {

	nameMassage: string;

	mainImageUrl: string;
	description: string;
	price: string;
	detail: string;
	
};

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.css']
})
export class HomeCardsComponent implements OnInit {

	constructor() { }
	Card: Item[] = [

		{
			nameMassage: 'ПЕРШИЙ ТЕСТОВИЙ САЙТ ',
			mainImageUrl: '/assets/img/foto7.jpg',
			description: ' Мій перший тетовй сайт. На основі Ангуляру. Масажний салон  ',
			price: '',
			detail: 'ДЕТАЛЬНІШЕ',
			
		},
		{
			nameMassage: 'МОЄ ПЕРШЕ РУЗЮМЕ',
			mainImageUrl: '/assets/img/foto7.jpg',
			description: ' Моє резюме.  На основі Ангуляру. ',
			price: '',
			detail: 'ДЕТАЛЬНІШЕ',
			
		},

		{
			nameMassage: 'GitHub',
			mainImageUrl: '/assets/img/foto7.jpg',
			description: ' Ефективна боротьба з целюлітом Зменшення в обсязі від 3 см Робота з якісною косметикою Позбавлення від “Апельсинової кірки” ',
			price: '600грн',
			detail: 'ДЕТАЛЬНІШЕ',
			
		},


		
		
	]
	

  ngOnInit(): void {
  }

}
