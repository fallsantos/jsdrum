document.body.addEventListener('keyup', (event) => {
    playSound(event.code)
})

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if(song !== ''){
        let songArray = song.split('')
        playConposition(songArray)
    }
})

function playSound(sound){
    sound = sound.toLowerCase()

    let audioElement = document.querySelector(`#s_${sound}`)
    let keyElement = document.querySelector(`div[data-key='${sound}']`)
    
    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play()
    }

    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playConposition(songArray){

    let wait = 0

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }
}