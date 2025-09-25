# 🍎 Mac 入门指南

!!! success "新 Mac 入手记录"
    **🎉 2025.9.24 - MacBook Air 13英寸诞生日！**
    
    从 Windows 转战 Mac 的学习笔记，记录那些与 Windows 操作逻辑不同的地方，以及一些让人眼前一亮的 Mac 独特功能。

---

## 📦 Homebrew - Mac 的灵魂包管理器

!!! tip "为什么选择 Homebrew"
    Homebrew 是 Mac 上最受欢迎的包管理器，让软件的安装、更新、卸载变得极其简单。

### 🚀 基础操作

```bash
# 安装 Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 基础命令
brew install <软件名>     # 安装软件
brew uninstall <软件名>   # 卸载软件
brew update              # 更新 Homebrew
brew upgrade            # 更新所有软件
brew list               # 列出已安装软件
brew search <关键词>     # 搜索软件
```

!!! warning "Git 版本管理说明"
    通过 `brew install git` 安装的 Git 会与 macOS 系统自带的 Git 共存：
    
    - **Homebrew Git**: `/opt/homebrew/bin/git` (版本更新，推荐使用)
    - **系统 Git**: `/usr/bin/git` (Apple 维护版本)
    
    由于 Homebrew 路径优先级更高，默认会使用 Homebrew 版本，无冲突！
    
    ```bash
    # 检查当前使用的 Git
    which git                    # 显示: /opt/homebrew/bin/git
    git --version               # 显示: git version 2.51.0
    
    # 显式使用系统 Git（如果需要）
    /usr/bin/git --version      # 显示: git version 2.39.5 (Apple Git-154)
    ```

### 🎯 实用软件推荐

=== "开发工具"
    ```bash
    brew install git 
    brew install node
    brew install python
    brew install docker
    brew install --cask visual-studio-code
    brew install --cask iterm2
    ```

=== "日常应用"
    ```bash
    brew install --cask google-chrome
    brew install --cask notion
    brew install --cask discord
    brew install --cask spotify
    brew install --cask cleanmymac
    ```

=== "实用工具"
    ```bash
    brew install --cask alfred          # 强大的启动器
    brew install --cask rectangle       # 窗口管理
    brew install --cask karabiner-elements  # 键盘映射
    brew install --cask bartender       # 菜单栏管理
    ```

### 💡 高级技巧

```bash
# 通过命令行启动应用
open -a "应用名"
open -a "Visual Studio Code" .    # 在 VSCode 中打开当前目录

# Homebrew 服务管理
brew services start <服务名>      # 启动服务
brew services stop <服务名>       # 停止服务
brew services list               # 列出所有服务

# 清理缓存和旧版本
brew cleanup                     # 清理缓存
brew autoremove                  # 移除无用依赖
```

---

## ⌨️ 键盘快捷键的艺术

!!! info "Mac vs Windows 键位对应"
    | Mac | Windows | 功能描述 |
    |-----|---------|----------|
    | `⌘ Command` | `Ctrl` | 主要修饰键 |
    | `⌃ Control` | `右键菜单` | 上下文操作 |
    | `⌥ Option` | `Alt` | 替代操作 |
    | `⇧ Shift` | `Shift` | 大写/选择 |

### 🔥 必备快捷键

=== "系统级"
    | 快捷键 | 功能 | 备注 |
    |-------|------|------|
    | `⌘ + Space` | Spotlight 搜索 | Mac 最强功能之一 |
    | `⌘ + Tab` | 应用程序切换 | 类似 Windows Alt+Tab |
    | `⌘ + `` ` `` | 同应用窗口切换 | 在同一应用的多窗口间切换 |
    | `⌃ + ↑` | Mission Control | 查看所有窗口和桌面 |
    | `⌃ + ←/→` | 切换桌面空间 | 多桌面工作流必备 |
    | `⌘ + H` | 隐藏当前应用 | 快速隐藏不关闭 |
    | `⌘ + M` | 最小化窗口 | 缩小到 Dock |

