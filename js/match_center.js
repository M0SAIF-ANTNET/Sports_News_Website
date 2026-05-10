// Match Center Logic - Managed by M.Abdelsamea

document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.filter-btns .btn');
    const matchCards = document.querySelectorAll('.match-card');

    if (filterBtns.length > 0 && matchCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.textContent.trim().toLowerCase();

                matchCards.forEach(card => {
                    const statusText = card.querySelector('.match-info').textContent.toLowerCase();
                    
                    if (filterValue === 'all') {
                        card.style.display = 'flex';
                    } else if (filterValue === 'live') {
                        const isLive = statusText.includes("'") || statusText.includes('live');
                        card.style.display = isLive ? 'flex' : 'none';
                    } else if (filterValue === 'finished') {
                        const isFinished = statusText.includes('ft') || statusText.includes('finished');
                        card.style.display = isFinished ? 'flex' : 'none';
                    } else if (filterValue === 'upcoming') {
                        const isUpcoming = card.classList.contains('upcoming') || statusText.includes('today');
                        card.style.display = isUpcoming ? 'flex' : 'none';
                    }
                });
            });
        });
    }

    matchCards.forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
});