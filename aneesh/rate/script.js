document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("feedback-form");
    const feedbackMessage = document.getElementById("feedback-message");
    const allStar = document.querySelectorAll('.rating .star');
    const ratingValue = document.querySelector('.rating input');
    const cancelButton = document.querySelector('.btn.cancel');

    allStar.forEach((item, idx) => {
        item.addEventListener('click', function () {
            let click = 0;
            ratingValue.value = idx + 1;

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });
            for (let i = 0; i < allStar.length; i++) {
                if (i <= idx) {
                    allStar[i].classList.replace('bx-star', 'bxs-star');
                    allStar[i].classList.add('active');
                } else {
                    allStar[i].style.setProperty('--i', click);
                    click++;
                }
            }
        });
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const opinion = form.querySelector('textarea[name="opinion"]');
        const rating = form.querySelector('input[name="rating"]');

        if (!name.value.trim() || !email.value.trim() || !opinion.value.trim() || !rating.value.trim()) {
            alert("Please fill in all required fields: Name, Email, Opinion, and Rating.");
        } else {
            alert("Feedback submitted");
            name.value = "";
            email.value = "";
            opinion.value = "";
            rating.value = "";

            allStar.forEach(i => {
                i.classList.replace('bxs-star', 'bx-star');
                i.classList.remove('active');
            });
        }
    });

    cancelButton.addEventListener('click', function() {
        window.location.href = 'your-page.html';
    });
});
