const fs = require('fs');
const path = require('path');

// Nome do arquivo de saída que será gerado
const OUTPUT_FILE = 'contexto_projeto.txt';

// Diretórios que devem ser ignorados para não poluir o TXT
const IGNORE_DIRS = ['node_modules', 'dist', '.git', '.vscode', 'build'];

// Arquivos específicos ou extensões que devem ser ignorados
const IGNORE_FILES = [
  'package-lock.json', // Muito grande e desnecessário para contexto lógico
  OUTPUT_FILE,         // Ignora o próprio arquivo de saída
  'generate_context.cjs' // Ignora este próprio script
];

// Extensões de arquivos não-texto (imagens, fontes, etc)
const IGNORE_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.mp4'];

let outputContent = '';

function processDirectory(currentPath) {
  const entries = fs.readdirSync(currentPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentPath, entry.name);
    // Caminho relativo para ficar bonito no TXT (ex: src/components/Hero.tsx)
    const relativePath = fullPath.replace(__dirname + path.sep, '').replace(/\\/g, '/');

    if (entry.isDirectory()) {
      // Se for diretório e não estiver na lista de ignorados, entra nele
      if (!IGNORE_DIRS.includes(entry.name)) {
        processDirectory(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      
      // Se for arquivo e não estiver na lista de ignorados
      if (
        !IGNORE_FILES.includes(entry.name) &&
        !IGNORE_EXTENSIONS.includes(ext)
      ) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          
          // Adiciona separadores visuais claros para a IA entender onde começa/termina cada arquivo
          outputContent += `\n\n================================================================================\n`;
          outputContent += `Arquivo: ${relativePath}\n`;
          outputContent += `================================================================================\n\n`;
          outputContent += content;
          
        } catch (err) {
          console.error(`Erro ao ler o arquivo ${fullPath}:`, err.message);
        }
      }
    }
  }
}

console.log('Gerando contexto do código...');

try {
  // Inicia a varredura a partir do diretório atual (__dirname)
  processDirectory(__dirname);
  
  // Salva tudo no arquivo TXT
  fs.writeFileSync(path.join(__dirname, OUTPUT_FILE), outputContent, 'utf8');
  
  console.log(`✅ Sucesso! O arquivo '${OUTPUT_FILE}' foi criado.`);
} catch (error) {
  console.error('❌ Erro ao gerar o contexto:', error);
}