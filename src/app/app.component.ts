import { Component } from '@angular/core';
//在Angular中，组件就是一个类（构造函数的另一种写法）
//@Component 组件的装饰器

// selector 用来定义组件渲染的标签名称，说白了就是组件的名字
// templateUrl 用来指定组件的模板文件
// styleUrls 一个数组，用来存放组件相关的样式文件

//通过装饰器函数修饰了组件类的行为，声明
//组件是 Angular 应用中的基本构造块 它们在屏幕上显示数据，监听用户输入，并且根据这些输入执行相应的动作
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//导出组件类
export class AppComponent {
  //组件数据(应用标题)
  title:string = 'Tour of Heroes';
}



/**
*小结
你使用 Angular CLI 创建了初始的应用结构。
你学会了使用 Angular 组件来显示数据。
你使用双花括号插值表达式显示了应用标题。
*/