export const ruler = {
    /**
     * 初始化刻度尺插件
     * @el 容器 String
     * @height 刻度尺高度 Number
     * @maxScale 最大刻度 Number
     * @startValue 开始的值 Number
     * @region 区间 Array
     * @background 刻度尺背景颜色 String
     * @color 刻度线和字体的颜色 String
     * @markColor  中心刻度标记颜色 String
     * @isConstant 是否不断地获取值 Boolean
     * @minScale 滑动的最小刻度值 Number
     * @success(res) 滑动结束后的回调 Function
     * */
    initPlugin: function (params) {
      var initParams = {
        el: params.el,
        height: params.height || 60,
        maxScale: params.maxScale || 87,
        startValue: params.startValue || 20,
        region: params.region || false,
        background: params.background || false,
        color: params.color || false,
        markColor: params.markColor || "#FFCC33",
        isConstant: params.isConstant || false,
        startI: params.startI,
        minScale:params.minScale || 1
      };
   
      if (!initParams.el) {
        console.warn("没有容器元素的参数");
        return false;
      }
   
      var rulerWrap = document.getElementById(initParams.el); //获取容器
      rulerWrap.style.height =
        initParams.height < 12 ? 12 + "px" : initParams.height + "px";
   
      //最大刻度的小值是12
      initParams.maxScale = initParams.maxScale < 12 ? 12 : initParams.maxScale;
   
      if (initParams.startValue > initParams.maxScale) {
        initParams.startValue = initParams.maxScale;
      }
   
      var minSildeNum = initParams.minScale; //最小滑动的值
      var maxSildeNum = initParams.maxScale; //最大滑动的值
   
      if (initParams.region) {
        minSildeNum = Math.floor(initParams.region[0]);
        maxSildeNum = Math.floor(initParams.region[1]);
      }
   
      var count = initParams.startValue; //初始值
   
      var winWidth = rulerWrap.offsetWidth; //容器宽度
      var division = winWidth / 12; //每个刻度的距离 分割线
      //刻度值数组
      var scaleValueList = [];
      for (var i = 0; i <= initParams.maxScale; i += 5) {
        scaleValueList.push(i);
      }
      var canvas = rulerWrap.getElementsByTagName("canvas")[0]; //获取容器下的canvas标签
      //没有canvas就创建一个
      if (!canvas) {
        canvas = document.createElement("canvas"); //创建canvas标签
        canvas.width = winWidth;
        canvas.height = initParams.height;
        rulerWrap.appendChild(canvas);
      }
      var cxt = canvas.getContext("2d");
   
      if (window.devicePixelRatio) {
        canvas.width = window.devicePixelRatio * winWidth;
        canvas.height = window.devicePixelRatio * initParams.height;
        cxt.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
   
      //画刻度尺
      function drawRuler(count) {
        count = count - 6;
   
        //清空画布
        cxt.clearRect(0, 0, winWidth, initParams.height);
   
        //刻度尺背景
        if (initParams.background) {
          cxt.fillStyle = initParams.background;
          cxt.fillRect(0, 0, canvas.width, initParams.height);
        }
   
        //画刻度线
        for (var i = initParams.startI; i < initParams.maxScale + 1; i++) {
          cxt.beginPath();
          cxt.save();
          cxt.strokeStyle = initParams.color ? initParams.color : "#bbb";
          cxt.lineWidth = 1;
          cxt.lineCap = "round";
          cxt.moveTo(division * i - count * division, 40); // 第二个参数为开始的y轴坐标
          cxt.lineTo(
            division * i - count * division,
            Math.floor(initParams.height * 0.7)
          );
          if (i % 5 === 0) {
            cxt.strokeStyle = initParams.color ? initParams.color : "#666";
            cxt.lineTo(
              division * i - count * division,
              Math.floor(initParams.height * 0.52)
            );
          }
          cxt.moveTo(division * i - count * division, 40);
          cxt.lineTo(150, 40);
          cxt.stroke();
          cxt.restore();
          cxt.closePath();
        }
   
        // 从哪个开始渲染数字
        let index = scaleValueList.findIndex((item, index) => {
          return item > initParams.startI;
        });
        //添加体重数字
        cxt.beginPath();
        cxt.font = "14px Arial";
        cxt.fillStyle = initParams.color ? initParams.color : "#333";
        cxt.textAlign = "center";
        cxt.textBaseline = "middle";
        for (var i = index; i < scaleValueList.length; i++) {
          cxt.fillText(
            scaleValueList[i].toString()+'岁',
            division * i * 5 - count * division,
            Math.floor(initParams.height * 0.3)
          );
        }
   
        cxt.closePath();
   
        //中心刻度线
        cxt.beginPath();
        cxt.save();
        cxt.strokeStyle = initParams.markColor;
        cxt.lineWidth = 1;
        cxt.lineCap = "round";
        cxt.moveTo(winWidth / 2, 0);
        cxt.lineTo(winWidth / 2, Math.floor(initParams.height * 0.7));
        cxt.stroke();
        cxt.restore();
        cxt.closePath();
   
        //  中心刻度线下三角形
        cxt.beginPath();
        cxt.moveTo(winWidth / 2 + 7, 40);
        cxt.lineTo(winWidth / 2 - 7, 40);
        cxt.lineTo(winWidth / 2, 30);
        cxt.fillStyle = "#F54C22";
        cxt.closePath();
        cxt.fill();
      }
   
      if (window.devicePixelRatio) {
        canvas.style.transform = "scale(" + 1 / window.devicePixelRatio + ")";
        canvas.style.transformOrigin = "left top";
      }
   
      drawRuler(count);
   
      //滑动相关
      var initX = 0, //初始x 距离
        endX = 0, //结束x 距离
        distanceX = 0, //移动距离
        _distanceX = 0, // 判断用的移动距离
        lastX = count; //上次移动距离
   
      if (!canvas) return false;
   
      //手指按下
      canvas.addEventListener(
        "touchstart",
        function (e) {
          initX = e.targetTouches[0].pageX;
        },
        false
      );
      //手指滑动
      canvas.addEventListener(
        "touchmove",
        function (e) {
          endX = e.targetTouches[0].pageX;
          console.log(endX, "endX");
          moveEvent();
        },
        false
      );
   
      //手指抬起
      canvas.addEventListener(
        "touchend",
        function (e) {
          lastX = count;
          overEvent();
        },
        false
      );
   
      var isMouseDown = false; //鼠标是否按下
   
      //鼠标按下
      canvas.addEventListener(
        "mousedown",
        function (e) {
          isMouseDown = true;
          initX = e.layerX;
        },
        false
      );
      //鼠标移动
      canvas.addEventListener(
        "mousemove",
        function (e) {
          if (!isMouseDown) {
            return false;
          }
          endX = e.layerX;
          moveEvent();
        },
        false
      );
   
      //鼠标抬起&离开
      canvas.addEventListener(
        "mouseup",
        function (e) {
          lastX = count;
          isMouseDown = false;
          overEvent();
        },
        false
      );
   
      canvas.addEventListener(
        "mouseleave",
        function (e) {
          if (isMouseDown) {
            lastX = count;
            isMouseDown = false;
            overEvent();
          }
        },
        false
      );
   
      //手指&鼠标移动事件
      function moveEvent() {
        distanceX = Math.floor((initX-endX) / (winWidth / 12));
        if (distanceX === _distanceX) {
          return false;
        }
        _distanceX = distanceX;
        count = lastX + distanceX;
   
        if (count >= initParams.maxScale || count <= 0) {
          count = initParams.maxScale ;
        } else if(count <minSildeNum) {
          count = minSildeNum
        }
        drawRuler(count);
   
        if (initParams.isConstant) {
          params.success && params.success(count);
        }
      }
   
      //手指&鼠标结束事件
      function overEvent() {
        if (count > maxSildeNum) {
          lastX = count = count > maxSildeNum ? maxSildeNum : count;
        } else if (count < minSildeNum) {
          lastX = count = count < minSildeNum ? minSildeNum : count;
        } 
        drawRuler(count);
   
        //返回最后的值
        params.success && params.success(count);
      }
    },
  };