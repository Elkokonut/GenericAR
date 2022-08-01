# GenericAR
AR on the web with annotations using webXR and Model-Viewer.

This project has been carried out during my intership at [OCTO Technology](https://www.octo.com/).

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
    yarn parcel index.html
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

## 🧑🏻‍💻&nbsp; Build for deployment

- To build:

    ```bash
    yarn parcel build src/index.html
    ```

    All builded code is located in dist.
