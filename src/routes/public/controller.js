import { getCaptcha } from './services/captcha';

class PublicController {
  getCaptcha(ctx) {
    const captcha = getCaptcha();

    ctx.body = {
      data: captcha.data,
      text: captcha.text,
    };
  }
}
module.exports = new PublicController();