=== "截图神器"
    | 快捷键 | 功能 | 说明 |
    |-------|------|------|
    | `⌘ + ⇧ + 3` | 全屏截图 | 保存到桌面 |
    | `⌘ + ⇧ + 4` | 区域截图 | 拖拽选择区域 |
    | `⌘ + ⇧ + 4 + Space` | 窗口截图 | 点击选择窗口 |
    | `⌘ + ⇧ + 5` | 截图工具 | 录屏和高级截图选项 |
    
    !!! tip "截图增强"
        按住 `⌃ Control` + 上述快捷键可以将截图复制到剪贴板而不保存文件！

=== "文本编辑"
    | 快捷键 | 功能 | Windows 对比 |
    |-------|------|-------------|
    | `⌃ + A` | 光标移到行首 | `Home` |
    | `⌃ + E` | 光标移到行尾 | `End` |
    | `⌃ + K` | 删除光标后文本 | - |
    | `⌃ + U` | 删除光标前文本 | - |
    | `⌥ + ←/→` | 按词移动光标 | `Ctrl + ←/→` |
    | `⌘ + ←/→` | 移到行首/行尾 | `Home/End` |

---

## 🎨 独特的 Mac 功能

### 🪟 窗口管理进阶

=== "原生功能"
    - **分屏视图**：长按绿色全屏按钮，拖拽到屏幕一侧
    - **画中画**：支持的视频可以悬浮播放
    - **Hot Corners**：鼠标移到屏幕角落触发操作
    
    ```bash
    # 设置热角
    系统偏好设置 → 桌面与屏保 → 屏幕保护程序 → 热角
    ```

=== "增强工具"
    **Rectangle（免费）：**
    - `⌃ + ⌥ + ←/→/↑/↓`：窗口分屏
    - `⌃ + ⌥ + Enter`：最大化
    - `⌃ + ⌥ + C`：居中显示

### 🎯 Spotlight 超强搜索

!!! tip "Spotlight 不只是搜索"
    按 `⌘ + Space` 打开 Spotlight，它能做的远比你想象的多：

=== "基础搜索"
    - 搜索文件和应用
    - 搜索联系人
    - 搜索邮件内容
    - 搜索系统设置

=== "计算器功能"
    ```
    # 直接在 Spotlight 中计算
    50 * 0.85          # 数学计算
    50 USD to CNY      # 货币转换
    100 km to miles    # 单位转换
    ```

=== "快速操作"
    ```
    # 系统操作
    sleep              # 休眠电脑
    restart            # 重启电脑
    empty trash        # 清空废纸篓
    
    # 应用启动
    ter                # 快速启动终端
    saf                # 快速启动 Safari
    ```

### 🔍 Alfred - Spotlight 的超级版

```bash
# 安装 Alfred
brew install --cask alfred
```

**Alfred 高级功能：**
- 🔍 **Universal Actions**：对选中内容执行操作
- 📝 **Snippets**：文本片段快速插入
- 🔄 **Workflows**：自定义工作流
- 📊 **Calculator**：更强大的计算功能

### 🎪 触控板手势

| 手势 | 功能 | 说明 |
|------|------|------|
| **二指轻点** | 右键菜单 | 替代鼠标右键 |
| **二指滚动** | 页面滚动 | 支持惯性滚动 |
| **二指缩放** | 放大缩小 | 类似手机操作 |
| **三指上滑** | Mission Control | 查看所有窗口 |
| **三指左右滑** | 切换全屏应用 | 在全屏应用间切换 |
| **四指内捏** | Launchpad | 显示所有应用 |
| **四指外放** | 显示桌面 | 隐藏所有窗口 |

---

## 🛠️ 系统优化与个性化

### 🎛️ 系统设置优化

=== "Dock 优化"
    ```bash
    # 自动隐藏 Dock
    defaults write com.apple.dock autohide -bool true
    
    # 移除 Dock 延迟
    defaults write com.apple.dock autohide-delay -float 0
    
    # 加快 Dock 显示速度
    defaults write com.apple.dock autohide-time-modifier -float 0.5
    
    # 重启 Dock 生效
    killall Dock
    ```

