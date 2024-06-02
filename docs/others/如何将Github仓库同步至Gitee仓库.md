# 如何将Github仓库中的内容同步至Gitee仓库中

## 1.创建Gitee仓库
[创建你的第一个仓库 - Gitee.com](https://gitee.com/help/articles/4120)
- 仓库属性：公开
- 只需配置必要信息
## 2.创建SSH KEY，并将其添加到Gitee账户中
[生成/添加SSH公钥 - Gitee.com](https://gitee.com/help/articles/4181#article-header0)
## 3.将SSH KEY添加到Github账户中
[Adding a new SSH key to your GitHub account - GitHub Docs](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- 然后，执行下面的命令

```
  ssh -T git@github.com
```
## 4.配置Github Actions
[wearerequired/git-mirror-action at v1](https://github.com/wearerequired/git-mirror-action/tree/v1/)
