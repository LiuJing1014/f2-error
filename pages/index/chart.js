import { Chart, TextGuide, PointGuide, Axis, Area, Tooltip, Line, Interval, PieLabel  } from '@antv/f2';
import { jsx as _jsx } from "@antv/f2/jsx-runtime";
import { jsxs as _jsxs } from "@antv/f2/jsx-runtime";

export default (props => {
  const { 
    data,
    changeCb
  } = props;

  return groupChart(data, changeCb)
});


const groupChart = (data)=>{
  return _jsxs(Chart, {
    data,
    syncY:true,
    scale:{
      nav_date:{
        tickCount: data.length < 15 ? 3 : 4,
        range: [0, 1]
      },
      nav_unit:{
        tickCount: 6,
        formatter: v => v + '%',
      },
      reference:{
        tickCount: 6,
        formatter: v => v + '%',
      }
    },
    children: [
      _jsx(Axis, {
        field: "nav_date",
        style: {
          label: (text, index, total) => {
            const textCfg = {
              align:'between',
              textAlign: 'center',
              fontSize: 10,
              fill: '#888',
              fontFamily: 'Number-Regular',
            }
            if (index === 0) {
              textCfg.textAlign = 'start'
            } else if (index > 0 && index === total - 1) {
              textCfg.textAlign = 'end'
            }
            return textCfg
          },
          line:{
            opacity: 0
          },
        },
      }), 
      _jsx(Axis, {
        field: "nav_unit",
        style: {
          label:{
            fontSize: 10,
            fill: '#888',
            fontFamily: 'Number-Regular'
          },
          grid: {
            lineWidth: 0.5,
            lineDash: null
          },
        }
      }), 
      
      _jsx(Axis, {
        field: "reference",
        position:'right',
      }), 
      _jsx(Tooltip, {
        showCrosshairs: true,
        showTitle: true,
      }),
      _jsx(Area, {
        x: "nav_date",
        y: "nav_unit",
        startOnZero:true,
        color: 'l(90) 0:#FA5555 1:#FFF'
      }),
      _jsx(Line, {
        x: "nav_date",
        y: "nav_unit",
        color:'#FA5555',
        size:1
      }),
      _jsx(Area, {
        x: "nav_date",
        y: "reference",
        startOnZero: true,
        color: 'l(90) 0:#1989FA 1:#FFF'
      }),
      _jsx(Line, {
        x: "nav_date",
        y: "reference",
        color:'#1989FA',
        size:1
      }),
    ]
  });
}



