let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

var tmpImage = '';

let fnTryGlass = (e) => {
    console.log(e)
    if(e !== undefined) {
        document.querySelector('#avatar').innerHTML = `<img id="try_glass" src="${e.dataset.myatt}" alt="">`;   
    }
    const glass123 = dataGlasses.find(ele => ele.id === e.dataset.imgid);
    document.querySelector('#glassesInfo').style.display = 'block';
    document.querySelector('#glassesInfo').innerHTML = `
        <div><h1 style="font-size: 20px;">${glass123.name} - Polo (${glass123.color})</h1></div>
        <div style="display: flex; gap:5px;"><div style="background-color: red; color: white;">$${glass123.price}</div> <div style="color: green;">Stocking</div></div>
        <div  style="margin-top: 10px;"><p style="font-size: 15px;">${glass123.description}</p></div>
    `
}

let fnRenderGlasses = () => {
    let renderHtml = '';
    for(let data of dataGlasses) {
        renderHtml += `
        <div class="content" >
            <img src="${data.src}" data-myatt="${data.virtualImg}" data-imgid = "${data.id}" alt="" style="width: 100%;" onclick="fnTryGlass(this)">
        </div>
        `
    }
    document.querySelector('#vglassesList').innerHTML = renderHtml;          
}
window.onload = fnRenderGlasses();


let removeGlasses = (isRemove) => {
    if(isRemove === true) {
        document.querySelector('#try_glass').style.display = 'inline';
        document.querySelector('#glassesInfo').style.display = 'block';
    }
    else {
        document.querySelector('#try_glass').style.display = 'none';
        document.querySelector('#glassesInfo').style.display = 'none';
    }
}

