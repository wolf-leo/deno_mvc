/**Time Controller */
import { Context } from "../resources.ts";
import TimeService from "../service/time.ts";
class TimeController {
  static async getNowTime(ctx: Context) {
    try {
      const msg = await TimeService.getNowTime();
      return ctx.json({
        code: 200,
        msg: msg,
      }, 200);
    } catch (error) {
      return ctx.json({
        code: 404,
        msg: error,
      }, 404);
    }
  }
}

export default TimeController;
