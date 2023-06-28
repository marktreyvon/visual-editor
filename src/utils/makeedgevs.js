const extracted=(edge,data)=>{
    if(!data?.lineType) return
    switch (data.lineType) {
        case "1":
            edge.prop('connector', "normal")
            break
        case "2":
            edge.prop('connector', "normal")
            break
        case "3":
            edge.prop('connector', "smooth")
            break
    }
}


 export  default extracted