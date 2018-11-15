import { Component, OnInit } from '@angular/core';
import {ApiCallsService} from '../api-calls.service';

@Component({
  selector: 'app-carousal-module',
  templateUrl: './carousal-module.component.html',
  styleUrls: ['./carousal-module.component.css']
})
export class CarousalModuleComponent implements OnInit {

  carousalData:any[]=[];
  allresData:any[]=[];

  //set an instance of service
  constructor(private  baseService :ApiCallsService) {
  	  
  }

  //invoke function when the module is loaded
   ngOnInit() {
   	this.getImageData();
   }

   //code to get image from pixbay server
   getImageData(){
	 	this.baseService.setKeyValue("?key=9656065-a4094594c34f9ac14c7fc4c39");
	     this.baseService.getMethod("&q=beautiful+landscape&image_type=photo").subscribe( res => {               
		console.log(res);
	    
	   for(let img of res.hits){
		  	if(this.carousalData.length <= 5){
		  		this.carousalData.push(img);
		  	}
		  }
	   })
	 }


}
