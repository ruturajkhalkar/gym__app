export const exerciseOption ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5f0aae35dbmshe4af75c7726d1e0p115f0bjsn15b9bcf81b5a',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
 export const youtubeOption={
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5799748b04msh61c614149f236eap1e00e2jsn1074881f0305',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
 }
export  const FetchData = async (url,options)=>{
  const responce  = await fetch(url,options);
  const data = await responce.json();
  return data;
}