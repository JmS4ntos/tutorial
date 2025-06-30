window.onscroll = () => {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

document.getElementById("topBtn").onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
