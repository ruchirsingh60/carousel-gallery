import { Component, OnInit } from '@angular/core';
import {ApiCallsService} from '../api-calls.service';

@Component({
  selector: 'app-carousel-module',
  templateUrl: './carousel-module.component.html',
  styleUrls: ['./carousel-module.component.css']
})
export class CarouselModuleComponent implements OnInit {

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
		// console.log(res);
	    
	    //iterate through the response
	   for(let img of res.hits){
		  	if(this.carousalData.length <= 5){					//get six image objects out of response.
		  		this.carousalData.push(img);					//push all the objects in the array.
		  	}
		  }
	   })
	}

	//code to shift the image when next or previous button is pressed.
  	changeImage(arg){
	  	if(arg == 'next'){										//when pressed next button 
	  		var firstElement = this.carousalData.shift();		//remove the first element from array
	  		this.carousalData.push(firstElement);				//add the first element at last
	  	}
	  	else if(arg == 'prev'){									//when pressed the previous button
	  		var lastElement = this.carousalData.pop();			//remove the last element from the array
	  		this.carousalData.unshift(lastElement);				//add the last element at the start of the array
	  	}
  	}


}
