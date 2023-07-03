const d = document; 

d.addEventListener('scroll', e => {
    let scroll = this.scrollY; 
    if(scroll > 800){
        d.getElementById('coete').classList.remove('ocultar')
    }else{
        d.getElementById('coete').classList.add('ocultar')
    }
})
d.addEventListener('click', e => {
    if(e.target.matches('.skill1')){
      removeClass('info_css'); 
    }
    if(e.target.matches('.skill2')){
        removeClass('info_js'); 
    }
    if(e.target.matches('.skill3')){
        removeClass('info_figma'); 
    }
    if(e.target.matches('.skill4')){
        removeClass('info_solidity'); 
    }
    if(e.target.matches('.skill5')){
        removeClass('info_react'); 
    }
    
})

const removeClass = (add) => {
    d.getElementById(add).classList.add('inline')
    const elements = ['info_css', 'info_js', 'info_figma', 'info_solidity', 'info_react']; 
    let newElements = []; 
    newElements = elements.filter(el => add !== el )
    newElements.forEach(el => {
        d.getElementById(el).classList.remove('inline')
    })
    d.getElementById('info_heart').classList.add('ocultar')
}