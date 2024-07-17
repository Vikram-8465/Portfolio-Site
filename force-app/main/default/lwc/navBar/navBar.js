import { LightningElement } from 'lwc';

export default class NavBar extends LightningElement {
handleNavBar() {
    const navMenu = this.template.querySelector('.topnav');
     navMenu.classList.toggle('responsive');
  }
}