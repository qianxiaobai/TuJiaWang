const path = require("path")
module.exports = {
    devServer:{
        proxy:{
            "/bingo":{
                target:"https://m.tujia.com",
                changeOrigin:true
            },
            "/note":{
                target:"https://travel.tujia.com",
                changeOrigin:true
            },
            "/recommend":{
                target:"https://travel.tujia.com",
                changeOrigin:true
            },
            
        },

    },
//https://travel.tujia.com/recommend/nearby/houses?cityId=346&unitIds=&longitude=0.0&latitude=0.0

    configureWebpack:{
        resolve:{
            alias:{
                "@":path.join(__dirname,"./src"),
                "api":path.join(__dirname,"./src/api"),
                "components":path.join(__dirname,"./src/components"),
                "views":path.join(__dirname,"./src/views"),
                "common":path.join(__dirname,"./src/common"),
                "utils":path.join(__dirname,"./src/utils"),
                "router":path.join(__dirname,"./src/router"),
                "store":path.join(__dirname,"./src/store"),
                "assets":path.join(__dirname,"./src/assets")
            }
        }
    }
}
//https://m.tujia.com/bingo/h5/portal/getPortalUnitModule
//https://m.tujia.com/bingo/h5/portal/getPortalUnitModule
//https://m.tujia.com/bingo/h5/config/getDownTujiaAppUrl?_apitsp=1564826231427
