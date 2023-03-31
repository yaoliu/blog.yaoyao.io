---
title: 如何在 Ubuntu 上配置 eBPF 开发环境
author: 耀耀
date: 2023-03-30
layout: Post
useHeaderImage: true # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/in-post/ismail-inceoglu-on-fire.webp # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40,57,101, .4)  # 封面图遮罩（可选）
headerImageCredit: Ideun Kim # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/8wNkQx  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
---

我的电脑: `MacBook Pro (14-inch, 2021)`, `Ventura 13.2`, `M1 Max (ARM64,aarch64)`

本地 Linux 环境: `Ubuntu 22.04.2 LTS (5.15.0-60-generic)`  in `Parallels Desktop 18 for Mac`

下面安装步骤均在 `Ubuntu 22.04.2 LTS (5.15.0-60-generic)` 进行测试。

## 一键安装

如果没有特殊需求或者只是在尝试学习使用 `eBPF`  可以使用以下命令安装：

```bash
sudo apt install -y make clang llvm libelf-dev libbpf-dev bpfcc-tools libbpfcc-dev
sudo apt install -y linux-tools-$(uname -r) linux-headers-$(uname -r) linux-common
```

## LLVM & CLANG

### 使用官方源安装

你可以使用添加官方源的方式在 `Ubuntu 上安装指定版本的 `LLVM`：

安装 GPG 证书

```bash
wget -O - https://apt.llvm.org/llvm-snapshot.gpg.key|sudo apt-key add -
```

写入软件源信息，将下面内容添加到 `/etc/apt/sources.list`

```bash
deb http://apt.llvm.org/jammy/ llvm-toolchain-jammy main
deb-src http://apt.llvm.org/jammy/ llvm-toolchain-jammy main
# 15
deb http://apt.llvm.org/jammy/ llvm-toolchain-jammy-15 main
deb-src http://apt.llvm.org/jammy/ llvm-toolchain-jammy-15 main
# 16
deb http://apt.llvm.org/jammy/ llvm-toolchain-jammy-16 main
deb-src http://apt.llvm.org/jammy/ llvm-toolchain-jammy-16 main
```

更新

```bash
sudo apt-get update
```

安装 `LLVM` 工具链

```bash
sudo apt install -y clang-15 lldb-15 lld-15 clangd-15
```

### 使用官方脚本安装

默认安装

```bash
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh
```

指定版本号

```bash
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh 15
```

默认安装所有工具链

```bash
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh all
```

指定版本安装所有工具链

```bash
wget https://apt.llvm.org/llvm.sh
chmod +x llvm.sh
sudo ./llvm.sh 15 all
```

如果在 `Ubuntu` 上使用 `apt` 安装 `LLVM` 的更多方法可以参考 [https://apt.llvm.org/](https://apt.llvm.org/)

如果你需要使用二进制包安装特定版本的 LLVM，可以在 [LLVM 下载页面](https://releases.llvm.org/download.html) 上下载相应的版本并手动安装。

## bpf.h

`bpf.h` 是 Linux 内核的一部分，通常在安装 Linux 操作系统时就已经包含在内核中。因此，如果你已经安装了 Linux 系统，通常就已经拥有了 `bpf.h` 头文件。但是，不同的 Linux 发行版可能会有不同的内核版本和配置，因此可能会存在某些版本的内核中不包含 `bpf.h` 头文件的情况。

如果你想知道你的 Linux 上是否安装了 `bpf.h` 可以使用 `find` 命令

```bash
sudo find /usr/include/ -name bpf.h
```

输出结果

```bash
/usr/include/linux/bpf.h
```

如果没有找到 `bpf.h` 在这种情况下，你需要安装相应的 Linux 内核头文件包，以便在开发和编译 eBPF 程序时能够访问 `bpf.h` 头文件。

### 使用包管理工具安装

通常情况下，你可以使用包管理来安装 Linux 内核头文件包。例如，在 Ubuntu 系统上，你可以使用以下命令安装 Linux 内核头文件包：

```bash
sudo apt install linux-headers-$(uname -r)
```

这个命令将安装当前正在运行的内核版本对应的头文件包。安装完成后，你就可以在编写 `eBPF` 程序时使用 `bpf.h` 头文件了。

## libbpf

`libbpf` 是一个用于管理和操作 `eBPF` 代码的库。它提供了一组低级别的 API，用于加载、卸载和管理 `eBPF` 程序和映射，以及与内核中的 `eBPF` 子系统进行交互。

`libbpf` 库的主要功能包括：

- 加载和卸载 `eBPF` 程序和映射
- 与 `eBPF` 程序和映射进行交互，例如查看和修改它们的属性
- 与内核中的 `eBPF` 子系统进行交互，例如获取 `eBPF` 子系统的信息和状态
- 生成 `eBPF` 代码和数据的 ELF 格式文件，以便将其编译为内核模块或用户空间程序

`libbpf` 库的源代码托管在 GitHub 上，可以访问 [libbpf Github](https://github.com/libbpf/libbpf) 查看源代码。

### 使用源码编译安装

克隆源码

```bash
git clone https://github.com/libbpf/libbpf.git
cd libbpf
```

编译安装(默认路径)

```bash
cd src
// 编译
sudo make
// 编译安装
sudo make install
```

### 使用包管理工具安装

```bash
sudo apt install libbpf-dev
```

### 查看安装路径

`libbpf` 库默认安装在 `/usr/lib` 目录下。

如果需要查看 `libbpf.so` 的具体安装位置，可以使用 `find` 命令：

```bash
sudo find /usr/lib -name libbpf.so
// 或者
sudo find /lib --name libbpf.so
```

## bcc

**`bcc`** 是一组用于 `eBPF` 开发的工具，它包括了一组用于编写和调试 `eBPF` 程序的库和命令行工具。使用 `bcc`，可以更加方便地开发和调试 `eBPF` 程序，提高开发效率和代码质量。

### 使用包管理工具安装

在 Ubuntu 上，可以使用以下命令安装 bcc：

```bash
sudo apt update
sudo apt install bpfcc-tools
```

这个命令将安装 bcc 工具集及其依赖项。

### 使用源码编译安装

如果你想自行编译 bcc 工具集，可以使用以下命令从 GitHub 上获取源代码并编译：

```bash
git clone https://github.com/iovisor/bcc.git
mkdir bcc/build; cd bcc/build
cmake .. -DCMAKE_INSTALL_PREFIX=/usr
make
sudo make install
```

这个命令将下载 `bcc` 源代码并编译安装 `bcc` 工具集。编译完成后，你就可以在 `/usr/share/bcc/tools` 目录下找到各种 `bcc` 工具的源代码和示例程序。

需要注意的是，编译 `bcc` 工具集需要一些依赖项，包括 `clang、llvm、libelf、libbfd ` 等。在编译 `bcc` 之前，需要先安装这些依赖项。

如果你想了解更多关于 `bcc` 的信息，可以查看 [bcc GitHub](https://github.com/iovisor/bcc) 或者 [bcc 官方文档](https://github.com/iovisor/bcc/blob/master/docs/reference_guide.md) 。

## bpftool

**`bpftool`** 是一个用于管理和调试 `eBPF` 代码的命令行工具。它允许你查看和分析系统中运行的 `eBPF` 程序和映射，以及与内核中的 `eBPF` 子系统进行交互。更多内容可以查看 [bpftool Github](https://github.com/libbpf/bpftool)

使用 `bpftool`，你可以执行以下操作：

- 列出当前系统中所有加载的 `eBPF` 程序和映射
- 查看指定 `eBPF` 程序或映射的详细信息，例如指令集、内存布局等
- 修改 `eBPF` 程序或映射的属性，例如禁用一个程序或清空一个映射
- 将一个 `eBPF` 程序或映射导出到文件中，以便在其他系统上重新导入
- 调试 `eBPF` 程序，例如跟踪程序的控制流、访问内存等

### 使用包管理工具安装

```bash
sudo apt install -y linux-tools-$(uname -r)
```

### 使用源码编译安装

安装依赖

```bash
sudo apt install build-essential \
        libelf-dev \
        libz-dev \
        libcap-dev \
        clang llvm llvm-dev lld \
        binutils-dev \
        pkg-config
