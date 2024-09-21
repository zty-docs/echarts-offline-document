var decalColor = 'rgba(0, 0, 0, 0.8)';
var svg =
  'M136.71078,90.7149424 C135.038663,90.084817 133.319214,89.8204828 131.637995,89.8987366 C131.93792,88.5693311 132.022117,87.2371959 131.901965,85.9319035 C131.475516,81.1970909 128.414369,76.8944942 123.681104,75.0882862 C118.812669,73.2488659 113.532803,74.556888 110.072058,78.0014222 C111.44425,78.0132512 112.836467,78.2716709 114.184082,78.7876003 C120.385569,81.1311211 123.498145,88.0593162 121.156545,94.2582038 C120.289538,96.5421242 118.80038,98.4052027 116.960324,99.7405227 C113.796773,102.011704 109.591905,102.714169 105.683776,101.228711 C99.4827445,98.8915594 96.3669821,91.9606345 98.7113134,85.7581072 C99.0176102,84.9537305 99.4044636,84.2007647 99.8609505,83.4869258 L99.8545788,83.4869258 C99.8545788,83.4869258 99.8545788,83.4869258 99.8545788,83.4932953 C101.850742,80.3754255 103.561544,76.9968612 104.927364,73.3990041 C115.528966,45.4164295 101.427934,14.127175 73.4261234,3.52605368 C45.4215819,-7.07142797 14.1333382,7.02472855 3.52900521,35.0104878 C0.629425582,42.6470623 -0.42099504,50.523403 0.149272308,58.1686218 C0.16110547,58.4206719 0.185226914,58.6786366 0.209348358,58.9366014 C2.47266801,84.9182432 19.2184117,108.595036 45.2413538,118.442737 C71.7121355,128.45559 100.448968,121.413198 119.352898,102.762395 C122.585626,99.6263266 127.465895,98.4657129 131.950208,100.160455 C137.34704,102.203699 140.39954,107.712861 139.559386,113.191995 C141.579216,111.769777 143.215378,109.750646 144.163851,107.256987 C146.676122,100.628613 143.33553,93.2204304 136.71078,90.7149424 ZZ';
var base64 =
  'image://data:image/png;base64,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';
var decals = [
  {
    color: decalColor,
    dashArrayX: [1, 0],
    dashArrayY: [2, 5],
    symbolSize: 1,
    rotation: Math.PI / 6
  },
  {
    color: decalColor,
    symbol: 'circle',
    dashArrayX: [
      [8, 8],
      [0, 8, 8, 0]
    ],
    dashArrayY: [6, 0],
    symbolSize: 0.8
  },
  {
    color: decalColor,
    dashArrayX: [1, 0],
    dashArrayY: [4, 3],
    rotation: -Math.PI / 4
  },
  {
    color: decalColor,
    dashArrayX: [
      [6, 6],
      [0, 6, 6, 0]
    ],
    dashArrayY: [6, 0]
  },
  {
    color: decalColor,
    dashArrayX: [
      [1, 0],
      [1, 6]
    ],
    dashArrayY: [1, 0, 6, 0],
    rotation: Math.PI / 4
  },
  {
    color: decalColor,
    symbol: 'triangle',
    dashArrayX: [
      [9, 9],
      [0, 9, 9, 0]
    ],
    dashArrayY: [7, 2],
    symbolSize: 0.75
  },
  {
    color: decalColor,
    dashArrayX: [1, 0],
    dashArrayY: 10,
    rotation: 0
  },
  {
    color: decalColor,
    dashArrayX: [10, 10],
    dashArrayY: [1, 0],
    rotation: 0
  },
  {
    color: decalColor,
    dashArrayX: [10, 5, 20, 5],
    dashArrayY: 10,
    rotation: 0
  },
  {
    color: decalColor,
    dashArrayX: [
      [10, 5, 20, 5],
      [20, 5]
    ],
    dashArrayY: [10, 5],
    rotation: 0
  },
  {
    symbol: 'rect',
    dashArrayX: [
      [8, 8],
      [0, 8, 8, 0]
    ],
    dashArrayY: [8, 0],
    symbolSize: 0.8,
    rotation: Math.PI / 4,
    color: 'black'
  },
  {
    color: decalColor,
    dashArrayX: [
      [30, 30],
      [0, 30, 30, 0]
    ],
    dashArrayY: [15, 0],
    symbol: 'path://' + svg
    // }, {
    //     color: decalColor,
    //     dashArrayX: [[30, 30], [0, 30, 30, 0]],
    //     dashArrayY: [30, 0],
    //     symbol: base64,
    //     symbolSize: 0.8
  }
];
var columns = 6;
var rows = Math.floor(decals.length / columns) + 1;
function renderItem(params, api) {
  var paletteColor = api.visual('color');
  var paletteDecal = api.visual('decal');
  return {
    type: 'group',
    x: (api.value(0) % columns) * 120 + 50,
    y: Math.floor(api.value(0) / columns) * 120 + 50,
    children: [
      {
        type: 'rect',
        shape: { x: 0, y: 0, width: 100, height: 100 },
        style: { fill: paletteColor, decal: paletteDecal }
      }
    ]
  };
}
option = {
  xAxis: {
    type: 'value',
    max: 1,
    show: false
  },
  yAxis: {
    type: 'value',
    show: false
  },
  series: (function () {
    var series = [];
    for (var i = 0; i < decals.length; ++i) {
      series.push({
        type: 'custom',
        data: [[i]],
        renderItem: renderItem
      });
    }
    return series;
  })(),
  aria: {
    enabled: true,
    decal: {
      show: true,
      decals: decals
    }
  },
  color: ['#ddd']
};
