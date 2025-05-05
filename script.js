// スクロール時にフェードインさせるスクリプト
const elements = document.querySelectorAll(".fade-in");

const scrollAnimation = () => {
  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", scrollAnimation);
window.addEventListener("load", scrollAnimation);

// モーダルを開く
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "flex";
  }
}

// モーダルを閉じる
function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.style.display = "none";
  }
}

// 背景クリックで閉じる（オプション機能）
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
