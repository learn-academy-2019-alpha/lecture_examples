function allBikes(){
  return fetch("/bikes")
  .then((response)=>{
    if(response.status === 200){
      return response.json()
    } else {
      throw "Bad response"
    }
  })
}

export { allBikes }
