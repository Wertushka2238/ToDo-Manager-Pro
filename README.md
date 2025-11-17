<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# 📝 ToDo Manager Pro

**ToDo Manager Pro** — розширений односторінковий застосунок (SPA) для керування завданнями з категоріями, дедлайнами, пошуком, фільтрами та збереженням у **LocalStorage**.

---

## 🚀 Особливості

* Додавання, редагування та видалення завдань
* Категорії: **Загальне, Навчання, Робота, Особисте**
* Дедлайни з відображенням у українському форматі
* Пошук і фільтри по категоріях
* Відмітка завдання як «Готово»
* Детальна сторінка завдання
* Збереження завдань у LocalStorage
* Чистий сучасний дизайн

---

## 🛠 Технології

* **React** + Hooks (useState, useEffect)
* **React Router DOM**
* **Vite**
* CSS (мінімалістичний стиль, адаптивна ширина полів)
* LocalStorage як «фейковий» API

---

## 📂 Структура проєкту

```
src/
 ├─ main.jsx
 ├─ App.jsx
 ├─ styles.css
 ├─ pages/
 │   ├─ Home.jsx
 │   ├─ CreateTask.jsx
 │   ├─ TaskDetails.jsx
 ├─ components/
 │   ├─ TaskList.jsx
 │   ├─ TaskItem.jsx
 │   ├─ SearchBar.jsx
 │   ├─ Filters.jsx
 ├─ hooks/
 │   └─ useTasks.js
 ├─ api/
     └─ tasksAPI.js
```

---

## ⚡ Встановлення та запуск

1. Клонуйте репозиторій:

```bash
git clone <url>
```

2. Перейдіть у каталог проєкту:

```bash
cd final-project
```

3. Встановіть залежності:

```bash
npm install
```

4. Запустіть локальний сервер:

```bash
npm run dev
```

5. Відкрийте браузер за адресою:

```
http://localhost:5173
```

---

## 📌 Використання

* На головній сторінці можна **шукати та фільтрувати** завдання.
* Перейти на сторінку **створення нового завдання** через кнопку «➕ New Task».
* Натискаючи кнопку «Готово», можна відмітити завдання як виконане.
* На сторінці деталей відображається **повний опис та дата** завдання.

---

## 💾 Збереження даних

Всі завдання зберігаються у **LocalStorage** браузера. Дані залишаються навіть після перезавантаження сторінки.

---

## 📈 Можливі покращення

* Підключення реального бекенду (REST API або Firebase)
* Додавання темної/світлої теми
* Сортування завдань за дедлайном
* Адаптивна верстка для мобільних пристроїв

---

## ✍ Автор

**Денис Курило ІПЗ-25ск**
>>>>>>> fc594f7e299e1146847a7c1067781b5fdbd0f547
