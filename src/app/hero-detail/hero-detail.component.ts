import { Component, OnInit, Input} from '@angular/core';
import { Hero } from '../hero'; //导入Hero符号类
/**
 * HeroDetailComponent 需要从一种新的途径获取要显示的英雄。
 * 获取创建本组件的路由，
 * 从这个路由中提取出 id
 * 通过 HeroService 从服务器上获取具有这个 id 的英雄数据。
 */
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})


export class HeroDetailComponent implements OnInit {
  //添加一个带有 @Input() 装饰器的 hero 属性。
  //hero 属性必须是一个带有 @Input() 装饰器的输入属性，因为外部的 HeroesComponent 组件将会绑定到它。就像这样
  @Input() hero: Hero;

  /**
  * 把 ActivatedRoute、HeroService 和 Location 服务注入到构造函数中
  * ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。 这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要显示的英雄的 id。
  * HeroService 从远端服务器获取英雄数据，本组件将使用它来获取要显示的英雄。
  * location 是一个 Angular 的服务，用来与浏览器打交道。 稍后，你就会使用它来导航回上一个视图。
  */
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void{
    const id = +this.route.snapshot.paramMap.get('id'); //route.snapshot 是一个路由信息的静态快照，抓取自组件刚刚创建完毕之后。paramMap 是一个从 URL 中提取的路由参数值的字典。 "id" 对应的值就是要获取的英雄的 id。
    this.heroService.getHero(id)
        .subscribe(hero =>this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
  
}



/**
 * 小结
你创建了一个独立的、可复用的 HeroDetailComponent 组件。
你用属性绑定语法来让父组件 HeroesComponent 可以控制子组件 HeroDetailComponent。
你用 @Input 装饰器来让 hero 属性可以在外部的 HeroesComponent 中绑定。
 */


 /**
  * 小结
添加了 Angular 路由器在各个不同组件之间导航。
你使用一些 <a> 链接和一个 <router-outlet> 把 AppComponent 转换成了一个导航用的壳组件。
你在 AppRoutingModule 中配置了路由器。
你定义了一些简单路由、一个重定向路由和一个参数化路由。
你在 <a> 元素中使用了 routerLink 指令。
你把一个紧耦合的主从视图重构成了带路由的详情视图。
你使用路由链接参数来导航到所选英雄的详情视图。
在多个组件之间共享了 HeroService 服务。
  */