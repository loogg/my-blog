import{_ as o,r as t,o as i,c as p,a as s,b as e,e as n,f as a}from"./app-40e5bb2e.js";const c="/assets/whole-a8efe1ce.gif",r="/assets/usb_file-ec09a6ea.gif",d={},B=a('<h1 id="agile-console" tabindex="-1"><a class="header-anchor" href="#agile-console" aria-hidden="true">#</a> Agile Console</h1><h2 id="_1、介绍" tabindex="-1"><a class="header-anchor" href="#_1、介绍" aria-hidden="true">#</a> 1、介绍</h2><p>Agile Console 是基于 RT-Thread 的一个简单易用的调试设备中间件。</p><ul><li><p>接管 <code>console</code> 设备，支持 <code>device</code> 接口和 <code>posix</code> 接口。</p></li><li><p>后端实现极其方便，任何接口都可快速接入。</p></li></ul><p><strong>注意</strong> : 由于 Agile Console 会直接接管 <code>console</code> 设备，建议将 <code>RT-Thread</code> <code>Kernel</code> 中的 <code>RT_CONSOLE_DEVICE_NAME</code> 配置为一个不存在的设备。</p><p>Agile Console 目前支持的后端接口如下：</p>',6),y=s("li",null,[s("p",null,"串口后端")],-1),u=s("p",null,"USB CDC 后端",-1),g={href:"https://github.com/RT-Thread-packages/tinyusb",target:"_blank",rel:"noopener noreferrer"},h=s("p",null,"Telnet 后端",-1),_={href:"https://github.com/loogg/agile_telnet",target:"_blank",rel:"noopener noreferrer"},b=a('<h3 id="_1-1、目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1、目录结构" aria-hidden="true">#</a> 1.1、目录结构</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>doc</td><td>文档</td></tr><tr><td>examples</td><td>示例</td></tr><tr><td>figures</td><td>素材</td></tr><tr><td>inc</td><td>头文件</td></tr><tr><td>src</td><td>源代码</td></tr></tbody></table><h3 id="_1-2、许可证" tabindex="-1"><a class="header-anchor" href="#_1-2、许可证" aria-hidden="true">#</a> 1.2、许可证</h3><p>Agile Console package 遵循 LGPLv2.1 许可，详见 <code>LICENSE</code> 文件。</p><h3 id="_1-3、依赖" tabindex="-1"><a class="header-anchor" href="#_1-3、依赖" aria-hidden="true">#</a> 1.3、依赖</h3><ul><li><p>RT-Thread 4.0.3</p></li><li><p>RT-Thread 4.0.5 ~ master</p></li></ul><h2 id="_2、使用-agile-console" tabindex="-1"><a class="header-anchor" href="#_2、使用-agile-console" aria-hidden="true">#</a> 2、使用 Agile Console</h2>',7),A=s("li",null,[s("p",null,[e("帮助文档请查看 "),s("a",{href:"./doc/doxygen/Agile_Console.chm"},"doc/doxygen/Agile_Console.chm")])],-1),C=a(`<p>使用 Agile Console package 需要在 RT-Thread 的包管理器中选择它，具体路径如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">RT</span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;">Thread online packages</span></span>
<span class="line"><span style="color:#ABB2BF;">    peripheral libraries and drivers  </span><span style="color:#C678DD;">---&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">         [</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">] agile_console: Simple debugging device Middleware.  </span><span style="color:#C678DD;">---&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">            (</span><span style="color:#D19A66;">1024</span><span style="color:#ABB2BF;">) Set agile_console rx buffer size</span></span>
<span class="line"><span style="color:#ABB2BF;">            (tty) Set agile_console device name</span></span>
<span class="line"><span style="color:#ABB2BF;">            (</span><span style="color:#D19A66;">9</span><span style="color:#ABB2BF;">)  Set agile_console thread priority</span></span>
<span class="line"><span style="color:#ABB2BF;">            (</span><span style="color:#D19A66;">2048</span><span style="color:#ABB2BF;">) Set agile_console thread stack size</span></span>
<span class="line"><span style="color:#ABB2BF;">            [</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">]   Enable agile_console serial example</span></span>
<span class="line"><span style="color:#ABB2BF;">            (uart1) Set serial device name</span></span>
<span class="line"><span style="color:#ABB2BF;">            [</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">]   Enable telnet plugin</span></span>
<span class="line"><span style="color:#ABB2BF;">            [</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">]   Enable tinyusb </span><span style="color:#61AFEF;">plugin</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">RT</span><span style="color:#C678DD;">-</span><span style="color:#E06C75;">Thread 版本 </span><span style="color:#C678DD;">&gt;=</span><span style="color:#E06C75;"> </span><span style="color:#FFFFFF;">4.1.0</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">                  </span><span style="color:#61AFEF;">Version</span><span style="color:#E06C75;"> </span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">latest</span><span style="color:#ABB2BF;">)  </span><span style="color:#C678DD;">---&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),F=a("<li><p><strong>Set agile_console rx buffer size</strong> ：Agile Console 接受环形缓冲区大小</p></li><li><p><strong>Set agile_console device name</strong> ：Agile Console 设备名</p></li><li><p><strong>Set agile_console thread priority</strong> ：Agile Console 线程优先级</p></li><li><p><strong>Set agile_console thread stack size</strong> ：Agile Console 线程堆栈大小</p></li><li><p><strong>Enable agile_console serial example</strong> ：使能串口例程</p></li><li><p><strong>Set serial device name</strong> ：串口设备名</p></li>",6),f=s("p",null,[s("strong",null,"Enable telnet plugin"),e(" ：使能 telnet 后端插件")],-1),v={href:"https://github.com/loogg/agile_telnet",target:"_blank",rel:"noopener noreferrer"},D=s("p",null,[s("strong",null,"Enable tinyusb plugin"),e(" ：使能 tinyusb 后端插件")],-1),m={href:"https://github.com/RT-Thread-packages/tinyusb",target:"_blank",rel:"noopener noreferrer"},x=a('<li><p>Doxygen 文档生成</p><ul><li><p>使用 <code>Doxywizard</code> 打开 <a href="./doc/doxygen/Doxyfile">Doxyfile</a> 运行，生成的文件在 <a href="./doc/doxygen/output">doxygen/output</a> 下。</p></li><li><p>需要更改 <code>Graphviz</code> 路径。</p></li><li><p><code>HTML</code> 生成未使用 <code>chm</code> 格式的，如果使能需要更改 <code>hhc.exe</code> 路径。</p></li></ul></li><li><p>多后端演示</p><p>演示使用开发板：正点原子探索者</p><ul><li><p>串口、Telnet 和 USB CDC 同时交互演示：</p><figure><img src="'+c+'" alt="whole" tabindex="0" loading="lazy"><figcaption>whole</figcaption></figure></li><li><p>USB CDC Ymodem 传输文件</p><p>CDC Fifo 接收大小修改为 1024</p><p>CDC Fifo 发送大小修改为 2048</p><figure><img src="'+r+'" alt="usb_file" tabindex="0" loading="lazy"><figcaption>usb_file</figcaption></figure></li></ul></li>',2),E=s("h2",{id:"_3、新的后端接入-agile-console",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3、新的后端接入-agile-console","aria-hidden":"true"},"#"),e(" 3、新的后端接入 Agile Console")],-1),k=s("a",{href:"./examples"},"examples",-1),T={href:"https://github.com/loogg/agile_telnet",target:"_blank",rel:"noopener noreferrer"},S=a(`<li><p>USB CDC 后端例子中展示了如何屏蔽输入输出</p></li><li><p>Agile Console 提供了后端接口结构体定义：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> * </span><span style="color:#C678DD;font-style:italic;">@brief</span><span style="color:#7F848E;font-style:italic;">   Agile Console 后端接口结构体</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#C678DD;">struct</span><span style="color:#ABB2BF;"> agile_console_backend {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">output)(</span><span style="color:#56B6C2;">rt_device_t</span><span style="color:#ABB2BF;"> dev, </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">uint8_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">buf, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> len);</span><span style="color:#7F848E;font-style:italic;"> /**&lt; 向后端输出数据接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">read)(</span><span style="color:#56B6C2;">rt_device_t</span><span style="color:#ABB2BF;"> dev, </span><span style="color:#C678DD;">uint8_t</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">buf, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> len);</span><span style="color:#7F848E;font-style:italic;">          /**&lt; 从后端读取数据接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> (</span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">control)(</span><span style="color:#56B6C2;">rt_device_t</span><span style="color:#ABB2BF;"> dev, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> cmd, </span><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">arg);</span><span style="color:#7F848E;font-style:italic;">          /**&lt; 对后端进行设置接口 */</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#56B6C2;">rt_slist_t</span><span style="color:#ABB2BF;"> slist;</span><span style="color:#7F848E;font-style:italic;">                                             /**&lt; 单向链表节点 */</span></span>
<span class="line"><span style="color:#ABB2BF;">};</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>实现一个新的后端并接入 Agile Console 的步骤如下：</p><ol><li><p>定义后端变量</p></li><li><p>实现后端的 <code>output</code>、<code>read</code> 和 <code>control</code> 接口</p><ul><li><p><code>output</code> 接口</p><p>实现时 <strong>不能调用任何可能导致线程挂起的 API</strong> 。建议将数据放入 <code>ringbuffer</code> 并创建线程异步发送。</p></li><li><p><code>read</code> 接口</p><p>除了保护资源而使用的互斥锁外，其他引起阻塞的 API 不建议调用。已有的数据存放到数据区后立马返回。</p></li><li><p><code>control</code> 接口</p><p>该接口用作控制后端。除 <code>TCFLSH</code> 命令，其他命令均会调用该接口。可不实现。</p></li></ul></li><li><p>调用 <code>agile_console_backend_register</code> 注册后端</p></li><li><p>后端收到数据时调用 <code>agile_console_wakeup</code> 唤醒接收线程</p></li></ol></li>`,3),R=s("h2",{id:"_4、联系方式-感谢",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4、联系方式-感谢","aria-hidden":"true"},"#"),e(" 4、联系方式 & 感谢")],-1),z=s("li",null,"维护：马龙伟",-1),L={href:"https://github.com/loogg/agile_console",target:"_blank",rel:"noopener noreferrer"},N=s("li",null,[e("邮箱："),s("a",{href:"mailto:2544047213@qq.com"},"2544047213@qq.com")],-1);function w(I,V){const l=t("ExternalLinkIcon");return i(),p("div",null,[B,s("ul",null,[y,s("li",null,[u,s("p",null,[e("使用到 "),s("a",g,[e("tinyusb"),n(l)]),e("。")])]),s("li",null,[h,s("p",null,[e("使用到 "),s("a",_,[e("agile_telnet"),n(l)]),e("。")])])]),b,s("ul",null,[A,s("li",null,[C,s("ul",null,[F,s("li",null,[f,s("p",null,[e("使能后会选中 "),s("a",v,[e("agile_telnet"),n(l)]),e(" 软件包。")])]),s("li",null,[D,s("p",null,[e("RT-Thread 版本 >= 4.1.0 才有该选项。使能后会选中 "),s("a",m,[e("tinyusb"),n(l)]),e(" 软件包。")])])])]),x]),E,s("ul",null,[s("li",null,[s("p",null,[e("可以参考 "),k,e(" 文件夹中的例子和 "),s("a",T,[e("agile_telnet"),n(l)]),e(" 软件包")])]),S]),R,s("ul",null,[z,s("li",null,[e("主页："),s("a",L,[e("https://github.com/loogg/agile_console"),n(l)])]),N])])}const U=o(d,[["render",w],["__file","index.html.vue"]]);export{U as default};
