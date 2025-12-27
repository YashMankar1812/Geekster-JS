const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Month Sales Data',
        data: [23, 64, 30 , 25, 40, 80, 14, 40, 31, 54, 20, 58],
        backgroundColor: [ 
            'rgb(135, 206, 250)',  
            'rgb(255, 102, 102)',  
            'rgb(255, 178, 102)',  
            'rgb(221, 160, 221)',  
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 178, 102)',   
            'rgb(255, 206, 86)',
            'rgb(75, 192, 192)',
            'rgb(255, 255, 153)',  
            'rgb(153, 102, 255)',
            'rgb(255, 159, 64)'
        ],
     borderColors : [
            'rgb(0, 102, 204)',    // Darker sky blue
            'rgb(204, 51, 51)',    // Darker red
            'rgb(204, 140, 51)',   // Darker orange
            'rgb(204, 204, 102)',  // Darker yellow
            'rgb(204, 140, 51)',   // Darker orange (duplicate)
            'rgb(142, 102, 142)',  // Darker purple
            'rgb(204, 51, 102)',   // Darker red
            'rgb(0, 102, 204)',    // Darker blue
            'rgb(204, 153, 0)',    // Darker yellow
            'rgb(0, 102, 102)',    // Darker teal
            'rgb(102, 51, 204)',   // Darker purple
            'rgb(204, 102, 51)'    // Darker orange
        ],
        
       hoverBorderColors : [
            'rgb(102, 153, 255)',  
            'rgb(255, 77, 77)',    
            'rgb(255, 200, 128)',    
            'rgb(255, 255, 204)',    
            'rgb(255, 200, 128)',     
            'rgb(238, 174, 238)',    
            'rgb(255, 102, 153)',    
            'rgb(102, 204, 255)',    
            'rgb(255, 175, 198)',    
            'rgb(102, 204, 204)',    
            'rgb(153, 102, 255)',    
            'rgb(255, 204, 128)'     
        ],


            

        hoverBorderWidth: 1,
        borderWidth: 2

    }]
};



// Bar Chart
const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: barChartData,
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true
            }
        }
    }
});

anime({
    targets: '#barChart',
    scale: [0, 1],
    duration: 1500,
    easing: 'easeInOutExpo',
    delay: anime.stagger(300)
});



// rgba(255, 99, 132, 0.2)  which color  ? 

