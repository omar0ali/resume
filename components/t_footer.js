class FooterComponent extends HTMLElement {
	connectedCallback() {
		this.loadContent();
	}
	async loadContent() {
		const html = await fetch("components/footer.html");
		this.innerHTML = await html.text();
	}
}

customElements.define("t-footer", FooterComponent);