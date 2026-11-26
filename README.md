# Todo App

## 1. Create the project

When Vite asks for a linter, choose **oxlint**.

```bash
npm create vite@latest todo-app -- --template react-ts
cd todo-app
npm install
npm run dev
```


## 2. Clean up the template

The template comes with a demo page. We remove it and start empty.

| What | Do this |
|---|---|
| `src/App.css` | delete the file |
| `src/assets/` | delete the images inside |
| `src/index.css` | delete the content, keep the empty file |
| `src/App.tsx` | delete the content, we write our own `App` |
| `src/main.tsx` | change the import to `import { App } from './App.tsx'` |

We export `App` by name (`export function App`), so the import needs the curly braces.

## 3. Type Checker

Let's us check the types while we develop, so we see errors immediately.

```bash
npm install -D vite-plugin-checker
```

```ts
// vite.config.ts
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

export default defineConfig({
  plugins: [react(), checker({ typescript: { buildMode: true } })],
})
```

## 4. React Developer Tools

Let's us inspect the React components in the browser.

1. Open <https://react.dev/learn/react-developer-tools> and install the extension for your browser.
2. Open the app, then the browser DevTools (F12).
3. There are two new tabs: **Components** and **Profiler**.

## 5. Form libraries

Let's us validate the input of forms.

```bash
npm install react-hook-form zod @hookform/resolvers
```

| Package | Job |
|---|---|
| `zod` | the schema: says **what** is valid, for example "at least 3 characters" |
| `react-hook-form` | the form: says **when** to validate and show an error |
| `@hookform/resolvers` | connects the two |

## 6. Component libraries

Let's us style the app with ready-made components.

```bash
npm install -D tailwindcss @tailwindcss/vite
npx shadcn@latest init -b radix -p nova
npx shadcn@latest add button input label card
```

| Package | Job |
|---|---|
| `tailwindcss` | the styling library |
| `shadcn` | the component library |
| `@tailwindcss/vite` | connects the two |

Before `shadcn init` works, the project needs three small changes.

1. `src/index.css`: load Tailwind.

```css
@import "tailwindcss";
```

2. `vite.config.ts`: add the lines marked with `new`.

```ts
import path from "node:path";                  // new
import tailwindcss from "@tailwindcss/vite";   // new

export default defineConfig({
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },   // new: "@" means the src folder
  plugins: [react(), tailwindcss(), checker({ typescript: { buildMode: true } })],   // add tailwindcss()
})
```

3. In `tsconfig.json` and `tsconfig.app.json` add this line inside `compilerOptions`.

```json
"paths": { "@/*": ["./src/*"] }
```

## 7. Commands

| Command | What it does |
|---|---|
| `npm run dev` | starts the dev server, changes show up at once |
| `npm run build` | checks the types, then builds the app into `dist/` |
| `npm run preview` | shows the built app from `dist/`, run `build` first |
| `npm run lint` | runs oxlint, finds bad patterns like a missing `key` |

Who checks what?

- **TypeScript** checks the types, for example `priority: "norm"`.
- **oxlint** checks patterns, for example a list without `key`.

## 8. Components

```text
App            owns the state: the list of todos
├── TodoInput  the form, tells App about a new todo
└── TodoList   shows the todos it gets as props
```

| File | Job |
|---|---|
| `src/main.tsx` | starts React and renders `App` |
| `src/todo.ts` | the types `Todo` and `Priority` |
| `src/App.tsx` | parent component, holds `useState` |
| `src/TodoInput.tsx` | child component for the input |
| `src/TodoList.tsx` | child component for the output |
