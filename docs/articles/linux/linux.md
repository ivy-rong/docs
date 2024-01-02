# linux

### 查看当前目录文件路径

```bash
pwd
```

### 查看端口占用

```bash
lsof -i:pid
```

### 终止进程

```bash
kill -9 pid
kill -9 node
```

### cd

```bash
cd /path 从根目录开始
```

### 补全路径 tab 补全路径

```bash
cd etc/1
```

### 返回上级目录

```bash
cd ..
cd ~ 主目录
```

### 创建文件夹

```bash
mkdir name
```

### 文件重命名

```bash
mv test mu
```

### 创建新文件

```bash
touch  test.txt
touch  test1.txt test2.txt
```

### 编辑文件

```bash
touch  test.txt
```

### 删除文件

```bash
rm test.txt test.txt test.txt
rm file*  //删除以file文开头的文件
```

### 删除目录

```bash
rm -r dir //递归的过程
```

### 强制删除

-f = force

```bash
rm -rf  path
```

### vim

```bash
i  插入
加上 ESC 之后 退出编辑模式
:wq 写入并退出
: 进入命令模式
: q!强制退出
```

### cat 查看文件内容 连接多个文件

cat 缩写 concatenate

```bash
cat name
cat file1.txt > file2.text  //文件2写入文件1
```

### more 分页查看文件内容 加空格显示所有的内容 Enter 一行一行阅读

```bash
more name
```

### less 分页查看文件内容 加空格显示所有的内容 Enter 一行一行阅读 可以滚动 向上翻页

```bash
less name
```

### head 查看文件前几行

```bash
head -n 5 /etc
```

### tail 查看文件后几行

```bash
tail -n 5 /etc
```

### echo 输出文本到文件

```bash
echo  text > file
```
