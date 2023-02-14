import React,{useState} from "react";
import axios from 'axios';

import "./Dictionary.css";





export default function Dictionary(props){
let [keyword,setKeyword]= useState(props.defaultKeyword);
let [results, setResults] = useState(null);
let [loaded, setLoaded] = useState(false);
let [photos, setPhotos] = useState(null);


function handleDictionaryResponse(response){
    setResults(response.data[0]);
}
function handlePexelsResponse(response){
    setPhotos(response.data.photos);
}


function search(){
    let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =`cWXVQHxYyEt6wGYw1kXRbY8ehRBOVSTfd2tnljUs7p0aNx9UV1vitkRG`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = {Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl,{headers:headers}).then(handlePexelsResponse);
}
function handleSubmit(event){
    event.preventDefault();
    search();
}

function handleKeywordChange(event){
    setKeyword(event.target.value);
    
}
function load(){
    setLoaded(true);
    search();
}
if (loaded) {
    
    return (<div className="Dictionary">
        <h1>Dictionary</h1>
        <section>
            <h1 className="search"> Type a word you are looking for</h1>
            <form onSubmit={handleSubmit}>
                <input type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}/>
            </form>
            <div className="hint">For example: apple, kite, water</div>
        </section>
        
    </div>);
}
else{
    load();
    return `Loading...`;
}

    
}