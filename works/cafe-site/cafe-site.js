// フェードインアニメーション処理
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

fadeElements.forEach(el => observer.observe(el));

// モーダル機能
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.modal-close');

const triggers = document.querySelectorAll('.modal-trigger');
triggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = trigger.dataset.image;
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// お問い合わせフォーム
const form = document.getElementById('contact-form');
const thankYou = document.getElementById('thank-you');
const errorMsg = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // 入力チェック
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    showError("すべての項目を入力してください。");
    return;
  }

  if (!validateEmail(email)) {
    showError("有効なメールアドレスを入力してください。");
    return;
  }

  // Formspree送信処理
  const formData = new FormData(form);
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      form.style.display = 'none';
      thankYou.style.display = 'block';
    } else {
      showError("送信中に問題が発生しました。時間をおいて再度お試しください。");
    }
  } catch (err) {
    showError("ネットワークエラーが発生しました。");
  }
});

// メール形式チェック関数
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// エラーメッセージ表示関数
function showError(msg) {
  errorMsg.textContent = msg;
  errorMsg.style.display = 'block';
}
