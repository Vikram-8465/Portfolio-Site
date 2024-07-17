import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class Hero extends LightningElement {
    imageURl = IMAGES + '/hero.png';
}