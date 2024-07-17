import { LightningElement, api } from 'lwc';

export default class Snackbar extends LightningElement {
    snackbarMessage;
    
    @api
    showSnackbar(message) {
        this.snackbarMessage = message;

        // Get the snackbar DIV
        var  snackbar= this.template.querySelector(".snackbar");

        // Add the "show" class to DIV
        snackbar.classList.add('show');
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ snackbar.classList.remove('show');
             }, 2700);
      }
}