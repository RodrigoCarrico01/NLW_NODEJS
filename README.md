# NLW Node.js Project

This is a project for event registration and ranking using TypeScript, Fastify, and more. Built during Rocketseat's **Next Level Week (NLW)**.

## 🚀 Installation

Follow these steps to set up the project:

### 1. Install Docker
Make sure Docker is installed. You can verify it by running:
```sh
docker -v
```
Open Docker and keep it running.

### 2. Start Docker Services
Inside the project folder, run:
```sh
docker compose up -d
```

### 3. Install Dependencies
```sh
npm install
```

### 4. Create the `.env` File
Create a `.env` file in the root directory with the following content:
```env
PORT=3333
WEB_URL="http://localhost:3000"
POSTGRES_URL="postgresql://docker:docker@localhost:5432/connect"
REDIS_URL="redis://localhost:6379"
```

### 5. Run Database Migrations
```sh
npx drizzle-kit generate
npx drizzle-kit migrate
```

### 6. Start the Application
```sh
npm run dev
```

Now the server is running! 🎉

## 📄 API Documentation
Once the server is up, you can access the API docs at:
```
http://localhost:3333/docs
```
(This URL only works when the application is running.)

---

That's it! Your project is now set up and ready to go. 🚀

