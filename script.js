function verificar() {
    var data = new Date()
    var CurrentYear = data.getUTCFullYear()
    var YearOfBirth = document.getElementById('YearOfBirth')
    var Result = document.querySelector('div#Result')

    if (YearOfBirth.value.lenght == 0 || YearOfBirth.value > CurrentYear) {
        window.alert('[ERROR] Please review the data and try again!')
    } else {
        var SelectedGender = document.getElementsByName('RadialToSelectGender')
        var Age = CurrentYear - Number(YearOfBirth.value)
        var Gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (SelectedGender[0].checked) {
            Gender = 'male'
            if (Age >=0 && Age <= 10){
                img.setAttribute('src', 'criança2.png')
                //child
            } else if (Age < 21){
                img.setAttribute('src', 'adolescente2.png')
                //teenager
            } else if (Age < 60){
                img.setAttribute('src', 'adulto2.png')
                //adult
            }else {
                img.setAttribute('src', 'idoso2.png')
                //elder
            }
        } else if (SelectedGender[1].checked){
            Gender = 'female'
            if (Age >=0 && Age <=10){
                img.setAttribute('src', 'criança1.png')
                //child
            } else if (Age < 21){
                img.setAttribute('src', 'adolescente1.png')
                //teenager
            } else if (Age < 60){
                img.setAttribute('src', 'adulto1.png')
                //adult
            }else {
                img.setAttribute('src', 'idoso1.png')
                //elder
            }
        } else if (SelectedGender[2].checked){
            Gender = 'person'
            if (Age >=0 && Age <=10){
                //child
            } else if (Age < 21){
                //teenager
            } else if (Age < 60){
                //adult
            }else {
                //elder
            }
        }   
        Result.style.textAlign = 'center'
        Result.innerHTML = `We have detected a ${Age}-year-old ${Gender}`
        Result.appendChild(img)
    }
}