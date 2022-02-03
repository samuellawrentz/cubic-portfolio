let prism = document.querySelector(".rec-prism");
let background = document.querySelector("body");

function Skills(){
  prism.style.transform = "rotateY( -90deg)";
  background.className= 'blue';
}
function Home(){
  prism.style.transform = "none";
  background.className='green';
}
function Experience(){
  prism.style.transform = "rotateY( -180deg)";
  background.className='red';
}

function Projects(){
  prism.style.transform = "rotateX( -90deg)";
  background.className='yellow';
}

function Follow(){
  prism.style.transform = "rotateY( 90deg)";
  background.className='pink';
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
    categories: ['HTML5', 'CSS3', 'Javascript', 'React', 'Highcharts', 'TypeScript', 'Node'],
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
    data: [70, 85, 90, 95, 60, 80, 73]
  }]
});
