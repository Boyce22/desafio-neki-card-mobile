
# Desafio NekiCard - React Native - TypeScript

#### O aplicativo móvel Neki Card Mobile é uma interface para acessar e interagir com a API Neki Card, que gerencia informações de colaboradores em uma organização. Este aplicativo permite que os usuários visualizem, cadastrem, atualizem e excluam informações de colaboradores de forma conveniente e eficaz.



## Index

- [Cadastro de Colaborador](#cadastro-de-colaborador)
- [Login](#login)  
- [Atualização de Colaborador](#atualização-de-colaborador)
- [Delete de Colaborador](#delete-de-colaborador)
- [Recursos](#recursos)
- [Documentação de cores](#documentação-de-cores)
- [Categorias](#categories)  
### Funcionalidades Principais
#### Cadastro de Colaborador
- Descrição: Permite o registro de novos colaboradores no sistema.
- Como funciona: Os usuários podem preencher os detalhes do novo colaborador, como nome, email sendo necessário o uso do domínio da Neki-it,  e outras informações necessárias. O aplicativo envia uma solicitação POST para o endpoint /signUp da API para adicionar o novo colaborador.
#### Login
- Descrição: Permite que os usuários autentiquem sua identidade para acessar o sistema.
- Como funciona: Os usuários fornecem suas credenciais de login, como email e senha. O aplicativo envia uma solicitação de login para a API, que verifica as credenciais. Se as credenciais estiverem corretas, o usuário é autenticado e pode acessar as funcionalidades do adminstrador.
#### Atualização de Colaborador
- Descrição: Possibilita a atualização dos detalhes de um colaborador já registrado.
- Como funciona: Os usuários autenticados podem editar os detalhes de um colaborador, incluindo campos opcionais que podem ser deixados em branco. O aplicativo envia uma solicitação PUT para o endpoint /update/{id} da API, com os dados atualizados do colaborador. A API está preparada para receber valores vazios, o que significa que os campos não obrigatórios podem ser atualizados sem a necessidade de preenchê-los.
#### Delete de Colaborador
- Descrição: Altera o estado isActive da entidade Collaborator para false.
- Como funciona: Usuários autenticados podem alterar os detalhes de um colaborador. O aplicativo envia uma solicitação DELETE para o endpoint /delete/{id} da API, indicando o ID do colaborador a ser excluído. A API altera o estado isActive do colaborador para false,

### Recursos
#### O aplicativo Neki Card Mobile utiliza diversas bibliotecas e dependências para fornecer funcionalidades. Aqui estão algumas das principais bibliotecas utilizadas:

- Expo: Uma plataforma para construir aplicativos móveis usando JavaScript e React Native.
- React Navigation: Uma biblioteca de roteamento e navegação para React Native.
- Axios: Uma biblioteca para fazer requisições HTTP à API.
- Styled Components: Uma biblioteca para estilização de componentes.
- React Hook Form: Uma biblioteca para gerenciamento de formulários.
- React Native Vector Icons: Ícones vetoriais customizáveis para aplicativos React Native.
## Documentação de cores

| Cor               | Hexadecimal                                                |
| ----------------- | ---------------------------------------------------------------- |
| Black 700       | ![#121212](https://via.placeholder.com/10/121212?text=+) #121212 |
| Black 1000       | ![#010101](https://via.placeholder.com/10/010101?text=+) #010101 |
| Blue Facebook       | ![#0866FF](https://via.placeholder.com/10/0866FF?text=+) #0866FF |
| Blue Linkedin       | ![#378FE9](https://via.placeholder.com/10/378FE9?text=+) #378FE9 |
| Pink Instagram       | ![#DD2A7B](https://via.placeholder.com/10/DD2A7B?text=+) #DD2A7B |
| White      | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Gray 200      | ![#e5e7eb](https://via.placeholder.com/10/e5e7eb?text=+) #e5e7eb |
| Green 400      | ![#4ade80](https://via.placeholder.com/10/4ade80?text=+) #4ade80 |
| Green 600       | ![#059669](https://via.placeholder.com/10/059669?text=+) #059669 |
| Green 700       | ![#047857](https://via.placeholder.com/10/047857?text=+) #047857 |
| Green 900      | ![#052e16](https://via.placeholder.com/10/052e16?text=+) #052e16 |
| Red 500       | ![#ef4444](https://via.placeholder.com/10/ef4444?text=+) #ef4444 |
| Red 600       | ![#dc2626](https://via.placeholder.com/10/dc2626?text=+) #dc2626 |
| Zinc     | ![#F8F9FA](https://via.placeholder.com/10/F8F9FA?text=+) #F8F9FA |
| Neutral 700       | ![#212121](https://via.placeholder.com/10/212121?text=+) #212121 |
| Neutral 800       | ![#313131](https://via.placeholder.com/10/313131?text=+) #313131 |
| Neutral 900       | ![#202020](https://via.placeholder.com/10/202020?text=+) #202020 |



## Screenshots

- [Login Screen](#login-screen)  
- [Registro Screen](#registro-screen)
- [Home Screen](#home-screen)
- [Logout Screen](#logout-screen)
- [Delete Modal](#delete-modal)

### Login Screen
<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790365324521624/Screenshot_1698254561.png" width="300" height="300" alt="Login Screen Screenshot">

### Registro Screen
<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790365743943770/Screenshot_1698254566.png" width="300" height="300" alt="Registro Screen Screenshot">

<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790366616367154/Screenshot_1698254641.png" width="300" height="300" alt="Registro Screen Screenshot">

<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790367362961418/Screenshot_1698254683.png" width="300" height="300" alt="Registro Screen Screenshot">

### Home Screen
<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790367920795790/Screenshot_1698254733.png" width="300" height="300" alt="Home Screen Screenshot">

### Logout Screen
<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790368310857758/Screenshot_1698254739.png" width="300" height="300" alt="Logout Screen Screenshot">

### Delete Modal
<img src="https://cdn.discordapp.com/attachments/1082756709942054936/1166790368726110360/Screenshot_1698254746.png" width="300" height="300" alt="Delete Modal Screenshot">

