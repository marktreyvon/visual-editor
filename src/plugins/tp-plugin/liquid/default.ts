import { measureTextWidth } from "@antv/g2plot";

// circle | diamond | triangle | pin | rect
export const shapeOptions = [
  { label: '圆形', value: 'circle' },
  { label: '菱形', value: 'diamond' },
  { label: '三角形', value: 'triangle' },
  { label: '针形', value: 'pin' },
  { label: '矩形', value: 'rect' },
]

export const defaultOption = {
  shape: 'rect',
  isLoop: true,
  title: '液位',
  titleSize: 20,
  titleColor1: 'rgba(44,53,66,0.85)',
  titleColor2: '#fff',
  fontSize: 60,
  color1: 'rgba(44,53,66,0.85)',
  color2: '#fff',
  borderWidth: 2,
  distance: 0,
  borderColor: '#5B8FF9',
  liquidFill: '#5B8FF9',
  backgroundColor: ''
}

export const getOptionData = (option?: any) => {
  if (!option) option = defaultOption;
  return {
    percent: 0.01,
    shape: option.shape,
    outline: {
      border: option.borderWidth,
      distance: 4,
    },
    wave: {
      length: 128,
    },
    statistic: {
      // 标题
      title: {
        formatter: () => option.title,
        style: (data: any) => {
          const { percent } = data;
          return {
            fontSize: option.titleSize,
            fill: percent > 0.65 ? option.titleColor2 : option.titleColor1,
          }
        },
      },
      content: {
        style: (data: any) => {
          const { percent } = data;
          return {
            fontSize: 60,
            lineHeight: 1,
            fill: percent > 0.50 ? option.color2 : option.color1,
          }
        },
        customHtml: (container: any, view: any, data: any) => {
          const { percent } = data;
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = `${(percent * 100).toFixed(0)}%`;
          const textWidth = measureTextWidth(text, { fontSize: 60 });
          const scale = Math.min(d / textWidth, 1);
          return `<div style="width:${d}px;display:flex;align-items:center;justify-content:center;font-size:${scale}em;line-height:${
            scale <= 1 ? 1 : 'inherit'
          }">${text}</div>`;
        }
      },
    },
    // 背景颜色
    shapeStyle: {
      fill: option.backgroundColor,
    },
    // 液体和边框
    liquidStyle: (data: any) => {
      const { percent } = data;
      return {
        fill: option.liquidFill,
        stroke: option.borderColor,
      };
    }
    
  }
}
  