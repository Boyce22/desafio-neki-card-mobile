# Desafio NekiCard - React Native - TypeScript 🚀  

### Um aplicativo de gerenciamento de colaboradores focado em funcionalidades como cadastro, login, atualização e exclusão de usuários, utilizando tecnologias modernas e uma interface intuitiva.  

---

## ⚙️ Funcionalidades  

### ✍️ **Cadastro de Colaborador**  
- Registro de novos colaboradores através de um formulário simples e intuitivo.  
- Envio de requisição para o endpoint **`/signUp`**.  

### 🔑 **Login**  
- Autenticação de usuários utilizando **e-mail** e **senha**.  
- Envio de credenciais para obtenção de **acesso seguro** ao sistema.  

### ✏️ **Atualização de Colaborador**  
- Edição das informações de colaboradores cadastrados.  
- Ação realizada via requisição **`PUT`** ao endpoint **`/update/{id}`**.  

### ❌ **Exclusão de Colaborador**  
- Colaboradores podem ser desativados definindo seu status **`isActive`** como **`false`**.  
- A exclusão é realizada via requisição ao endpoint **`/delete/{id}`**.  

---

## 🛠️ Tecnologias Utilizadas  

### 📱 **Principais Ferramentas**  

- [**Expo**](https://expo.dev/) 🌟: Plataforma para desenvolvimento ágil em React Native.  
- [**React Navigation**](https://reactnavigation.org/) 🧭: Biblioteca para navegação entre telas.  
- [**Axios**](https://axios-http.com/) 🌐: Realização de requisições HTTP e comunicação com APIs.  
- [**Styled Components**](https://styled-components.com/) 🎨: Estilização dinâmica e componentes personalizados.  
- [**React Hook Form**](https://react-hook-form.com/) 📋: Gerenciamento de formulários com validações simplificadas.  
- [**Vector Icons**](https://github.com/oblador/react-native-vector-icons) 🎯: Conjunto de ícones customizáveis para melhorar a interface do usuário.  

---

## 📸 Telas e Funcionalidades  

### 🖼️ **Screenshots Principais**  

1. **Login Screen**  
   <img src="https://i.imgur.com/6jPMkgj.png" width="200">  
   Tela de autenticação com campos de **e-mail** e **senha**, além de validações úteis.  

2. **Registro de Colaborador**  
   <img src="https://i.imgur.com/qZejSvo.png" width="200">  
   <img src="https://i.imgur.com/gzNXqPD.png" width="200">  
   Registro simples e eficiente para novos colaboradores no sistema.  

3. **Home / Dashboard**  
   <img src="https://i.imgur.com/tpjRxmE.png" width="200">  
   Tela inicial exibindo os **colaboradores cadastrados**, com acesso às principais funcionalidades.  

4. **Logout**  
   <img src="https://i.imgur.com/6jPMkgj.png" width="200">  
   Tela de logout para sair do aplicativo com segurança.  

5. **Modal de Exclusão**  
   <img src="https://i.imgur.com/4MAZ3TR.png" width="200">  
   Confirmação visual para a ação de exclusão de um colaborador.  

---

## 🚀 Iniciando o Projeto  

### 📂 **Clone o Repositório**  

```bash  
git clone https://github.com/seu-repositorio/neki-card-app.git  
```  

### 📥 **Instale as Dependências**  

Certifique-se de instalar todas as dependências necessárias usando o npm ou yarn:  

```bash  
npm install  
# ou  
yarn install  
```  

### ▶️ **Inicie o Ambiente de Desenvolvimento**  

Para iniciar o aplicativo, utilize o comando:  

```bash  
expo start  
```  

Isso abrirá um painel no navegador, onde você pode rodar o app no **emulador** ou escanear o QR Code em um dispositivo físico.  

---

## 📝 Notas Adicionais  

- **Configuração da API**: Certifique-se de editar a URL da API no arquivo responsável por realizar requisições, como `axios.ts`.  
- **Testes com Endpoints**: Utilize ferramentas como **Postman** para validar os endpoints enquanto desenvolve o aplicativo.  
- **Personalização de Ícones e Cores**: Aproveite o **Styled Components** para modificar temas e criar designs únicos.  

Com este guia simples, você estará pronto para rodar o aplicativo **NekiCard** e explorar todo o seu potencial! 🚀  
