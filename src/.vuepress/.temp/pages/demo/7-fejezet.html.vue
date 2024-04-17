<template><div><h2 id="kezdo-lepesek-a-css-sel" tabindex="-1"><a class="header-anchor" href="#kezdo-lepesek-a-css-sel"><span>Kezdő lépések a CSS-sel</span></a></h2>
<p>Ebben a fejezetben a Cascading Style Sheets, azaz a CSS használatával kezdhetsz el dolgozni. Azután, hogy megtanultad hogyan működik a CSS és hogyan lehet megkülönböztetni a soron belüli, belső és külső CSS-t, elkezdheted használni ezeket a CSS-típusokat a formázás alkalmazásához. Ezután áttérhetsz az elemválasztókkal, osztályválasztókkal és ID-választókkal való munkához.</p>
<figure><img src="@source/demo/images/7-fejezet/148_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="a-css-mukodesenek-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-mukodesenek-megertese"><span>A CSS működésének megértése</span></a></h3>
<p>A Cascading Style Sheets, általában CSS rövidítéssel, egy stíluslap nyelv, amit arra használnak, hogy HTML-ben írt dokumentumokat jelenítsen meg, mint például weboldalak vagy más jelölőnyelvek. CSS egy sor olyan szabály bevezetésével működik, amelyek szabályozzák a megjelenített elemeket alkotó weboldalt. A CSS-szabályok szükség szerint vonatkozhatnak konkrét elemekre vagy elemcsoportokra. CSS szabályokat három helyen lehet definiálni: először soron belüli, azaz az elemen belül; másodszor belsőleg, azaz máshol ugyanabban a HTML-dokumentumban; vagy harmadszor, külsőleg, azaz egy külön fájlban, amely a dokumentumhoz kapcsolódik.</p>
<h3 id="a-css-eses" tabindex="-1"><a class="header-anchor" href="#a-css-eses"><span>A CSS esés</span></a></h3>
<p>A CSS háromféleképpen használható a weboldalakon: soron belüli CSS-ként, belső CSS-ként és külső CSS-ként. A következő alfejezetek az egyes típusokat magyarázzák el.
A közeli ábra azt szemlélteti, hogy a CSS hogyan esik lefelé a CSS három szintjén - a tetején a soron belüli CSS, a belső CSS a következő, és a külső CSS a harmadik – az alapszintig, ahol a felhasználó által végrehajtott böngészőbeállítások találhatóak. Stílus a felső szintről lefelé áramlik a soron belüli CSS által beállított információ a középső szintre, felülbírálva minden olyan stílusinformációt, amely a belső CSS által van meghatározva. A belső CSS által meghatározott stílusinformációk viszont a középső szintről lefelé haladnak az alsó szintre, felülírva a külső CSS által meghatározott stílusinformációkat. Viszont, a külső CSS felülírja a felhasználó böngészőjének beállításait.</p>
<figure><img src="@source/demo/images/7-fejezet/148_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="soron-beluli-css" tabindex="-1"><a class="header-anchor" href="#soron-beluli-css"><span>Soron belüli CSS</span></a></h3>
<p>A soron belüli CSS olyan stílusformázás, amelyet közvetlenül egy HTML elemben határoz meg a stílus attribútummal az elem nyitó címkében, és megadja a kívánt formázást. A soron belüli CSS-t már használtuk megelőző példákban. Például a következő utasítás tartalmazza a stílus attribútumot a nyitó <code v-pre>&lt;table&gt;</code> címkét és hozzárendeli a keretformázást, így egy 1 pixel széles, egyszínű, egyszínű vonal, és kék színű:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Amint láthatod, a stílusdefiníció dupla idézőjelek közé kerül. Ha egynél több formázási típust kell megadni ugyanabban a stílusdefinícióban, pontosvesszővel kell elválasztani a stílustípusokat. A következő utasítás például hozzáadja a border-collapse tulajdonságot, és collapse értéket állít be, ami a táblázat és a cellák határait egyetlen sorba zsugorítja, ahelyett, hogy külön sorokban jelennének meg:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">border</span><span class="token punctuation">:</span>1px solid blue<span class="token punctuation">;</span><span class="token property">border-collapse</span><span class="token punctuation">:</span>collapse</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="belso-css" tabindex="-1"><a class="header-anchor" href="#belso-css"><span>Belső CSS</span></a></h3>
<p>A belső CSS olyan stílusformázás, amelyet a HTML-fájlban határoz meg, de nem egy adott elemen belül. A belső CSS nem egy adott elemre, hanem a HTML-fájl egészére vonatkozik.
A belső stíluslap létrehozásához a weboldal fejrészében elhelyez egy stíluselemet, és a
a stílusokat a stíluselemen belül határozza meg. A következő példa egy belső stíluslapot mutat be
amely tartalmazza a h1 stílus és a p stílus definícióját:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Internal Mechanisms<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
        <span class="token selector">h1</span> <span class="token punctuation">{</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 28px<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span>blueviolet<span class="token punctuation">;</span>
            <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">p</span> <span class="token punctuation">{</span>
            <span class="token property">color</span><span class="token punctuation">:</span>black<span class="token punctuation">;</span>
            <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
            <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kulso-css" tabindex="-1"><a class="header-anchor" href="#kulso-css"><span>Külső CSS</span></a></h3>
<p>A külső CSS egy olyan stíluslap, amelyet egy külön fájlban hoz létre, majd a HTML-dokumentumokhoz kapcsolja, hogy amelyekben alkalmazni szeretné. A külső CSS fájl .css kiterjesztésű.</p>
<h2 id="elemek-formazasa-soron-beluli-css-szel" tabindex="-1"><a class="header-anchor" href="#elemek-formazasa-soron-beluli-css-szel"><span>Elemek formázása soron belüli CSS-szel</span></a></h2>
<p>Ha a dokumentum egyes elemeire speciális formázást kell alkalmaznia, akkor a következő lehetőségek közül választhat soron belüli CSS-t használhat. Az soron belüli CSS lényegében azt jelenti, hogy egy mini stíluslapot hozunk létre egy adott elemen belül, például egy fejlécben vagy egy listaelemben. A soron belüli CSS alkalmazásához a stílus attribútumot hozzá kell adnia az elem nyitó címkéhez, majd megadjuk a stílusformázást.
Az soron belüli CSS használata munkaigényes, és megnehezíti a weboldalak frissítését, ezért a következőket kell tennie csak akkor használjon soron belüli CSS-t, ha feltétlenül szükséges a kívánt hatások eléréséhez.</p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt amelyben a formázást szeretné a soron belüli CSS használatával.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a záró &gt; nyitó címke formázni kívánt elem előtt.</p>
</li>
<li>
<p>Írjon be egy szóközt, amelyet <strong>s</strong> követ.</p>
</li>
<li>
<p>Kattintson a <strong>stílusra</strong>.</p>
<p><code v-pre>A:</code> A Visual Studio Code beilleszti a stílust attribútumot, a beszúrási pont elhelyezésével idézőjelek közé helyezzük utána, és megjeleníti a tulajdonságlistát.</p>
</li>
<li>
<p>Kattintson a formázni kívánt tulajdonságra. Ez a példa a <strong>színt</strong> használja.</p>
<p><code v-pre>B:</code> A Visual Studio Code beszúrja a tulajdonságot. Adott esetben megjeleníti az értéki listát. A példában a Visual Studio Code megjeleníti a színek listáját.</p>
</li>
<li>
<p>Ha megjelenik a kívánt érték, kattintson rá. Ellenkező esetben írja be az értéket.</p>
</li>
</ol>
<figure><img src="@source/demo/images/7-fejezet/150_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/7-fejezet/150_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>C)</code> Megjelenik az érték.</p>
<p><code v-pre>D:</code> A Visual Studio Code beír egy pontosvesszőt, ;, arra az esetre, ha folytatni kell a stílusdefiníciót.</p>
<ol start="8">
<li>Kattintson a <strong>Frissítés</strong> gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>E:</code> Megjelenik a formázás.</p>
<ol start="9">
<li>Kattintson a beillesztési pont elhelyezéséhez a pontosvessző után.</li>
<li>Kezdje el begépelni a tulajdonság nevét, majd kattintson a tulajdonságra a tulajdonságlistán.
Például írja be a <strong>fo</strong> szót, majd kattintson a <strong>font-weight</strong>-re.</li>
<li>Ha megjelenik az értékek listája, kattintson az értékre. Ellenkező esetben írja be az értéket.
Például megadhatja a <strong>félkövér</strong> betűtípust a <code v-pre>font-weight</code>-re.</li>
<li>Kattintson a <strong>Frissítés</strong> gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>F:</code> Megjelenik a formázás.</p>
<figure><img src="@source/demo/images/7-fejezet/151_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/7-fejezet/151_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Hogyan használhatom a leghatékonyabban a soron belüli CSS-t?</strong></p>
<p>Talán ellentmondásos módon a leghatékonyabb módja az soron belüli CSS használatának az, ha elkerüljük, ahol csak lehetséges. Próbáld meg használni soron belüli CSS-t csak akkor, ha egy adott elemnek olyan formázásra van szüksége, amelyet máshol nem fog alkalmazni. Például, ha egy h1 elem különleges megjelenést igényel, a soron belüli CSS jó megoldás lehet. De ha több, bár nem mindegyik h1 elemnek van szüksége erre a különleges megjelenésre, az osztály- vagy ID-szelektor jobb megoldás.</p>
</div>
<h2 id="oldal-formazasa-belso-css-hasznalataval" tabindex="-1"><a class="header-anchor" href="#oldal-formazasa-belso-css-hasznalataval"><span>Oldal formázása belső CSS használatával</span></a></h2>
<p>Ha speciális formázást kell alkalmaznia a HTML-dokumentumon keresztül, felülírva a külső CSS által alkalmazott formázást, akkor belső CSS-t használhat. A belső CSS alkalmazásához a HTML-dokumentum fejrészéhez hozzáad egy stíluselemet, és abban létrehozza a stílusdefiníciókat. A böngésző ezután ezeket a stílusdefiníciókat előnyben részesíti a linkelt külső CSS-ben szereplő, azonos neveket használó stílusdefiníciókkal szemben. A HTML-dokumentum elemeiben található soron belüli CSS azonban felülbírálja a belső CSS-t.</p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt, amelyben egy belső stíluslapot szeretne létrehozni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a pontra a fejrészben, ahol a belső stílust szeretné elhelyezni lapon.</p>
</li>
<li>
<p>Írjon be egy szóközt, <strong>st</strong> után. Megjelenik a bővítések listája.</p>
</li>
<li>
<p>Kattintson a <strong>stílusra</strong>.
A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;style&gt;</code>  és a záró <code v-pre>&lt;/style&gt;</code> címkét, a beillesztés helyét pedig pont kerül közéjük.</p>
</li>
<li>
<p>Nyomja meg az <code v-pre>Enter</code> billentyűt a címkék közötti üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Az üres sorba írja be a az első meghatározni kívánt stílus nevét,
amelyet egy szóköz és egy kezdőbetű zárójel követ - például: <code v-pre>h2 {</code></p>
<p><code v-pre>A:</code> A Visual Studio Code beilleszti a záró zárójelet, hogy megfeleljen.</p>
</li>
<li>
<p>Nyomja meg az <code v-pre>Entert</code> egy üres sor létrehozásához a zárójelek között (nem látható).</p>
</li>
</ol>
<figure><img src="@source/demo/images/7-fejezet/152_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/7-fejezet/152_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/7-fejezet/152_3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>Az üres sorban kezdje el írni a nevét a tulajdonságnak amelyiket be szeretné állítani.</li>
</ol>
<p>Megjelenik a tulajdonság lista.</p>
<ol start="10">
<li>Kattintson a tulajdonságra.</li>
</ol>
<p>A Visual Studio Code beilleszti a tulajdonságot. Ha szükséges, akkor megmutatja az értékeket egy listában.
A példában a Visual Studio Code megjelenít egy listát színekről.</p>
<ol start="11">
<li>Ha megjelenik a kívánt érték válassza ki, ellentkező esetben adja meg az értéket.</li>
</ol>
<p><code v-pre>D:</code> Megjelenik az érték.</p>
<ol start="12">
<li>
<p>Egy új sorban ismételje meg a <strong>9</strong>-<strong>11</strong>. lépést, hogy a további formázásokat megadja, ahogy kell.</p>
</li>
<li>
<p>Ismételje meg a <strong>7</strong>-<strong>11</strong>. lépést, adja meg a stílusokat.</p>
</li>
<li>
<p>Kattints a <strong>frissítés</strong> gombra.
A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>E:</code> A formázás megjelenik.</p>
<figure><img src="@source/demo/images/7-fejezet/153_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="@source/demo/images/7-fejezet/153_2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Mi történik, ha ugyanaz a stílus több külső CSS-fájlban van definiálva, amelyek ugyanahhoz a weboldalhoz vannak linkelve?</strong></p>
<p>Ha ugyanaz a stílus kétszer vagy annál többször van definiálva több, ugyanahhoz a weboldalhoz kapcsolódó külső CSS-ben, a
böngésző a stílus utolsó definícióját használja. Például, ha a főszövegben lévő mindkét CSS-fájl definiálja a p
stílust, a böngésző a második CSS-fájl p stílusdefinícióját használja, mivel a böngésző ezt a
fájlal később találkozik a kódban.</p>
</div>
<p>Általában, a legjobb módja a weboldal formázásának a külső CSS. Használhat egy külső CSS fájlt, vagy akár több külső CSS fájlt is bármelyik HTML fájlhoz. Ahhoz, hogy készítsen egy külső CSS fájlt, készítenie kell egy fájlt .css fájl kiterjesztéssel, amiben megadhatja a stílusokat. Ez után össze kell kötni a külső CSS fájlt a HTML fájlhoz. Nézze meg a &quot;CSS fájl összekötése egy weboldalhoz&quot; további utasításokért.</p>
<ol>
<li>
<p>A Visual Studio Code-ban kattintson az <strong>Explorer</strong>-re.
Az Explorer sor megjelenik.</p>
</li>
<li>
<p>Vigye a kurzort a weboldal választóra az Explorer-ből.</p>
</li>
<li>
<p>Ha a CSS fájljait különböző mappákba rakta, akkor kattintson arra a mappára.</p>
</li>
</ol>
<p><code v-pre>A:</code> Készíthet új mappát, ha a <strong>New Folder</strong>-ra kattint, beírja a mappa nevét, majd nyom egy <strong>entert</strong>.</p>
<ol start="4">
<li>
<p>Kattintson a <strong>New File</strong>-ra.
Egy szövegdoboz amibe el tudja nevezni az új fájlt megjelenik.</p>
</li>
<li>
<p>Írja be a fájl nevét, majd nyomjon egy <strong>entert</strong>.
A fájl megjelenik, készenáll a használatára.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A type=&quot;text/css&quot; beillesztése a
a külső CSS fájlra mutató hivatkozásban nem
nem feltétlenül szükséges, de úgy tekintik, hogy
jó gyakorlatnak számít. A típus megadása a
megadása biztosítja, hogy a böngésző tudja, hogy
hogy CSS fájlról van szó.</p>
</div>
<ol start="6">
<li>
<p>Írjon <strong>/</strong>* ahhoz, hogy egy kommentet hozzon létre.</p>
</li>
<li>
<p>Írja be a kommentet. A példa egy <strong>top-level heading style</strong>-t használ.</p>
</li>
<li>
<p>Írjon *<strong>/</strong> a komment végére.</p>
</li>
<li>
<p>Nyomjon <strong>entert</strong>, majd írjon egy <strong>h</strong> betűt, hogy megkezdje a h1-et.
A stílus lista megjelenik.</p>
</li>
<li>
<p>Kattintson a <strong>h1</strong>-re.
A Visual Studio Code beilleszti a h1-et.</p>
</li>
</ol>
<figure><img src="@source/demo/images/7-fejezet/154_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="11">
<li>
<p>Írjon egy szóközt, amelyet egy <strong>{</strong>,
A Visual Studio Code beilleszti a záró <strong>}</strong>.</p>
</li>
<li>
<p>Nyomjon egy <strong>enter</strong>-t, hogy egy új sort hozzon létre.</p>
</li>
<li>
<p>Kezdje el írni az első tulajdonságot amit be szeretne állítani.</p>
</li>
<li>
<p>Kattintson a tulajdonságra.
Ha megfelelő, akkor a Visual Studio Code megjelenik.</p>
</li>
<li>
<p>Ha megjelenik az érték, akkor kattintson rá.</p>
</li>
</ol>
<p><code v-pre>B:</code> A weblap most már a stílusokat használja a
a linkelt stíluslap stílusait.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha a Visual Studio Code nem mutatja a listát, akkor írja be az értéket a tulajdonsághoz.</p>
</div>
<ol start="16">
<li>
<p>A következő sorokban adjon meg további
tulajdonságok és értékek, amíg be nem fejezi
a stílus definiálásáig.</p>
</li>
<li>
<p>Készítsen több stílusokat, ahogy kell.</p>
</li>
</ol>
<figure><img src="@source/demo/images/7-fejezet/155_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>A stílus tulajdonságait különböző sorokban kell elhelyeznem, mint a példában?</strong></p>
<p>Nem. A bemutatott elrendezés az olvashatóság és a könnyű karbantartás érdekében optimalizált konvenció. De lehet több tulajdonságot is elhelyezhet egy sorban például, <code v-pre>p {font-size; medium font-weight:500;color: burlywood;}</code> - egyetlen sorban is működik.</p>
</div>
<p>Miután készített egy külső CSS fájlt, kösse össze a weboldallal, amit formázni szeretne. Ahhoz, hogy összekösse a fájlokat, egy <code v-pre>&lt;link&gt;</code> tag-et kell elhelyezni a header-ben minden weboldalnál.</p>
<p>Egyszerre összeköthet több külső CSS fájlt is egy weboldalhoz, ha több <code v-pre>&lt;link&gt;</code> tag-et használ. Például ha az összes weboldala hasonló stílusú, azokat egy CSS fájlba helyezze el. Akkor készítsen több CSS fájlt, ha minden oldal különböző stílusokat, vagy tartalmat képvisel.</p>
<h2 id="kulso-css-fajl-linkelese-a-weboldalhoz" tabindex="-1"><a class="header-anchor" href="#kulso-css-fajl-linkelese-a-weboldalhoz"><span>Külső CSS fájl linkelése a weboldalhoz</span></a></h2>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a weboldalat, amelyiket hozzá szeretné kötni a külső CSS fájlhoz.</p>
</li>
<li>
<p>Nyissa meg a fájlt a keresőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ba kattintson a head szekcióra, ahová szeretné elhelyezni a link-et.</p>
</li>
<li>
<p>Írjon be egy <strong>l</strong>-betűt.
A lista megjelenik.</p>
</li>
<li>
<p>Kattintson a <strong>link</strong>-re.
A Visual Studio Code beilleszti a <code v-pre>&lt;link&gt;</code> tag-et, beleértve a <code v-pre>rel</code> attribútumot amit a <code v-pre>stylesheet</code>hez adtunk meg, valamint a <code v-pre>href</code> attributumot is, üresen.</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6">
<li>
<p>A <code v-pre>href=</code> után a CSS fájl elérési útvonalát kell megadni.</p>
</li>
<li>
<p>Kattints arra a stylesheetre, amelyiket szeretnéd összekötni.</p>
</li>
</ol>
<p><code v-pre>A:</code> Visual Studio Code beírja a stíluslap nevét a kódba.</p>
<figure><img src="@source/demo/images/7-fejezet/156_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez csak a <code v-pre>&lt;link&gt;</code> záró &gt; betűje előtt címke elé (nem látható).</p>
</li>
<li>
<p>Írja be a <strong>type=&quot;text/css&quot;</strong>.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A type=&quot;text/css&quot; beillesztése a külső CSS fájlra mutató hivatkozásban nem feltétlenül szükséges, de úgy tekintik, hogy jó gyakorlatnak számít. A típus megadása biztosítja, hogy a böngésző tudja, hogy a CSS fájlról van szó.</p>
</div>
<ol start="10">
<li>Kattintson a <strong>Frissítés</strong> gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>B:</code> A weblap most már a stílusokat használja a linkelt stíluslap stílusait.</p>
<figure><img src="@source/demo/images/7-fejezet/157_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>::: tipp TIPP</p>
<p><strong>Mi történik, ha ugyanaz a stílus több külső CSS-fájlban van definiálva, amelyek ugyanahhoz a weboldalhoz vannak linkelve?</strong></p>
<p>Ha ugyanaz a stílus kétszer vagy annál többször van definiálva több, ugyanahhoz a weboldalhoz kapcsolódó külső CSS-ben, a böngésző a stílus utolsó definícióját használja. Például, ha a főszövegben lévő mindkét CSS-fájl definiálja a p stílust, a böngésző a második CSS-fájl <code v-pre>p</code> stílusdefinícióját használja, mivel a böngésző ezt a fájlal később találkozik a kódban.
:::</p>
<h2 id="elem-osztaly-es-azonosito-szelektorok-megkulonboztetese" tabindex="-1"><a class="header-anchor" href="#elem-osztaly-es-azonosito-szelektorok-megkulonboztetese"><span>Elem, osztály és azonosító szelektorok megkülönböztetése</span></a></h2>
<p>A HTML-dokumentumok formázásához CSS segítségével alkalmazza a stílusokat a megfelelő részekre.  A HTML lehetővé teszi a stílusok alkalmazását az elemekre három elsődleges szelektor-típus segítségével: element, osztály-szelektorok és ID-szelektorok.
Ez a szakasz elmagyarázza és szemlélteti a háromféle szelektor közötti különbségeket. A
&quot;Stílusok alkalmazása elemszelektorok használatával&quot;, &quot;Stílusok alkalmazása osztályszelektorok használatával&quot; és &quot;Stílusok alkalmazása.
„Stílusok alkalmazása ID-szelektorok használatával&quot; című fejezet későbbi részei gyakorlati példákat mutatnak az egyes elemekkel való munkára.</p>
<h3 id="elemvalasztok" tabindex="-1"><a class="header-anchor" href="#elemvalasztok"><span><strong>Elemválasztók</strong></span></a></h3>
<p>Az elemválasztó lehetővé teszi egy adott HTML elem összes példányának kijelölését a weboldalon.
Például, ha egy oldalon lévő összes bekezdéselemre szeretne egy stílust alkalmazni, akkor a p szelektor segítségével használhatja a p szelektort. Egy elemválasztó megadásához egyszerűen a HTML elem nevét használja. Például a következő szelektor kiválasztja a h1 elemet, és az aliceblue színt alkalmazza:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
     <span class="token property">color</span><span class="token punctuation">:</span> aliceblue
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="osztaly-szelektorok" tabindex="-1"><a class="header-anchor" href="#osztaly-szelektorok"><span><strong>Osztály szelektorok</strong></span></a></h3>
<p>Az osztályválasztó lehetővé teszi, hogy olyan elemeket célozzon meg, amelyek egy adott osztályattribútummal rendelkeznek. Például, ha a HTML-fájlja tartalmaz gomb osztályú elemeket, akkor ezt az osztályt használhatja az elemek megcélzására. A  címre osztályválasztó megadásához az osztály nevét használja, amelyet egy pont előz meg, például .button. A alábbi példa a .button osztályt választja ki, és a bisque színt alkalmazza:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.button</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> bisque
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Az osztályszelektorokkal való munkához szükség lehet egy megfelelő osztály létrehozására. Lásd a &quot;Osztály létrehozása elemek osztályának létrehozása a HTML-fájlban&quot; című fejezet későbbi részében az osztály létrehozására vonatkozó utasításokat.</p>
<h3 id="id-szelektorok" tabindex="-1"><a class="header-anchor" href="#id-szelektorok"><span><strong>ID-szelektorok</strong></span></a></h3>
<p>Az ID-szelektor segítségével olyan elemet célozhat meg, amely egyedi ID-attribútummal rendelkezik. Az ID-szelektor megadásához használja az ID nevét, amelyet # előz meg. Például, ha egy adott elemhez hozzárendelte az ID kulcsszót, az adott elemet a #keynote azonosító szelektor használatával célozhatja meg. A következő példa a keynote azonosítót, és a chartreuse színt alkalmazza:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">#keynote</span> <span class="token punctuation">{</span>
   <span class="token property">color</span><span class="token punctuation">:</span> chartreuse
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="stilusok-alkalmazasa-elemvalasztok-hasznalataval" tabindex="-1"><a class="header-anchor" href="#stilusok-alkalmazasa-elemvalasztok-hasznalataval"><span>Stílusok alkalmazása elemválasztók használatával</span></a></h3>
<p>Amikor egy stílust kell alkalmaznia egy HTML-dokumentum egy adott elemének összes példányára,
elemválasztót kell használni. Például a p elem összes példányára történő stílus alkalmazásához a
dokumentum összes elemére, a p szelektor használatával. Az elemválasztók használata a stílusok alkalmazásának szabványos módja. Normális esetben az element szelektorokat használjuk a legtöbb stílusformázás alkalmazásához, az osztály- és ID-szelektorokat pedig a speciális stílusok alkalmazásához.
Formázást alkalmazzunk egyes elemekre, szükség szerint.</p>
<p><strong>Stílusok alkalmazása elemkiválasztók használatával</strong></p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a külső CSS fájlt, amelyhez hozzá kívánja adni az elem szelektort.</p>
</li>
<li>
<p>Egy böngészőablakban nyisson meg egy HTML-fájlt, hogy amelyet a külső CSS-fájlt csatolt.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a beszúrási pontra oda, ahol az elemválasztó van.</p>
</li>
</ol>
<p><code v-pre>A:</code> Opcionálisan írjon be egy megjegyzést a elemválasztóhoz, amelyet létrehozunk.</p>
<ol start="4">
<li>Írja be a stílus nevét, amelyet szóköz és <code v-pre>{</code> - például:<code v-pre>h2 {</code></li>
</ol>
<p><code v-pre>B:</code> A Visual Studio Code beszúrja a megfelelő zárójelet, <code v-pre>}</code>.</p>
<ol start="5">
<li>
<p>Nyomja meg az &quot;<strong>Enter</strong>&quot; billentyűt egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>A beszúrási ponttal az üres soron írja be a stílus formázását. Ez a példában a <code v-pre>text-align: center</code>; értéket használja:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h2</span> <span class="token punctuation">{</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>Kattintson a <strong>Frissítés</strong> gombra
A weboldal frissül.</li>
</ol>
<p><code v-pre>C:</code> Az elem által alkalmazott formázás jelenik meg.</p>
<figure><img src="@source/demo/images/7-fejezet/159_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="stilusok-alkalmazasa-osztalyvalasztok-hasznalataval" tabindex="-1"><a class="header-anchor" href="#stilusok-alkalmazasa-osztalyvalasztok-hasznalataval"><span>Stílusok alkalmazása osztályválasztók használatával</span></a></h3>
<p>Amikor egy stílust kell alkalmaznia egy HTML-dokumentum több különböző típusú elemére, az elemeket egy osztályhoz rendelheti, majd egy osztályválasztó segítségével alkalmazhatja a stílust. Az  oldalon például, ha a dokumentum több olyan kulcsfontosságú részt tartalmazna, amelyek mindegyike egy-egy címsorból és szöveges bekezdésből áll, akkor ezeket a címsorokat és bekezdéseket hozzárendelheti egy osztályhoz, majd alkalmazhatja azt a stílust az osztályra. Ez a példa egy külső CSS-t használ, amelyről feltételezi, hogy csatlakoztatva van a kívánt HTML fájlhoz.</p>
<p><strong>Stílusok alkalmazása osztálykiválasztók használatával</strong></p>
<p><strong>A HTML-fájlban lévő elemek osztályának létrehozása</strong></p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt, amelyet osztályszelektorok segítségével fog formázni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a beillesztési pontot közvetlenül a &gt; zárójel előtt a nyitó címke elé a kívánt elemre.</p>
</li>
<li>
<p>Írjon be egy szóközt, majd a <strong>class=</strong> és az class nevét idézőjelben - például:
<code v-pre>class=&quot;alignright&quot;</code></p>
</li>
<li>
<p>Ismételje meg a <strong>3.</strong> és <strong>4.</strong> lépést az összes többi osztályhoz.</p>
</li>
</ol>
<p><strong>Az osztályszelektor létrehozása a CSS-fájlban</strong></p>
<ol>
<li>A Visual Studio Code programban nyissa meg a külső CSS-fájlt, amelyhez hozzá kívánja adni az osztályválasztót.</li>
</ol>
<p><code v-pre>A:</code> Opcionálisan írjon be egy megjegyzést az osztályról.</p>
<ol start="2">
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez arra a helyre, ahová a az osztályválasztót létre kívánja hozni.</p>
</li>
<li>
<p>Írjon be egy pontot, az osztályszelektor nevét. <strong>{</strong> - például: <code v-pre>.alignright }</code></p>
</li>
</ol>
<p><code v-pre>B:</code> A Visual Studio Code beszúrja a megfelelő zárójelet.</p>
<figure><img src="@source/demo/images/7-fejezet/160_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>
<p>Nyomja meg az &quot;<strong>Enter</strong>&quot; gombot egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Adja meg a stílus formázását,
vagy az összes részlet beírásával, vagy
a listákból kiválasztott elemekkel, amelyek
Visual Studio Code megjelenít, amikor
gépelés közben. A bemutatott példa esetében
beírhatja a <strong>tex</strong>-et, a <strong>text-align</strong> gombra kattintva a
a tulajdonságok listáján, majd kattintson a
<strong>jobbra</strong> az értékek listáján.</p>
</li>
<li>
<p>Kattintson a <strong>Frissítés</strong> gombra</p>
<p>A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>C:</code> Az osztályhoz rendelt elemek
átveszik az osztály formázását. A
példában az elemek
jobbra igazítottak.</p>
<figure><img src="@source/demo/images/7-fejezet/161_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Milyen korlátozások vannak az osztályszelektorok használatára?</strong></p>
<ul>
<li>Az osztályneveknek betűvel, aláhúzással vagy kötőjellel kell kezdődniük; nem kezdődhetnek betűvel számmal.</li>
<li>Az osztálynevek nem tartalmazhatnak szóközöket, de a szavak elválasztására használhat kötőjelet vagy aláhúzást.</li>
<li>Egy HTML-dokumentumon belül minden egyes osztálynévnek egyedinek kell lennie.</li>
</ul>
</div>
<h3 id="stilusok-alkalmazasa-id-szelektorok-hasznalataval" tabindex="-1"><a class="header-anchor" href="#stilusok-alkalmazasa-id-szelektorok-hasznalataval"><span>Stílusok alkalmazása ID-szelektorok használatával</span></a></h3>
<p>Amikor egy HTML fájl egyetlen elemére kell alkalmaznia egy stílust, használjon ID szelektorokat a következő elemek azonosítására
elem azonosítására. Először a HTML-fájlban hozzáadja az id attribútumot az elem nyitó tagjéhez.
és hozzárendel egy, a fájlban egyedi nevet. Ezután hozzáadja az ID-szelektort a fájl CSS-éhez.</p>
<p>Egyetlen elem formázása az ID-szelektor használatával kényelmesebb, mint az elem formázása
inline CSS használatával, mivel az ID-szelektor formázása egy külső stíluslapban is lehet, amelyet
annyi HTML-fájlra alkalmazhat, ahány HTML-fájlra csak szükséges.</p>
<p><strong>Stílusok alkalmazása ID-szelektorok használatával</strong></p>
<h3 id="id-hozzarendelese-egy-elemhez-a-html-fajlban" tabindex="-1"><a class="header-anchor" href="#id-hozzarendelese-egy-elemhez-a-html-fajlban"><span><strong>ID hozzárendelése egy elemhez a HTML fájlban</strong></span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a fájlt
amely a formázandó elemet tartalmazza
ID-szelektorral formázni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a
beszúrási pontot közvetlenül a záró
az elem nyitó címkéje elé
amelyet formázni szeretne.</p>
</li>
<li>
<p>Írjon be egy szóközt, majd az <strong>id=</strong> és az id
nevet dupla idézőjelben - a
például:
<code v-pre>id=&quot;takeaway&quot;</code></p>
</li>
</ol>
<p><strong>Hozzuk létre az azonosító szelektorát a CSS fájlban</strong></p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a
külső CSS fájlt, amelyhez a
az ID-szelektor hozzáadásához.</p>
<p><code v-pre>A:</code> Opcionálisan írjon be egy megjegyzést a
ID-szelektorhoz, amelyet létre fog hozni.</p>
</li>
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez arra a helyre, ahol a
az ID-szelektor létrehozását kívánja létrehozni.</p>
</li>
<li>
<p>Írjon be egy <strong>#</strong>, az ID-szelektor nevét, és
majd <strong>{</strong> - például:
<code v-pre>#takeaway {</code></p>
</li>
</ol>
<p><code v-pre>B:</code> A Visual Studio Code beszúrja a megfelelő
záró <code v-pre>}</code>.</p>
<figure><img src="@source/demo/images/7-fejezet/162_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>
<p>Nyomja meg az &quot;<strong>Enter</strong>&quot; billentyűt egy üres sor létrehozásához.
(nem látható).</p>
</li>
<li>
<p>Adja meg a formázást a
stílus beállítását, vagy az összes
részleteket, vagy az elemek kiválasztásával a
listákból, amelyeket a Visual Studio Code
gépelés közben jelenít meg. A példa
ezt a kódot használja a
elemet vastag betűtípussal, egy
5 pixeles kék szegéllyel a szöveg körül
20 pixeles térközzel a szöveg között
a kettő között:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">#takeaway</span> <span class="token punctuation">{</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span> 900<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property">border</span><span class="token punctuation">:</span> 5px solid
blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Kattintson a <strong>Frissítés</strong> gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>C:</code> Az ID-vel jelölt elem
megjelölt elem veszi fel a formázást.</p>
<figure><img src="@source/demo/images/7-fejezet/163_1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Mi történik, ha nem egyedi azonosítókat használok egy HTML-dokumentumban?</strong></p>
<p>A HTML-dokumentumban ismétlődő, nem egyedi azonosítók két fő problémát okozhatnak. Az első,
a CSS csak az első olyan elemet fogja kiválasztani, amely az azonosítót használja; az ismételt azonosítót tartalmazó további elemeket figyelmen kívül hagyja.
ID-t, így azok nem kapják meg a kívánt formázást. Másodszor, mivel a segítő technológiák a
egyedi azonosítókra támaszkodnak az oldalakon való navigáláshoz és a velük való interakcióhoz, a képernyőolvasók és más segédtechnológiák a következő esetekben
nem működnek megfelelően, ami megnehezíti a fogyatékkal élő felhasználók számára a weboldalak használatát.</p>
</div>
</div></template>


