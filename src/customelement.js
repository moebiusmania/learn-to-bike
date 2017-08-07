'use strict';

customElements.define('x-test', class extends HTMLElement {

  constructor(){
    super();
    this.SD = this.attachShadow({mode: 'open'});
  }

  connectedCallback(){
    const list = ['one','two','three'];
    const src = this.getAttribute('source') || 'no one...';

    this.SD.innerHTML = `
    <style>
      ul{ border: 1px dashed #ccc}
      p span{ font-weight: bold}
    </style>
    <p>From: <span>${src}</span></p>
    <ul>
      ${list.map((e,i) => {
        return `<li>${e}</li>`
      }).join('')
    }</ul>`;
  }

});