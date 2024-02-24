// Example of opening a modal - implement this according to your modal HTML structure
function openModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'block';
}

// Example of closing a modal
function closeModal(projectId) {
    const modal = document.getElementById(projectId);
    modal.style.display = 'none';
}

// Add event listeners for your project cards if using modals
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project-id');
        openModal(projectId);
    });
});
