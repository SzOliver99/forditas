<template><div><h2 id="a-listak-kulonbozo-tipusainak-megertese" tabindex="-1"><a class="header-anchor" href="#a-listak-kulonbozo-tipusainak-megertese"><span>A listák különböző típusainak megértése</span></a></h2>
<p>Ha tételes információkat kell bemutatnia egy weboldalon, használhat egy listát. A HTML
háromféle lista létrehozatalát teszi lehetővé – számozott listákat, felsorolásos listákat és
definíciós listákat – és összetett listákat hozhat létre a listák egymásba ágyazásával. Például
létrehozhat egy felsorolásos allistát egy számozott listán belül, vagy létrehozhat egy
számozott allistát eltérő számozással egy másik számozott listán belül.</p>
<p>Ez a rész ismerteti a listatípusokat, és bemutatja azok különbségeit. A következő négy rész
mutatja be hogyan lehet számozott listát, felsorolásos listát, definíciós listát és beágyazott
listát létrehozni.</p>
<h3 id="szamozott-listak" tabindex="-1"><a class="header-anchor" href="#szamozott-listak"><span>Számozott listák</span></a></h3>
<p>A HTML-ben a számozott listát rendezett listának nevezzük, mert az elemek meghatározott sorrendben jelennek meg, például egy listában számozott lépések egy feladat végrehajtásához. Számozott lista indításához be kell írnia a nyitó <code v-pre>&lt;ol&gt;</code> taget; a lista befejezéséhez pedig a záró <code v-pre>&lt;/ol&gt;</code> taget:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezek a tagek közé minden listaelemet be
kell írni, az elején a nyitó <code v-pre>&lt;li&gt;</code> taggel és a
záró <code v-pre>&lt;/li&gt;</code> taggel, köztük az szöveget.
Például a következő kód a három lépéses
számozott listát készíti el ami az alábbi
ábrán látható.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Unplug your computer from power.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Connect the keyboard to the USB port.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Connect the computer to power again.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/116.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A böngésző automatikusan megjeleníti a
számokat a tételeken, 1-gyel kezdődően,
hacsak nem ad meg más számot a kezdő
attribútumnak az <code v-pre>&lt;ol&gt;</code> taget használva —
például <code v-pre>&lt;ol start=&quot;5&quot;&gt;</code>.Megadhat mást is
számozási típusnak, például a‐b‐c vagy i‐ii‐
iii, a type attribútumot használva az <code v-pre>&lt;ol&gt;</code>
tagbe – például: <code v-pre>&lt;ol type=&quot;a&quot;&gt;</code> kisbetűs a‐b‐c
számozáshoz.</p>
<h3 id="felsorolas-listak" tabindex="-1"><a class="header-anchor" href="#felsorolas-listak"><span>Felsorolás listák</span></a></h3>
<p>A HTML-ben a felsorolásos listákat
rendezetlen listának nevezzük, mivel
a tételeknek nincs számsorrendje.
A felsorolásos lista indításához adja meg a
nyitó <code v-pre>&lt;ul&gt;</code> taget; a lista befejezéséhez írja
be a záró <code v-pre>&lt;/ul&gt;</code> taget:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezek a tagek közé minden listaelemet be
kell írni, az elején a nyitó <code v-pre>&lt;li&gt;</code> taggel és a
záró <code v-pre>&lt;/li&gt;</code> taggel, köztük az szöveget.
Például a következő kód létrehozza a négy-
felsorolás ahogyan a alábbi ábrán látható:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Clicky<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Tactile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Linear<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Optical<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/116.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A böngésző automatikusan megjeleníti az
egyes elemek felsoroláspontját az
alapértelmezett érték használatával golyó,
tömör kör. Megadhat egy másik felsorolási
jelet is a type attribútim használatával az
<code v-pre>&lt;ul&gt;</code> tagben — például type=&quot;square&quot; a
kitöltött négyzetekhez.</p>
<h3 id="definicios-listak" tabindex="-1"><a class="header-anchor" href="#definicios-listak"><span>Definíciós listák</span></a></h3>
<p>A definíciós lista egy olyan lista, amely elempárokból áll, mint például egy kifejezés és
annak meghatározás egy szószedetben ill szókincs.
A definíciós lista elkezdéséhez a nyitó <code v-pre>&lt;dl&gt; </code>taget; a lista befejezéséhez, a záró <code v-pre>&lt;/dl&gt;</code> taget
kell használni:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>E címkék közé minden egyes kifejezéspárt be kell írni – először a „definíciós kifejezést” –
a meghatározandó kifejezés – egy nyitó <code v-pre>&lt;dt&gt;</code> tag és egy záró <code v-pre>&lt;/dt&gt;</code> tag között, valamint
második „definícióleírás” a nyitó <code v-pre>&lt;dd&gt;</code> tag és egy záró <code v-pre>&lt;/dd&gt;</code> tag között. Például a
következő kód létrehozza az ábrán látható kéttagú listát:</p>
<p>A böngésző automatikusan megjeleníti az
egyes elemek felsoroláspontját az
alapértelmezett érték használatával golyó,
tömör kör. Megadhat egy másik felsorolási
jelet is a type attribútim használatával az
<code v-pre>&lt;ul&gt;</code> tagben — például type=&quot;square&quot; a
kitöltött négyzetekhez.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>tenkey<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>The section of a computer keyboard that contains the number keys and arrow keys<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>tenkeyless<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>Of a keyboard, not having a tenkey section<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/117.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="beagyazott-listak" tabindex="-1"><a class="header-anchor" href="#beagyazott-listak"><span>Beágyazott listák</span></a></h3>
<p>Ha összetett listára van
szüksége, beágyazhatja
a három féle lista
bármelyikét egy másik
listába. Például a
következő kód létrehozza
egy számozott listát a
felsorolással rendelkező
altételekkel az alábbi
ábrán láthatóan.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Unplug your computer from power.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Connect the keyboard to the USB port.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>square<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Use a USB adapter if necessary.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Use a USB port on the computer if possible.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Connect the computer to power again.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/117.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="szamozott-lista-keszitese" tabindex="-1"><a class="header-anchor" href="#szamozott-lista-keszitese"><span>Számozott lista készítése</span></a></h2>
<p>A HTML lehetővé teszi számozott listák létrehozását, amelyeket a HTML rendezett listáknak
hív az ol elem használatával. A listát a nyitó <ol> taggel kezdi, és a záró </ol> taggel fejezi
be. A tagek között minden számozott elemhez létrehoz egy listaelemet, li elemet, elhelyezve
az elem szövegét egy nyitó <li> tag és egy záró </li> tag között.
A böngésző automatikusan elkezdi a számozást a lista első eleménél. A lista számozásának
kezdése manuálisan is változtatható. Különféle számozási módokat is használhat a tippben
leírtak szerint.</p>
<h3 id="szamozott-lista-letrehozasa" tabindex="-1"><a class="header-anchor" href="#szamozott-lista-letrehozasa"><span>Számozott lista létrehozása</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban
nyissa meg a fájlt amelyben
létre kíván hozni egy számozott
lista.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy
böngészőablakon.</p>
</li>
<li>
<p>A Visual Studio Code-ban
kattintson arra a részre ahol
elszeretné kezdeni a listát.</p>
</li>
<li>
<p>Írja be az o-t. Megjelenik a
bővítmények listája.</p>
</li>
<li>
<p>Kattintson az ol-ra. <br>
<code v-pre>A)</code> A Visual Studio Code
beilleszti a nyitó <code v-pre>&lt;ol&gt;</code>
taget és a záró <code v-pre>&lt;/ol&gt;</code>
taget, elhelyezve a beillesztést pontot közöttük.</p>
</li>
<li>
<p>Nyomja meg az enter gombot egy üres sor hozzáadásához a
kódok között
(nem látható).</p>
</li>
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez az üres sorban.</p>
</li>
<li>
<p>Írja be a li-t, majd kattintson a li gombra bővítések listáján. <br>
<code v-pre>B)</code> A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;li&gt;</code> taget és a záró <code v-pre>&lt;/li&gt;</code> taget, elhelyezve a beillesztést pont közöttük.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/118.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>Írja be a listaelem szövegét.</p>
</li>
<li>
<p>Nyomja meg az enter gombot,
majd ismételje meg a 8. és 9 lépést
további listaelemek hozzáadásához.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra.
a weboldal újra fog tölteni <br>
<code v-pre>C)</code> A számozott lista megjelenik</p>
</li>
<li>
<p>Kattintson a beillesztési pont
elhelyezéséhez a záró <code v-pre>&lt;/ol&gt;</code> tag utáni
sorra.</p>
</li>
<li>
<p>Szúrjon be egy img elemet a 4. fejezetben tanult alapján.</p>
</li>
<li>
<p>Az <code v-pre>&lt;img&gt;</code> tag <code v-pre>&gt;</code> bezárása után, ismételje meg a 4–9. lépéseket egy másik ol elem beillesztéséhez. Adja hozzá a start= attribútumot a nyitó <code v-pre>&lt;ol&gt;</code> tagre, és adja meg a következő listához szükséges érték tételét – például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">start</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés gombra. a weboldal újra fog tölteni <br>
<code v-pre>D)</code> A kép megjelenik</p>
<p><code v-pre>E)</code> Megjelenik a második számozott lista, a megadott számtól kezdve.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/119.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p>Milyen számozási típusokat használhatunk egy rendezett listához?
A HTML lehetővé teszi ötféle számozás használatát a rendezett listákban úgy, hogy a type
attribútumot tartalmazza a megfelelő kulcsszót a nyitó <code v-pre>&lt;ol&gt;</code> tagben. A létrehozáshoz
használja a type=&quot;1&quot; értéket, vagy hagyja ki a type argumentumot decimális számozás: 1,
2, 3. Használja a type=&quot;a&quot;-t kisbetűs számozáshoz: a, b, c. Nagybetűs számozáshoz
használja az &quot;A&quot; típust: A, B, C. Kisbetűs római számokhoz a type=&quot;i&quot; használja: i, ii, iii.
Nagybetűs római számokhoz az &quot;I&quot; típust használja: I, II, III.</p>
</div>
<h2 id="felsorolas-lista-keszitese" tabindex="-1"><a class="header-anchor" href="#felsorolas-lista-keszitese"><span>Felsorolás lista készítése</span></a></h2>
<p>Egy felsorolást, amit HTML-ben rendezetlen listaként jelölsz, a <code v-pre>&lt;ul&gt;</code> elemmel hozol létre. A
listát megnyitod a <code v-pre>&lt;ul&gt;</code> nyitótaggel, és bezárod a <code v-pre>&lt;/ul&gt;</code> zárási taggel. Ezek között minden
felsorolt pontnak egy-egy <code v-pre>&lt;li&gt;</code> elemet hozol létre. A pontok szövegét a megfelelő <code v-pre>&lt;li&gt;</code>
nyitó- és zárótag közé helyezed.
A böngésző automatikusan megjeleníti alapértelmezett felsorolójelet, egy &quot;disc&quot; vagy kitöltött
kör formájában, minden <code v-pre>&lt;li&gt;</code> elem előtt. Megadhatod egy másik típusú felsorolójelet is,
amint azt a tippben ismertetik.</p>
<h3 id="felsorolas-lista-keszitese-1" tabindex="-1"><a class="header-anchor" href="#felsorolas-lista-keszitese-1"><span>Felsorolás lista készítése</span></a></h3>
<ol>
<li>
<p>A Visual
Studio
Code-ban
nyisd meg
azt a fájlt,
amelyben
létre
szeretnéd
hozni a
felsorolást.</p>
</li>
<li>
<p>A fájlt
nyissa meg
egy
böngésző
ablakon</p>
</li>
<li>
<p>A Visual
Studio
Code-ban
kattints
oda, hogy
elhelyezd az
írókútot ott,
ahol el
szeretnéd
kezdeni a
felsorolást.</p>
</li>
<li>
<p>Írd be a &quot;u&quot;
karaktert.
Megjelenik a
kiterjesztések listája.</p>
</li>
<li>
<p>Kattints az
&quot;ul&quot; elemre. <br>
<code v-pre>A)</code> A Visual Studio
Code beszúrja a
megnyitó <code v-pre>&lt;ul&gt;</code> taget
és a záró <code v-pre>&lt;/ul&gt;</code>
taget, közéjük helyezi
az írókútot.</p>
</li>
<li>
<p>Nyomd meg a
<code v-pre>&lt;Enter&gt;</code> gombot
egy üres sor
hozzáadásához a kódok közé (nem jelenik meg).</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/120.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>
<p>Kattints arra, hogy
az írókút a üres sorra
kerüljön.</p>
</li>
<li>
<p>Írd be a &quot;li&quot;
karaktert, majd
kattints a &quot;li&quot;-ra a
kiterjesztési listán. <br>
<code v-pre>B)</code> A Visual
Studio Code
beszúrja a megnyitó
<code v-pre>&lt;li&gt;</code> taget és a záró
<code v-pre>&lt;/li&gt;</code> taget, közéjük
helyezi az írókútot.</p>
</li>
<li>
<p>Írd be a lista
elemének szövegét.</p>
</li>
<li>
<p>Nyomj meg egy
<code v-pre>Enter</code>-t, majd
ismételd meg a 8. és 9. lépést más lista
elemek
hozzáadásához.</p>
</li>
<li>
<p>Kattints a
Frissítésre ().
Az internetes oldal
frissül. <br>
<code v-pre>C)</code> A
felsorolás
megjelenik.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/121.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="hozz-letre-egy-meghatarozasi-listat" tabindex="-1"><a class="header-anchor" href="#hozz-letre-egy-meghatarozasi-listat"><span>Hozz létre egy meghatározási listát.</span></a></h2>
<p>A HTML definíciós listája lehetővé teszi, hogy a kifejezések listáját a definícióikkal vagy
magyarázataikkal együtt mutassa be. A listát a nyitó <code v-pre>&lt;dl&gt;</code> tag beírásával kezdjük, és a záró
<code v-pre>&lt;/dl&gt;</code> taggel fejezzük be. Ezek közé a címkék közé be kell írnia egy definíciós kifejezés
minden párját és annak meghatározását. A definíciós kifejezés egy nyitó <code v-pre>&lt;dt&gt;</code> címke és egy
záró <code v-pre>&lt;/dt&gt;</code> címke közé esik, míg a definíció leírása egy nyitó <code v-pre>&lt;dd&gt;</code> címke és egy záró <code v-pre>&lt;/dd&gt;</code>
címke közé esik.</p>
<h3 id="definicios-lista-letrehozasa" tabindex="-1"><a class="header-anchor" href="#definicios-lista-letrehozasa"><span>Definíciós lista létrehozása</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt amelyben létre szeretné hozni a definíciós
listát.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintsa a beszúrási pontot a kívánt helyre, ahol a definíciós
listát szeretné kezdeni.</p>
</li>
<li>
<p>Írjon d-t.
Megjelenik a bővítések listája.</p>
</li>
<li>
<p>Kattintson a dl-re. <br>
<code v-pre>A)</code> A Visual Studio Code beszúrja a nyitó <code v-pre>&lt;dl&gt;</code> címkét és a záró <code v-pre>&lt;/dl&gt;</code> címkét, közéjük pedig
beszúrja a kurzort.</p>
</li>
<li>
<p>Nyomd meg kétszer az Enter billentyűt, hogy két üres sort adj a kódok közé (nem jelenik
meg).</p>
</li>
<li>
<p>Kattints arra, hogy az egérkurzor az első üres sorra kerüljön.</p>
</li>
<li>
<p>Írd be az d szót, majd kattints az dt-re a kiterjesztési listán. <br>
<code v-pre>B)</code> A Visual Studio Code beszúrja a nyitó <code v-pre>&lt;dt&gt;</code> címkét és a záró <code v-pre>&lt;/dt&gt;</code> címkét, közéjük pedig
beszúrja a kurzort.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/122.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>Írd be a meghatározó kifejezés szövegét.</p>
</li>
<li>
<p>Írd be az dd szót, majd kattints az dd-re a kiterjesztési listán. A Visual Studio Code
beszúrja a nyitó <code v-pre>&lt;dd&gt;</code> címkét és a záró <code v-pre>&lt;/dd&gt;</code> címkét, közéjük pedig beszúrja a kurzort.</p>
</li>
<li>
<p>Írd be a meghatározás leírásának szövegét.</p>
</li>
<li>
<p>Kattintson a frissítésre. A weboldal frissül. <br>
<code v-pre>C)</code> Megjelenik a meghatározási lista.</p>
</li>
<li>
<p>Kattints a záró <code v-pre>&lt;/dd&gt;</code> címke elé.</p>
</li>
<li>
<p>Ismételd meg a 8. és 11. lépést további meghatározó párok beírásához.</p>
</li>
<li>
<p>Kattintson a frissítésre. A weboldal frissül. <br>
<code v-pre>D)</code> Az új meghatározó párok megjelennek a listában.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/123.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p><strong>Hogyan tudok két különálló meghatározási leírás elemet felsorolni ugyanarra a meghatározó kifejezésre?</strong> <br>
Csak használj két dd elemet a megfelelő helyen a meghatározási listában. Például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dl</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>Course<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>Coding 101<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dt</span><span class="token punctuation">></span></span>Faculty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dt</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>Bill Sykes<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dd</span><span class="token punctuation">></span></span>Dianne Opta<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dd</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dl</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="agyazz-egy-listat-egy-masik-lista-belsejebe" tabindex="-1"><a class="header-anchor" href="#agyazz-egy-listat-egy-masik-lista-belsejebe"><span>Ágyazz egy listát egy másik lista belsejébe</span></a></h2>
<p>Az HTML lehetővé teszi bármilyen listatípus ágyazását bármilyen másik listatípusba. Például
ágyazhatsz egy pontozott listát egy számozott lista belsejébe, egy meghatározási lista
belsejébe, vagy egy másik pontozott listába. Több szinten is ágyazhatsz listákat, ha
szükséges. Az ágyazás lehetővé teszi összetett listák létrehozását az információk
egyértelmű ábrázolásához a weboldalaidon.</p>
<p>A böngésző a lista hierarchiáját mutatja az indentálással, minden ágyazott szintnél. Egy
ágyazott pontozott listánál alapértelmezetten a böngésző egy kör alakú jelölőt mutat, nem
pedig a tárcsa jelölőt. Ez segít abban, hogy vizuálisan könnyebben azonosíthatóak legyenek
az ágyazott pontozott listák.</p>
<h3 id="agyazz-egy-listat-egy-masik-lista-belsejebe-1" tabindex="-1"><a class="header-anchor" href="#agyazz-egy-listat-egy-masik-lista-belsejebe-1"><span>Ágyazz egy listát egy másik lista belsejébe</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg azt a fájlt, amelyben létre szeretnéd hozni a
bonyolult listát.</p>
</li>
<li>
<p>A fájlt egy böngészőablakban nyisd meg.</p>
</li>
<li>
<p>A Visual Studio Code-ban hozz létre egy külső listát az előző fejezetben elmagyarázott
technikák segítségével. A példa egy számozott listát használ a legkülső listaként.</p>
</li>
<li>
<p>Kattints arra, hogy a kurzor a záró <code v-pre>&lt;/li&gt;</code> címke elé kerüljön annál a lista elemnél, amely
után el szeretnéd helyezni az ágyazott listát.</p>
</li>
<li>
<p>Nyomj egy Entert, hogy létrehozz egy üres sort (nem látható).</p>
</li>
<li>
<p>Írd be a listatípus kétbetűs azonosítóját, amelyet ágyazni szeretnél - ul, ol, vagy dl -, majd
kattints a megfelelő elemre a kiterjesztési listán. Ebben a példában az ul azonosítót
használják, hogy egy pontozott listát ágyazzanak egy számozott lista belsejébe. <br>
<code v-pre>A)</code> A Visual Studio Code beszúrja a megnyitó címkét és a záró címkét az elemhez, és a
beszúrás pontját közéjük helyezi.</p>
</li>
<li>
<p>Nyomj egy Entert, hogy létrehozz egy üres sort (nem látható).</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/124.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Írd be az li szót, majd kattints az li-re a kiterjesztési listán. A Visual Studio Code beszúrja
a nyitó <code v-pre>&lt;li&gt;</code> címkét és a záró <code v-pre>&lt;/li&gt;</code> címkét, közéjük pedig beszúrja a kurzort.</p>
</li>
<li>
<p>Írd be az első lista elemet.</p>
</li>
<li>
<p>Ismételd meg a 8. és 9. lépést további lista elemek hozzáadásához, amennyiben
szükséges.</p>
</li>
<li>
<p>Kattintson a frissítésre. A weboldal frissül.
<code v-pre>B)</code> Az ágyazott lista megjelenik.Az indentálás jelzi, hogy az ágyazott lista a külső lista
alárendeltje. <br>
<code v-pre>C)</code> Alapértelmezetten a böngésző kör alakú jelölőt mutat egy ágyazott pontozott listánál.
Meghatározhatod egy tárcsát a <code v-pre>&lt;ul type=&quot;disc&quot;&gt;</code> használatával, vagy egy négyzetet a <code v-pre>&lt;ul type=&quot;square&quot;&gt;</code> használatával.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/125.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>Szükséges az HTML kódot behúzni az ágyazott listákhoz?
Nem. A HTML kódban lévő behúzások pusztán az emberek kényelme érdekében vannak,
nem a számítógépeké. Az ágyazott lista behúzását egyszerűen csak azért teszi az HTML-t
könnyebben olvashatóvá, mert könnyebben láthatod, hol kezdődnek és végződnek az
ágyazott elemek. Ennek a növekvő olvashatóságnak köszönhetően általában javasolt a kód
behúzása. A Visual Studio Code tovább segít ebben azzal, hogy függőleges vonalakat
jelenít meg, amelyek jelzik a listák és listaelemek terjedését.</p>
</div>
<h2 id="tanuljuk-meg-a-html-t-tablazatokhoz" tabindex="-1"><a class="header-anchor" href="#tanuljuk-meg-a-html-t-tablazatokhoz"><span>Tanuljuk meg a HTML-t táblázatokhoz</span></a></h2>
<p>A HTML segítségével táblázatokat hozhatsz létre, amelyek cellákból állnak, és ezek a cellák
a sorok és oszlopok metszéspontjainak megfelelően jönnek létre.</p>
<p>Ebben a szakaszban megismered, hogy milyen elemeket használ a HTML táblázatok
létrehozásához, és hogyan rendezd ezeket az elemeket a táblázatok létrehozásához. A
következő szakaszokban ezt a tudást használod fel, táblázatokat hozol létre és formázod
azokat.</p>
<h3 id="a-tablazat-komponenseinek-azonositasa" tabindex="-1"><a class="header-anchor" href="#a-tablazat-komponenseinek-azonositasa"><span>A táblázat komponenseinek azonosítása</span></a></h3>
<p>Az asztal négy fő elemet tartalmaz, melyeket a közeli ábrán azonosítottunk, és az alábbi
listában magyarázunk:</p>
<ul>
<li>Sor. Egy sor egy vízszintes cellasor. A táblázat felső sora gyakran egy fejlécsor.</li>
<li>Cella. Egy cella a táblázatot felépítő téglalapok egyike. Egy cella egy sor és egy oszlop metszéspontjának eredményeként jön létre.</li>
<li>Oszlop. Egy oszlop egy cellák függőleges sorozata.</li>
<li>Keret. A keret a cellák és a táblázat külső része körül lévő téglalap. A keret láthatatlan, hacsak nem formázzuk úgy, hogy látható legyen.</li>
</ul>
<figure><img src="@source/demo/images/6-fejezet/126.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="az-html-elemek-megertese-egy-tablazathoz" tabindex="-1"><a class="header-anchor" href="#az-html-elemek-megertese-egy-tablazathoz"><span>Az HTML elemek megértése egy táblázathoz.</span></a></h3>
<p>Táblázat létrehozásához helyezz egy table elemet az oldalra. A tábla elem egy nyitó <code v-pre>&lt;table&gt;</code> címkéből és egy záró <code v-pre>&lt;/table&gt;</code> címkéből áll, így:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A table elem a tábla sorainak konténereként szolgál. Egy sor létrehozásához helyezz egy tr
elemet a table elemen belül, így:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tr elem tartalmazza az adott sorban megjelenő cellákat. Ezek a cellák lehetnek vagy table
headers, cellák, amelyeket általában címek megjelenítésére használnak, vagy table data,
normál cellák a címeken kívüli szöveg vagy más tartalom számára.</p>
<p>A táblafejlécek a th elemet használják, ami egy nyitó <code v-pre>&lt;th&gt;</code> címkét és egy záró <code v-pre>&lt;/th&gt;</code> címkét
tartalmaz. Az alábbi példa csak egy két cellás sorból áll, amelyek táblafejléceket
tartalmaznak:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Header 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Header 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A tábla adatcellái a td elemet használják, ami egy nyitó <code v-pre>&lt;td&gt;</code> címkét és egy záró <code v-pre>&lt;/td&gt;</code> címkét
tartalmaz. Folytatva a példát, a következő kód egy két soros, két oszlopos táblázatot hoz
létre, egy sorral táblafejlécekkel és egy sorral táblaadatokkal:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Header 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Header 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Data 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">></span></span>Data 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Alapértelmezetten a böngészőben megjelenő táblázatnak nincs kerete, ami megnehezíti a
cellák határainak és a táblázat terjedésének meghatározását, ahogyan azt a közeli
illusztráción láthatod.
A tábla <code v-pre>&lt;table&gt;</code> címkéjéhez hozzáadva egy keretet a következő példa szerint, egy keretet
helyez a tábla köré, ahogyan azt a közelben láthatod. Általában belső vagy külső CSS-t
használnál a megfelelő keretek alkalmazásához a táblázatra, ahogyan azt a 9. fejezetben
ismertetjük; de ez a példa az egyszerűség kedvéért egy beágyazott stílust használ:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A táblafejléc celláihoz és a táblaadat celláihoz egy-egy keret hozzáadása, ahogyan az alábbi
példában látható, lehetővé teszi, hogy lássuk, hol végződnek a cellák:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid black<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Header 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Header 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Data 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Data 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/127.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="alkoss-tablat" tabindex="-1"><a class="header-anchor" href="#alkoss-tablat"><span>Alkoss táblát</span></a></h2>
<p>HTML táblázat létrehozásához helyezz el egy táblázat elemet a weboldalon a megfelelő helyre.
Ezután minden sorhoz egy táblázat sor, azaz &quot;tr&quot; elemet helyezz el a táblázatban,
mielőtt kitöltenéd a sorokat a táblázat fejléc,
&quot;th&quot;, és táblázat adat, &quot;td&quot;, elemeivel, amelyek a cellákat alkotják.
Egy sorban lévő &quot;th&quot; vagy &quot;td&quot; elemek
száma meghatározza, hány oszlopa van.</p>
<h3 id="tabla-alkotasa-lepesek" tabindex="-1"><a class="header-anchor" href="#tabla-alkotasa-lepesek"><span>Tábla alkotása (lépések)</span></a></h3>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot, és
nyisd meg azt a fájlt, amelyben létre
szeretnéd hozni a táblázatot.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy
böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints oda,
ahol be szeretnéd illeszteni a táblázatot.</p>
</li>
<li>
<p>Írd be a &quot;t&quot; betűt. Megjelenik a
kiterjesztések listája.</p>
</li>
<li>
<p>Kattints a &quot;table&quot; lehetőségre.
A Visual Studio Code beilleszti a nyitó
<code v-pre>&lt;table&gt;</code> címkét és a záró <code v-pre>&lt;/table&gt;</code> címkét,
és a kurzort közéjük helyezi.</p>
</li>
<li>
<p>Nyomd meg az Enter billentyűt egy
üres sor hozzáadásához (nem látható).</p>
</li>
<li>
<p>Írd be a &quot;tr&quot; szót, majd kattints a &quot;tr&quot;
lehetőségre a kiterjesztések listáján.
A Visual Studio Code beilleszti a nyitó
<code v-pre>&lt;tr&gt;</code> címkét és a záró <code v-pre>&lt;/tr&gt;</code> címkét, és a
kurzort közéjük helyezi.</p>
</li>
<li>
<p>Nyomd meg az Enter billentyűt egy üres sor hozzáadásához (nem látható).</p>
</li>
<li>
<p>Írd be a &quot;th&quot; szót, majd kattints a &quot;th&quot; lehetőségre a kiterjesztések listáján.
A Visual Studio Code beilleszti a
nyitó <code v-pre>&lt;th&gt;</code> címkét és a záró
<code v-pre>&lt;/th&gt;</code> címkét, és a kurzort közéjük
helyezi. Ez lehetővé teszi, hogy
könnyedén beírd a táblázat
fejlécének szövegét vagy más
tartalmát.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/128.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>
<p>Írd be az első táblázatfejléc
szövegét.</p>
</li>
<li>
<p>Kattints a záró <code v-pre>&lt;/th&gt;</code> címke
után, majd kövesd a 8. és 10.
lépést további táblázatfejléc cellák
hozzáadásához, amennyiben
szükséges.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>A)</code> Megjelennek a táblázatfejlécek.</p>
</li>
<li>
<p>Kattints a záró <code v-pre>&lt;/tr&gt;</code> címke
után, majd nyomd meg az Enter
billentyűt egy üres sor
létrehozásához.</p>
</li>
<li>
<p>Kövesd a 7. és 11. lépést egy új
sor létrehozásához és kitöltéséhez.
Ezúttal írd be a &quot;td&quot;-t, hogy
táblázatadat cellákat hozz létre,
nem táblázatfejléc cellákat.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>B)</code> Megjelennek a táblázatcellák.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/129.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tippek</p>
<p><strong>Hogyan tudok hozzáadni egy keretet a táblázathoz?</strong></p>
<p>Gyorsan hozzáadhatsz egy keretet úgy, hogy hozzáadod a stílus attribútumot a nyitó <code v-pre>&lt;table&gt;</code>
címkehez.
Például, ha megváltoztatod a címkét erre: <code v-pre>&lt;table style=&quot;border: 1px solid black;&quot;&gt;</code>, akkor egy 1
képpont vastag fekete színű keret jelenik meg a táblázat körül.
További információért nézd meg a &quot;Táblázatkeretek formázása&quot; című részt később ebben a fejezetben.</p>
</div>
<h2 id="tablazatban-sorok-vagy-oszlopok-hozzaadasa" tabindex="-1"><a class="header-anchor" href="#tablazatban-sorok-vagy-oszlopok-hozzaadasa"><span>Táblázatban sorok vagy oszlopok hozzáadása</span></a></h2>
<p>Az HTML lehetővé teszi sorok vagy
oszlopok hozzáadását egy táblázathoz,
amelyet beillesztettél egy weboldalra.
Sor hozzáadásához létrehozol egy új &quot;tr&quot;
elemet a táblázat megfelelő helyén,
majd kitöltöd azt vagy táblázatfejléc
cellákkal, vagy táblázatadat cellákkal.
Oszlop hozzáadásához táblázatfejléc
cellákat vagy táblázatadat cellákat
adhatsz hozzá a meglévő sorok
megfelelő pontjain.</p>
<h3 id="tablazatban-sorok-vagy-oszlopok-hozzaadasa-1" tabindex="-1"><a class="header-anchor" href="#tablazatban-sorok-vagy-oszlopok-hozzaadasa-1"><span>Táblázatban sorok vagy oszlopok hozzáadása</span></a></h3>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot,
és nyisd meg azt a fájlt, amely
tartalmazza a táblázatot, ahhoz,
amelyhez sorokat vagy oszlopokat
szeretnél hozzáadni.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy
böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints
arra a pontra, ahol be szeretnéd
illeszteni a sort vagy az oszlopot - a
meglévő sorok közé, az utolsó záró
<code v-pre>&lt;/tr&gt;</code> címke után vagy az utolsó záró
<code v-pre>&lt;/tr&gt;</code> címke után.
A példa az új sor hozzáadását mutatja be az utolsó meglévő sor után.</p>
</li>
<li>
<p>Nyomd meg az Enter billentyűt egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Írd be a &quot;tr&quot; szót, majd kattints a &quot;tr&quot; lehetőségre a kiterjesztések listáján.
A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;tr&gt;</code> címkét és a záró <code v-pre>&lt;/tr&gt;</code> címkét, és a kurzort közéjük helyezi.</p>
</li>
<li>
<p>Nyomd meg az Enter billentyűt egy üres sor hozzáadásához (nem látható).</p>
</li>
<li>
<p>Írd be a &quot;td&quot; szót, majd nyomj egy tab-ot a <code v-pre>&lt;td&gt;</code> címke és a <code v-pre>&lt;/td&gt;</code> címke beillesztéséhez, majd írd
be a szöveges tartalmat közéjük.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/130.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>A következő sorokban írd be a
sor többi celláját.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>A)</code> Az új cellasor megjelenik a
táblázatban.</p>
</li>
<li>
<p>Kattints arra a pontra az első
sorban, ahol oszlopot szeretnél
hozzáadni - a nyitó <code v-pre>&lt;th&gt;</code> vagy <code v-pre>&lt;td&gt;</code>
címke előtt, a záró <code v-pre>&lt;/th&gt;</code> vagy <code v-pre>&lt;/td&gt;</code>
címke és a következő nyitó <code v-pre>&lt;th&gt;</code>
vagy <code v-pre>&lt;td&gt;</code> címke között, vagy az
utolsó záró <code v-pre>&lt;/th&gt;</code> vagy <code v-pre>&lt;/td&gt;</code> címke
után.
A példa egy új oszlop hozzáadását
mutatja be az utolsó meglévő
oszlop után.</p>
</li>
<li>
<p>Nyomd meg az Enter billentyűt
egy üres sor létrehozásához, ha
szükséges, majd írd be az új cella
címkéit és tartalmát ezen a soron.</p>
</li>
<li>
<p>Ismételd meg az 11. lépést, hogy
beírd az új cellát minden másik
sorhoz.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>B)</code> Az új oszlop megjelenik.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/131.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tippek</p>
<p><strong>Mi történik, ha a sorok különböző számú cellát tartalmaznak?</strong></p>
<p>Az HTML a táblázat elrendezését olyan elegánsan kezeli, amennyire csak lehetséges,
és üres helyet hagy az oszlopban, ahol a cella hiányzik.
A hiányzó cella vagy cellák a sor jobb végén lesznek.
Például ha egy táblázat első sora öt cellát tartalmaz, de a második sor csak három cellát tartalmaz,
akkor a második sor utolsó két oszlopa üres lesz.</p>
</div>
<h2 id="tablazat-szelessegenek-es-oszlop-szelessegenek-meghatarozasa" tabindex="-1"><a class="header-anchor" href="#tablazat-szelessegenek-es-oszlop-szelessegenek-meghatarozasa"><span>Táblázat szélességének és oszlop szélességének meghatározása</span></a></h2>
<p>Az HTML lehetővé teszi a táblázat szélességének
meghatározását a <code v-pre>style</code> attribútum
hozzáadásával a nyitó <code v-pre>&lt;table&gt;</code> címkehez,
és a szélesség megadását a stílus részeként.
Ha nem határozod meg a szélességet, a böngésző
a táblázatot lehetőleg összenyomva jeleníti meg,
ami segíthet a táblázatok elhelyezésében kisebb
képernyőkön.</p>
<p>Megadhatod a fix méretet vagy a rendelkezésre
álló hely alapján mért méretet is.Hasonlóan, az
oszlopok szélességét a <code v-pre>style</code> attribútum
hozzáadásával tudod szabályozni a nyitó <code v-pre>&lt;th&gt;</code>
vagy <code v-pre>&lt;td&gt;</code> címkehez az adott oszlophoz tartozó
cellában, és a szélesség megadását a stílus
részeként.</p>
<h3 id="tablazat-szelessegenek-es-oszlop-szelessegenek-meghatarozasa-1" tabindex="-1"><a class="header-anchor" href="#tablazat-szelessegenek-es-oszlop-szelessegenek-meghatarozasa-1"><span>Táblázat szélességének és oszlop szélességének meghatározása</span></a></h3>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Általában belső vagy külső CSS-t
használnál a táblázat szélességének és oszlop
szélességének vezérléséhez,ahogyan azt a 9.
fejezetben megbeszéltük. Ez az példa az
egyszerűség kedvéért beágyazott stílusokat
használ.</p>
</div>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot, és nyisd
meg azt a fájlt, amely tartalmazza a táblázatot, amelyre hatást szeretnél gyakorolni.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngészőablakban. <br>
<code v-pre>A)</code> A böngésző összenyomottan jeleníti meg a táblázatot.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a pontra, ahol a kurzort el szeretnéd helyezni a nyitó
<code v-pre>&lt;table&gt;</code> címke záró &gt; előtt.</p>
</li>
<li>
<p>Írj be egy szóközt, majd írd be a <code v-pre>style=&quot;width:100%&quot;</code> szöveget.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A width:100% megadása azt eredményezi, hogy a táblázat a böngésző ablak teljes
szélességét elfoglalja.</p>
</div>
<ol start="5">
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>B)</code> A táblázat most már elfoglalja az ablak teljes szélességét.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a pontra, ahol a kurzort el szeretnéd helyezni a nyitó <code v-pre>&lt;th&gt;</code>
vagy <code v-pre>&lt;td&gt;</code> címke záró &gt; előtt, azzal a cellával kapcsolatban, amelynek méretét be szeretnéd állítani.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/132.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>
<p>Írj be egy szóközt, majd írd be a
<code v-pre>style=&quot;width:</code>, utána pedig az általad
kívánt szélességet, és zárd le a stílus
részt a <code v-pre>&quot;</code> jellel. Például, ha a cellát
tartalmazó oszlopnak 15 százaléknyi
szélességet szeretnél adni, írd be a
következőt: <code v-pre>style=&quot;width:15%&quot;</code>.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül. <br>
<code v-pre>C)</code> Az általad megváltoztatott oszlop
most már elfoglalja a megadott
szélességű helyet.</p>
</li>
<li>
<p>Add hozzá a <code v-pre>style</code> attribútumot
minden másik oszlopban található
cellához, amelynek szélességét be
szeretnéd állítani.</p>
</li>
<li>
<p>Kattints a Frissítésre ( ).
Az weboldal frissül.
Az oszlop szélesség megváltozik, ahogy
azt megadtad.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/133.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">Tippek</p>
<p><strong>Mi történik ha különböző szélességeket határozol meg több cellának ugyanabban az oszlopában?</strong></p>
<p>A böngésző a legnagyobb megadott szélességet alkalmazza, így az összes oszlopban lévő cella azt a
szélességet fogja kapni.
Hogyan tudom szabályozni egy sor magasságát?
Az adott sorhoz rendelj stílust a nyitó <code v-pre>&lt;tr&gt;</code> címkében a <code v-pre>style</code> attribútummal,
és adj meg egy magasságot pixelben. Például, <code v-pre>&lt;tr style=&quot;height:225px&quot;&gt;</code> beállítja a sor magasságát
225 pixelre.</p>
</div>
<h2 id="tablazatszegelyek-formazasa" tabindex="-1"><a class="header-anchor" href="#tablazatszegelyek-formazasa"><span>Táblázatszegélyek formázása</span></a></h2>
<p>Alapértelmezés szerint a HTML-táblázatok láthatatlan szegéllyel jelennek meg, ami hasznos lehet az
elrendezési effektusok eléréséhez. Sok asztal esetében azonban valószínűleg látható szegélyekre van
szükség. Ahhoz, hogy megkapjuk őket, meg kell mondanod a HTML-nek, hogyan kell formázni a
határokat. Ehhez adja hozzá a style attribútumot a táblázat megfelelő részének nyitócímkéjéhez,
például magához a táblázatelemhez vagy egy td elemhez, és adja meg a használandó stílusformázást.
Megjeleníthet külön szegélyeket magának a táblázatnak és az egyes celláknak, vagy összecsukhatja a
táblázat és a cellaszegélyeket egyetlen sorba.</p>
<p>Megjegyzés: Általában CSS-t kell használni a táblázatszegélyek formázásához, amint azt a 9.
fejezetben tárgyaltuk. Ez a példa az egyszerűség kedvéért szövegközi stílusokat használ.</p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a fájlt, amely azt a táblát tartalmazza, amelynek szegélyeit
formázni szeretné.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban. <br>
<code v-pre>A)</code> A böngésző alapértelmezés szerint szegélyek nélkül jeleníti meg a táblázatot.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintással helyezze a beszúrási pontot a nyitó <code v-pre>&lt;table&gt;</code> címke záró &gt; elé.</p>
</li>
<li>
<p>Írjon be egy szóközt, majd a style= karakterláncot, és a dupla idézőjelek közötti formázást, például
&quot;border:1px solid blue&quot;, hogy a címke így nézzen ki:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span> 1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>B)</code> A szegély megjelenik a table körül.</p>
</li>
<li>
<p>Ide kattintva helyezze a beszúrási pontot a formázni kívánt cella nyitó <code v-pre>&lt;th&gt;</code> vagy <code v-pre>&lt;td&gt;</code> címkéjének
záró <code v-pre>&gt;</code> elé.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/134.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>
<p>Írjon be egy szóközt, majd a style= karakterláncot, és a dupla idézőjelek közötti formázást, például &quot;border:1px solid blue&quot;, hogy a címke így nézzen ki:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solidblue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Ismételje meg a 6. és 7. lépést minden más formázni kívánt cellára.
Kattintson a Frissítés gombra</p>
</li>
<li>
<p>Kattintson a Frissítés gombra ().
A weboldal frissül. <br>
<code v-pre>C)</code> Megjelennek a cellaszegélyek. <br>
<code v-pre>D)</code> Hézag jelenik meg a táblázat szegélye és a cellaszegély, valamint a szomszédos cellák szegélyei
között.</p>
</li>
<li>
<p>Írj be egy pontosvesszőt és a border-collapse:collapse kódot a nyitó <code v-pre>&lt;table&gt;</code> taghez, így néz ki a
tag: <code v-pre>&lt;table style=&quot;border: 1px solid blue;border-collapse:collapse&quot;&gt;</code></p>
</li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>E)</code> A szegélyek egyetlen vonallá összecsukva jelennek meg.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/135.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Mi a kulcsszavak a keretformázáshoz?</strong></p>
<p>Első lépésként határozza meg a szélességet képpontban – például 1px vagy 2px. Ezután határozza
meg a vonalstílust, a következőket használva: solid, dotted, dashed, double, groove, ridge, inset, vagy
outset; használja a none értéket a keret nélkül, vagy a hidden-t a keret elrejtéséhez. Ezután határozza
meg a színt, vagy egy szín nevet használva — például red, darksalmon, vagy lightgoldenrodyellow —
vagy egy hexadecimális értéket használva, például #00D2D2.</p>
</div>
<h2 id="tablazat-kitoltesenek-es-terkozenek-beallitasa" tabindex="-1"><a class="header-anchor" href="#tablazat-kitoltesenek-es-terkozenek-beallitasa"><span>Táblázat kitöltésének és térközének beállítása</span></a></h2>
<p>Alapértelmezés szerint a HTML szorosan helyezi a kereteket a cellák és táblázatok köré, de
lehetőséget biztosít arra, hogy megváltoztassa a távolságot két paraméter beállításával, a padding és
a spacing segítségével. A padding a cella széle és a cellatartalom közötti tér; a HTML
alapértelmezetten 1 pixelnyi paddingot állít be. A paddingot az összes irányban egyszerre beállíthatja
a cellpadding attribútum segítségével. A spacing a cellák közötti tér; a HTML alapértelmezetten 2
pixel távolságot állít be. A táblázat egészére vonatkozóan a cellspacing attribútum segítségével
állíthatja be a távolságot.</p>
<h3 id="tablazat-kitoltesenek-es-terkozenek-beallitasa-1" tabindex="-1"><a class="header-anchor" href="#tablazat-kitoltesenek-es-terkozenek-beallitasa-1"><span>Táblázat kitöltésének és térközének beállítása</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a fájlt, amely azt a táblát tartalmazza, amelynek a
paddingjét és távolságát szeretné megváltoztatni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.
A példatáblázat szegélyei össze vannak csukva, ami megakadályozza hogy a táblakeretek és
cellakeretek közötti tér megjelenjen.</p>
</li>
<li>
<p>Ha a táblázatnak össze vannak csukva a keretei, válassza ki a border‐collapse:collapse szöveget
majd nyomja meg a (DEL) gombot a szöveg törléséhez.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>A)</code> A korábban összecsukott keretek megjelennek.</p>
</li>
<li>
<p>Kattintson a beszúrási pont elhelyezéséhez a nyitó <code v-pre>&lt;table&gt;</code> tag záró <code v-pre>&gt;</code> jele elé.</p>
</li>
<li>
<p>Írja be a cellpadding= kifejezést, és a pixel értékét a dupla idézőjelek közé. Például, a következő
kód 10 pixelnyi padding-get ad hozzá:
cellpadding=&quot;10px&quot;</p>
</li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>B)</code> Minden cellakeret és cellatartalom között 10 pixelnyi padding jelenik meg.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/136.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>A Visual Studio Code-ban írja be a cellspacing= kifejezést, és a pixel értékét a dupla idézőjelek közé.
Például, a következő kód 20 pixel távolságot ad hozzá a cellák között:
cellspacing=&quot;20px&quot;</p>
</li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>C)</code> A cellakeretek között 20 pixel távolság jelenik meg.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/137.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p>Hogyan állíthatom be különböző mennyiségű paddinget a cellák különböző oldalain?
A legjobb módja annak, hogy különböző mennyiségű paddinget állítsunk be a cella vagy cellák felső,
alsó, bal és jobb oldalaira, a CSS használatával érjük el, ahogy azt a 9. fejezetben részleteztük. A CSS
lehetővé teszi a padding beállítását az összes oldalra egyszerre a padding attribútum segítségével,
vagy az oldalak egyenkénti beállítását a padding-top, padding-bottom, padding-left és padding-right
attribútumok segítségével.</p>
</div>
<h2 id="oszlopcsoportok-letrehozasa" tabindex="-1"><a class="header-anchor" href="#oszlopcsoportok-letrehozasa"><span>Oszlopcsoportok létrehozása</span></a></h2>
<p>A HTML lehetővé teszi oszlopcsoportok létrehozását egy táblázatban. Az oszlopcsoportok hasznosak
lehetnek különböző formázások alkalmazásához különböző oszlopokhoz.
Egy oszlopcsoport létrehozásához használhatja a colgroup elemet, amely egy nyitó <code v-pre>&lt;colgroup&gt;</code> taggel
kezdődik és egy záró <code v-pre>&lt;/colgroup&gt;</code> taggel végződik. Az oszlopcsoporton belül létrehozhat egy col
elemet, és a span attribútum segítségével meghatározhatja, hogy hány oszlopot foglal el.</p>
<h3 id="create-groups-of-columns" tabindex="-1"><a class="header-anchor" href="#create-groups-of-columns"><span>Create Groups of Columns</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a fájlt, amely tartalmazza a táblázatot, amelyben
oszlopcsoportot szeretne létrehozni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a beszúrási pont elhelyezéséhez közvetlenül a nyitó <code v-pre>&lt;table&gt;</code>
tag után.</p>
</li>
<li>
<p>Nyomja meg az (enter) billentyűt egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Írja be a co szót.
A kiterjesztések listája megnyílik.</p>
</li>
<li>
<p>Kattintson a colgroup lehetőségre.
<code v-pre>A)</code> A Visual Studio Code beszúrja a nyitó <code v-pre>&lt;colgroup&gt;</code> taget és a záró <code v-pre>&lt;/colgroup&gt;</code> taget, a beszúrási
pontot közéjük helyezi.</p>
</li>
<li>
<p>Nyomja meg kétszer az (enter) billentyűt egy üres sor létrehozásához (nem látható).</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/138.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Kattintson az üres sorra, majd írja be a col elem definícióját, amely meghatározza az oszlopokat az
oszlopcsoportban és a alkalmazandó formázást, ahogyan az alábbiakban látható. Itt a span=&quot;2&quot; azt
jelenti, hogy a csoport az első két oszlopot tartalmazza, míg a style attribútum a háttérszínt határozza meg.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span> lightsteelblue<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés gombra ( ).
A weboldal frissül. <br>
<code v-pre>B)</code> Az első két oszlop most része a oszlopcsoportnak, és a light steel-blue háttérszín jelenik meg
rajtuk.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/139.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p>Lehet-e sorcsoportot létrehozni egy táblázatban?
Igen. Feloszthat egy táblázatot három részre: egy fejlécszakaszra, amely tartalmazza a fejléc sorokat,
a test szakaszra és egy láblécszakaszra, amely tartalmazza a lábléc sorokat. Úgy tudja létrehozni a
fejlécszakaszt, hogy elhelyez egy nyitó <code v-pre>&lt;thead&gt;</code> taget a szakasz első sorának nyitó <code v-pre>&lt;tr&gt;</code> tagje elé, és
egy záró <code v-pre>&lt;/thead&gt;</code> taget a szakasz utolsó sorának záró <code v-pre>&lt;/tr&gt;</code> kódja után. Hasonlóképpen, csomagolja
be a test szakaszt egy nyitó <code v-pre>&lt;tbody&gt;</code> tagbe és egy záró <code v-pre>&lt;/tbody&gt;</code> tagbe, és zárja be a láblécszakaszt
egy nyitó <code v-pre>&lt;tfoot&gt;</code> tagbe és egy záró <code v-pre>&lt;/tfoot&gt;</code> tagbe</p>
</div>
<h2 id="asztalok-sorok-es-cellak-igazitasa" tabindex="-1"><a class="header-anchor" href="#asztalok-sorok-es-cellak-igazitasa"><span>Asztalok, sorok és cellák igazítása</span></a></h2>
<p>Az HTML lehetővé teszi az asztalok, sorok és cellák igazításának irányítását. Igazíthat egy táblázatot
vízszintesen az oldalon. Vízszintesen igazíthatja a cellák tartalmát. Emellett függőlegesen is
igazíthatja a cellák vagy az egész sorok tartalmát. A vízszintes igazítás irányításához beállíthatja az
alkalmas elem align attribútumát. A függőleges igazításhoz beállíthatja a valign attribútumot.</p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a fájlt, amely
tartalmazza a táblázatot, amelynek az igazítását
módosítani szeretné.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban. <br>
<code v-pre>A)</code> A táblázat balra van igazítva a weboldalon. <br>
<code v-pre>B)</code> A táblázat fejlécei középre vannak igazítva. <br>
<code v-pre>C)</code> A táblázat adatcellái balra vannak igazítva.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a beszúrás
helyére a záró <code v-pre>&gt;</code> előtt az nyitó <code v-pre>&lt;table&gt;</code> címkeben.
Asztalok, sorok és cellák igazítása Az HTML lehetővé
teszi az asztalok, sorok és cellák igazításának irányítását.
Igazíthat egy táblázatot vízszintesen az oldalon.
Vízszintesen igazíthatja a cellák tartalmát. Emellett
függőlegesen is igazíthatja a cellák vagy az egész sorok
tartalmát. A vízszintes igazítás irányításához beállíthatja
az elem align attribútumát. A függőleges igazításhoz
beállíthatja a valign attribútumot. Asztalok, sorok és
cellák igazítása</p>
</li>
<li>
<p>Írjon be egy szóközt, majd írja be az align= és left,
center vagy right kifejezéseket idézőjelek között,
például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">align</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>center<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson az Újratöltésre. A weboldal frissül. <br>
<code v-pre>D)</code> A táblázat az új igazítást veszi át - ebben az
esetben középre igazítást.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/140.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>A Visual Studio Code-ban kattintson arra a helyre, ahol beszúrási pontot szeretne elhelyezni a záró
<code v-pre>&gt;</code> előtt a nyitó <code v-pre>&lt;th&gt;</code> vagy <code v-pre>&lt;td&gt;</code> címkében, a cella igazításának módosításához.</li>
<li>Írjon be egy szóközt, majd írja be az align= és left, center vagy right kifejezéseket idézőjelek között,
például: <code v-pre>&lt;td align=&quot;right&quot;&gt;</code></li>
<li>Kattintson az Újratöltésre .
Az weboldal frissül. <br>
<code v-pre>E)</code> A cella tartalma az új igazítást veszi át - ebben az esetben jobb igazítást.</li>
<li>lépéseket minden cellára.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha más cellák igazítását is meg szeretné változtatni az oszlopban, ismételje meg a 6. és 7. cellát.</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Általában a cellák, sorok és táblázatok igazításának irányításához CSS-t használna.
Részletekért lásd a 9. fejezetet.</p>
</div>
<figure><img src="@source/demo/images/6-fejezet/141.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p>Hogyan szabályozhatom a táblázatcellák függőleges igazítását? A függőleges igazításhoz adj hozzá a
valign attribútumot a megfelelő elem nyitó címkejéhez, és meghatározhatod top, middle vagy
bottom értéket, ahogy illik. Például az összes cellára alkalmazott felső igazításhoz használhatod a <code v-pre>&lt;tr valign=&quot;top&quot;&gt;</code> kódot; az alsó igazítás alkalmazásához egy táblázatfejléc cellájára pedig a <code v-pre>&lt;th valign=&quot;bottom&quot;&gt;</code> kódot.</p>
</div>
<h2 id="cellak-letrehozasa-amelyek-ativelnek-sorokon-vagy-oszlopokon" tabindex="-1"><a class="header-anchor" href="#cellak-letrehozasa-amelyek-ativelnek-sorokon-vagy-oszlopokon"><span>Cellák létrehozása, amelyek átívelnek sorokon vagy oszlopokon.</span></a></h2>
<p>AZ HTML LEHETŐVÉ TESZI OLYAN CELLÁK LÉTREHOZÁSÁT, AMELYEK FÜGGŐLEGESEN KÉT VAGY TÖBB SORT, VÍZSZINTESEN
PEDIG KÉT VAGY TÖBB OSZLOPOT ÁTÍVELNEK. AHHOZ, HOGY LÉTREHOZZON OLYAN CELLÁT, AMELY TÖBB SORT ÖLEL FEL,
A MEGFELELŐ CELLA NYITÓ CÍMKEJÉBEN MEG KELL ADNIA A ROWSPAN ATTRIBÚTUMOT, ÉS MEG KELL HATÁROZNIA, HÁNY
SORT KELL ÁTÍVELNIE A CELLÁNAK, MAJD CSÖKKENTENIE KELL A KÖVETKEZŐ SOROKBAN TALÁLHATÓ CELLÁK SZÁMÁT
ENNEK MEGFELELŐEN. HASONLÓKÉPPEN, AHHOZ, HOGY LÉTREHOZZON EGY OLYAN CELLÁT, AMELY TÖBB OSZLOPOT ÖLEL
FEL, A MEGFELELŐ CELLA NYITÓ CÍMKEJÉBEN MEG KELL ADNIA A COLSPAN ATTRIBÚTUMOT, ÉS MEG KELL HATÁROZNIA,
HÁNY OSZLOPOT KELL ÁTÍVELNIE A SORON BELÜL, MAJD CSÖKKENTENIE KELL ENNEK MEGFELELŐEN A CELLÁK SZÁMÁT
EBBEN A SORBAN.</p>
<h3 id="terjesztheto-cellak-letrehozasa" tabindex="-1"><a class="header-anchor" href="#terjesztheto-cellak-letrehozasa"><span>Terjeszthető cellák létrehozása</span></a></h3>
<p>Az HTML fájljában hozza
létre a táblázatot szokás
szerint a nyitó <code v-pre>&lt;table&gt;</code>
címkével és a záró
<code v-pre>&lt;/table&gt;</code> címkével. A
példa táblázat itt egy 3
képpont széles szilárd lila
szegélyt, 10 képpontos
cellatöltést és 4 képpontos cellatávolságot mutat.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>3px solid purple<span class="token punctuation">;</span> cellpadding=</span><span class="token punctuation">"</span></span></span><span class="token attr-name">10"</span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/142.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A <code v-pre>&lt;table&gt;</code> címke és a <code v-pre>&lt;/table&gt;</code> címke között hozza létre a sorokat és cellákat az ebben
a fejezetben korábban elmagyarázott technikák segítségével. Amikor eléri azt a cellát,
ahol terjedő cellát szeretne létrehozni, illessze be a megfelelő rowspan vagy colspan
attribútumot, és rendelje hozzá a megfelelő oszlopok számát. Például a második állítás
egy három soros terjedő cellát (A) hoz létre, míg a harmadik és a negyedik állítás
mindegyike egy két oszlopos terjedő cellát (B, C) hoz létre.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">rowspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Három soros terjedő<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Két oszlopos terjedő<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>Több oszlopos terjedő<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ez a sor öt cellából áll - egy cella a sor terjedőjéhez, valamint két -két cella a két
oszlopos terjedőhöz. A táblázat minden más sorának összesen öt cellát kell
tartalmaznia, de a sor terjedő cella elfoglalja az első cellát a második és a harmadik
sorban, így ezek a sorok csak négy cellát igényelnek:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A táblázat utolsó sorának öt cellát kell tartalmaznia.</p>
<h2 id="hatterszin-vagy-kep-beallitasa-tablahoz" tabindex="-1"><a class="header-anchor" href="#hatterszin-vagy-kep-beallitasa-tablahoz"><span>Háttérszín vagy kép beállítása táblához</span></a></h2>
<p>Ahhoz, hogy egy
táblázatot vonzóbbá
vagy egyedi
megjelenésűvé
tegyen, beállíthat
neki háttérszínt vagy
háttérképet.
Háttérszín
alkalmazásához a
táblázat nyitó <code v-pre>&lt;table&gt;</code> címkejében a style attribútumot kell megadnia, és a background-color(A)
értéket. Háttérkép alkalmazásához pedig a táblázat nyitó <code v-pre>&lt;table&gt;</code> címkejében a style attribútumot
kell megadnia, és a background-image értéket, valamint az elérési utat a képhez.</p>
<h3 id="hatterszin-beallitasa-egy-tablazathoz" tabindex="-1"><a class="header-anchor" href="#hatterszin-beallitasa-egy-tablazathoz"><span>Háttérszín beállítása egy táblázathoz</span></a></h3>
<p>Az HTML fájlban hozza létre a táblázatot szokásos módon a nyitó &lt; table&gt; címkével és a
záró <code v-pre>&lt;/table&gt;</code> címkével. A <code v-pre>&lt;table&gt;</code> címkében szerepeljen a style attribútum, és
határozza meg a background-color és a szín értékét (A). Használhatja a szín nevét,
például &quot;blanched-almond&quot;, vagy a hexadecimális kódot, például <em>#333333</em> a Gray20
világosszürke színhez.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-color</span><span class="token punctuation">:</span>blanchedalmond<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span>3px solid purple<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
<span class="token attr-name">cellpadding</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span> <span class="token attr-name">cellspacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/143.1.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="hatterkep-beallitasa-egy-tablazathoz" tabindex="-1"><a class="header-anchor" href="#hatterkep-beallitasa-egy-tablazathoz"><span>Háttérkép beállítása egy táblázathoz</span></a></h3>
<p>Háttérkép beállításához vegye fel a style attribútumot a nyitó <code v-pre>&lt;table&gt;</code> címkében, és határozza meg a
background-image-t, amit egy URL és az elérési út követ, a képfájl útvonalával, zárójelben elválasztva
egyetlen idézőjellel. Például az alábbi <code v-pre>&lt;table&gt;</code> címke tartalmazza a realforce.jpeg nevű képet az
images mappában:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">background-image</span><span class="token punctuation">:</span><span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'images/realforce.jpeg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span> <span class="token property">background-repeat</span><span class="token punctuation">:</span>no-repeat<span class="token punctuation">;</span>
<span class="token property">background-size</span><span class="token punctuation">:</span>cover<span class="token punctuation">;</span><span class="token property">border</span><span class="token punctuation">:</span> 3px solid black</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/6-fejezet/143.2.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="tablazat-befeszkeles-egy-masik-tablaba" tabindex="-1"><a class="header-anchor" href="#tablazat-befeszkeles-egy-masik-tablaba"><span>Táblázat befészkelés egy másik táblába</span></a></h2>
<p>Az HTML lehetővé teszi, hogy egy táblázatot helyezzen be egy másik táblázatba. Ezt a képességet
akkor találhatja hasznosnak, amikor összetett táblázat-elrendezéseket kell létrehoznia a weboldalain.
Egy táblázat beágyazásához a beágyazott
táblázat elemét helyezi el az külső táblázat
megfelelő cellájában. Az külső táblázatot néha
szülő táblázatnak nevezik, a beágyazott
táblázatot pedig gyermek táblázatnak.</p>
<h3 id="tablazat-befeszkeles-egy-masik-tablaba-1" tabindex="-1"><a class="header-anchor" href="#tablazat-befeszkeles-egy-masik-tablaba-1"><span>Táblázat befészkelés egy másik táblába</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a
fájlt, amelyben beágyazott táblázatot szeretne
létrehozni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson arra a
helyre, ahol meg szeretné jeleníteni a külső
táblázatot.</p>
</li>
<li>
<p>Hozza létre a külső táblázatot a fejezet elején bemutatott &quot;Táblázat létrehozása&quot; részben
ismertetett technikákkal: Először szúrja be a táblázat elemet, majd szúrja be a tr elemeket, és töltse
ki őket th és td elemekkel szükség szerint.</p>
</li>
<li>
<p>Kattintson az Újratöltésre ( ).
A weboldal frissül. <br>
<code v-pre>A)</code> A minta külső táblázat külső kerettel rendelkezik, így könnyen látható, hogy mekkora területet
foglal el a táblázat. <br>
<code v-pre>B)</code> Hasonlóan, a cellák is rendelkeznek keretekkel.</p>
</li>
<li>
<p>Kattintson arra a helyre, ahol be szeretné ágyazni a táblázatot, a cella címkéi között.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/144.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>
<p>Hozza létre a beágyazott táblázatot ismét a fejezet elején
bemutatott &quot;Táblázat létrehozása&quot; részben ismertetett
technikákkal: Először szúrja be a táblázat elemet, majd szúrja
be a tr elemeket, és töltse ki őket th és td elemekkel szükség
szerint.</p>
</li>
<li>
<p>Kattintson az Újratöltésre ( ).
A weboldal frissül. <br>
<code v-pre>C)</code> A minta beágyazott táblázatnak piros külső kerete van. <br>
<code v-pre>D)</code> A beágyazott táblázat celláinak kék külső kerete van.</p>
</li>
<li>
<p>Adj hozzá további cellákat a beágyazott táblázathoz,
szükség szerint.</p>
</li>
<li>
<p>Kattintson az Újratöltésre ( ).
A weboldal frissül. <br>
<code v-pre>E)</code> A cellák megjelennek a beágyazott táblázatban. <br>
<code v-pre>F)</code> A külső táblázat mérete átalakul, ahogy szükséges ahhoz,
hogy befogadja a beágyazott táblázatot.</p>
</li>
</ol>
<figure><img src="@source/demo/images/6-fejezet/145.oldal.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hány szint mélyen ágyazhatok be táblázatokat?</strong></p>
<p>Elméletben beágyazhatod a táblázatokat annyi szint mélyen, amennyire csak szükséged van. Azonban
a gyakorlatban általában célszerű korlátozni a beágyazást két vagy három szintre. Mélyen beágyazott
táblázatok nehezen olvashatóvá és karbantarthatóvá tehetik a kódodat, valamint lassabbá tehetik az
oldal betöltését, mert a böngészőnek meg kell jelenítenie az összes beágyazott táblázatot. A mély
beágyazás problémákat is okozhat a hozzáférhetőségi funkciókkal vagy hozzáférhetőségi
hardverekkel.</p>
</div>
</div></template>


