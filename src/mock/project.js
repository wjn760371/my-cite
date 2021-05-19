import Mock from "mockjs";
import PixelBirdImg from "@/assets/project-img/PixelBird.png";
import PushBox from "@/assets/project-img/PushBox.png";

Mock.mock(/^\/api\/project\/?$/, "get", {
    code: 0,
    msg: "",
    data: [
        {
            id: "@uuid",
            name: "基于面向对象的像素鸟小demo",
            url: "https://wjn760371.github.io/PixelBirds/",
            github: "https://github.com/wjn760371/PixelBirds",
            description: "1、所有元素均为会移动的矩形，因此先创建矩形（Rectangle）类，其实例成员包括宽度、高度、left、top、X方向的速度、Y方向的速度、DOM对象\n" +
                "2、为矩形类添加render方法，用来设置dom对象的样式等参数，添加move类来实现dom元素的移动\n" +
                "3、通过getComputedStyle(DOM对象)可以获取dom对象的自身样式\n" +
                "4、为防止子类实例化对象的背景图片运动出视窗，这里需要在子类中添加一个onMove方法来判断背景图片的left值是否大于或等于其宽度一般的负值，若满足条件，则将其left值设为0，并在其父类设置的move方法中的render渲染前判断实例化对象是否存在onMove方法，若存在则执行onMove进行判断，否则，直接执行render进行渲染\n" +
                "5、小鸟的速度通过重力加速度g实现，在bird子类中添加move方法，在方法中通过super调用父类move方法一次，然后通过g来改变y轴方向上的速度\n" +
                "6、小鸟的运动范围为游戏框顶部到大地表面，其范围高度为游戏框的高度减去大地的高度在减去小鸟的高度，小鸟的jump方法为直接赋予其一个向上的速度\n" +
                "7、小鸟扇动翅膀，通过一个swingStatus参数来改变当前小鸟的运动状态码，配合定时器实现小鸟翅膀的扇动\n" +
                "8、柱子的控制通过三个类，一个类用来生成单个柱子，第二个调用生成柱子类可以实现生成上下柱子对，其生成方式为，柱子间的距离固定为150，柱子的最小高度为80，最大高度通过计算即可得到，生成方式为Math.floor(Math.random() * (max - min) + min)，然后另一个柱子的高度通过计算得到\n" +
                "9、柱子生成器，每隔1.5秒调用柱子对类生成一组柱子对，并在定时器中判断柱子对的可用性，将无用柱子对删除\n" +
                "10、定义Game类，通过该类来控制其余所有目标的实例化和运动，游戏结束后，通过window.reload()方法来重新加载页面\n" +
                "11、小鸟碰撞柱子的判断原理：当两个矩形的横向距离和纵向距离均小于两个矩形宽或高的一半时，则判定为碰撞",
            thumb: PixelBirdImg,
        },
        {
            id: "@uuid",
            name: "基于ES6模块化实现的推箱子小demo",
            url: "https://wjn760371.github.io/push-box/",
            github: "https://github.com/wjn760371/push-box",
            description: "代码详解\n" +
                "1、map模块通过一个二维数组生成地图，二维数组中用数字来表示目标位置在页面上所代表的类型，其中0代表空白位置，1代表玩家，2代表墙，3代表箱子，新建一个数组用来存放正确位置的坐标，以行列值进行表示，如{row: 3, col: 4}即为第三行第四列的位置为正确位置\n" +
                "2、通过ui.js渲染map中所设置的游戏地图，setDivContainer函数用来设置整个地图的宽高，然后利用setContent函数来完成地图的生成，其中游戏中每个方块元素利用setOnePiece来设置\n" +
                "1）判断二维数组中每个数据的数值，根据数值的大小为创建的div元素添加类样式，并按照行列设置left值和top值\n" +
                "2）当数值为0时，代表该位置的元素为空白位置，空白位置分为正确位置和普通空白位置两类，通过isCorrect函数判断并返回一个布尔值\n" +
                "3、play模块用来定义游戏过程中的移动和成功规则，根据移动方向判断所要移动到的位置元素值大小，根据元素值判断目标位置是否为箱子或空白位置，进而判断是否可进行移动，当目标位置为箱子时，判断同一方向上的下一个位置是否为空白，若为空白，则判定可进行移动，这里exchange用来交换数组中两个元素的值，getNextInfo函数用来得到玩家所要移动方向下一个位置的元素信息\n" +
                "4、game模块用来为window绑定一个键盘事件，当监听到键盘事件时，判断用户触发的方向，并将该方向传入playerMove进行判断并处理，若玩家成功移动，则重新渲染页面，并判断游戏是否胜利\n" +
                "5、index.js即为启动模块",
            thumb: PushBox,
        }
    ]
})