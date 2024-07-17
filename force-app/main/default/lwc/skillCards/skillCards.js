import { LightningElement } from 'lwc';
import IMAGES from '@salesforce/resourceUrl/images';

export default class SkillCards extends LightningElement {
    imageURlOne = IMAGES + '/admin.png';
    imageURlTwo = IMAGES + '/service.png';
    imageURlThree = IMAGES + '/training.png';

}