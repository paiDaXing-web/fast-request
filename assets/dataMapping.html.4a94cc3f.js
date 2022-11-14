import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,e as s}from"./app.e6482b3c.js";const t="/fast-request/img/customDataMapping_en.png",p="/fast-request/img/defaultDataMapping_en.png",o="/fast-request/img/ignoreDataMapping_en.png",i={},c=s(`<h2 id="custom-type-mapping" tabindex="-1"><a class="header-anchor" href="#custom-type-mapping" aria-hidden="true">#</a> Custom type mapping</h2><p>Scenes:there are 10 attributes in<code>com.baomidou.mybatisplus.extension.plugins.pagination.Page</code>,but we just need size and current property</p><p>A total of 2 values need to be set for custom type mapping</p><p><strong>Java Type</strong> is the corresponding object type,it must contain package name and class name</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>baomidou<span class="token punctuation">.</span>mybatisplus<span class="token punctuation">.</span>extension<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>pagination<span class="token punctuation">.</span></span>Page</span>
</code></pre></div><p><strong>Default value</strong> must be in json format</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token property">&quot;current&quot;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span>
</code></pre></div><p><img src="`+t+'" alt="" loading="lazy"></p><h2 id="default-type-mapping" tabindex="-1"><a class="header-anchor" href="#default-type-mapping" aria-hidden="true">#</a> Default type mapping</h2><p>This configuration determines that the java basic type is parsed into the corresponding value，support modification</p><p><img src="'+p+'" alt="" loading="lazy"></p><h2 id="ignore-data-mapping" tabindex="-1"><a class="header-anchor" href="#ignore-data-mapping" aria-hidden="true">#</a> Ignore data mapping</h2><p>This configuration determines whether the class will be parsed, it need full class name path(packageName+className)</p><p><img src="'+o+'" alt="" loading="lazy"></p>',14),r=[c];function u(l,d){return n(),e("div",null,r)}const h=a(i,[["render",u],["__file","dataMapping.html.vue"]]);export{h as default};
