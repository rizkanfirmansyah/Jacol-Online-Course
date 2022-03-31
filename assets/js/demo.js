var chart1 = document.getElementById("canvas-line").getContext('2d');
        var chart2 = document.getElementById("canvas-line-2").getContext('2d');

        var myChart = new Chart(chart1, {
            type: 'line',
            data: {
                labels: ["IPA", "IPS", "Matematika", "B Indonesia", "B Inggris", "Seni Budaya", "PKN", "Agama"],
                datasets: [{
                    label: 'Statistics',
                    data: [60, 85, 76, 44, 50, 81, 65, 90],
                    borderWidth: 2,
                    borderColor: '#6491EE',
                    backgroundColor: 'transparent',
                    pointBackgroundColor: '#6491EE',
                    pointBorderColor: '#6491EE',
                    pointRadius: 4
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                        },
                        ticks: {
                            stepSize: 10,
                            max: 100,
                            min: 30
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#fbfbfb',
                            lineWidth: 2
                        }
                    }],
                },
            }
        });

        var myChart = new Chart(chart2, {
            type: 'line',
            data: {
                labels: ["UTS", "UAS", "Tugas"],
                datasets: [{
                        label: 'Matematika',
                        data: [100, 85, 75],
                        borderWidth: 2,
                        borderColor: '#6491EE',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: '#6491EE',
                        pointBorderColor: '#6491EE',
                        pointRadius: 4
                    },
                    {
                        label: 'Biologi',
                        data: [90, 95, 76],
                        borderWidth: 2,
                        borderColor: '#FFB93C',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: '#FFB93C',
                        pointBorderColor: '#FFB93C',
                        pointRadius: 4
                    },
                    {
                        label: 'Sejarah',
                        data: [70, 98, 80],
                        borderWidth: 2,
                        borderColor: '#FF73B8',
                        backgroundColor: 'transparent',
                        pointBackgroundColor: '#FF73B8',
                        pointBorderColor: '#FF73B8',
                        pointRadius: 4
                    },
                ]
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                        },
                        ticks: {
                            stepSize: 10,
                            max: 100,
                            min: 60
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true,
                            drawBorder: true,
                            color: '#fbfbfb',
                            lineWidth: 2
                        }
                    }],
                },
            }
        });