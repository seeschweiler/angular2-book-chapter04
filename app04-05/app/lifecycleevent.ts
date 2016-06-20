export class LifecycleEvent {
  componentName: string;
  eventName: string;
  
  constructor(componentName: string, eventName: string){
    this.componentName = componentName;
    this.eventName = eventName;
  }
}