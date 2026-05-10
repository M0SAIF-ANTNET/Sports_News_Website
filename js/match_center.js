// Match Center Logic - Managed by M.Abdelsamea

document.addEventListener('DOMContentLoaded', () => {
    // 1. اختيار أزرار الفلترة وكل كروت الماتشات
    const filterBtns = document.querySelectorAll('.filter-btns .btn');
    const matchCards = document.querySelectorAll('.match-card');

    if (filterBtns.length > 0 && matchCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // تغيير الشكل النشط للزرار
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterValue = btn.textContent.trim().toLowerCase();

                matchCards.forEach(card => {
                    // استخراج الحالة من النص جوه الكارت (Live, FT, Today)
                    const statusText = card.querySelector('.match-info').textContent.toLowerCase();
                    
                    if (filterValue === 'all') {
                        card.style.display = 'flex'; // إظهار الكل
                    } else if (filterValue === 'live') {
                        // لو الكارت فيه '75 (أو أي دقيقة) يبقى Live
                        const isLive = statusText.includes("'") || statusText.includes('live');
                        card.style.display = isLive ? 'flex' : 'none';
                    } else if (filterValue === 'finished') {
                        // لو الكارت فيه FT (Full Time)
                        const isFinished = statusText.includes('ft') || statusText.includes('finished');
                        card.style.display = isFinished ? 'flex' : 'none';
                    } else if (filterValue === 'upcoming') {
                        // لو الماتش لسه مجاش (بناءً على الكلاس أو النص)
                        const isUpcoming = card.classList.contains('upcoming') || statusText.includes('today');
                        card.style.display = isUpcoming ? 'flex' : 'none';
                    }
                });
            });
        });
    }

    // 2. إضافة أنيميشن بسيط عند الفلترة
    matchCards.forEach(card => {
        card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
    });
});