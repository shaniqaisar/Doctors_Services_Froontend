document.addEventListener('DOMContentLoaded', function() {
    const bookingForm = document.getElementById('booking-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const formData = new FormData(bookingForm);
            const data = Object.fromEntries(formData.entries());
            
            // Basic validation
            if (!data.name || !data.email || !data.phone || !data.service || !data.date) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the data to your server
            console.log('Booking data:', data);
            
            // Show success message
            alert('Thank you for your booking request! We will contact you shortly to confirm your appointment.');
            
            // Reset form
            bookingForm.reset();
            
            // In a real application, you would redirect or show a confirmation page
            // window.location.href = 'booking-confirmation.html';
        });
        
        // Initialize date picker
        const dateInput = document.getElementById('appointment-date');
        if (dateInput) {
            // Set min date to today
            const today = new Date();
            const dd = String(today.getDate()).padStart(2, '0');
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const yyyy = today.getFullYear();
            dateInput.min = `${yyyy}-${mm}-${dd}`;
            
            // Disable weekends (example)
            dateInput.addEventListener('input', function() {
                const selectedDate = new Date(this.value);
                const day = selectedDate.getDay();
                
                if (day === 0 || day === 6) {
                    alert('We are closed on weekends. Please select a weekday.');
                    this.value = '';
                }
            });
        }
    }
    
    // Service selection effects
    const serviceOptions = document.querySelectorAll('.service-option');
    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            
            // Update hidden input value
            const serviceInput = document.getElementById('service');
            if (serviceInput) {
                serviceInput.value = this.dataset.value;
            }
        });
    });
});