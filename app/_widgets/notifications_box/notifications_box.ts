import {Component,HostBinding} from 'angular2/core';
import {Message} from "../../_models/message";
import {MessagesService} from "../../_services/messages_service.ts"
//import {MessagesService } from "../../_services/messages_service";

@Component({
  // Declare the tag name in index.html to where the component attaches
  selector: '.notificationsBox',
  inputs: ['user'],
  // Location of the template for this component
  templateUrl: 'app/_widgets/notifications_box/notifications_box.html'
})
export class NotificationsBox {
  // Declaring the variable for binding with initial value
  messages: Message[];

  /*constructor( private _msg_serv:MessagesService ){

  }

  public NgOnInit(){
    this._msg_serv.messages.subscribe((msg: Message[])=>{
      this.messages = msg;
    })
  }*/
}
