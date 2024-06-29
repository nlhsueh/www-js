Installing Vue.js after you've installed Node.js is straightforward. Here’s a step-by-step guide to get you started:

### 1. Verify Node.js and npm Installation

First, ensure you have Node.js and npm installed. You can check this by running the following commands in your terminal:

```bash
node -v
npm -v
```

These commands should output the versions of Node.js and npm respectively. If they do, you're ready to proceed.

### 2. Install Vue CLI

The Vue CLI (Command Line Interface) is the recommended way to install and manage Vue.js projects. To install Vue CLI globally, run the following command:

```bash
npm install -g @vue/cli
```

This will install the Vue CLI globally on your machine.

### 3. Create a New Vue Project

After installing the Vue CLI, you can create a new Vue project using the following command:

```bash
vue create my-vue-project
```

Replace `my-vue-project` with the name of your project. You will be prompted to pick a preset or manually select features. You can choose the default preset or customize it according to your needs.

### 4. Navigate to Your Project Directory

Once the project is created, navigate to the project directory:

```bash
cd my-vue-project
```

### 5. Run the Development Server

To start the development server and see your Vue application in action, run:

```bash
npm run serve
```

This will start the development server, and you can view your application in the browser at `http://localhost:8080`.

### Additional Tips

- **Install Vue as a Dependency**: If you want to add Vue to an existing project, you can install it as a dependency:

  ```bash
  npm install vue
  ```

- **Vue Devtools**: For a better development experience, consider installing Vue Devtools, a browser extension that provides debugging and inspection capabilities for Vue applications.

By following these steps, you should be able to set up and run a Vue.js project. If you have any specific requirements or run into any issues, feel free to ask!