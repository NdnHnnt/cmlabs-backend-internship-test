// Buat loop yang mencetak angka 1-100, JIKA kelipatan 3 maka outputnya "Fizz" , JIKA kelipatan 5 outputnya "Buzz" dan JIKA kelipatan 3 dan 5 keluarkan 'FizzBuzz'
function detect(number){
    let output = ''
    if (number % 3 === 0){
        output += 'Fizz';
    }
    if (number % 5 === 0){
        output += 'Buzz';
    }
    return (output || number)
}

for (let i = 1; i <= 100; i++) {
    let fizzOrBuzz = detect(i);
    console.log(fizzOrBuzz)
}