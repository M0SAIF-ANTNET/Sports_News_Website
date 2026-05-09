// Data Center - قاعدة بيانات الفرق
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

// دالة تهيئة الرسوم البيانية
// دالة تهيئة الرسوم البيانية المحدثة لحل مشكلة الاختفاء
function initDashboard() {
    const perfCtx = document.getElementById('performanceChart')?.getContext('2d');
    const goalCtx = document.getElementById('goalsPieChart')?.getContext('2d');

    if (!perfCtx || !goalCtx) return;

    // Bar Chart
    perfChart = new Chart(perfCtx, {
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
            // التعديل السحري: نوقف الحفاظ على نسبة العرض للطول
            maintainAspectRatio: false, 
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });

    // Doughnut Chart
    goalChart = new Chart(goalCtx, {
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
            // التعديل السحري: نوقف الحفاظ على نسبة العرض للطول
            maintainAspectRatio: false, 
            plugins: {
                legend: {
                    position: 'bottom',
                    align: 'center',
                    labels: {
                        color: '#7a7870',
                        font: { size: 12 },
                        padding: 15,
                        boxWidth: 15
                    }
                }
            }
        }
    });
}
// دالة تحديث البيانات
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

// تشغيل عند التحميل
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('performanceChart')) {
        initDashboard();
        document.getElementById('teamSelect')?.addEventListener('change', (e) => {
            updateDashboard(e.target.value);
        });
    }
});