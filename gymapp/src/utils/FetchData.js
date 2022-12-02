export const exerciseOption ={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '5799748b04msh61c614149f236eap1e00e2jsn1074881f0305',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export  const FetchData = async (url,options)=>{
  const responce  = await fetch(url,options);
  const data = await responce.json();
  return data;
}