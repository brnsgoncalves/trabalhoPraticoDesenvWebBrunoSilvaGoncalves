document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastro-form');
    const resultadoArea = document.getElementById('resultado-exibicao');
    const btnConfirmarFinal = document.getElementById('btn-confirmar-final');
    const btnLimpar = document.getElementById('btn-limpar');

    if (form) {
        // ETAPA 1: Processa os dados pessoais e exibe no formato de ticket ao lado
        form.addEventListener('submit', (evento) => {
            evento.preventDefault(); // Retém o envio automático para validação

            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const idade = document.getElementById('idade').value;
            const tipoIngresso = document.getElementById('tipo-ingresso').value;

            // Transfere as variáveis de dados pessoais para o espelho do Ingresso
            document.getElementById('out-nome').textContent = nome;
            document.getElementById('out-email').textContent = email;
            document.getElementById('out-telefone').textContent = telefone;
            document.getElementById('out-idade').textContent = idade;
            document.getElementById('out-ingresso').textContent = tipoIngresso;

            // Torna visível o painel do ingresso ao lado
            resultadoArea.style.display = 'block';
            resultadoArea.scrollIntoView({ behavior: 'smooth' });
        });

        // ETAPA 2: Confirmação e encerramento após o usuário validar o ticket
        btnConfirmarFinal.addEventListener('click', () => {
            alert('Ingresso Confirmado com Sucesso! 🎟️\nUm e-mail de validação com o QR Code foi enviado para o endereço cadastrado. Prepare o seu traje caipira! 🎉');
            
            // Limpa o formulário após a geração bem-sucedida
            form.reset();
            limparPainelIngresso();
        });

        // BOTÃO LIMPAR: Limpa os inputs inseridos e apaga os dados do ticket simultaneamente
        btnLimpar.addEventListener('click', () => {
            limparPainelIngresso();
        });

        // Função de controle de limpeza total
        function limparPainelIngresso() {
            document.getElementById('out-nome').textContent = '';
            document.getElementById('out-email').textContent = '';
            document.getElementById('out-telefone').textContent = '';
            document.getElementById('out-idade').textContent = '';
            document.getElementById('out-ingresso').textContent = '';
            resultadoArea.style.display = 'none';
        }
    }
});