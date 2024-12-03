const cursor = document.getElementById("magicCursor");
const particles = [];

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
  createParticle(e.pageX, e.pageY);
});

function createParticle(x, y) {
  const particle = document.createElement("div");
  particle.style.position = "absolute";
  particle.style.width = `${Math.random() * 5 + 5}px`;
  particle.style.height = `${Math.random() * 5 + 5}px`;
  particle.style.borderRadius = "50%";
  particle.style.backgroundColor = getRandomColor();
  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.opacity = 1;
  particle.style.pointerEvents = "none";
  document.body.appendChild(particle);

  particles.push(particle);

  setTimeout(() => {
    particle.style.transition = "opacity 1s ease, transform 1s ease";
    particle.style.opacity = 0;
    particle.style.transform = "translateY(-20px)";
    setTimeout(() => {
      particle.remove();
      particles.shift();
    }, 1000);
  }, 50);
}

function getRandomColor() {
  const colors = ["#00fffc", "#ff00ff", "#068ec7", "#ecaa14", "#f91717", "#f611ae", "#11f639", "#46aff3"];
  return colors[Math.floor(Math.random() * colors.length)];
}
