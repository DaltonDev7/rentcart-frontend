import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class FormManagerService {

    public clearValidatorsForms(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
                this.clearControlValidators(form.get(key));
            }
        }
    }

    public enableFormControls(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
                form.get(key).enable();
            }
        }
    }

    public disableForms(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
               form.get(key).disable();
            }
        }
    }

    public clearValues(form : FormGroup, exepciones : string[] = []) {
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
               form.get(key).setValue(null);
            }
        }
    }

    public updateValueAndValidityForm(form : FormGroup, exepciones : string[] = [] ) {

        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
               form.get(key).updateValueAndValidity({emitEvent : false})
            }
        }
        
    }

    public setRequeridoForm(form : FormGroup, exepciones : string[] = []){
       
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
               form.get(key).setValidators( Validators.required )
            }
        }
    }

    public clearFormValidator(form : FormGroup, exepciones : string[] = []){

        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
               form.get(key).clearValidators()
            }
        }
    }

    public clearControlValidators(control : AbstractControl){
        control.clearValidators();
        control.updateValueAndValidity({emitEvent : false});
    }

    public getControls (formGroup :FormGroup , controlesKey : string[]){
        let controles :AbstractControl[] = [];    
        controlesKey.forEach((key) => {
            controles.push(formGroup.get(key));
        });

        return controles;
    }   

    public clearValueForms(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
                form.get(key).setValue(null);
            }
        }
    }

    public enableValidatorForm(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((exepcion) => exepcion == key)){
                form.get(key).enable();
            }
        }
    }


    public requiredControls(form : FormGroup, requeridos : string[] = []){
        for(let key in form.controls) {
            if(requeridos.find((requerido) => requerido == key)){
                form.get(key).setValidators([Validators.required]);
                form.get(key).updateValueAndValidity();
            }
        }
    }

   public getAllControls(form: FormGroup, exepciones : string[] = []){
    
        var controlesSacados = [];
        for(let key in form.controls) {
          if(!exepciones.find((control) => control == key)){
              controlesSacados.push(form.get(key));
          }
      }
      return controlesSacados;
    }

    public disabledAllControls(form : FormGroup, exepciones : string[] = []){
        for(let key in form.controls) {
            if(!exepciones.find((campo) => campo == key)){
                form.get(key).disable();
            }
        }
    }


    
    public setDisabledConstrols(controles : AbstractControl[], emit = true){
        controles.forEach((control) => {
            control.disable({emitEvent: emit});
        })
    }

    public setDisabledNullControls(controles : AbstractControl[] , controlsNulos ?: AbstractControl[]){
        controles.forEach((control) => {
            control.setValue(null);
            control.disable();
        })
        controlsNulos.forEach((control)=>{
            control.setValue(null);
            control.enable();
        })
    }



    public enableControls(controles : AbstractControl[], clean = true, emit = true){
        controles.forEach((control) => {
            if(clean){
                control.setValue(null);
            }
            control.enable({emitEvent: emit});
        })
    }

    public setRequiredControls(controles : AbstractControl[], emitValue = true){
        controles.forEach((control) => {
            control.setValidators(Validators.required);
            control.updateValueAndValidity({emitEvent : emitValue});
        })
     
    }


    public clearValidatorControls(controles : AbstractControl[], emit = true){
        controles.forEach((control) => {
            control.clearValidators();
            control.updateValueAndValidity({emitEvent : emit});
        })
    }

    public enableControlSetRequired(controles : AbstractControl[], emit = true){
        controles.forEach((control) => {
            control.enable();
            control.setValidators(Validators.required);
            control.updateValueAndValidity({emitEvent : emit});
        })
    }

    public setDisableControlClearValidator(controles : AbstractControl[], emit = true){
        controles.forEach((control) => {
            control.setValue(null);
            control.clearValidators();
            control.disable();
            control.updateValueAndValidity({emitEvent : emit});
        })
    }

    
}

