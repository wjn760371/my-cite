import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/vlazy-img/default.gif"

let imgs = [];

function setImage(img){
    img.dom.src = defaultGif;//先暂时使用默认图片
    //处理图片
    //该图片是否在视口范围内
    const clientHeight = document.documentElement.clientHeight;
    const rect = img.dom.getBoundingClientRect();
    const height = 0;
    if(rect.top >= height && rect.top <= clientHeight){
        //在视口范围内
        const tempImg = new Image();
        tempImg.onload = function(){
            img.dom.src = img.src;
        };
        tempImg.src = img.src;
        imgs = imgs.filter((i) => i !== img);
    }
}

//希望调用该函数，就可以设置那些合适的图片
function setImages(){
    for (const img of imgs) {
        setImage(img);
    }
}

function handleScroll(dom){
    setImages();
}

eventBus.$on("mainScroll", debounce(handleScroll, 100));

export default {
    inserted(el, bindings){
        const img = {
            dom: el,
            src: bindings.value,
        }
        imgs.push(img);
        //立即处理它
        setImage(img);
    },
    unbind(el){
        imgs = imgs.filter(img => {
            return img.dom !== el
        })
    }
}