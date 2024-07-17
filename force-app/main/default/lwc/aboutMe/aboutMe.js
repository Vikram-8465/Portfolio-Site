import { LightningElement } from 'lwc';
import ImageUrl from '@salesforce/resourceUrl/images';
export default class AboutMe extends LightningElement {
    aboutMe = ImageUrl + '/about-me.png';
}