<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iTalk - Login</title>
    <link rel="icon" href="imgs/1login.png" type="image/png">
    <link rel="stylesheet" href="css/login.css">

</head>

<body>
    <header id="navbar">
    <div class="logo">
        <a href="index.php">
            <h1>iTalk</h1>
        </a>
    </div>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>
            <li><a href="dicas.php">Dicas</a></li>
            <li><a href="ia.html">IA</a></li>
            <li><a href="sobre.php">Sobre</a></li>
            <li><a href="login.php" class="signup-btn">Login</a></li>
        </ul>
    </nav>
</header>
        

    <main>
        <div class="container">
            <div class="logo-section">

                <img src="" alt="Logo iTalk" width="450" height="450">

            </div>
            <div class="login-container">
                <h2>Login</h2>
                <form action="" method="POST">
                    <label for="username">Usuário:</label>
                    <input type="text" id="username" name="username" required>

                    <label for="password">Senha:</label>
                    <input type="password" id="password" name="password" required>

                    <button type="submit">Entrar</button>

                    <div class="extra-options">
                        <a href="#">Esqueceu a senha?</a>
                        <a href="#" id="open-register">Criar conta</a>
                    </div>
                </form>
            </div>
        </div>
    </main>


    <div class="modal" id="register-modal">
        <div class="modal-content">
            <span class="close" id="close-register">&times;</span>
            <h2>Cadastro</h2>
            <form action="" method="POST">
                <label for="name">Nome Completo:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="date">Data de nascimento:</label>
                <input type="date" id="date" name="date" required>

                <label for="password-register">Senha:</label>
                <input type="password" id="password" name="password" required>

                <label for="confirm-password">Confirmar Senha:</label>
                <input type="password" id="confirm-password" name="confirm_password" required>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
