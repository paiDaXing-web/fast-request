import{_ as e}from"./saveRequest.ac4861ee.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,e as s}from"./app.e6482b3c.js";const i={},n=s(`<h1 id="save-request" tabindex="-1"><a class="header-anchor" href="#save-request" aria-hidden="true">#</a> Save request</h1><div class="custom-container tip"><p class="custom-container-title">Special Note</p><ol><li><p>The saved request will be put in <em>Default Group</em> by default, support drag and drop into other groups,Of course, it is best to join the module group, please see <code>API group automatic association</code></p></li><li><p>API Name:If the api uses swagger annotations <code>@ApiOperation(&quot;xxx&quot;)</code>,The api is named xxx,If there is no swagger annotation,Use javadoc as the name of the api,Otherwise it will be named New Request</p></li></ol><div class="language-text" data-ext="text"><pre class="language-text"><code>if (@ApiOperation(&quot;xxx&quot;))
    apiName = xxx
else if(java doc)
    apiName = java doc
else
    apiName = New Request
</code></pre></div></div><p><img src="`+e+'" alt="example_download" loading="lazy"></p>',3),r=[n];function c(l,p){return t(),o("div",null,r)}const x=a(i,[["render",c],["__file","saveRequest.html.vue"]]);export{x as default};
