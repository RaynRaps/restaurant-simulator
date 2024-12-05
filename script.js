
document.addEventListener('DOMContentLoaded', () => {
    const setupForm = document.getElementById('setup-form');
    const startGameBtn = document.getElementById('start-game');
    const gameplaySection = document.getElementById('gameplay');
    const setupSection = document.getElementById('setup');

    const regionDisplay = document.getElementById('region-display');
    const nicheDisplay = document.getElementById('niche-display');
    const customersDisplay = document.getElementById('customers-display');
    const revenueDisplay = document.getElementById('revenue-display');
    const expensesDisplay = document.getElementById('expenses-display');
    const profitDisplay = document.getElementById('profit-display');
    const roiDisplay = document.getElementById('roi-display');
    const dayNumberDisplay = document.getElementById('day-number');
    const nextDayBtn = document.getElementById('next-day');

    let region = '';
    let niche = '';
    let budget = 50000;
    let revenue = 0;
    let expenses = 0;
    let profit = 0;
    let dayNumber = 1;

    // Initialize the game
    startGameBtn.addEventListener('click', () => {
        region = document.getElementById('region').value;
        niche = document.getElementById('niche').value;

        regionDisplay.textContent = region;
        nicheDisplay.textContent = niche;

        setupSection.style.display = 'none';
        gameplaySection.style.display = 'block';
    });

    nextDayBtn.addEventListener('click', () => {
        const dailyCustomers = Math.floor(Math.random() * 50) + 10;
        const dailyRevenue = dailyCustomers * (Math.random() * 20 + 5);
        const dailyExpenses = Math.random() * 500 + 300;

        revenue += dailyRevenue;
        expenses += dailyExpenses;
        profit = revenue - expenses;
        const roi = ((profit - 50000) / 50000) * 100;

        customersDisplay.textContent = dailyCustomers;
        revenueDisplay.textContent = revenue.toFixed(2);
        expensesDisplay.textContent = expenses.toFixed(2);
        profitDisplay.textContent = profit.toFixed(2);
        roiDisplay.textContent = roi.toFixed(2);
        dayNumberDisplay.textContent = ++dayNumber;

        if (roi >= 200) {
            alert('Congratulations! You achieved 200% ROI and won the game!');
            location.reload();
        }
    });
});
