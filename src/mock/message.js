import Mock from "mockjs";
import qs from "querystring";
import imgURL1 from "@/assets/mock-img/comment1.jpg";
import imgURL2 from "@/assets/mock-img/comment2.jpg";
import imgURL3 from "@/assets/mock-img/comment3.jpg";
import imgURL4 from "@/assets/mock-img/comment4.jpg";
import imgURL5 from "@/assets/mock-img/comment5.jpg";
import imgURL6 from "@/assets/mock-img/comment6.jpg";
import imgURL7 from "@/assets/mock-img/comment7.jpg";
import imgURL8 from "@/assets/mock-img/comment8.jpg";
import imgURL9 from "@/assets/mock-img/comment9.jpg";
import imgURL10 from "@/assets/mock-img/comment10.jpg";
import number from "../../../../../../webpack/核心功能/练习/src/util/number";

//提交评论
Mock.mock("/api/message", "post", {
    code: 0,
    msg: "",
    data: {
        id: "@guid",
        nickname: "@cname",
        content: "@cparagraph(1, 10)",
        createDate: "@date('yyyy-MM-dd hh:mm:ss')",
        "avatar|1": [
            imgURL1,
            imgURL2,
            imgURL3,
            imgURL4,
            imgURL5,
            imgURL6,
            imgURL7,
            imgURL8,
            imgURL9,
            imgURL10
        ],
    },
});


//获取单页评论
Mock.mock(/^\/api\/message\/?(\?.+)?$/, "get", function(options) {
    const query = qs.parse(options.url);

    return Mock.mock({
        code: 0,
        msg: "",
        data: {
            total: "@integer(100, 150)",
            [`rows|${query.limit || 10}`]: [
                {
                    id: "@guid",
                    nickname: "@cname",
                    content: "@cparagraph(1, 10)",
                    createDate: "@date('yyyy-MM-dd hh:mm:ss')",
                    "avatar|1": [
                        imgURL1,
                        imgURL2,
                        imgURL3,
                        imgURL4,
                        imgURL5,
                        imgURL6,
                        imgURL7,
                        imgURL8,
                        imgURL9,
                        imgURL10
                    ],
                },
            ],
        },
    });
});
