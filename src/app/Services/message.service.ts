import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MessageService {

constructor(private http:HttpClient,public snackBar: MatSnackBar) { }
status:any
successMsg(flag:any){
  this.status='Success'
  if(flag=='SS'){
    this.snackBar.open('Saved successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
  }
  if(flag=='SU'){
    this.snackBar.open('Updated successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
  }
  if(flag=='SD'){
    this.snackBar.open('Deleted successfully!', '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });
  }
}
errorMsg(flag:any){
  if(flag=='ES'){
    this.snackBar.open('Save Failed!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });
  
  }
  if(flag=='EU'){
    this.snackBar.open('Update Failed!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  }
  if(flag=='ED'){
    this.snackBar.open('Delete Failed!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  }
  if(flag=='ND'){
    this.snackBar.open('No Data Found!', '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

  }
}
globalError(msg:any){
  this.snackBar.open(msg, '×', { panelClass: 'error', verticalPosition: 'top', duration: 3000 });

}
globalInfo(msg:any){
  this.snackBar.open(msg, '×', { panelClass: 'info', verticalPosition: 'top', duration: 8000 });

}
globalWarning(msg:any){
  this.snackBar.open(msg, '×', { panelClass: 'warning', verticalPosition: 'top', duration: 3000 });

}
globalSuccess(msg:any){
  this.snackBar.open(msg, '×', { panelClass: 'success', verticalPosition: 'top', duration: 3000 });

}
}
