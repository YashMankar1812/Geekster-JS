const ctx = document.getElementById('myChart').getContext('2d');
let chart;

function fetchMockData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100));
        }, 500);
    });
}


function initializeChart(labels, data) {
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Dynamic Data',
                data: data,
                borderColor: '#9a3c14',
                pointRadius: 5,
                pointBackgroundColor: '#f3f6f6',
                pointBorderColor: '#6c2626',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: '#4BC0C0',
                backgroundColor: 'rgba(185, 68, 42, 0.2)',
                borderWidth: 3,
                fill: true,
                
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    loop: true
                }
            }
        }
    });
}


async function updateChart() {
    const newData = await fetchMockData();
    const now = new Date().toLocaleTimeString();
    
    if (chart.data.labels.length >= 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }
    
    chart.data.labels.push(now);
    chart.data.datasets[0].data.push(newData);
    
    chart.update();
    
    anime({
        targets: chart.canvas,
        duration: 500,
        easing: 'easeInOutQuad',
        scale: [0.95, 1]
    });
}


initializeChart([], []);

setInterval(updateChart, 2000);
