    const teamsData = {
        ahly: {
            winRate: "75%",
            goals: 120,
            cleanSheets: 12,
            performance: [15, 5, 2],
            distribution: [40, 80]
        },
        madrid: {
            winRate: "82%",
            goals: 145,
            cleanSheets: 18,
            performance: [20, 3, 1],
            distribution: [60, 85]
        },
        barca: {
            winRate: "70%",
            goals: 110,
            cleanSheets: 10,
            performance: [12, 6, 4],
            distribution: [55, 55]
        }
    };

    let perfChart, goalChart;

    function initDashboard() {
        const ctx1 = document.getElementById('performanceChart').getContext('2d');
        const ctx2 = document.getElementById('goalsPieChart').getContext('2d');
        perfChart = new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Win', 'Draw', 'Loss'],
                datasets: [{
                    label: 'Match Outcomes',
                    data: teamsData.ahly.performance,
                    backgroundColor: ['#c8a97e', '#2a2a2c', '#e63946']
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { display: false } },
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
        goalChart = new Chart(ctx2, {
            type: 'doughnut',
            data: {
                labels: ['1st Half', '2nd Half'],
                datasets: [{
                    data: teamsData.ahly.distribution,
                    backgroundColor: ['#c8a97e', '#161618'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom', 
                        align: 'center',    
                        labels: {
                            color: '#7a7870', 
                            font: {
                                size: 12,    
                                family: "'SF Pro Display', sans-serif" 
                            },
                            usePointStyle: false, 
                            padding: 15,       
                            boxWidth: 15       
                        }
                    },
                    tooltip: {
                        enabled: true
                    }
                }
            }
        });
    }
    function updateDashboard(teamKey) {
        const data = teamsData[teamKey];
        if(!data) return;
        document.getElementById('winRate').innerText = data.winRate;
        document.getElementById('totalGoals').innerText = data.goals;
        document.getElementById('cleanSheets').innerText = data.cleanSheets;
        perfChart.data.datasets[0].data = data.performance;
        perfChart.update();
        goalChart.data.datasets[0].data = data.distribution;
        goalChart.update();
    }
    document.addEventListener('DOMContentLoaded', () => {
        initDashboard();
        document.getElementById('teamSelect').addEventListener('change', (e) => {
            updateDashboard(e.target.value);
        });
    });
