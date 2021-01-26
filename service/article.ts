/**Article  Service */
import { getMySQLConnection } from "../config/database.ts";
import Article from "../model/article.ts";

const tbname = "article";

class ArticleService {
  static async findAll(limit: number) {
    const connection = getMySQLConnection();
    connection.link([Article]);
    const article = await Article.limit(limit).get();
    await connection.close();
    return article;
  }
  static async findById(id: number) {
    const connection = getMySQLConnection();
    connection.link([Article]);
    const article = await Article.where({ id: id }).first();
    await connection.close();
    return article;
  }
}
export default ArticleService;