```

克隆仓库

```bash
git clone https://github.com/libbpf/bpftool.git
cd bpftool
git submodule update --init
```

编译

```bash
cd src
sudo make
```

编译结果如下

```bash
...                        libbfd: [ on  ]
...               clang-bpf-co-re: [ on  ]
...                          llvm: [ on  ]
...                        libcap: [ on  ]
...
...
CC       struct_ops.o
CC       tracelog.o
CC       xlated_dumper.o
CC       disasm.o
LINK     bpftool
```

验证命令

```bash
sudo ./bpftool v -p
// 输出结果
{
    "version": "7.2.0",
    "libbpf_version": "1.2",
    "features": {
        "libbfd": false,
        "llvm": true,
        "skeletons": true,
        "bootstrap": false
    }
}
```

关于 `libbfd = false` 在 [https://github.com/libbpf/bpftool/releases/tag/v7.1.0](https://github.com/libbpf/bpftool/releases/tag/v7.1.0) 版本说明如下：

增加对使用 LLVM 库（而不是 libbfd）反汇编 JIT 编译程序的支持，并默认切换到 LLVM。如果在构建 bpftool 时不存在 LLVM 库，则仍支持使用 libbfd 进行反汇编作为后备方案

Add support for disassembling JIT-compiled programs with the LLVM library (instead of libbfd), and switch to LLVM by default. Disassembling with libbfd is still supported as a fallback if the LLVM library is not present when building bpftool.

如果你想使用对 `libbfd` 的支持 可以使用 `v7.0.0` 版本。步骤如下：

克隆仓库并切换到 `v7.0.0` 版本

```bash
git clone https://github.com/libbpf/bpftool.git
cd bpftool
git submodule update --init
git checkout tags/v7.0.0
```

编译

```bash
cd src
sudo make
```

验证命令

```bash
sudo ./bpftool v -p
{
    "version": "7.0.0",
    "libbpf_version": "1.0",
    "features": {
        "libbfd": true,
        "libbpf_strict": true,
        "skeletons": true
    }
}
```

### 使用 Linux 源码编译安装

安装 Linux 源码

```bash
// 查看当前内核版本
uname -r
// 输出当前版本
5.15.0-60-generic
// 搜索 Linux 源码
sudo apt-cache search linux-source
// 安装源码
sudo apt install linux-source-5.15.0
```

解压

```bash
cd /usr/src/
ls -l /usr/src/
tar xf linux-source-5.15.0.tar.bz2
```

编译

```bash
cd linux-source-5.15.0/tools
cd bpf/bpftools
make
./bpftool version -p
{
    "version": "5.15.85",
    "features": {
        "libbfd": true,
        "skeletons": true
    }
}
```

## linux-tools

**`linux-tools`** 包是 Linux 内核源码中包含的一组工具集，它包括了许多用于性能分析、调试和监测的工具，例如 perf、ftrace、bpftrace 等。这些工具可以帮助开发者深入了解系统内部的行为和性能瓶颈，从而优化程序和系统性能。

要查看当前系统中已经安装的 **`linux-tools`** 工具，可以使用以下命令：

```bash
dpkg -l | grep linux-tools
```

这个命令将列出当前系统中所有已安装的 **`linux-tools`** 包及其版本号。如果系统中没有安装 **`linux-tools`** 包，可以使用包管理器安装，例如在 Ubuntu 系统中可以使用以下命令安装：

```bash
sudo apt install linux-tools-$(uname -r)
```

其中，**`$(uname -r)`** 表示当前正在使用的内核版本号，可以保证安装的 **`linux-tools`** 版本与当前内核版本相匹配。安装完成后，可以再次使用上述命令来检查 **`linux-tools`** 包是否已经安装成功。

需要注意的是，不同版本的 Linux 内核可能会包含不同的 **`linux-tools`** 工具集，且工具名称和版本也可能会有所不同。在使用 **`linux-tools`** 工具时，建议先了解对应版本的工具集和使用方法，以便更好地使用和理解这些工具。

## vmlinux.h

**`vmlinux.h`** 文件是 Linux 内核的一个头文件，通常包含在 Linux 内核头文件包中。如果你想检查系统中是否安装了 **`vmlinux.h`** 文件，可以使用 `find` 命令：

```bash
find /usr/include -name vmlinux.h
```

这个命令将在 **`/usr/include`** 目录下查找 **`vmlinux.h`** 文件，如果存在，则表示系统中已经安装了 Linux 内核头文件包并且包含了 **`vmlinux.h`** 文件。如果未找到 **`vmlinux.h`** 文件，则需要安装 Linux 内核头文件包或者手动安装相应的头文件。

另外，需要注意的是，不同的 Linux 发行版可能会有不同的内核版本和配置，因此可能会存在某些版本的内核中不包含 **`vmlinux.h`** 头文件的情况。在这种情况下，你需要手动编译和安装相应的内核头文件，或者从其他渠道获取 **`vmlinux.h`** 文件。

## 其他

如果你想检查是否安装了 **`libbfd`** 库，可以使用以下命令：

```bash
ldconfig -p | grep libbfd
```

这个命令将列出系统中所有已安装的共享库，并过滤出包含关键字 **`libbfd`** 的库。如果输出结果中包含 **`libbfd`**，则表示 **`libbfd`** 库已经安装在系统中。

另外，如果你要在程序中使用 **`libbfd`** 库，可以使用以下命令检查是否存在 **`bfd.h`** 头文件：

```bash
find /usr/include -name bfd.h
```

这个命令将在 **`/usr/include`** 目录下查找 **`bfd.h`** 文件，如果存在，则表示 **`libbfd`** 库已经安装在系统中并且可用于编译程序。如果未找到 **`bfd.h`** 文件，则需要安装 **`libbfd`** 库或者手动安装相应的头文件。

## 参考资料

- [libbpf](https://github.com/libbpf/libbpf)
