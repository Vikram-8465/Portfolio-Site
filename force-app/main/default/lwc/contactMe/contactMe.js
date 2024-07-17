import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import LEAD_OBJECT from '@salesforce/schema/Lead';

export default class ContactMe extends LightningElement {
    leadRecord ={};  
    showModal = false;
    clickHandler(){
       this.showModal = true;
    }

    closeHandler(){
        this.showModal = false;
        this.resetHandler();
    }

    changeHandler(event) {
        const { name, value } = event.target;
        this.leadRecord[name] = value;
    }

    resetHandler(){
        const fields = this.template.querySelector('form');
        if(fields){
           fields.reset();
        }
        this.leadRecord = {};
        console.log(JSON.stringify(this.leadRecord));
    }

      submitHandler(event){
        event.preventDefault();
        const fields = this.template.querySelectorAll('lightning-input');
        let allValid = true;
        fields.forEach(field => {
            if (!field.checkValidity()) {
                field.reportValidity();
                allValid = false;
            }
        });  
        
        if(allValid){
            this.insertRecord();
        }
       
    }

    insertRecord(){
        createRecord({ apiName: LEAD_OBJECT.objectApiName, fields: this.leadRecord })
        .then(() => {
            console.log(JSON.stringify('success'));
           this.template.querySelector('c-snackbar').showSnackbar('information submitted successfully');
        })
        .catch(error => {
            console.log(JSON.stringify(error));
           this.template.querySelector('c-snackbar').showSnackbar('information not nsubmitted');
        })
        .finally(() => {
            this.closeHandler();
            this.resetHandler();
        });
       
    }
}