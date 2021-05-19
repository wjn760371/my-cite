import Mock from "mockjs";
import QQImg from "@/assets/contact-img/qq.png";
import weiChatImg from "@/assets/contact-img/weixin.png";
import githubImg from "@/assets/icon/telescope.svg";
import avatarImg from "@/assets/avatar-img/avatar1.jpg"

Mock.mock("/api/setting", "get", {
    code: 0,
    msg: "",
    data: {
        avatar: avatarImg,
        siteTitle: "木豆小屋",
        github: "https://github.com/wjn760371",
        qq: "760371482",
        qqQrCode: QQImg,
        weixin: "wjn760371",
        weixinQrCode: weiChatImg,
        mail: "760371482@qq.com",
        icp: "2021年4月5日",
        githubName: "木豆",
        favicon: githubImg
    }
})