# nodejs操作Excel

## 需要的模块：
```
    node-xlsx

    fs
```

## 安装 node-xlsx 包：

```
  cnpm install node-xlsx--save-dev
```

## 创建一个xlsx文件,写app.js读取excel文件：

```js
    const xlsx =require('node-xlsx');

    //读取excel:
    var list = xlsx.parse('./ceshi.xlsx');

    console.log(list[0].data);

```

## 打包一个xlsx文件：
需要使用nodejs自带的fs模块：
```js
    const xlsx =require('node-xlsx');
    const fs = require('fs');

    const data = [
        [1, 2, 3],
        [true, false, null, 'sheetjs'],
        ['foo', 'bar', new Date('2017-02-19T14:30Z'), '0.3'],
        ['baz', null, 'qux']
    ];

    var buffer = xlsx.build([{
        name: "mySheetName",
        data: data
    }]);

    fs.writeFile('build.xlsx',buffer,function(){
        console.log('打包成功');
    });

```

## 最后：

读取到xlsx文件后，的数据都是数组格式，可以进行操作完成后，再进行打包成我们需要的xlsx文件。

是不是觉得nodejs操作excel文件如此简单！
