let hasMoved = false;

// Inicjalizacja EmailJS
(function() {
    emailjs.init("DnhSnYyRln5d-SiM8");
})();

function moveNoButton() {
    const noBtn = document.getElementById('noBtn');
    const buttonContainer = document.getElementById('buttonContainer');

    // Pobieramy wymiary kontenera przycisków i przycisku
    const containerRect = buttonContainer.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    // Obliczamy dostępne przestrzenie - zwiększamy zakres
    const padding = 5;
    const maxX = containerRect.width - btnRect.width - padding;
    const maxY = containerRect.height - btnRect.height - padding;

    // Generujemy losową pozycję
    let randomX, randomY;

    if (!hasMoved) {
        // Pierwszy ruch - od razu daleko od przycisku Tak
        randomX = 200; // dalej w prawo
        randomY = 40; // trochę w dół
        hasMoved = true;

        // Przełączamy na pozycjonowanie absolutne
        noBtn.style.position = 'absolute';
        noBtn.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    } else {
        // Kolejne ruchy - całkowicie losowe po całym kontenerze
        randomX = Math.max(padding, Math.random() * maxX);
        randomY = Math.max(padding, Math.random() * maxY);
    }

    // Ustawiamy nową pozycję
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function handleYes() {
    console.log('Próba wysłania e-maila...');

    // Wysyłanie e-maila z podstawowymi parametrami
    const templateParams = {
        to_email: 'mszlachtowicz9@gmail.com', // Zastąp swoim adresem e-mail
        message: 'Kliknęła TAK!!! na Twojej walentynce! ❤️'
    };

    emailjs.send("service_6u5036i", "template_puv74bp", templateParams)
        .then(function(response) {
            console.log('E-mail wysłany pomyślnie!', response.status, response.text);
            alert('🎉 Yay! Wiedziałem/am że się zgodzisz! Kocham Cię! ❤️');
        }, function(error) {
            console.log('Błąd podczas wysyłania e-maila:', error);
            alert('Błąd podczas wysyłania e-maila. Sprawdź konsolę przeglądarki.');
        });
}

        