//locallhost:3000/profile/1/user/namew
app.get('/profile/:id/user/:name', function(req, res) {
        //dir对象的内容
        console.dir(req.params.id)
        res.send(req.params.id)
    })
    //console result
    { id: '1', name: 'namew' }
    //post 传json数据
app.use(bodyParser.json())
app.post('/', urlencodeParser, function(rep, res) {

})
app.post('/up', jsonParser, function(rep, res) {

    })
    //上传图片
    //     <form action="/upload/" method="POST" enctype="multipart/form-data">
    //     <input type="text" name="name">
    //     <input type="file" name="logo">
    //     <button>提交</button>
    // </form>
var multer = require('multer')
var fs = require('fs')
var createFolder = function(folder) {
    try {
        fs.accessSync(folder);
    } catch (e) {
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);
//默认存在/tmp/my-uploads
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

var upload = multer({ storage: storage })

app.get('/form', function(rep, res) {
        var form = fs.readFileSync('./form.html', { encoding: "utf8" });
        res.sendFile(__dirname + '/form.html')
    })
    //文件传到upload
    //logo是input的name
app.post('/upload', upload.single('logo'), function(req, res) {
    res.send({ 'ret_code': 0 })
        //req.file:
        // 文件类型：image/png
        // 原始文件名：1.png
        // 文件大小：18379
        // 文件保存路径：upload/b7e4bb22375695d92689e45b551873d9
        // 自定义文件上传路径、名称
        // {
        //     filedname:'logo',
        //     originalname:'express.png',
        //     encodeing:'7bit',
        //     mimetype:'image/png',
        //     destination:'./upload/'
        // }
})