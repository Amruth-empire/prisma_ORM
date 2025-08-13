# Prisma + MySQL Setup Guide

This project uses **Prisma ORM** with a **MySQL** database and **Node.js** backend.  
Below is the list of commands executed during setup, along with explanations.

---

## 1. Initialize a Node.js Project
```bash
npm init -y
```
Creates a `package.json` file with default values.

---

## 2. Install Prisma CLI (Development Dependency)
```bash
npm i prisma --save-dev
```
Installs the Prisma CLI, used for schema creation, migrations, and database management.  
Stored under `devDependencies` in `package.json`.

---

## 3. Install Nodemon (Development Dependency)
```bash
npm init -D nodemon
```
Adds Nodemon to automatically restart the server on file changes.

---

## 4. Initialize Prisma
```bash
npx prisma init
```
Creates:
- `prisma/schema.prisma` → Define your database models here.
- `.env` → Stores your database connection string (`DATABASE_URL`).

---

## 5. Run First Migration
```bash
npx prisma migrate dev --name init
```
- Reads `schema.prisma` and applies changes to the database.
- Creates `prisma/migrations/` folder with migration history.
- Generates Prisma Client if `@prisma/client` is installed.

---

## 6. Install Prisma Client (Runtime)
```bash
npm install @prisma/client
```
Required for using Prisma in your application code:
```js
import pkg from "@prisma/client";
const { PrismaClient } = pkg;
```

---

## 7. Generate Prisma Client Manually
```bash
npx prisma generate
```
Builds the Prisma Client in `.prisma/client` (or a custom folder).  
Run this after every schema change if you do not run `migrate dev`.

---

## Notes
- Make sure your `.env` contains the correct MySQL connection string:
```env
DATABASE_URL="mysql://username:password@localhost:3306/databasename"
```
- Start your dev server with:
```bash
npm run dev
```
(after adding `"dev": "nodemon app.js"` in `package.json`).

---
