function pessoa() {

    this.idade = 0

    setInterval(function (){ 

        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // a cada milisegundo a função sera executada novamente. O setInterval que causa isso


}

new pessoa