=== "Finder 增强"
    ```bash
    # 显示隐藏文件
    defaults write com.apple.finder AppleShowAllFiles -bool true
    
    # 显示文件扩展名
    defaults write NSGlobalDomain AppleShowAllExtensions -bool true
    
    # 显示路径栏
    defaults write com.apple.finder ShowPathbar -bool true
    
    # 重启 Finder
    killall Finder
    ```

### 🎨 个性化设置

=== "菜单栏定制"
    **Bartender**：管理菜单栏图标
    ```bash
    brew install --cask bartender
    ```
    
    **iStat Menus**：系统监控
    ```bash
    brew install --cask istat-menus
    ```

=== "桌面美化"
    ```bash
    # 桌面壁纸管理
    brew install --cask wallpaper-wizard
    
    # 动态壁纸
    brew install --cask 24-hour-wallpaper
    ```

---

## 🔧 开发者工具

### 💻 终端增强

=== "iTerm2 配置"
    ```bash
    # 安装 iTerm2
    brew install --cask iterm2
    
    # 安装 Oh My Zsh
    sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
    
    # 安装 Powerlevel10k 主题
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
    ```

=== "常用开发工具"
    ```bash
    # 版本管理
    brew install git gh
    
    # 编程语言
    brew install node python go rust
    
    # 数据库
    brew install --cask dbeaver-community
    brew install postgresql redis
    
    # API 测试
    brew install --cask postman
    brew install --cask insomnia
    ```

### 🎯 实用命令

```bash
# 快速预览文件
qlmanage -p filename

# 查看网络使用情况
nettop

# 系统信息
system_profiler SPHardwareDataType

# 清理 DNS 缓存
sudo dscacheutil -flushcache

# 查看端口占用
lsof -i :8080
```

---

## 🚀 高级技巧

### 🤖 自动化操作

=== "Automator"
    **创建自定义服务：**
    1. 打开 Automator
    2. 选择"服务"
    3. 拖拽操作到工作流
    4. 保存后可在右键菜单中使用

=== "Shell 脚本"
    ```bash
    # 创建 alias 提高效率
    echo 'alias ll="ls -la"' >> ~/.zshrc
    echo 'alias c="clear"' >> ~/.zshrc
    echo 'alias ..="cd .."' >> ~/.zshrc
    ```

### 🎵 多媒体技巧

```bash
# 使用 say 命令让 Mac 说话
say "Hello, welcome to Mac"

# 转换视频格式
ffmpeg -i input.mov -vcodec h264 output.mp4

# 批量重命名文件
for i in *.jpg; do mv "$i" "prefix_$i"; done
```

---

## 💡 实用小贴士

!!! success "Mac 使用心得"
    1. **善用 Spotlight**：几乎所有操作都可以通过搜索完成
    2. **掌握手势**：触控板手势大大提高操作效率
    3. **多用快捷键**：减少鼠标依赖，提高工作流畅度
    4. **管理应用**：通过 Homebrew 统一管理软件
    5. **定期清理**：使用 CleanMyMac 等工具保持系统整洁

!!! warning "常见陷阱"
    - 💾 **存储空间**：Mac 系统占用较大，注意管理存储
    - 🔋 **电池续航**：合理使用低电耗模式
    - 🌡️ **温度控制**：避免长时间高负载运行
    - 💰 **软件成本**：Mac 软件普遍价格较高

!!! tip "从 Windows 过渡"
    - 🔄 **思维转换**：拥抱 Mac 的设计哲学
    - ⌨️ **键盘适应**：多练习 Mac 特有的快捷键
    - 🎯 **工作流重建**：重新设计适合 Mac 的工作流程
    - 📚 **持续学习**：Mac 功能丰富，需要时间慢慢发掘

---

恭喜你踏上了 Mac 之旅！🎉 记住，熟练使用任何工具都需要时间，慢慢探索，你会发现 Mac 的独特魅力。

