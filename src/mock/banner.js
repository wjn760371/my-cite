import Mock from "mockjs";
import imgUrl1 from "@/assets/home-img/home1.jpg";
import imgUrl2 from "@/assets/home-img/home2.jpg";
import imgUrl3 from "@/assets/home-img/home3.jpg";

Mock.mock(RegExp("/api/banner"), "get", {
    code: 0,
    msg: "我也不知道发生了什么",
    data: [
        {
            id: "1",
            midImg: imgUrl1,
            bigImg: imgUrl1,
            title: "凛冬将至",
            description: "人唯有恐惧的时候方能勇敢",
        },
        {
            id: "2",
            midImg: imgUrl2,
            bigImg: imgUrl2,
            title: "血火同源",
            description: "如果我回头，一切都完了",
        },
        {
            id: "3",
            midImg: imgUrl3,
            bigImg: imgUrl3,
            title: "听我怒吼",
            description: "兰尼斯特有债必偿",
        },
    ]
})