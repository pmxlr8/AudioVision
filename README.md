# AUDIOVISON

## Project Overview
AUDIOVISON is an app designed to deliver high-quality audio-visual experiences. This README provides the necessary steps to get the app up and running.

## Setup Instructions to start the app

### 1. Navigate to the Project Directory
```bash
  cd amd-app
```

### 2. Install dependencies
```bash
  yarn install
```

### 3. setup the database
```bash
  cd packages/db
```
```bash
  npx prisma migrate dev
```
```bash
  npx prisma generate
```

### 4. Start the Development Server
```bash
  cd ../..
```
```bash
  yarn dev
```
