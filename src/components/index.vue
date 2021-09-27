<template>
  <canvas id="canvas" width="600" height="600" style="border:1px solid #ccc"></canvas>
</template>

<script>
import { fabric } from 'fabric'
import { onMounted, reactive } from 'vue';
export default {
  name:'Demo',
  setup() {
   const data = reactive({
     x: 0, 
     y: 0
   })
   onMounted(() => {
    var canvas = new fabric.Canvas('canvas');
    fabric.Object.prototype.transparentCorners = false;

    var rect = new fabric.Rect({
    left: 60,
    top: 10,
    width: 100,
    height: 100,
    fill: 'red',
    angle: 45,
    padding: 10,
    stroke: 'green', // 边框颜色
    strokeWidth: 4, // 边框宽度
    });
    const findObject = (x, y) => {
      canvas._objects.forEach(element => {
        element.animate({opacity: 0} , {
          duration: 2000,
          easing: fabric.util.ease.easeOutCubic,
          onChange: canvas.renderAndResetBound,
        });
        if(element.left < x && element.left + element.width > x && element.top < y && element.top + element.height > y ) {
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
          },2000)          
        }
      });
    }
    var rect1 = new fabric.Rect({
      left: 140,
      top: 120,
      width: 150,
      height: 100,
      fill: 'red',
      angle: 0,
      padding: 10,
      stroke: 'green', // 边框颜色
      strokeWidth: 4, // 边框宽度
    });
    canvas.add(rect, rect1);
    canvas.on({
      'mouse:down': function(e) {
        findObject(e.pointer.x, e.pointer.y)
        console.log('111')
      }
    })
  })
  return {
    data
  }
  // fabric.loadSVGFromURL('../assets/logo.png', function(objects, options) {

  //   var shape = fabric.util.groupSVGElements(objects, options);
  //   canvas.add(shape.scale(0.6));
  //   shape.set({ left: 200, top: 100 }).setCoords();
  //   canvas.renderAll();

  //   canvas.forEachObject(function(obj) {
  //     var setCoords = obj.setCoords.bind(obj);
  //     obj.on({
  //       moving: setCoords,
  //       scaling: setCoords,
  //       rotating: setCoords
  //     });
  //   })
  // });

  // canvas.on('after:render', function() {
  //   canvas.contextContainer.strokeStyle = '#555';

  //   canvas.forEachObject(function(obj) {
  //     var bound = obj.getBoundingRect();

  //     canvas.contextContainer.strokeRect(
  //       bound.left + 0.5,
  //       bound.top + 0.5,
  //       bound.width,
  //       bound.height
  //     );
  //   })
  // });

  }
}
</script>

<style>

</style>