# Introduction to Architector Pro

By [Dragon Nomada](dragonnomada.medium.com)

## What is Architector Pro?

A framework develop by [UAM-C Researchers & Students](https://www.sciencedirect.com/science/article/abs/pii/S0164121213001003) based on Diagram Editor for generating React JS + Next JS projects.

> Visit [https://architector.org](https://148.206.168.145/EditorUITD/examples/indexF.html)

## Introduction

**Architector Pro** allows to generate a [Next JS](https://nextjs.org) project based on a [UITD](https://www.sciencedirect.com/science/article/abs/pii/S0164121213001003) (User Interface Transition Diagram).

The *UI Transition Diagram* defines User Interfaces and Transitions amoung them.

> Example UITD

![Diagram](./assets/diagram.png)

You can edit the diagram by the Architector Editor.

> Example Architector Pro Editor

![Architector Pro Editor](./assets/architector_editor.png)

## Tutorial

Follow the next steps to create a new Architector Pro project.

> 1. Install Architector Pro binary

![Architector Pro Binary](./assets/architector_binary.png)

> 2. Open the Architecto Pro application

![Architector Pro Main](./assets/architector_main.png)

> 3. Select a folder (the project folder)

![Architector Pro Select Project Folder](./assets/architector_select_folder.png)

> 4. Design your UIs and Transitions

* **Note:** Don't forget to save it.

![Architector Pro Example](./assets/architector_example.png)

> 5. Generate the source code of the project

![Architector Pro Generate Sources](./assets/architector_example_generate.png)

> 6. Check the project folder by clicking in the path

![Architector Pro Open Project](./assets/architector_example_open.png)

![Architector Pro Project Folder](./assets/architector_example_folder.png)

> 7. Open the `src` folder in [Visual Code](https://code.visualstudio.com)

![Architector Pro Open Visual Code](./assets/architector_example_src_vc.png)

![Architector Pro Visual Code](./assets/architector_example_vc.png)

> 8. Open the terminal with `CTRL+J` and install the Node JS dependencies

```bash
npm install
```

![Architector Pro Install dependencies](./assets/architector_example_install.png)

> 9. Run the project

```bash
npm run dev

--- alternative ---

npx next dev
```

![Architector Pro Run Project](./assets/architector_example_run.png)

> 10. Visit [http://localhost:3000](http://localhost:3000)

![Architector Pro Project Running](./assets/architector_example_running.png)

## What next?

Now you can follow the [School Board Tutorial](./Tutorial.md) to learn to make an awesome project.
