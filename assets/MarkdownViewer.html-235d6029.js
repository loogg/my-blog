import{_ as o,r as t,o as r,c as d,a as e,b as a,d as i,e as s}from"./app-95bdce04.js";const c="/MarkdownViewer/FileAccess.png",l="/MarkdownViewer/Chrome.png",p="/MarkdownViewer/ContentType.png",h={},u=e("h2",{id:"参考链接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考链接","aria-hidden":"true"},"#"),a(" 参考链接")],-1),m={href:"https://www.cnblogs.com/jianzhan/p/16575984.html",target:"_blank",rel:"noopener noreferrer"},_=s('<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h2><p>根据插件文档描述，需要打开对文件的访问权限。</p><p>但配置后将文件拖入浏览器依旧自动下载。</p><ul><li><p>插件</p><figure><img src="'+c+'" alt="插件配置" tabindex="0" loading="lazy"><figcaption>插件配置</figcaption></figure></li><li><p>浏览器</p><figure><img src="'+l+'" alt="浏览器配置" tabindex="0" loading="lazy"><figcaption>浏览器配置</figcaption></figure></li></ul><h2 id="原因" tabindex="-1"><a class="header-anchor" href="#原因" aria-hidden="true">#</a> 原因</h2><p>插件中对 <code>Content Type</code> 的检测为：<code>text/markdown, text/x-markdown, text/plain</code>，但文件拖入浏览器时的 <code>Content Type</code> 为 <code>application/markdown</code>。</p><figure><img src="'+p+`" alt="ContentType" tabindex="0" loading="lazy"><figcaption>ContentType</figcaption></figure><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2><p>注册表 <code>HKEY_CLASSES_ROOT\\.md</code> 名为 <code>Content Type</code> 的 <code>字符串值</code> 设置为 <code>text/markdown</code>。</p><p>如果你的 <code>md</code> 打开是乱码，可以尝试将 <code>Content Type</code> 的 <code>字符串值</code> 设置为 <code>text/markdown;charset=utf-8</code>。</p><h3 id="powershell命令修改" tabindex="-1"><a class="header-anchor" href="#powershell命令修改" aria-hidden="true">#</a> PowerShell命令修改</h3><ul><li>获取当前注册表</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">Get-ItemProperty -Path &quot;Registry::HKEY_CLASSES_ROOT</span><span style="color:#56B6C2;">\\.</span><span style="color:#ABB2BF;">md&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>设置注册表</li></ul><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">Set-ItemProperty -Path &quot;Registry::HKEY_CLASSES_ROOT</span><span style="color:#56B6C2;">\\.</span><span style="color:#ABB2BF;">md&quot; -Name &quot;Content Type&quot; -Value &quot;text/markdown&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,15);function g(f,k){const n=t("ExternalLinkIcon");return r(),d("div",null,[u,e("p",null,[e("a",m,[a("记一次浏览器打开markdown文件自动下载不会预览问题"),i(n)])]),_])}const x=o(h,[["render",g],["__file","MarkdownViewer.html.vue"]]);export{x as default};
