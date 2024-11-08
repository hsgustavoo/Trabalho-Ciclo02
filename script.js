// Recupera os dados armazenados no localStorage
const formData = JSON.parse(localStorage.getItem('formData'));

// Cria uma string representando os dados em formato JSON para o download
const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));

// Cria um link temporário para o download do arquivo JSON
const downloadAnchorNode = document.createElement('a');
downloadAnchorNode.setAttribute("href", dataStr);
downloadAnchorNode.setAttribute("download", "dados_confirmados.json");

// Adiciona o link temporário ao corpo do documento
document.body.appendChild(downloadAnchorNode);

// Clica no link para iniciar o download
downloadAnchorNode.click();

// Remove o link temporário após o download
downloadAnchorNode.remove();

// Redireciona o usuário para a página inicial após o download
window.location.href = 'index.html';

const formData = JSON.parse(localStorage.getItem('formData'));

if (formData) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(formData));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "dados_confirmados.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
    window.location.href = 'index.html';
} else {
    alert("Erro: Nenhum dado encontrado.");
}

alert("Dados salvos com sucesso! O download foi iniciado.");
