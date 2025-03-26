import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // ngFor
import { FormsModule } from '@angular/forms'; // para poder utilizar ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'proyecto-angular';
  usuario: string = "";
  datosUsuario = {
    login: "",
    avatar_url: "",
    html_url: ""
  };
  
  existe: boolean = false;
  oculto: boolean = false;

  obtenerDatosGitHub(){
    fetch(`https://api.github.com/users/${this.usuario}`)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      else{
        throw new Error("El usuario no existe.");
      }
    })
    .then(datos => {
      this.datosUsuario = datos;
      this.existe = false;
      this.oculto = true;
      this.usuario = "";
    })
    .catch(error =>{
      console.log(error);
      this.existe = true;
      this.oculto = false;
    })
  }

}