import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Meu primeiro título';
  inputContent = '';
  tituloDinamico = 'DSADSA';
  aparecerComponente = true;

  emiteAlerta(event:any){
    alert(event);
  }




}
