// ============================================
// XENON AIRDROP ULTIMATE - CHART CONFIGURATION
// ============================================

// Chart color palette
const chartColors = {
    primary: '#FFD700',
    secondary: '#FF8C00',
    success: '#6bcb77',
    danger: '#ff6b6b',
    warning: '#ffd93d',
    info: '#88ccff',
    categories: {
        'DeFi': '#4CAF50',
        'NFT': '#9C27B0',
        'L1': '#2196F3',
        'L2': '#00BCD4',
        'GameFi': '#FF9800',
        'SocialFi': '#E91E63'
    },
    priorities: {
        'High': '#ff6b6b',
        'Mid': '#ffd93d',
        'Low': '#6bcb77'
    }
};

// Default chart options
const defaultChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                color: '#FFD700',
                font: {
                    size: 12,
                    family: "'Inter', sans-serif"
                },
                boxWidth: 12,
                padding: 10
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0,0,0,0.8)',
            titleColor: '#FFD700',
            bodyColor: '#fff',
            borderColor: '#FFD700',
            borderWidth: 1,
            cornerRadius: 8,
            padding: 10
        }
    },
    scales: {
        y: {
            beginAtZero: true,
            ticks: {
                color: '#ccc',
                stepSize: 1,
                font: { size: 11 }
            },
            grid: {
                color: 'rgba(255,255,255,0.1)'
            }
        },
        x: {
            ticks: {
                color: '#ccc',
                font: { size: 11 }
            },
            grid: {
                display: false
            }
        }
    }
};

// Light mode chart options
const lightChartOptions = {
    ...defaultChartOptions,
    plugins: {
        ...defaultChartOptions.plugins,
        legend: {
            ...defaultChartOptions.plugins.legend,
            labels: {
                ...defaultChartOptions.plugins.legend.labels,
                color: '#333'
            }
        }
    },
    scales: {
        ...defaultChartOptions.scales,
        y: {
            ...defaultChartOptions.scales.y,
            ticks: { ...defaultChartOptions.scales.y.ticks, color: '#666' },
            grid: { color: 'rgba(0,0,0,0.1)' }
        },
        x: {
            ...defaultChartOptions.scales.x,
            ticks: { ...defaultChartOptions.scales.x.ticks, color: '#666' }
        }
    }
};

// Create category bar chart
function createCategoryChart(ctx, tasks) {
    const categories = ['DeFi', 'NFT', 'L1', 'L2', 'GameFi', 'SocialFi'];
    const counts = categories.map(cat => 
        tasks.filter(t => t.category === cat).length
    );

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: categories,
            datasets: [{
                label: 'Tasks',
                data: counts,
                backgroundColor: categories.map(cat => chartColors.categories[cat]),
                borderRadius: 8,
                barPercentage: 0.7,
                categoryPercentage: 0.8
            }]
        },
        options: {
            ...defaultChartOptions,
            plugins: {
                ...defaultChartOptions.plugins,
                tooltip: {
                    ...defaultChartOptions.plugins.tooltip,
                    callbacks: {
                        label: (context) => `${context.raw} tasks`
                    }
                }
            }
        }
    });
}

// Create priority donut chart
function createPriorityChart(ctx, tasks) {
    const priorities = ['High', 'Mid', 'Low'];
    const counts = priorities.map(pri => 
        tasks.filter(t => t.priority === pri).length
    );

    return new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: priorities,
            datasets: [{
                data: counts,
                backgroundColor: [
                    chartColors.priorities.High,
                    chartColors.priorities.Mid,
                    chartColors.priorities.Low
                ],
                borderWidth: 0,
                borderRadius: 4,
                spacing: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '60%',
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#FFD700',
                        font: { size: 12, family: "'Inter', sans-serif" },
                        boxWidth: 12,
                        padding: 15
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#FFD700',
                    bodyColor: '#fff',
                    callbacks: {
                        label: (context) => `${context.label}: ${context.raw} tasks (${context.parsed}%)`
                    }
                }
            }
        }
    });
}

// Create progress sparkline
function createProgressChart(ctx, data) {
    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map((_, i) => `Day ${i + 1}`),
            datasets: [{
                label: 'Tasks Completed',
                data: data,
                borderColor: '#FFD700',
                backgroundColor: 'rgba(255, 215, 0, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#FFD700',
                pointBorderColor: '#fff',
                pointRadius: 4,
                pointHoverRadius: 6,
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    titleColor: '#FFD700',
                    bodyColor: '#fff',
                    callbacks: {
                        label: (context) => `${context.raw} tasks completed`
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#ccc', stepSize: 1 },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                x: {
                    ticks: { color: '#ccc' },
                    grid: { display: false }
                }
            },
            elements: {
                line: { borderJoin: 'round' }
            }
        }
    });
}

// Update chart theme (dark/light)
function updateChartTheme(chart, isDarkMode) {
    if (!chart) return;
    
    const options = isDarkMode ? defaultChartOptions : lightChartOptions;
    
    chart.options.plugins.legend.labels.color = isDarkMode ? '#FFD700' : '#333';
    chart.options.scales.y.ticks.color = isDarkMode ? '#ccc' : '#666';
    chart.options.scales.x.ticks.color = isDarkMode ? '#ccc' : '#666';
    chart.options.scales.y.grid.color = isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)';
    
    chart.update();
}

// Destroy and cleanup chart
function destroyChart(chart) {
    if (chart) {
        chart.destroy();
    }
}

// Export module
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        chartColors,
        defaultChartOptions,
        lightChartOptions,
        createCategoryChart,
        createPriorityChart,
        createProgressChart,
        updateChartTheme,
        destroyChart
    };
}

console.log('📊 Chart config loaded - ready to create beautiful charts!');
