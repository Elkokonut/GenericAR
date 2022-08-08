# GenericAR
AR on the web with annotations using webXR and Model-Viewer.

This project has been carried out during my intership at [OCTO Technology](https://www.octo.com/).

## 👁️&nbsp; Demo

The demo is [here](https://elkokonut.github.io/GenericAR/index.html).

## 🔑&nbsp; Prerequisites

- yarn v1.22.18

## 🚀&nbsp; Installation

1. Clone the repository

    ```bash
    git clone git@github.com:Elkokonut/GenericAR.git
    ```

2. Change your directory to the cloned repository

    ```bash
    cd GenericAR
    ```

3. Install all modules

    ```bash
    yarn install
    ```

## 🧑🏻‍💻&nbsp; Working

1. Start server

    ```bash
    yarn parcel src/index.html
    ```

The website in then available on http://localhost:1234.


2. To see your personnalized json just put your json in GenericAR/static/json/MYJSON.json and go as :

    ```bash
    http://localhost:1234/?name=MYJSON
    http://localhost:1234/MYJSON
    ```

- By default:

    ```bash
    http://localhost:1234
    http://localhost:1234/?name=cargo
    http://localhost:1234/cargo
    http://localhost:1234/cargo?id=whatever
    ```

## 📁&nbsp; Filesystem

If your path is local, put your model in static directory and use static as the base of your path. See [Parcel reporter static filescopy](https://www.npmjs.com/package/parcel-reporter-static-files-copy).

1. Create static directory in your project root
2. Fill it with your static files
3. Refer to your statics files as if static was the root of your project

## 🏗️&nbsp; Build for deployment

- To build:

    ```bash
    yarn parcel build src/index.html
    ```

    All builded code is located in dist.

## 🙋🏻‍♂️&nbsp; Author

- Marine Charra for Octo Technology

## 📚&nbsp; License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
