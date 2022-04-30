const path = require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin') //大寫字母為開頭 因為是類或是函數 
module.exports={
    context:path.join(__dirname,'src'),
    entry:{
        login:'./js/login.js',
        form:'./js/form.js'
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].js',
        clean:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./html/login.html'  ,
            filename:'login.html',
            inject:'body',
            chunks:['login']
        }),
        new HtmlWebpackPlugin({
            template:'./html/form.html',
            filename:'form.html',
            inject:'body',
            chunks:['form']
        }),
    ],
    devServer:{
        static : './dist ',

    }
}