// myComponent.js
import { LightningElement } from 'lwc';
import { LoggerMixin } from 'c/loggerMixin';
import { NavigationMixin } from 'lightning/navigation';

export default class MyComponent extends LoggerMixin(
	NavigationMixin(LightningElement)
) {
	connectedCallback() {
		this[NavigationMixin.GenerateUrl]({
			type: 'standard__recordPage',
			attributes: {
				recordId: '005B0000001ptf1IAE',
				actionName: 'view',
			},
		}).then((url) => {
			this.log(`Generated Url: ${url}`);
		})
	}

	handleError() {
		this.error('An Error occured');
	}
}