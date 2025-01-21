document.getElementById('keyForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var key = document.getElementById('key').value;

    // Anahtar doğrulama işlemi
    if (key === 'Phantom_Y4XL') {
        document.getElementById('result').innerHTML = "Anahtar doğru!";
    } else {
        document.getElementById('result').innerHTML = "Geçersiz anahtar.";
    }
});
