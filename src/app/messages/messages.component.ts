import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //添加一个 public 的 messageService 属性。 Angular 将会在创建 MessagesComponent 的实例时 把 MessageService 的实例注入到这个属性中。
  constructor(public messageService:MessageService) { } //这个 messageService 属性必须是公共属性，因为你将会在模板中绑定到它。

  ngOnInit() {
  }

}


/**
 * 小结
你把数据访问逻辑重构到了 HeroService 类中。
你在根注入器中把 HeroService 注册为该服务的提供商，以便在别处可以注入它。
你使用 Angular 依赖注入机制把它注入到了组件中。
你给 HeroService 中获取数据的方法提供了一个异步的函数签名。
你发现了 Observable 以及 RxJS 库。
你使用 RxJS 的 of() 方法返回了一个模拟英雄数据的可观察对象 (Observable<Hero[]>)。
在组件的 ngOnInit 生命周期钩子中调用 HeroService 方法，而不是构造函数中。
你创建了一个 MessageService，以便在类之间实现松耦合通讯。
HeroService 连同注入到它的服务 MessageService 一起，注入到了组件中。
 */