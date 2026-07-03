# 🚀 DevUniverse

*A cosmic command center for developers who code with clarity.*

DevUniverse is a minimalist, ambient personal dashboard for intentional developers. It sits quietly in the background while you work, combining a mantra-driven interface with a focused task queue and a notes pad that saves what matters without cluttering your workspace.

---

## 🌌 Features

| Feature                | Description |
|------------------------|-------------|
| 💬 **Mantra Welcome**  | Sets the tone with a guiding philosophy — *“Code. Create. Conscious.”* |
| 📦 **Launch Grid**     | Galaxy-styled placeholder tiles (AI Agent, Deployment Site, Git Repo, etc.) ready to be wired to your own tools |
| ✅ **Task Queue**      | Lightweight local to‑do list with input + Add button, checkboxes, and deletion — all stored in `localStorage` |
| 📝 **Notes Composer**  | Title + note editor with draft autosave so you never lose in‑progress thoughts |
| 🗂️ **Saved Notes Drawer** | Collapsible list of saved notes with previews and timestamps, kept out of the editor until you need them |
| 🎯 **Focus‑Centered UI** | Calm, dark, galaxy‑inspired theme designed for clarity, not noise |

---

## ✨ How It Works

1. Use the **Task Queue** at the top of the Focus Pad to capture what you need to do.
2. Use the **Notes** composer to draft ideas, plans, and context — drafts auto‑save locally.
3. Click **Save Note** to archive the current note into the saved notes drawer and clear the editor.
4. Click **Saved Notes (n)** to toggle your saved notes list, open a note back into the editor, or delete it.

All tasks, drafts, and saved notes are stored locally in your browser via `localStorage`.  
No accounts, no sync, no data leaving your machine.[web:168][web:174]

> Example workflow:
> ```text
> Task Queue:
> - Add task: “Ship DevUniverse v1”
> - Add task: “Wire Launch Grid to my tools”
>
> Notes:
> Title: DevUniverse v1 launch checklist
> Body: Outline features, record bugs, capture ideas…
> [Save Note]
> ```

---

## 🖼️ Preview

![Screenshot of DevUniverse showing the launch grid, task queue, and Focus Pad](assets/devuniverse-preview.png)

*“Your grid. Your code. Your mission.”*

---

## 🔧 Setup Instructions

1. Clone or download the repository  
   ```bash
   git clone https://github.com/your-username/devuniverse.git
   cd devuniverse
   ```

2. Open the main HTML in your browser:
   ```text
   Dev_Universe.html
   ```

3. Customize:
   - 🪐 **Launch Grid** tiles in the HTML for your real tools (GitHub, CI, docs, etc.)
   - 🖋️ **Mantra** message to match your own philosophy
   - 🎨 **style.css** for colors, typography, and layout tweaks

---

## 💡 Customization Ideas

- Add widgets like weather, quotes, or lo‑fi music using open APIs.
- Wire Launch Grid tiles to GitHub repos, issue trackers, or Notion pages.
- Swap `localStorage` for a backend (Firebase, Supabase, etc.) if you want sync across devices.[web:168][web:323]
- Turn the saved notes drawer into project‑specific note vaults (e.g., “Client A”, “Side Project”).

---

## 🛠️ Built With

- HTML5 + CSS3
- Vanilla JavaScript
- Local Storage API

---

## 📂 Folder Structure

```text
├── Dev_Universe.html
├── style.css
├── addons/
│   └── todo.js        # (optional legacy todo logic if you keep it around)
├── assets/
│   └── devuniverse-preview.png
```

---

## 🧠 Philosophy

DevUniverse isn’t just a dashboard.

It’s a digital altar — a calm grid where developers align tasks and notes with presence and purpose. Inspired by minimalism, productivity rituals, and cosmic curiosity, it gives you just enough structure to focus without boxing you into a rigid workflow.[web:349]

You bring the mission. This helps you launch it.

---

## 🚀 License

MIT © [Your Name]

Optionally:
- Add your GitHub handle for attribution.
- Mention Kairo Collective (or your studio name) as the umbrella brand.
- Link to a live demo or case study once you deploy.