<template>
  <canvas id="canvas" width="2500" height="800" style="border:1px solid #ccc"></canvas>
</template>

<script>
import { fabric } from 'fabric'
import { reactive } from 'vue';
export default {
  name:'Demo',
  setup() {
    const data = reactive({
      x: 0, 
      y: 0,
    })
    let items = []
    //1.获取数据
    getData()
    function getData() {
      const xhr = new XMLHttpRequest()
      xhr.open('get','/api/getData')
      // xhr.responseType = 'document'
      xhr.send()
      xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
          if(xhr.status === 200) {
            items = JSON.parse(xhr.responseText).data.scenes[0].elements
            console.log(items)
            canvas()
            
          }else{
            console.error(xhr.statusText)
          }
        }
      }
    }
    //2.获取数据之后渲染canvas
    function canvas() {
      var canvas = new fabric.Canvas('canvas')
      fabric.Object.prototype.transparentCorners = false
      items.forEach(item => {
        switch (item.type) {
          case 'Image':
            fabric.Image.fromURL(item.url, (img, err) => {
              if(!err) {
                img.set({
                  left: item.position.x, // 左上角位置
                  top: item.position.y, // 左上角位置
                  width: item.position.width,
                  height: item.position.height,
                  target: false,
                  crossOrigin: 'anonymous' // 使用的图片跨域时，配置此参数，有时会失效
                })
                console.log(item.position.x)
                canvas.add(img)
              }
            })
            break
          case 'Text':
            canvas.add(addText(item))
            // text.enterEditing() 
            break
        }
      })
      const findObject = (x, y) => {
        canvas._objects.forEach(element => {
          if(element.left < x && element.left + element.width > x && element.top < y && element.top + element.height > y && element.target ) {
            canvas._objects.forEach(element => {
              element.animate({opacity: 0} , {
              duration: 200,
              easing: fabric.util.ease.easeOutCubic,
              onChange: canvas.renderAndResetBound,
            })
          })
          var rect2 = new fabric.Rect({
            left: 60,
            top: 10,
            width: 100,
            height: 100,
            fill: 'green',
            angle: 45,
            padding: 10,
            stroke: 'green', // 边框颜色
            strokeWidth: 4, // 边框宽度
          });
          setTimeout(() => {
            canvas.clear()
            var canvas1 = new fabric.Canvas('canvas');
            canvas1.add(rect2)
          },200)          
        }
      })
      }
    
      canvas.on({'mouse:down': function(e) {
        findObject(e.pointer.x, e.pointer.y)
      }})
    }
    const addText =  (item) =>{
      let text = new fabric.Textbox(item.text, {
        left: item.position.x, // 左上角位置
        top: item.position.y, // 左上角位置
        fontSize: item.font.fontSize,
        fill: item.font.color, // 字体颜色
        target: false,
      })
      return text
    }
    return {
      data
    }
  }
}
</script>

<style>

</style>