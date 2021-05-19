//消息提示
import getComponentRootDom from "./getComponentRootDom";
import Icon from "@/components/Icon";
import style from "./showMessage.module.less";
/**
 * 弹出消息
 * @param {Object} options 容器，消息会显示到该容器的正中；如果不传，则显示在页面的正中
 */
export default function(options = {}){
    //创建消息元素
    const content = options.content || "";
    const type = options.type || "info";
    const duration = options.duration || 2000;
    const container = options.container || document.body;
    const div = document.createElement("div");
    const iconDom = getComponentRootDom(Icon, {
        type
    });
    div.innerHTML = `<span class="${style.icon}">${iconDom.outerHTML}</span><div>${content}</div>`;
    //设置类样式
    div.className = `${style.message} ${style["message-" + type]}`;

    if(options.container){
        //容器的position是否改动过
        if (getComputedStyle(container).position === "static"){
            container.style.position = "relative";
        }
    }
    //将div加入到容器中
    container.appendChild(div);
    div.clientHeight;//强行让浏览器进行渲染进行reflow

    //添加完元素之后，回到正常位置
    div.style.opacity = 0.8;
    div.style.transform = `translate(-50%, -50%)`;

    //等一段时间，消失
    setTimeout(() => {
        div.style.opacity = 0;
        div.style.transform = `translate(-50%, -50%) translateY(-25px)`;
        div.addEventListener(
            "transitionend",
            function() {
                div.remove();
                options.callback && options.callback();
            },
            {once: true}
        );
    }, duration)
}