import { Component, OnInit, Input } from '@angular/core';

import { productSlider } from '../data';

@Component({
	selector: 'molla-new-collection',
	templateUrl: './new-collection.component.html',
	styleUrls: ['./new-collection.component.scss']
})

export class NewCollectionComponent implements OnInit {

	@Input() products = [];
	@Input() loaded = false;

	productSlider = productSlider;

	constructor() { }

	ngOnInit(): void {
	}
}
