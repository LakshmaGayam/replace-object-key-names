import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;

  obj = {
    has_emotional_support:true,
    note_emotional_support:'test',
    // 3:true,
  }

  obj2 = {
    note_common_text:'lakshma note',
    note_text:'play text',
    has_key:'ll'
  }

  ngOnInit(){
   
      // let test = Object.entries(this.obj).
console.log(this.getTrueKeys(this.obj));
console.log(this.getNotesKeys(this.obj2))

    
  }

  getTrueKeys(obj){
    var ret =[];
    for(var key in obj){
      if(obj.hasOwnProperty(key) && obj[key] === true){
        key = key.replace('has_' , '').replace('_', ' ')
         ret.push(key)
      }
    }
    return ret
  }


  getNotesKeys(obj){
    var ret =[];
    for(var key in obj){
      if(obj.hasOwnProperty(key) && obj[key] != ''){
        if(key.includes('note')){
          key = key.replace('note_' , '').replace('_', ' ')
          ret.push(key)
        }
      }
    }
    return ret
  }

}
