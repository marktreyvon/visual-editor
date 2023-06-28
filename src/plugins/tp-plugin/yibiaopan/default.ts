export const styleData = {
    background: {
        backgroundColor: '',
        borderWidth: 1,
        borderColor: ''
    },
    dashboard: {
        text: "rate",
        fontSize: 15,
        fontColor: '#000',
        progressColor1: "#B8E1FF",
        progressColor2: "#3D76DD",
        pointerColor:'#D0D0D0',
        pinColor:"#D0D0D0",
        pointerShow:true,
        tagShow:true,
        tagCunShow:true,
    }
}

export const bindData = {
    bindType: 'static',
    static: 75
}

export const optionData = {
    percent: 0.75,
    range: {
        ticks: [0, 1],
        color: 'l(0) 0:#B8E1FF 1:#3D76DD',
    },
    indicator: {
        pointer: {
            visible: true,
            style: {
                stroke: '#D0D0D0',
                lineWidth: 1,
                fill: '#D0D0D0',
            },
        },
        pin: {
            visible: true,
            style: {
                stroke: '#D0D0D0',
            },
        },
    },
    axis: {
        visible: true,
        label: {
            formatter(v: any) {
                return Number(v) * 100;
            },
        },
        subTickLine: {
            count: 3,
        },
    },
    statistic: {
        content: {
            formatter: (data: any) => {
                console.log('yibiaopan.formatter', data)
                const percent: number = data?.percent || 0;
                return `Rate: ${(percent * 100).toFixed(0)}%`
            },
            style: {
                color: 'rgba(0,0,0,0.65)',
                fontSize: '10px'
            },
        },
    },
}