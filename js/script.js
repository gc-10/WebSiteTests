// Prefisso di un percorso calcolato, che cambierà in base alla pagina in cui mi trovo, in modo da avere percorsi relativi ovunque
const base=window.basePath || "";   

/* Funzione che inserisce nella barra inziale il logo ridimensionato in base alle dimensioni dello schermo in cui si apre il sito.
   Inoltre, vengono inseriti anche i tasti di selezione (sempre in base alla dimensione dello schermo) */
function aggiornaImmagineBarra() {
    const barra=document.getElementById("barra-titolo");
    // Pulisce il contenuto precedente
    barra.innerHTML="";
    const immagine=document.createElement("img");
    if(window.innerWidth<=885){ 
        immagine.id="logo_ridotto";
        immagine.src=base+"img/Immagine_ridotta.png";   // Da notare il percorso come cambia a proposito del prefisso dato
        const barraNavigazione=document.getElementById("barra-navigazione");
        barraNavigazione.innerHTML="";   
    } 
    else{ 
        immagine.id="logo";
        immagine.src=base+"img/Immagine_estesa.png";
        creaBarraOriginale(); 
    }
    immagine.addEventListener("click", ()=>{ window.location.href=base+"index.html"; });
    barra.appendChild(immagine);
    const contenuto=document.getElementById("contenuto");
    // Creazione di una classe CSS per avere un effetto di transizione sull'immagine del logo e sul contenuto della pagina
    setTimeout(()=>{ 
        contenuto.classList.add("visible");
        immagine.classList.add("visible"); 
    }, 10);  
}

// Funzione che crea la barra di navigazione con gli eventi associati, al momento di creazione della pagina, per display di grandi dimensioni
function creaBarraOriginale(){
    // Si puliscono i contenuti precedenti
    const barraNavigazione=document.getElementById("barra-navigazione");
    barraNavigazione.innerHTML=""; 
    // Creazione pulsanti barra navigazione
    const bottoneNAV1=document.createElement("button");
    const bottoneNAV2=document.createElement("button");
    const bottoneNAV3=document.createElement("button");
    const bottoneNAV4=document.createElement("button");
    const bottoneNAV5=document.createElement("button");
    bottoneNAV1.id=bottoneNAV2.id=bottoneNAV3.id=bottoneNAV4.id=bottoneNAV5.id="bottoneSelezione";
    bottoneNAV1.id="selezionato";
    bottoneNAV1.innerHTML="Chi siamo";
    bottoneNAV2.innerHTML="Cosa facciamo";
    bottoneNAV3.innerHTML="Dove trovarci";
    bottoneNAV4.innerHTML="Contattaci";
    bottoneNAV5.innerHTML="Area Riservata";
    barraNavigazione.appendChild(bottoneNAV1);
    barraNavigazione.appendChild(bottoneNAV2);
    barraNavigazione.appendChild(bottoneNAV3);
    barraNavigazione.appendChild(bottoneNAV4);
    //barraNavigazione.appendChild(bottoneNAV5);
    reindirizzamentoEsteso(bottoneNAV1, bottoneNAV2, bottoneNAV3, bottoneNAV4, bottoneNAV5);
}

// In base al click di uno dei bottoni sulla barra di navigazione verremo reindirizzati alla pagina specifica
function reindirizzamentoEsteso(bottoneNAV1, bottoneNAV2, bottoneNAV3, bottoneNAV4, bottoneNAV5){
    bottoneNAV1.addEventListener("click", ()=>{ window.location.href=base+"index.html"; });
    bottoneNAV2.addEventListener("click", ()=>{ window.location.href=base+"pages/cosa-facciamo.html"; });
    bottoneNAV3.addEventListener("click", ()=>{ window.location.href=base+"pages/dove-trovarci.html"; });
    bottoneNAV4.addEventListener("click", ()=>{ window.location.href=base+"pages/contattaci.html"; });
    // bottoneNAV5.addEventListener("click", ()=>{ window.location.href = "pages/area-riservata.html"; });
} 
  
// Al caricamento della pagina in base allo schermo si ridimensiona il logo
window.addEventListener('load', aggiornaImmagineBarra);

// Il logo viene aggiornato anche al ridimensionamento della finestra
window.addEventListener('resize', aggiornaImmagineBarra);