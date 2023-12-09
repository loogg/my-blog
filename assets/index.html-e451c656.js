import{_ as i,r as n,o as r,c as l,a as e,b as a,d,e as o}from"./app-24278c89.js";const h={},s=o('<h1 id="agile-jsmn" tabindex="-1"><a class="header-anchor" href="#agile-jsmn" aria-hidden="true">#</a> Agile Jsmn</h1><h2 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h2><ul><li><code>jsmn</code> 是一个超轻巧，携带方便，单文件，适用于单片机中存储空间有限的环境，简单的可以作为 ANSI-C 标准的 JSON 解析器。</li><li>Agile Jsmn 在 jsmn 的基础上参照 cJSON 增加了一些 API 以实现简单的对象获取操作。</li></ul><h3 id="_1-1、目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1、目录结构" aria-hidden="true">#</a> 1.1、目录结构</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>doc</td><td>文档目录</td></tr><tr><td>examples</td><td>例程目录</td></tr><tr><td>jsmn-1.0.0</td><td>jsmn-1.0.0 源码目录</td></tr><tr><td>util</td><td>Agile Jsmn 源码目录</td></tr></tbody></table><h3 id="_1-2、许可证" tabindex="-1"><a class="header-anchor" href="#_1-2、许可证" aria-hidden="true">#</a> 1.2、许可证</h3><p>Agile Jsmn 遵循 MIT 许可，详见 <code>LICENSE</code> 文件。</p><h3 id="_1-3、依赖" tabindex="-1"><a class="header-anchor" href="#_1-3、依赖" aria-hidden="true">#</a> 1.3、依赖</h3><p>无依赖，使用标准 C 库开发，可直接在电脑上编译。</p><h2 id="_2、使用-agile-jsmn" tabindex="-1"><a class="header-anchor" href="#_2、使用-agile-jsmn" aria-hidden="true">#</a> 2、使用 Agile Jsmn</h2><ul><li>帮助文档请查看 <a href="./doc/doxygen/Agile_Jsmn.chm">doc/doxygen/Agile_Jsmn.chm</a></li></ul><p>使用：</p><ul><li><p>jsmn_init 初始化 jsmn 解析器</p></li><li><p>使用 jsmn_parse 将 json 数据解析到 jsmntok_t 数组中</p></li><li><p>JSMN_ItemInit 初始化根节点</p></li><li><p>调用相应 API 获取自己想要的 json 对象</p></li><li><p>值返回的是字符串</p><p>如果值是整数或浮点数，需要自己使用 atoi 或 atof 转换</p><p>如果需要判断值是不是 null，需要对字符串进行 strstr / strcmp 判断</p></li></ul><h3 id="_2-1、示例" tabindex="-1"><a class="header-anchor" href="#_2-1、示例" aria-hidden="true">#</a> 2.1、示例</h3><ul><li><p>使用示例在 <a href="./examples">examples</a> 下。</p></li><li><p>使用 <code>gcc</code> 可直接 <code>make</code> 编译，在电脑上运行。</p></li></ul><h3 id="_2-2、doxygen-文档生成" tabindex="-1"><a class="header-anchor" href="#_2-2、doxygen-文档生成" aria-hidden="true">#</a> 2.2、Doxygen 文档生成</h3><ul><li>使用 <code>Doxywizard</code> 打开 <a href="./doc/doxygen/Doxyfile">Doxyfile</a> 运行，生成的文件在 <a href="./doc/doxygen/output">doxygen/output</a> 下。</li><li>需要更改 <code>Graphviz</code> 路径。</li><li><code>HTML</code> 生成未使用 <code>chm</code> 格式的，如果使能需要更改 <code>hhc.exe</code> 路径。</li></ul><h2 id="_3、联系方式-感谢" tabindex="-1"><a class="header-anchor" href="#_3、联系方式-感谢" aria-hidden="true">#</a> 3、联系方式 &amp; 感谢</h2>',18),c=e("li",null,"维护：马龙伟",-1),_={href:"https://github.com/loogg/agile_jsmn",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[a("邮箱："),e("a",{href:"mailto:2544047213@qq.com"},"2544047213@qq.com")],-1),p={href:"https://github.com/zserge/jsmn",target:"_blank",rel:"noopener noreferrer"};function u(g,x){const t=n("ExternalLinkIcon");return r(),l("div",null,[s,e("ul",null,[c,e("li",null,[a("主页："),e("a",_,[a("https://github.com/loogg/agile_jsmn"),d(t)])]),m,e("li",null,[a("jsmn 原作者主页："),e("a",p,[a("https://github.com/zserge/jsmn"),d(t)])])])])}const b=i(h,[["render",u],["__file","index.html.vue"]]);export{b as default};
