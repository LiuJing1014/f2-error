// index.js
import { createElement } from '@antv/f2';
import Chart from './chart';
import PieChart from './pieChart';

Page({
  data: {
    onEarningsChart:()=>{},
    list:[
      {
        "nav_date": "2022-08-02",
        "reference": -4.69,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-03",
        "reference": -5.62,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-04",
        "reference": -4.82,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-05",
        "reference": -3.53,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-08",
        "reference": -3.74,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-09",
        "reference": -3.54,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-10",
        "reference": -4.63,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-11",
        "reference": -2.68,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-12",
        "reference": -2.74,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-15",
        "reference": -2.86,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-16",
        "reference": -3.04,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-17",
        "reference": -2.14,
        "nav_unit": 0
      },
      {
        "nav_date": "2022-08-18",
        "reference": -2.99,
        "nav_unit": 0
      },
      {
          "nav_date": "2022-08-19",
          "reference": -3.67,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-22",
          "reference": -2.96,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-23",
          "reference": -3.43,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-24",
          "reference": -5.26,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-08-25",
          "reference": -4.47,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-26",
          "reference": -4.68,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-29",
          "reference": -5.09,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-30",
          "reference": -5.41,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-08-31",
          "reference": -5.34,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-09-01",
          "reference": -6.16,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-09-02",
          "reference": -6.62,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-05",
          "reference": -6.81,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-06",
          "reference": -5.96,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-07",
          "reference": -5.9,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-08",
          "reference": -6.3,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-09",
          "reference": -5,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-13",
          "reference": -4.59,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-14",
          "reference": -5.66,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-15",
          "reference": -6.54,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-16",
          "reference": -8.73,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-19",
          "reference": -8.84,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-20",
          "reference": -8.73,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-21",
          "reference": -9.41,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-09-22",
          "reference": -10.2,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-09-23",
          "reference": -10.51,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-09-26",
          "reference": -10.96,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-09-27",
          "reference": -9.67,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-28",
          "reference": -11.15,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-29",
          "reference": -11.18,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-09-30",
          "reference": -11.7,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-10",
          "reference": -13.65,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-10-11",
          "reference": -13.49,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-10-12",
          "reference": -12.18,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-10-13",
          "reference": -12.91,
          "nav_unit": -0.02
      },
      {
          "nav_date": "2022-10-14",
          "reference": -10.83,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-17",
          "reference": -10.74,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-18",
          "reference": -10.93,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-10-19",
          "reference": -12.36,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-20",
          "reference": -12.86,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-21",
          "reference": -13.14,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-24",
          "reference": -15.68,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-25",
          "reference": -15.82,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-26",
          "reference": -15.13,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-27",
          "reference": -15.73,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-28",
          "reference": -17.82,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-10-31",
          "reference": -18.57,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-01",
          "reference": -15.66,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-02",
          "reference": -14.65,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-03",
          "reference": -15.34,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-04",
          "reference": -12.58,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-07",
          "reference": -12.39,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-08",
          "reference": -12.99,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-09",
          "reference": -13.8,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-10",
          "reference": -14.47,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-11",
          "reference": -12.08,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-14",
          "reference": -11.95,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-11-15",
          "reference": -10.28,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-11-16",
          "reference": -11.02,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-11-17",
          "reference": -11.38,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-11-18",
          "reference": -11.78,
          "nav_unit": 0
      },
      {
          "nav_date": "2022-11-21",
          "reference": -12.53,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-22",
          "reference": -12.52,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-23",
          "reference": -12.43,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-24",
          "reference": -12.82,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-25",
          "reference": -12.38,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-28",
          "reference": -13.36,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-29",
          "reference": -10.69,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-11-30",
          "reference": -10.58,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-01",
          "reference": -9.61,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-02",
          "reference": -10.17,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-05",
          "reference": -8.4,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-06",
          "reference": -7.91,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-07",
          "reference": null,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-08",
          "reference": -8.12,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-09",
          "reference": -7.21,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-12",
          "reference": -8.25,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-13",
          "reference": -8.43,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-14",
          "reference": -8.22,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-15",
          "reference": -8.29,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-16",
          "reference": -8.23,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-19",
          "reference": -9.65,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-20",
          "reference": -11.14,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-21",
          "reference": -11.1,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-22",
          "reference": -10.98,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-23",
          "reference": -11.16,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-26",
          "reference": -10.8,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-27",
          "reference": -9.77,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-28",
          "reference": -10.16,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-29",
          "reference": -10.5,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2022-12-30",
          "reference": -10.15,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2023-01-03",
          "reference": -9.77,
          "nav_unit": -0.01
      },
      {
          "nav_date": "2023-01-04",
          "reference": -9.66,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-05",
          "reference": -7.9,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-06",
          "reference": -7.62,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-09",
          "reference": -6.87,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-10",
          "reference": -6.77,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-11",
          "reference": -6.94,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-12",
          "reference": -6.76,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-13",
          "reference": -5.45,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-16",
          "reference": -3.97,
          "nav_unit": 0.01
      },
      {
          "nav_date": "2023-01-17",
          "reference": -3.99,
          "nav_unit": 0.01
      },
      {
          "nav_date": "2023-01-18",
          "reference": -4.15,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-01-19",
          "reference": -3.55,
          "nav_unit": 0.01
      },
      {
          "nav_date": "2023-01-20",
          "reference": -2.96,
          "nav_unit": 0.01
      },
      {
          "nav_date": "2023-01-30",
          "reference": -2.5,
          "nav_unit": 0.01
      },
      {
          "nav_date": "2023-01-31",
          "reference": -3.53,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-01",
          "reference": -2.62,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-02",
          "reference": -2.97,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-03",
          "reference": -3.89,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-06",
          "reference": -5.16,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-07",
          "reference": -4.99,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-08",
          "reference": -5.4,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-09",
          "reference": -4.14,
          "nav_unit": 0
      },
      {
          "nav_date": "2023-02-10",
          "reference": -4.7,
          "nav_unit": 0
      }
    ],

    onDefenseChart:()=>{}
  },

  onLoad() {
    const _this = this
    this.setData({
      onEarningsChart: () => {
        return createElement(Chart, {
          data: this.data.list,
          changeCb:(obj)=>{
            console.log(obj)
          },
        });
      }
    });

    this.setData({
      onDefenseChart: () => {
        return createElement(PieChart, {
          data: [
            {
              amount: 20,
              ratio: 0.1,
              memo: '学习',
              const: 'const',
            },
            {
              amount: 100,
              ratio: 0.5,
              memo: '睡觉',
              const: 'const',
            },
            {
              amount: 10,
              ratio: 0.05,
              memo: '吃饭',
              const: 'const',
            },
            {
              amount: 30,
              ratio: 0.15,
              memo: '讲礼貌',
              const: 'const',
            },
            {
              amount: 10,
              ratio: 0.05,
              memo: '其他',
              const: 'const',
            },
            {
              amount: 20,
              ratio: 0.1,
              memo: '运动',
              const: 'const',
            },
            {
              amount: 10,
              ratio: 0.05,
              memo: '暂无备注',
              const: 'const',
            },
          ]
        });
      }
    });
  },
 
})
