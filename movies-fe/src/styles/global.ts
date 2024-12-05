import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: linear-gradient(135deg, #31213e 0%, #191249 50%, #070325 100%);
        --red: #f2295b;
        --purple: #532d8c;
        --purpleh1: #312257;
        --white: #f3f5f7;
        --light: #31213e;
        --dark: rgb(32, 26, 76);
        --primary: #13114a;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        height: 100%;

        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        color: var(--white);
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.92);
        }
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .nav-bar {
        background: linear-gradient(135deg, #31213e 0%, #191249 50%, #070325 100%);
        margin-bottom: 50px;
    }

    .container {
        padding: 20px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    .login-container {
        margin-top: 50px;
        min-height: 500px;
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: column;
    }

    .card-login {
        height: 400px;
        width: 400px;
        display: flex;
        justify-content: center;
        background-color: var(--purpleh1);

        p {
            color: var(--white);
        }
    }

    .active-link {
        text-shadow: 0 0 10px rgb(142, 48, 193), /* Sombra luminosa ao redor */ 0 0 20px rgb(148, 106, 214),
        0 0 30px rgb(137, 104, 161);
        text-decoration: none;
        color: var(--white);
    }

    .menu-item {
        color: var(--white);
    }

    .user-form-container {
        background-color: var(--purpleh1);
        max-width: 400px;
        padding: 50px;
        color: var(--white);


    }

    .control-field {
        color: var(--white);
        border-radius: 10px;
        background-color: var(--white);
    }
`;
