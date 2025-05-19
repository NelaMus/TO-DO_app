document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('ukolyChart').getContext('2d');
    const data = {
        labels: ['Nesplněné', 'Splněné'],
        datasets: [{
            data: window.ukolyData, // data předáme z šablony
            backgroundColor: ['#ffcc00', '#5cce0c']
        }]
    };
    new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom'
                }
            }
        }
    });
});