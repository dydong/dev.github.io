# 在 CentOS 6.x/7.x 上安装 git 及最新版

## 方式一、yum 安装

```sh
yum info git
```

```
Failed to set locale, defaulting to C
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
Available Packages
Name        : git
Arch        : x86_64
Version     : 1.8.3.1 <--- 说明：当前系统是 CentOS7.x，在 6.x 上是 1.7.1
Release     : 12.el7_4
Size        : 4.4 M
Repo        : updates/7/x86_64
Summary     : Fast Version Control System
URL         : http://git-scm.com/
License     : GPLv2
Description : Git is a fast, scalable, distributed revision control system with an
            : unusually rich command set that provides both high-level operations
            : and full access to internals.
            :
            : The git rpm installs the core tools with minimal dependencies.  To
            : install all git packages, including tools for integrating with other
            : SCMs, install the git-all meta-package.
```

```sh
yum install -y git
```

## 方式二、源码包安装

步骤 1. 安装依赖包

```sh
yum install curl-devel expat-devel gettext-devel openssl-devel zlib-devel
yum install  gcc perl-ExtUtils-MakeMaker
```

步骤 2. 卸载旧的 git 版本（如果之前有安装 rpm 包）

```sh
yum remove git
```

步骤 3. 下载&解压

源码文件（当前最新版本 **v2.16.1** @ **2018 年 2 月 9 日**）

- 地址 1：https://www.kernel.org/pub/software/scm/git/
- 地址 2：https://github.com/git/git/release

```sh
cd /usr/src
wget https://www.kernel.org/pub/software/scm/git/git-2.5.0.tar.gz
tar -zxvf git-2.5.0.tar.gz
```

步骤 4. 编译安装

```sh
cd git-2.5.0
make prefix=/usr/local/git all
make prefix=/usr/local/git install
echo "export PATH=$PATH:/usr/local/git/bin" >> /etc/bashrc
source /etc/bashrc
```

步骤 5. 检查 git 版本

```sh
git --version
```
```
git version 2.5.0
```

::: tip
注意：如果安装完查看版本不是我们安装的最新版，请重新执行下面的操作
:::

```sh
yum remove -y git
source /etc/bashrc
git --version
```

参考：

https://github.com/git/git/blob/master/INSTALL 

http://stackoverflow.com/questions/21820715/
how-to-install-latest-version
-of-git-on-centos-6-x-7-x

© 著作权归作者所有
