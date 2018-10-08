## 几个简单的 Linux 命令
- ls：查看当前文件夹下文件
- cat xxx：查看 xxx 文件的内容
- mv xxx xxx2：修改 xxx 的文件名为 xxx2
- touch xxx：创建 xxx 文件

### 更多 ls 命令
ls -a：显示当前文件夹下所有文件，包括隐藏文件，文件的上级文件夹，上上级文件夹
ls -l：列表形式显示当前文件夹下所有文件，并显示文件的详细信息，包括权限，所在用户，所在用户组，文件大小，文件最后编辑时间，文件是否是文件夹，对应文件的文件个数
ls -la：就是显示 ls -a 和 ls -l 的信息

### 更多 cat 命令
cat file1 file2 > file3 合并 file1 和 file2 的内容到 file3

### 更多 touch
touch xxx 第一次时是新建文件，以后再 touch 就是修改 xxx 文件的最后编辑时间

### 其他
可以通过 explainshell.com 来查找命令的意思，在网站的搜索框内输入要查询的命令行回车就可以了。
