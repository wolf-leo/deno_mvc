/**服务入口 */
import { Application } from "./resources.ts";
import ArticleController from "./controller/article.ts";
import TimeController from "./controller/time.ts";

const app = new Application();
const port = 8000;
app
  .static("/", "./public") // 静态资源
  // 相关API
  .get("/api/nowtime", TimeController.getNowTime)
  .get("/api/article", ArticleController.findAll) // 测试URL：http://localhost:8000/api/article?limit=15
  .get("/api/article/:id", ArticleController.findById) // 测试URL：http://localhost:8000/api/article/1
  .start({ port: port }); // 启动端口
//  首页地址 http://localhost:8000/index.html
console.log(
  `start successfully. you can visit it on http://localhost:${port}`,
);
