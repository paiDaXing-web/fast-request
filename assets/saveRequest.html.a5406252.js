import{_ as e}from"./saveRequest.ac4861ee.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,e as i}from"./app.e6482b3c.js";const s={},c=i(`<h1 id="保存请求" tabindex="-1"><a class="header-anchor" href="#保存请求" aria-hidden="true">#</a> 保存请求</h1><div class="custom-container tip"><p class="custom-container-title">特别说明</p><ol><li><p>保存的请求默认会放入<em>Default Group</em>中，支持拉拽放入别的组，当然最好是加入 module 分组，请查看 api 分组自动关联</p></li><li><p>API 取名:如果 api 使用了 swagger 注解 <code>@ApiOperation(&quot;xxx&quot;)</code>，则 api 取名 xxx，如果没加 swagger 注解，则使用 javadoc 作为 api 的名称，否则将取名 New Request</p></li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>if (@ApiOperation(&quot;xxx&quot;))
    apiName = xxx
else if(java doc)
    apiName = java doc
else
    apiName = New Request
</code></pre></div></div><p><img src="`+e+'" alt="example_download" loading="lazy"></p>',3),l=[c];function n(r,p){return t(),o("div",null,l)}const x=a(s,[["render",n],["__file","saveRequest.html.vue"]]);export{x as default};
