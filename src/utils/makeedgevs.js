const extracted=(ex,ew,ey,eh,edge,data)=>{
    switch (data.lineType) {
        case "1":
            edge.prop('connector', "normal")
            edge.prop('vertices', [])
            break
        case "2":
            edge.prop('connector', "normal")
            edge.prop('vertices', data.vertices ? data.vertices : [{x: ex + ew + 40, y: ey + eh - 40}])
            break
        case "3":
            edge.prop('connector', "smooth")
            edge.prop('vertices', data.vertices ? data.vertices : [{x: ex + ew + 40, y: ey + eh - 40}])
            break
    }
}


 export  default extracted