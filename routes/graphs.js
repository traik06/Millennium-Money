// Pie Graph for checking and saving account
var ctx = document.getElementById('myChart2');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Checking', 'Saving'],
        datasets: [{
            label: 'Total Cash Value',
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
});

// Pie Graph for Expense Distribution
var ctx = document.getElementById('myChart3');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Rent', 'Vehicle', 'Phone', 'Food', 'Fuel', 'Leisure', 'Memberships', 'Utilities', 'Internet'],
        datasets: [{
            label: 'Total Cash Value',
            data: [12, 19, 3, 5, 2, 3, 2, 9, 3],
            backgroundColor: [
                'rgba(255,  99, 132, 0.2)',
                'rgba( 54, 162, 235, 0.2)',
                'rgba(255, 206,  86, 0.2)',
                'rgba( 75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159,  64, 0.2)',
                'rgba(  0,   0,   0, 0.4)',
                'rgba(204,   0, 255, 0.2)',
                'rgba(255, 255, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,  99, 132, 1)',
                'rgba( 54, 162, 235, 1)',
                'rgba(255, 206,  86, 1)',
                'rgba( 75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159,  64, 1)',
                'rgba(  0,   0,   0, 1)',
                'rgba(204,   0, 255, 1)',
                'rgba(  0,   0,   0, 1)'

            ],
            borderWidth: 1
        }]
    },
});

// Pie Graph for Expenses
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: "pie",
    data: {
        labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    },
});