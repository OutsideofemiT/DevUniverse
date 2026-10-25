# DevUniverse V1

A personal developer dashboard built with HTML, CSS, and vanilla JavaScript. It brings a task list and notes workspace together in a dark, space-inspired interface.

This is the original public project. DevUniverse Portal is a separate, private project that builds on the dashboard concept.

## Preview

![DevUniverse V1 dashboard](assets/DevUniverseV1.png)

## What it does

- Add tasks, mark them complete, and delete them.
- Write notes with an optional title. Drafts save automatically as you type.
- Save notes to a collapsible list with previews and timestamps.
- Reopen saved notes to edit them, or delete notes you no longer need.
- Adapt the layout for smaller screens.

Tasks, saved notes, and the current draft are stored in the browser using `localStorage`. There are no accounts or cross-device sync. Clearing the browser's stored site data removes those records.

The Launch Grid contains eight starter categories, including a Git repo, docs hub, and deployment site. In this version, they are display tiles, not connected services or working links.

## Run locally

From the repository root, open `DevUniverseV1/Dev_Universe.html` in your browser. If you are already working in this folder, open `Dev_Universe.html`. There is no package installation or build step.

For a local-server workflow, serve this folder with your preferred static server and open `Dev_Universe.html` through it.

## Customization

The current page defines its styles and application logic directly in `Dev_Universe.html`. Edit that file to change the layout, task and note behavior, or launch tiles. The background image is `assets/Skygrid.png`, and the screenshot used above is `assets/DevUniverseV1.png`.

## Built by

Carmen Wheeler / Kairo Collective Studio
