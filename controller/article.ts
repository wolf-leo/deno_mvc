/**Article Controller */
import { Context } from "../resources.ts";
import ArticleService from "../service/article.ts";
class ArticleController {
  static async findAll(ctx: Context) {
    var params = new URL(ctx.request.url, `http://0.0.0.0`);
    var limit = params.searchParams.get("limit") || 20;
    try {
      const list = await ArticleService.findAll(Number(limit));
      return ctx.json({
        code: 200,
        msg: list ? list : [],
      }, 200);
    } catch (error) {
      return ctx.json({
        code: 404,
        msg: error,
      }, 404);
    }
  }

  static async findById(ctx: any) {
    const id = ctx.params.id;
    try {
      const info = await ArticleService.findById(Number(id));
      return ctx.json({
        code: 200,
        msg: info ? info : [],
      }, 200);
    } catch (error) {
      return ctx.json({
        code: 404,
        msg: error,
      }, 404);
    }
  }
}

export default ArticleController;
