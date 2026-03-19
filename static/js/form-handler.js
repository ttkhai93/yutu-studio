// Contact Form Handler
document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) {
        return; // Exit if form doesn't exist on this page
    }

    const formMessage = document.getElementById('formMessage');
    const submitBtn = contactForm.querySelector('.submit-btn');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);

        // Disable submit button
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Sending...</span>';

        // Hide any previous messages
        formMessage.classList.remove('show', 'success', 'error');

        try {
            // Send form data to Django backend
            const response = await fetch('/send-contact-email/', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            // Show message
            formMessage.textContent = data.message;
            formMessage.classList.add('show');

            if (data.success) {
                formMessage.classList.add('success');
                // Reset form on success
                contactForm.reset();
            } else {
                formMessage.classList.add('error');
            }
        } catch (error) {
            // Handle network or other errors
            formMessage.textContent = 'An error occurred. Please try again later.';
            formMessage.classList.add('show', 'error');
            console.error('Form submission error:', error);
        } finally {
            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<span>Send Message</span>';

            // Scroll to message
            formMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Auto-hide success message after 5 seconds
            if (formMessage.classList.contains('success')) {
                setTimeout(() => {
                    formMessage.classList.remove('show');
                }, 5000);
            }
        }
    });

    // Input validation - remove error styling on input
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                this.style.borderColor = '#ddd';
            }
        });
    });
});
