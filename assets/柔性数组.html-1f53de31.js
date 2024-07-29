const e=JSON.parse('{"key":"v-2ee8df5c","path":"/note/C_Cpp/%E6%9F%94%E6%80%A7%E6%95%B0%E7%BB%84.html","title":"柔性数组","lang":"zh-CN","frontmatter":{"title":"柔性数组","category":["笔记"],"tag":["C/C++"],"description":"参考链接 C语言中的柔性数组 C语言结构体中char[0]和char[1]的用法 实现机制 在结构体最后加 char[0] 或 char[1] 的用法是GNU C的扩展，在ISO/IEC 9899-1999里面，这么写是非法的。 这种用法在C99中叫做 柔性数组。柔性数组成员前面必须至少有一个其它类型成员。包含柔性数组成员的结构要用malloc进行动态内存分配，并且分配的内存应该大于结构的大小，以适应柔性数组的预期大小。","head":[["meta",{"property":"og:url","content":"https://loogg.github.io/note/C_Cpp/%E6%9F%94%E6%80%A7%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"马龙伟的博客"}],["meta",{"property":"og:title","content":"柔性数组"}],["meta",{"property":"og:description","content":"参考链接 C语言中的柔性数组 C语言结构体中char[0]和char[1]的用法 实现机制 在结构体最后加 char[0] 或 char[1] 的用法是GNU C的扩展，在ISO/IEC 9899-1999里面，这么写是非法的。 这种用法在C99中叫做 柔性数组。柔性数组成员前面必须至少有一个其它类型成员。包含柔性数组成员的结构要用malloc进行动态内存分配，并且分配的内存应该大于结构的大小，以适应柔性数组的预期大小。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-09T07:56:34.000Z"}],["meta",{"property":"article:author","content":"马龙伟"}],["meta",{"property":"article:tag","content":"C/C++"}],["meta",{"property":"article:modified_time","content":"2024-02-09T07:56:34.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"柔性数组\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-09T07:56:34.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"马龙伟\\",\\"url\\":\\"https://loogg.github.io\\"}]}"]]},"headers":[{"level":2,"title":"参考链接","slug":"参考链接","link":"#参考链接","children":[]},{"level":2,"title":"实现机制","slug":"实现机制","link":"#实现机制","children":[]},{"level":2,"title":"代码实现","slug":"代码实现","link":"#代码实现","children":[]},{"level":2,"title":"C99 使用不完整类型实现柔性数组","slug":"c99-使用不完整类型实现柔性数组","link":"#c99-使用不完整类型实现柔性数组","children":[]}],"git":{"createdTime":1707465394000,"updatedTime":1707465394000,"contributors":[{"name":"马龙伟","email":"2544047213@qq.com","commits":1}]},"readingTime":{"minutes":3.27,"words":982},"filePathRelative":"note/C_Cpp/柔性数组.md","localizedDate":"2024年2月9日","excerpt":"<h2> 参考链接</h2>\\n<p><a href=\\"https://blog.csdn.net/imxiangzi/article/details/90758437\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">C语言中的柔性数组 C语言结构体中char[0]和char[1]的用法</a></p>\\n<h2> 实现机制</h2>\\n<p>在结构体最后加 <code>char[0]</code> 或 <code>char[1]</code> 的用法是GNU C的扩展，在ISO/IEC 9899-1999里面，这么写是非法的。</p>\\n<p>这种用法在C99中叫做 柔性数组。柔性数组成员前面必须至少有一个其它类型成员。包含柔性数组成员的结构要用malloc进行动态内存分配，并且分配的内存应该大于结构的大小，以适应柔性数组的预期大小。</p>","autoDesc":true}');export{e as data};
