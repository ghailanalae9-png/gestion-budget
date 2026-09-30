.hidden {
    opacity: 0;
    transform: translateY(20px);
}

.visible {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
