export default {
    plimit: 3,
    table: {
        bgColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        showBorder: false
    },
    header: {
        bgColor: "#eee",
        fontColor: "",
        fontSize: 14
    },
    border: {
        borderColor: "#000000",
        showBorder: false,
        showZebrastripe: false,
        zebrastripeColor: "#666666"
    },
    newRows: [
        {
            show: true,
            filed: 'seqNo',
            name: '序号',
            width: 100,
            color: '#000000',
            size: 10
        },
        {
            show: true,
            filed: 'deviceName',
            name: '名称',
            width: 100,
            color: '#000000',
            size: 10
        },
        {
            show: true,
            filed: 'propA',
            name: '参数1',
            width: 100,
            color: '#000000',
            size: 10
        },
        {
            show: true,
            filed: 'propB',
            name: '参数2',
            width: 100,
            color: '#000000',
            size: 10
        },
        {
            show: true,
            filed: 'status',
            name: '状态',
            width: 100,
            color: '#000000',
            size: 10
        }
    ],
    orgNameData: [
        {
            "seqNo": 1,
            "deviceName": "台灯",
            "propA": "12.0",
            "propB": "4C",
            "status": "正常"
        },
        {
            "seqNo": 2,
            "deviceName": "温湿仪",
            "propA": "10℃",
            "propB": "56%",
            "status": "正常"
        },
        {
            "seqNo": 3,
            "deviceName": "液位计",
            "propA": "193ml",
            "propB": "23.1",
            "status": "正常"
        },
        {
            "seqNo": 4,
            "deviceName": "开关阀",
            "propA": "1",
            "propB": "42",
            "status": "正常"
        },
        {
            "seqNo": 5,
            "deviceName": "水平仪",
            "propA": "12.4°",
            "propB": "23.1°",
            "status": "正常"
        },
        {
            "seqNo": 6,
            "deviceName": "加湿器",
            "propA": "12%",
            "propB": "22.23%",
            "status": "正常"
        }
    ]
}
