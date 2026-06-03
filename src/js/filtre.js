const filterBtn =
    document.getElementById('filter-btn');

const resetBtn =
    document.getElementById('reset-btn');

const barsList =
    document.getElementById('bars-list');

const originalBars =
    Array.from(
        barsList.querySelectorAll('.bar-item')
    );

filterBtn.addEventListener('click', () => {

    const sortedBars = [...originalBars];

    sortedBars.sort((a, b) => {

        return (
            parseFloat(a.dataset.distance) -
            parseFloat(b.dataset.distance)
        );

    });

    sortedBars.forEach((bar) => {
        barsList.appendChild(bar);
    });

});

resetBtn.addEventListener('click', () => {

    originalBars.forEach((bar) => {
        barsList.appendChild(bar);
    });

});