function createCard(number, img, name, rankCard, description) { 
    const divCard = document.createElement("div");
    divCard.className = "divCard";
    
    const divHeader = document.createElement("div");
    divHeader.className = "divHeader";
    
    const numberCard = document.createElement("p");
    numberCard.id = "numberCard";
    numberCard.className = "numberCard";
    numberCard.textContent = number;
    
    const title = document.createElement("h2");
    title.id = "title";
    title.textContent = name;
    
    const rank = document.createElement("p");
    rank.id = "rank";
    rank.className = "rank";
    rank.textContent = rankCard;
    
    divHeader.append(numberCard, title, rank);
    
    const imgCard = document.createElement("img");
    imgCard.id = "imgCard";
    imgCard.src = img;
    imgCard.alt = "img";
    
    const divLinear = document.createElement("div");
    divLinear.className = "divLinear";
    
    const divDescription = document.createElement("div");
    divDescription.className = "divDescription";
    
    const descrition1 = document.createElement("p");
    descrition1.id = "descrition1";
    descrition1.textContent = description;

    divDescription.append(descrition1);
    divLinear.appendChild(divDescription);
    
    divCard.append(divHeader, imgCard, divLinear);

    return divCard;
}

(async () => {
    const start = Date.now();

    console.log("DEBUT  ", start);

    try {
        const response = await fetch("data.json");
        const data = await response.json();
        for (let i = 0; i < data.length; i++) {

            const myCard = createCard(data[i].number, data[i].image, data[i].name, data[i].rank, data[i].description);
            document.querySelector("main").appendChild(myCard);
            
        }
    } catch (error) {
        console.error("Erreur:", error);
    }


    console.log("FINI", Date.now() - start);
})();