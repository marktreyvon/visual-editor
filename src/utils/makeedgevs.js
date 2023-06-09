const extracted=(edge,data)=>{
    if(!data?.lineType) return
    switch (data.lineType) {
        case "1":
            edge.prop('connector', "normal")
            edge.prop('vertices', [])
            break
        case "2":
            edge.prop('connector', "normal")
            edge.prop('vertices', [])
            break
        case "3":
            edge.prop('connector', "smooth")
            edge.prop('vertices', [])
            break
    }
}


 export  default extracted