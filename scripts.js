// You can add interactivity here if needed.
// Example: Navigation highlight on scroll
document.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 50);
});

const expandSlot = document.getElementById('timeline-expand-slot');
const yearEl = document.getElementById('expanded-year');
const textEl = document.getElementById('expanded-text');
const imgEl = document.getElementById('expanded-image');

let activeItem = null;

document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {

        // Clear previous active card
        if (activeItem) {
            activeItem.classList.remove('active');
        }

        // Set new active
        activeItem = item;
        item.classList.add('active');

        // Populate expanded slot
        yearEl.textContent = item.querySelector('.timeline-year').textContent;
        textEl.textContent = item.querySelector('.timeline-text').textContent;
        imgEl.src = item.querySelector('img').src;

        // Show expanded slot
        expandSlot.classList.remove('d-none');
        expandSlot.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Collapse when expanded slot is clicked
expandSlot.addEventListener('click', () => {
    expandSlot.classList.add('d-none');

    if (activeItem) {
        activeItem.classList.remove('active');
        activeItem = null;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tech-toggle").forEach(button => {
        button.addEventListener("click", () => {
            const dropdown = button.closest(".tech-dropdown");
            dropdown.classList.toggle("active");
        });
    });
});
