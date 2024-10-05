### 问题场景

- 上传本地博客文件至Github仓库中时，遇到了下面的问题

### 错误提示

```
failed to load config from /home/runner/work/blog/blog/docs/.vitepress/config.mts
build error:
ENOENT: no such file or directory, scandir '/home/runner/work/blog/blog/docs/others/'
```

### 我做了什么？从而导致这个错误的产生

1. 修改博客文件夹名称；Others -> others

2. 修改博客配置文件; Others->others

   ![image-20240602115329064](https://s2.loli.net/2024/06/03/lDwGbHjdT8Kzh1a.png)

### 产生错误的原因是什么

1. Github仓库中的文件夹名称没有随之而变化；依旧是Others

### 如何解决这个错误

1. 修改Github仓库中文件夹的名称；Others->others
   1. 删除Github仓库中的Others文件夹，然后重新上传others文件夹至Github仓库

