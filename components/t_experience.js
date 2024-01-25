class ExperienceComponent extends HTMLElement {
	connectedCallback() {
        this.loadContent();
    }
    async loadContent() {

        const html = await fetch("components/experience.html");
        this.innerHTML = await html.text();
    }
}

customElements.define("t-experience", ExperienceComponent);
