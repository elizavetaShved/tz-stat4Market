import SlimSelect from 'slim-select'

export class Header {
	hostElem;
	select;

	constructor() {
		this.hostElem = document.querySelector('#header-host');
		this.select = document.querySelector('#slim-select');

		new SlimSelect({
			select: this.select
		})

		document.addEventListener('scroll', () => {
			if (window.pageYOffset > 1) {
				this.hostElem.classList.add('header__with-shadow');
			} else {
				this.hostElem.classList.remove('header__with-shadow');
			}
		})
	}
}
