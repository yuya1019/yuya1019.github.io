// 今後拡張用（例えばフォーム送信後のアラートなど）
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("お問い合わせありがとうございます。送信されました。");
  this.reset();
});
