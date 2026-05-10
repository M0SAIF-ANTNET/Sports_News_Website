        function filterMedia(category) {
            const logos = document.getElementById('logos-section');
            const videos = document.getElementById('videos-section');
            const btns = document.querySelectorAll('.tab-btn');

            btns.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            if (category === 'all') {
                logos.style.display = 'block';
                videos.style.display = 'block';
            } else if (category === 'logos') {
                logos.style.display = 'block';
                videos.style.display = 'none';
            } else {
                logos.style.display = 'none';
                videos.style.display = 'block';
            }
        }
