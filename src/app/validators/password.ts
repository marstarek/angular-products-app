import { AbstractControl, ValidationErrors } from "@angular/forms";
export class PasswordValidator {
  static ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get("password").value;
    let confirmPass = group.get("confirmPassword").value;
    return pass === confirmPass ? null : { notSame: true };
  };
}
