let prism = document.querySelector(".rec-prism");

function showSignup(){
  prism.style.transform = "rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "none";
}
function showForgotPassword(){
  prism.style.transform = "rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "rotateX( -90deg)";
}

function showContactUs(){
  prism.style.transform = "rotateY( 90deg)";
}

function showThankYou(){
  prism.style.transform = "rotateX( 90deg)";
}


Highcharts.chart('skillsChart', {
  chart: {
    type: 'bar'
  },
  title: false,
  subtitle: false,
  xAxis: {
    categories: ['HTML5', 'CSS3', 'Javascript', 'Photoshop', 'Highcharts', 'Python', 'Kendo UI'],
    title: {
      text: null
    }
  },
  yAxis: {
    visible:false,
    min: 0,
    title: {
      text: 'Population (millions)',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    },
    gridLineColor:'transparent'
  },
  tooltip: {
    enabled:false
  },    
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false
      },
      color:'#07ad90'
    }
  },  
  legend:{
    enabled:false
         },
  series: [{
    name: 'Skill',
    data: [70, 85, 90, 70, 60, 40, 73]
  }]
});