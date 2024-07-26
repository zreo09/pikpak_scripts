const { PikPak } = require("./pikpak");
const randomstring = require("randomstring");
const axios = require("axios");
const Mailjs = require("@cemalgnlts/mailjs");
const mailjs = new Mailjs();

async function main() {
  const response = await mailjs.createOneAccount();
  const username = response.data.username;
  const password = response.data.password;

  console.log(username, password);
  let pikPak = new PikPak(username, password, null, "68804138");

  pikPak
    .authVerification()
    .then(() => pikPak.getVerificationCode(mailjs))
    .then(() => pikPak.authVerificationVerify())
    .then(() => pikPak.authSignup())
    .then(() => pikPak.userMe())
    .then(() => pikPak.activityInvite())
    .then(() => pikPak.activityInviteCode())
    .then(() => pikPak.activationCode())
    .then(() => pikPak.printUserInfo())
    .catch((e) => console.log(e));

  // 登录
  // let pikPak = new PikPak('temp@temp.com', 'tempPassword', 'tempuuid');
  // pikPak.signin()
  //     .then(() => pikPak.userMe())
  //     .then(() => pikPak.printUserInfo())
  //     .catch(e => console.log(e))
}

main();
