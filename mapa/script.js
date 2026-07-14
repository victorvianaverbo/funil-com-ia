/* ==========================================================================
   MAPA DA OPERAÇÃO — abertura e fechamento dos anexos (<dialog>)
   Esc fecha por padrão do navegador; aqui entram o botão e o clique fora.
   ========================================================================== */

document.querySelectorAll('[data-dialog]').forEach(function (botao) {
  botao.addEventListener('click', function () {
    var anexo = document.getElementById(botao.dataset.dialog);
    if (anexo) anexo.showModal();
  });
});

document.querySelectorAll('dialog.anexo').forEach(function (anexo) {
  anexo.querySelector('[data-fechar]').addEventListener('click', function () {
    anexo.close();
  });

  // Clique no backdrop: só fecha se o clique caiu fora da caixa do anexo,
  // senão um clique no padding interno (target === dialog) também fecharia
  anexo.addEventListener('click', function (evento) {
    var caixa = anexo.getBoundingClientRect();
    var fora =
      evento.clientX < caixa.left || evento.clientX > caixa.right ||
      evento.clientY < caixa.top  || evento.clientY > caixa.bottom;
    if (fora) anexo.close();
  });
});
