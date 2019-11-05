////////////////////////////
////// SCROLLYTELLING //////
////////////////////////////


// Primeiro gráfico – Produção de todo o Brasil
Highcharts.chart("scrolly-1", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 29747.68 },
        { name: "Ciências da vida e da terra", y: 17697.96 },
        { name: "Matemática e ciência da computação", y: 5200.05 },
        { name: "Ciências físicas e engenharia", y: 16997.95 },
        { name: "Ciências sociais e humanidades", y: 1809.37 }
      ],
      name: "Todo o Brasil",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

//Segundo gráfico – Brasil x USP
Highcharts.chart("scrolly-2", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770 " }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 29747.68 },
        { name: "Ciências da vida e da terra", y: 17697.96 },
        { name: "Matemática e ciência da computação", y: 5200.05 },
        { name: "Ciências físicas e engenharia", y: 16997.95 },
        { name: "Ciências sociais e humanidades", y: 1809.37 }
      ],
      name: "Todo o Brasil",
      type: "areaspline"
    },
    {
      color: "#ffffd1",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 8391.49 },
        { name: "Ciências da vida e da terra", y: 3702.9 },
        { name: "Matemática e ciência da computação", y: 1060.07 },
        { name: "Ciências físicas e engenharia", y: 3247.7 },
        { name: "Ciências sociais e humanidades", y: 443.74 }
      ],
      name: "USP",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

//Terceiro gráfico – Brasil x Unesp
Highcharts.chart("scrolly-3", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770 " }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 29747.68 },
        { name: "Ciências da vida e da terra", y: 17697.96 },
        { name: "Matemática e ciência da computação", y: 5200.05 },
        { name: "Ciências físicas e engenharia", y: 16997.95 },
        { name: "Ciências sociais e humanidades", y: 1809.37 }
      ],
      name: "Todo o Brasil",
      type: "areaspline"
    },
    {
      color: "#ffffd1",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2624.42 },
        { name: "Ciências da vida e da terra", y: 2042.19 },
        { name: "Matemática e ciência da computação", y: 202.94 },
        { name: "Ciências físicas e engenharia", y: 1378 },
        { name: "Ciências sociais e humanidades", y: 77.24 }
      ],
      name: "Unesp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

//Quarto gráfico – Brasil x Unicamp
Highcharts.chart("scrolly-4", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770 " }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 29747.68 },
        { name: "Ciências da vida e da terra", y: 17697.96 },
        { name: "Matemática e ciência da computação", y: 5200.05 },
        { name: "Ciências físicas e engenharia", y:  16997.95 },
        { name: "Ciências sociais e humanidades", y: 1809.37 }
      ],
      name: "Todo o Brasil",
      type: "areaspline"
    },
    {
      color: "#ffffd1",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2292.89 },
        { name: "Ciências da vida e da terra", y: 1057.36 },
        { name: "Matemática e ciência da computação", y: 579.8 },
        { name: "Ciências físicas e engenharia", y: 1531.26},
        { name: "Ciências sociais e humanidades", y: 100.73 }
      ],
      name: "Unicamp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

//Quinto gráfico – Brasil x Big Three paulista
Highcharts.chart("scrolly-5", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770 " }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 29747.68 },
        { name: "Ciências da vida e da terra", y: 17697.96 },
        { name: "Matemática e ciência da computação", y: 5200.05 },
        { name: "Ciências físicas e engenharia", y: 16997.95 },
        { name: "Ciências sociais e humanidades", y: 1809.37 }
      ],
      name: "Todo o Brasil",
      type: "areaspline"
    },
    {
      color: "#ffffd1",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 13308.8 },
        { name: "Ciências da vida e da terra", y: 6802.44 },
        { name: "Matemática e ciência da computação", y: 1842.8 },
        { name: "Ciências físicas e engenharia", y: 6156.96 },
        { name: "Ciências sociais e humanidades", y: 621.71 }
      ],
      name: "USP, Unesp e Unicamp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});


///////////////////////////
//// DESTAQUES SEÇÃO 1 ////
//////////////////////////

