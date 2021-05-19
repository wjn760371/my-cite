import loadingUrl from "@/assets/svg/tail-spin.svg";
import styles from "./loading.module.less"

//判断el中是否存在loading效果的img元素
function getLoadingImage(el){
    return el.querySelector("img[data-role=loading]")
}

function createLoadingImg(){
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingUrl;
    img.className = styles.loading;
    return img;
}

//导出指令的配置对象
export default function(el, binding){
    //根据binding.value的值，决定创建或删除img元素
    const curImg = getLoadingImage(el);
    if (binding.value){
        //如果没有img元素再创建
        if(!curImg){
            const img = createLoadingImg();
            el.appendChild(img);
        }
    }else{
        if (curImg){
            curImg.remove();
        }
    }
}