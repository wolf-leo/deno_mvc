/**Time  Service */
class TimeService {
  static async getNowTime() {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    const date = new Date().getDate();
    const hour = new Date().getHours();
    const minute = new Date().getMinutes();
    const second = new Date().getSeconds();
    const finaltime = year + "-" +
      (await this.PrefixZero(month, 2)).toString() + "-" +
      (await this.PrefixZero(date, 2)).toString() + " " +
      (await this.PrefixZero(hour, 2)).toString() + ":" +
      (await this.PrefixZero(minute, 2)).toString() + ":" +
      (await this.PrefixZero(second, 2)).toString();
    return finaltime;
  }

  static async PrefixZero(num: number, n: number) {
    return (Array(n).join("0") + num).slice(-n);
  }
}
export default TimeService;
