const s=JSON.parse('{"key":"v-7cfea2b8","path":"/note/C_Cpp/%E8%BE%BE%E5%A4%AB%E8%AE%BE%E5%A4%87.html","title":"达夫设备","lang":"zh-CN","frontmatter":{"title":"达夫设备","category":["笔记"],"tag":["C/C++"],"description":"参考链接 C语音冷门知识点：达夫机！switch还可以这么玩 代码实现 void send( int * to, int * from, int count) { int n = (count + 7 ) / 8 ; switch (count % 8 ) { case 0 : do { * to ++ = * from ++ ; case 7 : * to ++ = * from ++ ; case 6 : * to ++ = * from ++ ; case 5 : * to ++ = * from ++ ; case 4 : * to ++ = * from ++ ; case 3 : * to ++ = * from ++ ; case 2 : * to ++ = * from ++ ; case 1 : * to ++ = * from ++ ; } while ( -- n &gt; 0 ); } }","head":[["meta",{"property":"og:url","content":"https://loogg.github.io/note/C_Cpp/%E8%BE%BE%E5%A4%AB%E8%AE%BE%E5%A4%87.html"}],["meta",{"property":"og:site_name","content":"马龙伟的博客"}],["meta",{"property":"og:title","content":"达夫设备"}],["meta",{"property":"og:description","content":"参考链接 C语音冷门知识点：达夫机！switch还可以这么玩 代码实现 void send( int * to, int * from, int count) { int n = (count + 7 ) / 8 ; switch (count % 8 ) { case 0 : do { * to ++ = * from ++ ; case 7 : * to ++ = * from ++ ; case 6 : * to ++ = * from ++ ; case 5 : * to ++ = * from ++ ; case 4 : * to ++ = * from ++ ; case 3 : * to ++ = * from ++ ; case 2 : * to ++ = * from ++ ; case 1 : * to ++ = * from ++ ; } while ( -- n &gt; 0 ); } }"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-09T07:56:34.000Z"}],["meta",{"property":"article:author","content":"马龙伟"}],["meta",{"property":"article:tag","content":"C/C++"}],["meta",{"property":"article:modified_time","content":"2024-02-09T07:56:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"达夫设备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-09T07:56:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"马龙伟\\",\\"url\\":\\"https://loogg.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"什么是达夫设备","slug":"什么是达夫设备","link":"#什么是达夫设备","children":[]},{"level":2,"title":"实现机制","slug":"实现机制","link":"#实现机制","children":[]},{"level":2,"title":"执行流程","slug":"执行流程","link":"#执行流程","children":[]}],"git":{"createdTime":1707465394000,"updatedTime":1707465394000,"contributors":[{"name":"马龙伟","email":"2544047213@qq.com","commits":1}]},"readingTime":{"minutes":2.5,"words":751},"filePathRelative":"note/C_Cpp/达夫设备.md","localizedDate":"2024年2月9日","excerpt":"<h2> 参考链接</h2>\\n<p><a href=\\"https://blog.csdn.net/u010632165/article/details/124358340\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">C语音冷门知识点：达夫机！switch还可以这么玩</a></p>\\n<h2> 代码实现</h2>\\n<div class=\\"language-c line-numbers-mode\\" data-ext=\\"c\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"><span style=\\"color: #C678DD\\">void</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">send</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">to</span><span style=\\"color: #ABB2BF\\">,</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">from</span><span style=\\"color: #ABB2BF\\">,</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #E06C75\\"> </span><span style=\\"color: #E06C75; font-style: italic\\">count</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">int</span><span style=\\"color: #ABB2BF\\"> n </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> (count </span><span style=\\"color: #C678DD\\">+</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">7</span><span style=\\"color: #ABB2BF\\"> ) </span><span style=\\"color: #C678DD\\">/</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">8</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">switch</span><span style=\\"color: #ABB2BF\\"> (count </span><span style=\\"color: #C678DD\\">%</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">8</span><span style=\\"color: #ABB2BF\\"> ) {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #C678DD\\">case</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\"> :    </span><span style=\\"color: #C678DD\\">do</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">7</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">6</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">5</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">4</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">3</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">2</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    case </span><span style=\\"color: #D19A66\\">1</span><span style=\\"color: #ABB2BF\\"> :          </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> to </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #C678DD\\">*</span><span style=\\"color: #ABB2BF\\"> from </span><span style=\\"color: #C678DD\\">++</span><span style=\\"color: #ABB2BF\\"> ;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">           } </span><span style=\\"color: #C678DD\\">while</span><span style=\\"color: #ABB2BF\\"> ( </span><span style=\\"color: #C678DD\\">--</span><span style=\\"color: #ABB2BF\\"> n </span><span style=\\"color: #C678DD\\">&gt;</span><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\"> );</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{s as data};
