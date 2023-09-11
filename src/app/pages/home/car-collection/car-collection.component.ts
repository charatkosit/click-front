import { Component, OnInit, Input } from '@angular/core';

import { productSlider } from '../data';

@Component({
	selector: 'molla-car-collection',
	templateUrl: './car-collection.component.html',
	styleUrls: ['./car-collection.component.scss']
})

export class CarCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	productSlider = productSlider;

	constructor() { }

	ngOnInit(): void {
	}
}
