//当用户运行grunt init或者grunt-init来显示所有的有效初始化模板时，这个简短的模板描述也会和模板名一起显示。
exports.description = '初始化一个简单的html+jqeury的项目';

// 如果指定了这个选项，这个可选的扩展描述将会在任何提示信息显示之前显示出来。这是一个给用户提供一些解释命名空间相关帮助信息的很好的地方。
exports.notes = '请配置下面的参数，初始化项目'; 

// Template-specific notes to be displayed after question prompts.
exports.after = '初始化完毕，开始工作吧~~~';

// 如果这个(推荐指定)可选的通模式或者通配模式数组匹配了，Grunt将终止并生成一个警告信息，这对于初始化模板可能覆盖现有文件的情况来说是非常有用的。
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {
  //启动程序并提示开始输入。
  init.process({}, [
    //项目名称。在项目模版中将会大量使用，默认指向当前工作目录。
    init.prompt('name'),
    //一个用户可读的项目名称，默认是修改过的让更多人可读的实际项目名称。
    init.prompt('title'),
    init.prompt('description', '一个简单的html+jqeury的项目'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('author_name'),
    init.prompt('author_email')
  ], function(err, props) {
    //  All finished, do something with the properties

    // 返回一个包含待复制文件源文件的绝对路径和相对的目标路径的对象，并按照rename.json(如果存在)中的规则重命名(或者忽略)。
    var files = init.filesToCopy(props);

    // 遍历所传递对象中的所有文件，将源文件复制到目标路径，并处理相关内容,
    // 实际修改跟处理的文件，noProcess表示不进行处理。
    init.copyAndProcess(files, props, {noProcess: 'libs/**'});

    //生成package.json，供Grunt、npm使用
    init.writePackageJSON('package.json', {
      name: 'web-app',
      version: '0.0.1',
      devDependencies: {
      	"grunt": "^0.4.5",
      	"grunt-contrib-clean": 'latest',
      	"grunt-contrib-concat": "^0.5.0",
      	"grunt-contrib-less": "^1.0.0",
      	"grunt-contrib-uglify": "^0.7.0",
      	"grunt-contrib-watch": "^0.6.1",
        "grunt-contrib-cssmin":'latest'
      },
    });
    
    // All done!
    done();
  });

};
