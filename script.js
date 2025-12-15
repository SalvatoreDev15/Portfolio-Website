// Aspetta che l'HTML sia caricato prima di eseguire JS
// Domanda da colloquio: Perché usiamo DOMContentLoaded? 
// Risposta: Per assicurarci di non manipolare elementi che non esistono ancora nella pagina.
document.addEventListener('DOMContentLoaded', () => {
    
    console.log("Portfolio caricato correttamente.");

    // Aggiornamento automatico dell'anno nel footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    
    // Esempio: Aggiungiamo un listener per un'interazione semplice
    const btn = document.querySelector('.btn-primary');
    if(btn) {
        btn.addEventListener('click', () => {
            console.log("Hai cliccato sul bottone progetti!");
        });
    }

});