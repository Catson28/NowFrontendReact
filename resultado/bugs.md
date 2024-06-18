O erro ocorre porque o comando `export` é usado em shells Unix/Linux, como bash, mas não é reconhecido no PowerShell ou no Prompt de Comando do Windows. Aqui estão as instruções corretas para definir a variável de ambiente no Windows:

### No PowerShell

```powershell
$env:NODE_OPTIONS="--openssl-legacy-provider"
```

### No Prompt de Comando (CMD)

```cmd
set NODE_OPTIONS=--openssl-legacy-provider
```

### No Windows, adicionando a variável de ambiente permanentemente

Para definir a variável de ambiente permanentemente no Windows, siga estes passos:

1. **Abrir o Painel de Controle:**
   - Clique com o botão direito no ícone "Este Computador" ou "Meu Computador" na área de trabalho ou no Explorador de Arquivos.
   - Selecione "Propriedades".
   - Clique em "Configurações Avançadas do Sistema" no painel esquerdo.
   - Clique no botão "Variáveis de Ambiente".

2. **Adicionar uma nova variável de ambiente:**
   - Na seção "Variáveis do sistema", clique em "Novo".
   - Nome da variável: `NODE_OPTIONS`
   - Valor da variável: `--openssl-legacy-provider`
   - Clique em "OK" para fechar todas as janelas.

### Solução no `package.json`

Se preferir definir essa opção diretamente no seu projeto, você pode adicionar a flag aos scripts no `package.json`:

```json
"scripts": {
  "start": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts start",
  "build": "set NODE_OPTIONS=--openssl-legacy-provider && react-scripts build"
}
```

Isso deve resolver o problema no ambiente Windows. Se precisar de mais alguma coisa, estou à disposição para ajudar.