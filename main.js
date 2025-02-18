<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guiding Light Generator</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: url('/path/to/bc.png') no-repeat center center fixed;
            background-size: cover;
            font-family: Arial, sans-serif;
            color: white;
        }

        .container {
            text-align: center;
        }

        .title-image {
            max-width: 100%;
            height: auto;
            margin-bottom: 20px;
        }

        .input-box {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 8px;
        }

        #usernameInput {
            padding: 10px;
            font-size: 1em;
            width: 200px;
            border: 1px solid #ccc;
            border-radius: 4px;
            margin-right: 10px;
        }

        #enterButton {
            padding: 10px 20px;
            font-size: 1em;
            cursor: pointer;
            border: none;
            color: white;
            background-color: #1a73e8;
            border-radius: 4px;
        }

        .connected-message {
            margin-top: 20px;
            font-size: 1.2em;
            display: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Replacing title text with an image -->
        <img src="/path/to/GLGIO.png" alt="GUIDING LIGHT GENERATOR CUSTOM MUSIC PLAYER" class="title-image">
        
        <div class="input-box">
            <input type="text" id="usernameInput" placeholder="Enter Roblox Username">
            <button id="enterButton">Enter</button>
        </div>

        <div id="connectedMessage" class="connected-message"></div>
    </div>

    <script>
        document.getElementById('enterButton').addEventListener('click', function() {
            const username = document.getElementById('usernameInput').value;
            if (username) {
                document.getElementById('connectedMessage').textContent = `Connected as ${username}`;
                document.getElementById('connectedMessage').style.display = 'block';
                document.querySelector('.input-box').style.visibility = 'hidden';
            }
        });
    </script>
</body>
</html>
