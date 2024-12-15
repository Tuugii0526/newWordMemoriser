const bookName =document.getElementById('book-name');
const chapterName=document.getElementById('chapter-name');
const chooseBook=document.getElementById('books');
const chooseChapter=document.getElementById('chapter');
const filter=document.getElementById('filter');
const newWordsContainer=document.getElementById('new-words-container');
const bookNewWords= 
{
    book:"Pride and Prejudice",
    chapter:"Chapter 21-34",
    
}
const newWords=[
    {
        name:"peevish",
        type:"Adjective",
        meaning:"easily irritated or annoyed"
    },
    {
        name:"dejection",
        type:"Noun",
        meaning:"a state of melancholy depression"
    },
    {
        name:"assidious",
        type:"Adjective",
        meaning:"marked by care and persistent effort"
    },
    {
        name:"abatement",
        type:"Noun",
        meaning:"an interruption in the intensity or amount of something"
    },
    {
        name:"lament",
        type:"Verb",
        meaning:"regret strongly"
    },
    {
        name:"comprise",
        type:"Verb",
        meaning:"include or contain"
    },
    {
        name:"beau",
        type:"Noun",
        meaning:"a man with whom one has a romantic relationship"
    },

]
Object.freeze(bookNewWords);
bookName.textContent=chooseBook.value;
chapterName.textContent=chooseChapter.value
chooseBook.addEventListener("change",(e)=>
{
    bookName.textContent=e.target.value
})
chooseChapter.addEventListener("change",(e)=>
{
    chapterName.textContent=e.target.value;
})
const setNewWords=(arr=newWords)=>
{
    newWordsContainer.innerHTML+=arr.map(
        ({name,type,meaning})=>
            `
        <div class="new-word">
            <p>Word: ${name}</p>
            <p>Type: ${type}</p>
            <p>Meaning: ${meaning}</p>
        </div>
        `
    ).join("");
}
filter.addEventListener("change",(e)=>{
    newWordsContainer.innerHTML="";
    switch(e.target.value)
    {
        case "noun":
            setNewWords(newWords.filter((word)=> word.type==="Noun"
            ))
        break;
        case "adj":
            setNewWords(newWords.filter((word)=>
            
                word.type==="Adjective"
            ))
            break;
        case "verb":
            setNewWords(newWords.filter((word)=>
            
                word.type==="Verb"
            ))
            break;
            case "all":
                setNewWords()
            case "clear":
            setNewWords([])
            default:
                setNewWords([])
            
    }
})