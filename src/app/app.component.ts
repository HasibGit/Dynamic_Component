import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { DynamicComponent } from './dynamic/dynamic.component';
import { PlaceholderDirective } from './placeholder/placeholder.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Dynamic_Components';

  subscription: Subscription;

  @ViewChild(PlaceholderDirective) dynamicHost: PlaceholderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  show: boolean = false;

  generate() {
    const dynamicComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    const hostViewContainerRef = this.dynamicHost.viewContainerRef;

    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(
      dynamicComponentFactory
    );

    componentRef.instance.message = 'Created Dynamically';
    this.subscription = componentRef.instance.close.subscribe(() => {
      this.subscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
