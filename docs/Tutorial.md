# School Board Project - Tutorial Step by Step

## Introduction

In the next document you can follow step by step the process to build this project. The first step is design the diagram in the Architector Pro Editor, following by generate the source codes and finally setup the *views* and *apis*.

## 1. Create The Project Diagram

> Open Architector Pro and design the next diagram

![Diagram](./assets/Tutorial_1.png)

* **Note:** Be careful with the name of the connectors (`<action>/<condition>`).

## 2. Generate the source code

> In Architector Pro first `Save` the diagram and then `Generate Sources`

![Diagram](./assets/Tutorial_2.png)

## 3. Open the `Source Code Project` in Visual Code

> In Architector Pro open the project folder by clicking the path

![Diagram](./assets/Tutorial_3.png)

> In Explorer do secondary click and open the src folder in Visual Code

![Diagram](./assets/Tutorial_4.png)

* **Note:** If you don't have install the [Visual Studio Code](https://code.visualstudio.com), download it from [https://code.visualstudio.com](https://code.visualstudio.com)

## 4. Inspect the project structure

> In Visual Code expand all folders and check each file

![Diagram](./assets/Tutorial_5.png)

>  **IMPORTANT:** Check the [Quick Start](./readme.md#quick-start) to run the project.

## 5. Setup `SchoolBoard` as the main React Component

> Into `pages/index.js` bind the `SchoolBoard` component

```jsx
// src/pages/index.js

import SchoolBoard from "./views/SchoolBoard";

export default function App() {
    return (
        <SchoolBoard />
    );
}
```
