btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    moy1 = parseFloat(document.getElementById("Moy_s1").value);
    moy2 = parseFloat(document.getElementById("Moy_s2").value);
    moy3 = parseFloat(document.getElementById("Moy_s3").value);
    moy4 = parseFloat(document.getElementById("Moy_s4").value);
    moy5 = parseFloat(document.getElementById("Moy_s5").value);
    moy6 = parseFloat(document.getElementById("Moy_s6").value);
    moy7 = parseFloat(document.getElementById("Moy_s7").value);
    moy8 = parseFloat(document.getElementById("Moy_s8").value);
    moy9 = parseFloat(document.getElementById("Moy_s9").value);
    moy10 = parseFloat(document.getElementById("Moy_s10").value);

    var moyenne = (moy1 * 1.5) + (moy2 * 1.5) + (moy3 * 2) + (moy4 * 1.5) + (moy5 * 1.5)
    + (moy6 * 1) + (moy7 * 1.5) + (moy8* 1.5) + (moy9 * 1.5) + (moy10 * 1.5);

    var moyenneGen = moyenne / 15;
    alert('Votre Moyenne est : ' + moyenneGen);
})