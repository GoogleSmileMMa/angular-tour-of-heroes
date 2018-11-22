import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; //导入Hero类
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';


//@Component 是个装饰器函数，用于为该组件指定 Angular 所需的元数据。
@Component({
  selector: 'app-heroes',   //组件的选择器（CSS 元素选择器）
  templateUrl: './heroes.component.html',   //组件模板文件的位置
  styleUrls: ['./heroes.component.css']   //组件私有 CSS 样式表文件的位置
})


// 始终要export组件类，以便在其他地方（比如 AppModule）导入它
export class HeroesComponent implements OnInit {
  // hero = 'Windstorm';
  // //把组件的hero属性的类型重构为Hero
  // hero: Hero ={
  //   id: 1,
  //   name: 'yangchun.ma'
  // }
  //往类中添加一个heroes属性，这样就可以暴露出这些英雄，以供绑定
  // selectedHero: Hero;

  // heroes = HEROES;
  heroes:Hero[];


  //往构造函数中添加一个私有的heroService,其类型为HeroService
  /**
   * 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
   * 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
   */
  constructor(private heroService:HeroService) { } 


  //ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方。
  //相当于Vue的mounted(页面加载完执行 对比Vue的created)
  ngOnInit() {
    this.getHeroes(); //选择在 ngOnInit 生命周期钩子中调用 getHeroes()，之后交由 Angular 处理，它会在构造出 HeroesComponent 的实例之后的某个合适的时机调用 ngOnInit。
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

  //创建函数，以从服务中获取这些英雄数据
  getHeroes(): void{
    // this.heroes = this.heroService.getHeroes();  //同步
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);  //异步
  }

  //添加新英雄,当 addHero 保存成功时，subscribe 的回调函数会收到这个新英雄，并把它追加到 heroes 列表中以供显示。
  add(name: string): void{
    name = name.trim();
    if(!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero =>{
        this.heroes.push(hero);
      })
  }

  //删除英雄
  delete(hero: Hero): void{
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}



/**
 * 小结
你使用 CLI 创建了第二个组件 HeroesComponent。
你把 HeroesComponent 添加到了壳组件 AppComponent 中，以便显示它。
你使用 UppercasePipe 来格式化英雄的名字。
你用 ngModel 指令实现了双向数据绑定。
你知道了 AppModule。
你把 FormsModule 导入了 AppModule，以便 Angular 能识别并应用 ngModel 指令。
你知道了把组件声明到 AppModule 是很重要的，并认识到 CLI 会自动帮你声明它。
 */

 /**
  * 小结
英雄指南应用在一个主从视图中显示了英雄列表。
用户可以选择一个英雄，并查看该英雄的详情。
你使用 *ngFor 显示了一个列表。
你使用 *ngIf 来根据条件包含或排除了一段 HTML。
你可以用 class 绑定来切换 CSS 的样式类。
  */