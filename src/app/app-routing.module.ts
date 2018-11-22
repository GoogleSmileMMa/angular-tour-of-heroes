import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; //用 RouterModule 中的 Routes 类来配置路由器
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent} from './hero-detail/hero-detail.component'; 

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'detail/:id', component: HeroDetailComponent} //path 中的冒号（:）表示 :id 是一个占位符，它表示某个特定英雄的 id。
];

@NgModule({
  //这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。 forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],  //初始化路由器，并让它开始监听浏览器中的地址变化
  exports: [RouterModule] //导出 RouterModule 让路由器的相关指令可以在 AppModule 中的组件中使用。
})
export class AppRoutingModule { }
