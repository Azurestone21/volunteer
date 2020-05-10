
// 1. 实例化对象
let myMap = echarts.init(document.querySelector(".map .chart"));

let mapData = [
  {name:"南海诸岛",value:0, count: 30},
  {name: '北京', value: 3, count: 30},
  {name: '天津', value: 5},
  {name: '上海', value: 6},
  {name: '重庆', value: 15},
  {name: '河北', value: 15},
  {name: '河南', value: 15},
  {name: '云南', value: 15},
  {name: '辽宁', value: 7},
  {name: '黑龙江', value: 5},
  {name: '湖南', value: 68},
  {name: '安徽', value: 34},
  {name: '山东', value: 34},
  {name: '新疆', value: 34},
  {name: '江苏', value: 34},
  {name: '浙江', value: 34},
  {name: '江西', value: 34},
  {name: '湖北', value: 34},
  {name: '广西', value: 34},
  {name: '甘肃', value: 34},
  {name: '山西', value: 34},
  {name: '内蒙古', value: 9},
  {name: '陕西', value: 16},
  {name: '吉林', value: 16},
  {name: '福建', value: 16},
  {name: '贵州', value: 16},
  {name: '广东', value: 43},
  {name: '青海', value: 43},
  {name: '西藏', value: 43},
  {name: '四川', value: 43},
  {name: '宁夏', value: 43},
  {name: '海南', value: 75},
  {name: '台湾', value: 75},
  {name: '香港', value: 75},
  {name: '澳门', value: 75}
];
let map_option = {
 color: ["#8A3310", "#C64918", "#E55825", "#F2AD92", "#F9DCD1"],
  title: {
    x:'left'
  },
  tooltip: {
    trigger: 'item'
  },
  // 左侧导航
  
  visualMap: {
    show: false,
    x: '4%',
    y: 'bottom',
    textStyle: {
      fontSize: 8,
    },
    showLabel: 0,
    // text: ["高", "低"],
    splitList: [
      //{start: 0, end: 0},
      {start: 1, end: 9},
      {start: 10, end: 99},
      {start: 100, end: 999},
      {start: 1000, end: 9999},
      {start: 10000}
    ],
    color: ["#8A3310", "#C64918", "#E55825", "#F2AD92", "#F9DCD1"]
  },
  

  // 配置属性
  series: [{
    name: "累计确诊病例",
    type: "map",
    mapType: 'china',
    roam: false, //拖动和缩放
    data: mapData,
    itemStyle: {
      normal: {
        borderWidth: .5,   // 区域边框宽度
        borderColor: '#009fe8',  //区域边框颜色
        areaColor: '#ffefd5',   //区域颜色
      },
      // 鼠标滑过相关设置
      emphasis: {
        borderWidth: .5,   // 区域边框宽度
        borderColor: '#4b0082',  //区域边框颜色
        areaColor: '#ff8454',   //区域颜色
      }
    },
    label: {
      normal: {
        show: true,
        fontSize: 8,
      },
      emphasis: {
        show: true,
        fontSize: 8,
      }
    },
	left: '10%',
	width: '90%',
	height: '90%'
  }]
};

// 3. 把配置和数据给实例对象
myMap.setOption(map_option);
// 4. 自适应
/*window.addEventListener("resize", function () {
  myMap.resize();
});*/




