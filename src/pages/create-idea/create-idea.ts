import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IdeasProvider } from '../../providers/ideas/ideas';


/**
 * Generated class for the CreateIdeaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-create-idea',
	templateUrl: 'create-idea.html',
})
export class CreateIdeaPage {

	reminderDate: String = new Date().toISOString();

	title;
	content;
	author;

	constructor(public navCtrl: NavController, public navParams: NavParams, private ideasProvider: IdeasProvider ) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad CreateIdeaPage');
	}

	onAddIdea() {
		this.ideasProvider.postIdea( this.title, this.content, this.author).subscribe( data => {
			console.log( data );
			this.navCtrl.push( 'TabsPage' );
		});
	}

}
