document.addEventListener('DOMContentLoaded', () => {
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoCalculo = document.getElementById('resultado-calculo');

    if (btnCalcular && inputHorectares && resultadoCalculo) {
        btnCalcular.addEventListener('click', () => {
            const hectares = parseFloat(inputHectares.value);
            
            if (hectares && hectares > 0) {
                const aguaPoupada = hectares * 20000;
                resultadoCalculo.innerHTML = `<strong>Incrível!</strong> Ao utilizar irrigação inteligente, você economizaria cerca de <strong>${aguaPoupada.toLocaleString('pt-BR')} litros</strong> de água por mês!`;
            } else {
                resultadoCalculo.innerHTML = `<span style="color: #d32f2f;">Por favor, insira um número válido de hectares.</span>`;
            }
        });
    }

    const formContato = document.getElementById('contact-form');
    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (nome === "" || email === "" || mensagem === "") {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }
            
            alert(`Muito obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso para a equipe do Agrinho 2026.`);
            formContato.reset();
        });
    }
});
