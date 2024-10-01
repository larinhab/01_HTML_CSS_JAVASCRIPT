const characters = document.querySelectorAll ('.character')

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }


    const characterSelected = document.querySelector('.selected')
       characterSelected.classList.remove('selected');

       character.classList.add('selected');

       
    const  imagemCharacterBig = document.querySelector ('.big-character');

    const idCharacter = character.attributes.id.value;
        imagemCharacterBig.src = `/src/imagens/card-${idCharacter}.png`;

    const nameCharacter = document.getElementById('character-name');
        nameCharacter.innerText = character.getAttribute('data-name');

    const descriptionCharacter = document.getElementById('description');
        descriptionCharacter.innerText = character.getAttribute('data-description');

    })
})
