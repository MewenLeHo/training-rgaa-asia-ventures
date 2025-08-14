document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".testimonial-slider");
  const cards = document.querySelectorAll(".testimonial-card");

  // Cloner les cartes pour boucle infinie
  const clone = [...cards].map((card) => card.cloneNode(true));
  clone.forEach((c) => slider.appendChild(c));

  let currentIndex = 0;
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 20; // largeur + margin
  const totalWidth = cardWidth * totalCards;

  // Fonction pour faire défiler à gauche
  // function moveNext() {
  //   currentIndex++;
  //   slider.style.transition = "transform 0.5s ease-in-out";
  //   slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

  //   if (currentIndex >= totalCards) {
  //     // Après la transition, réinitialiser sans transition
  //     setTimeout(() => {
  //       slider.style.transition = "none";
  //       currentIndex = 0;
  //       slider.style.transform = `translateX(0)`;
  //     }, 500);
  //   }
  // }

  // Fonction pour faire défiler à droite
  // function movePrev() {
  //   if (currentIndex === 0) {
  //     // Aller à la fin
  //     currentIndex = totalCards;
  //     slider.style.transition = "none";
  //     slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  //     // Ensuite, faire la transition vers l'avant
  //     setTimeout(() => {
  //       slider.style.transition = "transform 0.5s ease-in-out";
  //       currentIndex--;
  //       slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  //     }, 50);
  //   } else {
  //     currentIndex--;
  //     slider.style.transition = "transform 0.5s ease-in-out";
  //     slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  //   }
  // }

  // Boutons
  // document.getElementById("nextBtn").addEventListener("click", moveNext);
  // document.getElementById("prevBtn").addEventListener("click", movePrev);

  // setInterval(moveNext, 3000);
  setInterval(3000);
});