// USP
Highcharts.chart("usp", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 10000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 8391.49 },
        { name: "Ciências da vida e da terra", y: 3702.89 },
        { name: "Matemática e ciência da computação", y: 1060.06 },
        { name: "Ciências físicas e engenharia", y: 3247.69 },
        { name: "Ciências sociais e humanidades", y: 443.73 }
      ],
      name: "USP",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

// Unesp
Highcharts.chart("unesp", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 10000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2624.41 },
        { name: "Ciências da vida e da terra", y: 2042.18 },
        { name: "Matemática e ciência da computação", y: 202.93 },
        { name: "Ciências físicas e engenharia", y: 1378.00 },
        { name: "Ciências sociais e humanidades", y: 77.23 }
      ],
      name: "Unesp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

// Unicamp
Highcharts.chart("unicamp", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 10000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2292.88 },
        { name: "Ciências da vida e da terra", y: 1057.36 },
        { name: "Matemática e ciência da computação", y: 579.79 },
        { name: "Ciências físicas e engenharia", y: 1531.26 },
        { name: "Ciências sociais e humanidades", y: 100.73 }
      ],
      name: "Unicamp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

////////////////////////////
/// ZOOM - MESMA ESCALA ///
/// QUE SCROLLYTELLING ///
/////////////////////////

// USP
Highcharts.chart("usp-scaled", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 8391.49 },
        { name: "Ciências da vida e da terra", y: 3702.89 },
        { name: "Matemática e ciência da computação", y: 1060.06 },
        { name: "Ciências físicas e engenharia", y: 3247.69 },
        { name: "Ciências sociais e humanidades", y: 443.73 }
      ],
      name: "USP",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

// Unesp
Highcharts.chart("unesp-scaled", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2624.41 },
        { name: "Ciências da vida e da terra", y: 2042.18 },
        { name: "Matemática e ciência da computação", y: 202.93 },
        { name: "Ciências físicas e engenharia", y: 1378.00 },
        { name: "Ciências sociais e humanidades", y: 77.23 }
      ],
      name: "Unesp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

// Unicamp
Highcharts.chart("unicamp-scaled", {
  chart: { backgroundColor: "transparent", polar: true },
  credits: { enabled: false },
  pane: { startAngle: 0 },
  plotOptions: { areaspline: { marker: { symbol: "none" } } },
  title: { text: "" },

  xAxis: {
    categories: [
      "Cências biomédicas e da saúde",
      "Ciências da vida e da terra",
      "Matemática e ciência da computação",
      "Ciências físicas e engenharia",
      "Ciências sociais e humanidades"
    ],
    gridLineColor: "#000000",
    gridLineWidth: 1,
    labels: {
      enabled: true,
      style: { color: "#FF7770" }
    },
    lineColor: "#FF7770",
    lineWidth: 1,
    tickmarkPlacement: "off"
  },

  yAxis: {
    endOnTick: false,
    gridLineColor: "#FF7770",
    gridLineWidth: .5,
    labels: {
      style: { color: "#FF7770" }
    },
    min: 0,
    max: 40000,
    tickInterval: 10000,
    tickWidth: 10,
    showLastLabel: false
  },

  series: [
    {
      color: "#FF7770",
      data: [
        { name: "Ciências biomédicas e da saúde", y: 2292.88 },
        { name: "Ciências da vida e da terra", y: 1057.36 },
        { name: "Matemática e ciência da computação", y: 579.79 },
        { name: "Ciências físicas e engenharia", y: 1531.26 },
        { name: "Ciências sociais e humanidades", y: 100.73 }
      ],
      name: "Unicamp",
      type: "areaspline"
    }
  ],

  tooltip: {
    backgroundColor: "#e2e2e2",
    borderColor: "#000000",
    borderRadius: 30,
    headerFormat:
      '<div style="font-size: 16px; font-weight: bold;">{point.key}<br/></div>',
    pointFormatter: function() {
      return `
          <div>${this.series.name} <b>${this.y} artigos publicados</b></div>
          `;
    },
    useHTML: true,
    shared: false
  }
});

