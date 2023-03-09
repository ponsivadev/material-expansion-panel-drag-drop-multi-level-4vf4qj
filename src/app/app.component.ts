import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  panelOpenState = true;

  accordions = [
    {
      title: '1', 
      description: 'you can reorder this list easily',
      subAccordion: [{
        title: 'item 1',
        description: 'description',
        content: 'Content of subpanel 01',
      },
      {
        title: 'item 2',
        description: '',
        content: 'Content of subpanel 02',
      }]
    },
    {
      title: '2', 
      description: 'simply click, drag & drop one of us around',
      subAccordion: [{
        title: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      title: '3', 
      description: 'You will see, it\'s very easy!',
      subAccordion: [{
        title: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
    {
      title: '4', 
      description: 'Try it now, go ahead',
      subAccordion: [{
        title: 'item 1', 
        description: 'description',
        content: 'Content of subpanel 01',
      }]
    },
  ]
  
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.accordions, event.previousIndex, event.currentIndex);
  }
}
