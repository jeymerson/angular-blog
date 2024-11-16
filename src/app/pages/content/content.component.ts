import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import {dataFake} from '../../data/datafake'

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  photoCover:string = "https://c4.wallpaperflare.com/wallpaper/412/431/811/abstract-wolf-art-colors-wallpaper-preview.jpg"; //vou deixar porque gostei
  contentTitle:string="Pagina oculta, você não deveria estar aqui!";
  contentDescription:string="Clique logo em voltar!!!!";
  private id:string | null = "0" //pode ser string ou nulo

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void{
    this.route.paramMap.subscribe( value =>
           this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)


  }
  setValuesToComponent(id:string | null){
    const result = dataFake.filter(
      articule => articule.id === id)[0] //indice 0 - pois é um array
 //filtranso o dataFake procurando um Id que seja iguao
 // ou passado como parametro
    if(result ){
      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
    }
    else{ console.log("Por favor, faça tudo corretamente, realmente você não deveria estar aqui!")
      alert("Página não altorizada, por favor, volte logo!")
    }


}

}
