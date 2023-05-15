<script setup>
import { onMounted, ref, computed,reactive } from 'vue';

let move = ref(false);

const domLeft = computed(() =>{
    return left;
})

const domTop = computed(() =>{
    return top;
})


onMounted(()=>{
    document.addEventListener('mouseup',(e)=>{
        // console.log('e',e)
        // mousedownDom.value.hide = true;
        // const dom = document.elementFromPoint(e.clientX,e.clientY);
        // console.log('container',container,dom);
        // mousedownDom.value.hide = false;
        // if(container == dom){
        //     console.log('yes');
        // }
        if(isMouse.value){
            isMouse.value = false;
        }
    })
})

const dragstart = () =>{
    console.log('start move');
    move.value = true;
}

const dragend = (e) =>{
    console.log('dragend',e);
    move.value = false;
}

const enterDom = (e) =>{
    console.log('enter dom',e);
}

const enterTheContainer = (e) =>{
    console.log('enterTheContainer', e);
}

const movingInContainer = (e) =>{
    // console.log('movingInContainer',e);
}

//鼠标事件触发
//mousedown
const left = ref(0);
const top = ref(0);
const mousedownDom = ref(null);
const isMouse = ref(false);
const container = ref(null);

const mousedown = (e) =>{
    const dom = document.getElementById('mousedown');
    isMouse.value = true;
}

const mousemove = (e) =>{
    if(!isMouse.value) return;
    let left = e.clientX - 50;
    let top = e.clientY - 100;
    mousedownDom.value.style.left = `${left}px`;
    mousedownDom.value.style.top = `${top}px`;
}

const mouseup = (e) =>{
    // const dom = document.elementFromPoint(e.clientX,e.clientY);
    // console.log('container',container,dom)
        if(container.value == dom){
            console.log('yes');
        }
    // console.log('end',e);
    isMouse.value = false;
}


</script>

<template>
    <div id="box" :style="{ 'background-color': move ? '' : '#C7E8CA' }" @mousemove="mousemove" @mouseup="mouseup">
        <div id="mousedown" ref="mousedownDom" class="mousedown" @mousedown="mousedown">mousedown</div>

        <div @dragstart="dragstart" class="draggable" @dragend="dragend" draggable="true">draggable</div>
        <div @dragenter="enterTheContainer" @dragover="movingInContainer" ref="container" class="container"></div>
    </div>
</template>

<style scoped>
#box{
    width: 100%;
    height: 100%;
    position: relative;
    transition: background .2s linear;
}

.draggable{
    width: 100px;
    height: 100px;
    background-color: #5D9C59;
    text-align: center;
    line-height: 100px;
}

.mousedown{
    width: 100px;
    height: 100px;
    background-color: #2F86A6;
    text-align: center;
    line-height: 100px;
    position: absolute;
    z-index: 2;
    top: 300px;
}
.container{
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    border: 2px solid #0081C9;
    border-radius: 5px;
}
</style>