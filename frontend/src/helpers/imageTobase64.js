 const imageTobase64 =async (Image) =>{
    const reader = new FileReader()
    reader.readAsDataURL(Image)
    
    const data = await new Promise((resolve ,reject)=>{
reader.onload = ()=> resolve (reader.result)
reader.onerror = error=>reject(error)

    })
return data 
}

export default imageTobase64