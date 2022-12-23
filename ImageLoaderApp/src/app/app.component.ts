import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ImageLoaderApp1';
  //imageBlobUrl: ArrayBuffer | string | null;
  imageBlobUrl1: ArrayBuffer | string | null;
  imageBlobUrl2: ArrayBuffer | string | null;
  imageBlobUrl3: ArrayBuffer | string | null;
  images:any;
  imageBlobUrl!: SafeUrl;

  constructor(private http:HttpClient,private sanitizer : DomSanitizer){
    //this.imageBlobUrl="";
    this.imageBlobUrl1="";
    this.imageBlobUrl2="";
    this.imageBlobUrl3="";
  }
  imageToShow: any;

  createImageFromBlob(image: Blob,index : number) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      if(index == 1)  {this.imageBlobUrl1 = reader.result;}
      if(index == 2)  {this.imageBlobUrl2 = reader.result;}
      if(index == 3)  {this.imageBlobUrl3 = reader.result;}
    }, false);
  if (image) {
      reader.readAsDataURL(image);
    }
  }

  imageArray= new Array();

  async ngOnInit(){
    //const blob: any = await this.http.get("https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg", {responseType:'blob'}).toPromise();
    //this.createImageFromBlob(blob);
    //console.log(this.imageBlobUrl);

  }

  async clickEvent(){
        //const value : string | undefined = input?.value;
        //console.log(input?.value) 

        const input = document.getElementById('imageinput1') as HTMLInputElement | null;
        const blob1: any = await this.http.get(input?.value as string, {responseType:'blob'}).toPromise();
        this.createImageFromBlob(blob1,1);

        const input2 = document.getElementById('imageinput2') as HTMLInputElement | null;
        const blob2: any = await this.http.get(input2?.value as string, {responseType:'blob'}).toPromise();
        this.createImageFromBlob(blob2,2);

        const input3 = document.getElementById('imageinput3') as HTMLInputElement | null;
        const blob3: any = await this.http.get(input3?.value as string, {responseType:'blob'}).toPromise();
        this.createImageFromBlob(blob3,3);

        //sample image "https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
        //sample image "https://cdn.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_960_720.jpg"
        //sample image https://cdn.pixabay.com/photo/2012/11/28/09/32/explosion-67557_960_720.jpg
  }
}
