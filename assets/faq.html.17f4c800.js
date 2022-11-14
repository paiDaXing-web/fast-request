import{_ as l}from"./none.ebb1fbdd.js";import{_ as c}from"./step5.b9c8b4ce.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c as h,a as e,b as a,w as s,d as n,e as u,r as i}from"./app.e6482b3c.js";const g={},f={class:"table-of-contents"},k=u(`<h2 id="q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid" tabindex="-1"><a class="header-anchor" href="#q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid" aria-hidden="true">#</a> Q: After entering the parameters, the API call found that the parameters were invalid</h2><p><strong>A:</strong> Plugin version less than <mark>2022.2.3</mark>, when editing a value in the table , you need to <mark>click in the blank space</mark> after editing the value, and then send the request, the bug is fixed in the 2022.2.3+ version</p><h2 id="q-why-the-plugin-doesn-t-respond" tabindex="-1"><a class="header-anchor" href="#q-why-the-plugin-doesn-t-respond" aria-hidden="true">#</a> Q: Why the plugin doesn&#39;t respond</h2><p><strong>A:</strong> Please configure the relevant configuration according to the steps introduced in the first chapter first, and then click the icon.</p><h2 id="q-idea-freezes-after-clicking-the-fastrequest-icon" tabindex="-1"><a class="header-anchor" href="#q-idea-freezes-after-clicking-the-fastrequest-icon" aria-hidden="true">#</a> Q: Idea freezes after clicking the fastRequest icon</h2><p><strong>A:</strong> :The entity class you designed is nested and recursive, the plugin does not support.</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">B</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">A</span> a<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>If you don&#39;t need the B property in the above case, then you can manually add a static keywords to property B when generating</p><div class="language-java" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">A</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">B</span> b<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> xx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="q-regeneration-function" tabindex="-1"><a class="header-anchor" href="#q-regeneration-function" aria-hidden="true">#</a> Q: Regeneration function</h2><p><strong>A:</strong> Designed to reset generated parameters,it will clear the parameters of the previous API,but does not include the save action.<br> If your API has been saved and you want to change the parameters again, then you can click the regenerate button and remember to save again, otherwise the original parameters will be retained.<br> (It is equivalent to operating a file, emptying the content of the file but not saving it, then you will still see the original file before modification)</p>`,11),_={id:"q-nothing-to-show",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#q-nothing-to-show","aria-hidden":"true"},"#",-1),y=e("p",null,[e("img",{src:l,alt:"",loading:"lazy"})],-1),v=e("p",null,[n("step1:Click "),e("strong",null,"help->Register...->Add New License")],-1),w=e("ul",null,[e("li",null,"Way 1: Log in to your jetbrains account(Make sure you have buy the license)"),e("li",null,"Way 2: Enter the activation code in Activation code"),e("li",null,"Way 3: Click start trial")],-1),b=e("p",null,[e("img",{src:c,alt:"",loading:"lazy"})],-1),x=e("p",null,"step2: restart idea",-1),q=e("h2",{id:"q-fix-light-files-should-have-psi-only-in-one-project",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#q-fix-light-files-should-have-psi-only-in-one-project","aria-hidden":"true"},"#"),n(" Q: Fix Light files should have PSI only in one project")],-1),A=e("strong",null,"A:",-1),I={href:"https://github.com/dromara/fast-request/issues/61",target:"_blank",rel:"noopener noreferrer"};function j(Q,B){const t=i("router-link"),o=i("Badge"),r=i("ExternalLinkIcon");return d(),h("div",null,[e("nav",f,[e("ul",null,[e("li",null,[a(t,{to:"#q-after-entering-the-parameters-the-api-call-found-that-the-parameters-were-invalid"},{default:s(()=>[n("Q: After entering the parameters, the API call found that the parameters were invalid")]),_:1})]),e("li",null,[a(t,{to:"#q-why-the-plugin-doesn-t-respond"},{default:s(()=>[n("Q: Why the plugin doesn't respond")]),_:1})]),e("li",null,[a(t,{to:"#q-idea-freezes-after-clicking-the-fastrequest-icon"},{default:s(()=>[n("Q: Idea freezes after clicking the fastRequest icon")]),_:1})]),e("li",null,[a(t,{to:"#q-regeneration-function"},{default:s(()=>[n("Q: Regeneration function")]),_:1})]),e("li",null,[a(t,{to:"#q-nothing-to-show"},{default:s(()=>[n("Q: Nothing to show "),a(o,{text:"2022.1.4+",type:"danger"})]),_:1})]),e("li",null,[a(t,{to:"#q-fix-light-files-should-have-psi-only-in-one-project"},{default:s(()=>[n("Q: Fix Light files should have PSI only in one project")]),_:1})])])]),k,e("h2",_,[m,n(" Q: Nothing to show "),a(o,{text:"2022.1.4+",type:"danger"})]),y,a(o,{text:"Follow these steps to register for licenses",type:"danger",vertical:"middle"}),v,w,b,x,q,e("p",null,[A,n(" This error occur below 2022.1.4.0. Go to github to download the repaired version "),e("a",I,[n("https://github.com/dromara/fast-request/issues/61"),a(r)])])])}const R=p(g,[["render",j],["__file","faq.html.vue"]]);export{R as default};
