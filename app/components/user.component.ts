import { Component } from '@angular/core';
import { PostsService } from '../services/posts.service';

@Component({
  moduleId: module.id,	// to add releative paths we need to add this to the decorator
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})

export class UserComponent  { 
	name : string;
	email : string;
	address : address;
	technicalStack: string[];
	showTechnicalStack: boolean;
	posts: Posts[];

	constructor(private postsService:PostsService){
	
		this.name = 'Nikhil';
		this.email = 'nikhil.vs136@gmail.com';
		this.address = {
			street: '1160 Chopin Terrace, 206',
			city: 'freemont',
			state: 'CA'
		};
		this.technicalStack = ['HTML','CSS','Js','jQuery','KnockoutJs','Angular1','Angular2','React'];
		this.showTechnicalStack = false;

		this.postsService.getPosts().subscribe(posts => 
			this.posts = posts);
	};

	toggleStuff() {
		if(this.showTechnicalStack == true){
			this.showTechnicalStack = false;
		}else{
			this.showTechnicalStack = true;
		}
	}

	deleteStuff(j) {
		console.log('deleting stuff!!');
		this.technicalStack.splice(j,1);
	}

	addStuff(tech) {
		this.technicalStack.push(tech);

	}
 };

interface address {
	street: string;
	city: string;
	state: string;
}

interface Posts {
	userId:number;
	id:number;
	title:string;
	body:string;
}