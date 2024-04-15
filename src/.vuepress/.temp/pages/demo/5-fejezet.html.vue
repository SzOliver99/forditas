<template><div><h2 id="grasp-the-essentials-of-links" tabindex="-1"><a class="header-anchor" href="#grasp-the-essentials-of-links"><span>Grasp the Essentials of Links</span></a></h2>
<p>Linkek a Web egyik meghatározó jellemzői. Egy link, vagy formálisan egy hiperlink, egy olyan elem, amelyre kattinthat, hogy azonnal eljusson egy másik weboldalra vagy egy másik webhelyre, vagy hogy végrehajtson egy műveletet, például elindítson egy e-mail üzenetet. Sok link aláhúzott szövegként jelenik meg, de létrehozhat linket képekként vagy más grafikai objektumokként is.</p>
<p>Ebben a részben megtudhatja, hogy milyen különböző típusú linkek léteznek, és felismerheti azok összetevőit. Emellett megtanulja, hogyan különböznek az abszolút linkek a relatív linkektől, és felfedezi, melyik típust kell használni a weboldalain.</p>
<h3 id="a-kulonbozo-tipusu-linkek-megertese" tabindex="-1"><a class="header-anchor" href="#a-kulonbozo-tipusu-linkek-megertese"><span>A különböző típusú linkek megértése</span></a></h3>
<p>Az HTML különböző típusú linkeket támogat, lehetővé téve, hogy különböző módon használja a linkeket weboldalain.</p>
<p>A legegyszerűbb típusú link a szövegalapú link. Alapértelmezés szerint a szövegalapú linkek kék betűtípussal jelennek meg aláhúzással (A), de más formázást is választhatsz. Amikor egy szöveghivatkozásra kattintasz, alapértelmezett formázása skarlát betűtípusra és aláhúzásra változik, lehetővé téve számodra, hogy lássad, mely hivatkozásokra kattintottál már korábban.</p>
<p>Az ábrázolás elemként képet használ a hivatkozás megjelenítéséhez. Egyéb objektum-hivatkozások más objektumokat használnak fel - például alakzatot - a megjelenítési komponensként.</p>
<p>Amikor a mutatót egy link fölé mozgatod, az a szokásos nyílmutatóról a linkmutatóra (B) változik, egy felfelé mutató jobb kézzel, kinyújtott mutatóujjal, amely tőled távolabb van. Ez a mutatóváltás lehetővé teszi, hogy könnyen felismerje a linkeket bármilyen formában is jelennek meg.</p>
<figure><img src="@source/demo/images/5-fejezet/92-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="azonositsa-a-hivatkozas-osszetevoit" tabindex="-1"><a class="header-anchor" href="#azonositsa-a-hivatkozas-osszetevoit"><span>Azonosítsa a hivatkozás összetevőit</span></a></h3>
<p>A szöveghivatkozásnak az alábbi összetevői vannak, ahogyan azt a közeli ábrázolás mutatja.</p>
<ul>
<li>
<p>Az anchor elem hozza létre a link-et. Az anchor elem egy nyitó <code v-pre>&lt;a&gt;</code> címkét és egy záró <code v-pre>&lt;/a&gt;</code> címkét használ.</p>
</li>
<li>
<p>Az <code v-pre>&lt;a&gt;</code> címke jelzi a anchor kezdetét. A következőkben megvitatott href attribútum a <code v-pre>&lt;a&gt;</code> címke belsejében jelenik meg.</p>
</li>
<li>
<p>Az href attribútum tartalmazza a hiperlink referenciainformációját, azaz azt a célt, amelyre a link mutat. A href= után a hivatkozás célja dupla idézőjelek között jelenik meg.</p>
</li>
<li>
<p>A link szövege a <code v-pre>&lt;a&gt;</code> címke és a <code v-pre>&lt;/a&gt;</code> címke között jelenik meg.</p>
</li>
<li>
<p>A <code v-pre>&lt;/a&gt;</code> címke zárja le az anchor-t.</p>
</li>
</ul>
<figure><img src="@source/demo/images/5-fejezet/92-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="abszolut-linkek-es-relativ-linkek-kozotti-kulonbsegek-es-kivalasztasuk-kozotti-dontes" tabindex="-1"><a class="header-anchor" href="#abszolut-linkek-es-relativ-linkek-kozotti-kulonbsegek-es-kivalasztasuk-kozotti-dontes"><span>Abszolút linkek és relatív linkek közötti különbségek és kiválasztásuk közötti döntés</span></a></h3>
<p>Az HTML lehetővé teszi az abszolút linkek vagy relatív linkek használatát.</p>
<p>Az abszolút link magában foglalja a link céljának teljes címét, beleértve azt a prefixet, amely megmondja a böngészőnek, milyen protokollt használjon. Például az alábbi link abszolút:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>href="https://www.kybz.info/index.html"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Az URL meghatározza a használandó protokollt, HTTPS, és megadja a teljes elérési utat a weboldalt tartalmazó fájlhoz - ebben az esetben a fájl index.html.</p>
<p>A relatív link csak azt a címrészletet tartalmazza, amely szükséges a cél eléréséhez a linket tartalmazó oldalról. Ha a cél egy olyan weboldal, amely ugyanabban a mappában található, mint az oldal, amely tartalmazza a linket, a relatív link csak a céloldal fájlnevet tartalmazhatja - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>href="page2.html"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ha a cél fájl egy másik mappában van, a relatív linknek elegendő információt kell tartalmaznia annak eléréséhez. Például az alábbi link egy olyan fájlra mutat, amely a képek mappában található ugyanazon a webhelyen:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>href="images/logo14.png"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="hozzon-letre-egy-linket-egy-weboldalra" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-egy-linket-egy-weboldalra"><span>Hozzon létre egy linket egy weboldalra.</span></a></h2>
<p>Általában relatív linkeket szeretnél használni saját weboldalaid között, mert a linkek továbbra is működnek, amikor áthelyezed a webhelyedet egyik helyről a másikra. Például előfordulhat, hogy a weboldaladat helyi számítógépeden fejleszted ki, majd áthelyezed a webtárhelyedre, feltöltve a mappákat, így az oldalak relatív pozíciói változatlanok maradnak.</p>
<p>Abszolút linkeket használj, amikor weboldalaidról külső webhelyekre mutatsz. Mivel a címek teljesek, nem érinti az, ha áthelyezed a webhelyet a helyi számítógépedről a webtárhelyedre.</p>
<p>Sok link más weboldalakra vezet, vagy ugyanarra a weboldalra, vagy egy másik weboldalra. Valószínűleg sok oldalt kell összekapcsolnod a weboldaladon belül, hogy a látogatók gyorsan és könnyen tudjanak navigálni az oldalak között.</p>
<p>Ebben a szakaszban egy hivatkozást hozol létre az egyik weboldalon található szövegből egy másik weboldalra ugyanazon a webhelyen. A példát követve az úticél weboldalnak - az oldalnak, amelyre a link mutat - már léteznie kell; szükség esetén hozd létre az oldalt a példa követése előtt.</p>
<h3 id="hozzon-letre-egy-linket-egy-weboldalra-1" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-egy-linket-egy-weboldalra-1"><span>Hozzon létre egy linket egy weboldalra.</span></a></h3>
<ol>
<li>
<p>A Visual Studio Code-ban hozzon létre és mentsen el egy új fájlt, vagy nyissa meg azt a meglévő fájlt, amelyet szeretne használni.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy láthassa a változtatások eredményeit.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson az érintési pontra, vagy válassza ki a meglévő szöveget, ahol be kívánja szúrni a linket.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A példa a meglévő szöveg kiválasztását és annak helyettesítését a linkkel mutatja be.</p>
</div>
<ol start="4">
<li>
<p>Írja a-t. <br>
<code v-pre>A)</code> szövegkibővítések listája megjelenik.</p>
</li>
<li>
<p>Kattintson az a-ra. <br>
A Visual Studio Code beilleszti a <code v-pre>&lt;a&gt;</code> címkét, beleértve a href attribútumot, és az érintési pontot elhelyezi a két idézőjel közé:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ol>
<p><img src="@source/demo/images/5-fejezet/94-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/94-2.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/94-3.png" alt="" loading="lazy"></p>
<ol start="6">
<li>
<p>Írja be a céloldal nevének az első betűjét. <br>
<code v-pre>B)</code> Megjelenik egy olyan oldalak listája, amelyek ezzel a betűvel kezdődnek.</p>
</li>
<li>
<p>Kattintson a céloldalra. <br>
<code v-pre>C)</code> A lap neve megjelenik a hiperhivatkozás referenciájaként.</p>
</li>
<li>
<p>Nyomja le a Tab-ot (nem látható). <br>
Az érintési pont átmozdul a <code v-pre>&lt;a&gt;</code> és <code v-pre>&lt;/a&gt;</code> címkék közé.</p>
</li>
<li>
<p>Írja be a szöveget, amelyet a link megjelenítésére szeretne használni.</p>
</li>
<li>
<p>Kattintson a Frissítés ikonra . <br>
<code v-pre>D)</code> A link megjelenik.</p>
<p>A példában a link H2 formázást kapott.</p>
<p>A linkre kattintva megtekintheti a kapcsolt oldalt.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/95-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/95-2.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/95-3.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan hozok létre egy linket egy másik weboldalra?</strong></p>
<p>Kezdd el a <code v-pre>&lt;a&gt;</code> címkét, ahogy azt a fő szövegben elmagyarázták, majd írd be, vagy — még jobb — illessze be az oldal teljes URL-jét, például www.stochastic.info/introduction.html. Kattintson az érintési pont áthelyezéséhez a <code v-pre>&lt;a&gt;</code> és <code v-pre>&lt;/a&gt;</code> címkék közé, majd írd be a szöveget, amelyet a linknek megjeleníteni szeretnél.</p>
<p><strong>Hogyan hozok létre egy olyan linket, amely új lapon nyílik meg?</strong></p>
<p>Hozd létre a <code v-pre>&lt;a&gt;</code> címkét, ahogy azt a fő szövegben elmagyarázták, de add hozzá a target attribútumot a _blank értékkel — például.</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>40board.html<span class="token punctuation">"</span></span> <span class="token attr-name">target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>_blank<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h2 id="keszits-egy-hivatkozast-egy-masik-helyre-ugyanazon-az-weboldalon" tabindex="-1"><a class="header-anchor" href="#keszits-egy-hivatkozast-egy-masik-helyre-ugyanazon-az-weboldalon"><span>Készíts egy hivatkozást egy másik helyre ugyanazon az weboldalon.</span></a></h2>
<p>Az HTML lehetővé teszi, hogy létrehozz egy hivatkozást egy másik helyre ugyanazon az oldalon. Ez a típusú hivatkozás különösen hasznos hosszabb weboldalak esetén vagy olyan oldalaknál, amelyek több különböző szakaszt tartalmaznak. Például hivatkozásokat helyezhetsz el egy oldal tetején olyan szakaszokhoz, amelyek továbbiak az oldalon lefelé; és ezekben a szakaszokban hivatkozásokat helyezhetsz el az oldal tetejére.</p>
<p>Ehhez a típusú hivatkozáshoz egy nevezett horgonyt helyezel el a megfelelő ponton az weboldalon. A horgony egy horgonytagekből, <code v-pre>&lt;a&gt;&lt;/a&gt;</code>, áll, amely tartalmazza a név attribútumot.</p>
<h3 id="keszits-egy-hivatkozast-egy-masik-helyre-ugyanazon-az-weboldalon-1" tabindex="-1"><a class="header-anchor" href="#keszits-egy-hivatkozast-egy-masik-helyre-ugyanazon-az-weboldalon-1"><span>Készíts egy hivatkozást egy másik helyre ugyanazon az weboldalon:</span></a></h3>
<ol>
<li>
<p>Nyiss meg a Visual Studio Code-ot, vagy hozz létre és ments el egy új fájlt, vagy nyisd meg a meglévő fájlt, amelyet használni szeretnél.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngészőablakban, hogy láthasd a változtatások eredményeit.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a helyre, ahol be szeretnéd szúrni a horgonyt az oldal tetején.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Nyomj entert, hogy szükség esetén üres sorokat adj hozzá.</p>
</div>
<ol start="4">
<li>
<p>Írd be a nyitó <code v-pre>&lt;a&gt;</code> taget. Tartalmazd a név attribútumot, és rendeld hozzá a &quot;top&quot; nevet, így: <code v-pre>&lt;a name=&quot;top&quot;&gt;</code></p>
</li>
<li>
<p>Írd be a záró <code v-pre>&lt;/a&gt;</code> taget: <code v-pre>&lt;/a&gt;</code></p>
</li>
<li>
<p>Görgess le az oldal aljára.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/96.oldal 1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/96.oldal 2.png" alt="" loading="lazy"></p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Az állóvonalat a fájl végére helyezheted, ha a Control+End -t nyomod Windows-on vagy Linux-on. Mac-en a ⌘+ gombot nyomd meg.</p>
</div>
<ol start="7">
<li>
<p>Ha görgetsz, kattints arra a helyre, ahol be szeretnéd szúrni a hivatkozást az oldal tetejére való visszatéréshez (nem látható).</p>
</li>
<li>
<p>Írd be a &quot;p&quot; karaktert az automatikus kiegészítési lista megjelenítéséhez, majd kattints a &quot;p&quot;-re. <br>
<code v-pre>A)</code> A nyitó <code v-pre>&lt;p&gt;</code> tag és a záró <code v-pre>&lt;/p&gt;</code> tag jelenik meg.</p>
</li>
<li>
<p>Írd be az &quot;a&quot; karaktert. Megjelenik a kiegészítési lista.</p>
</li>
<li>
<p>Kattints az &quot;a&quot;-ra. <br>
<code v-pre>B)</code> Megjelenik a nyitó <code v-pre>&lt;a&gt;</code> tag és a záró <code v-pre>&lt;/a&gt;</code> tag, együtt az href attribútummal.</p>
</li>
<li>
<p>Írd be a &quot;#top&quot; linkcímet.</p>
</li>
<li>
<p>Nyomd meg a tabulátor billentyűt.(nem látható) <br>
Az állóvonal az <code v-pre>&lt;a&gt;</code> tag utánra mozog.</p>
</li>
<li>
<p>Írd be a hivatkozás szövegét — például: Return to top of page</p>
</li>
<li>
<p>Kattints a Frissítés gombra ( ). Az weboldal frissül.</p>
</li>
<li>
<p>Görgess le az oldal aljára.</p>
</li>
<li>
<p>Kattints a hivatkozásra. Az oldal teteje jelenik meg.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/97.oldal 1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/97.oldal 2.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/97.oldal 3.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan hozhatok létre egy hivatkozást egy adott horgonyhoz egy másik weboldalon?</strong></p>
<p>Egy másik weboldalon egy adott helyre való hivatkozáshoz a cím végére helyezd a # jel és az alapnév megnevezését.
Például, ha az switch_types.html nevű fájlban a start nevű alapnévre szeretnél hivatkozni, akkor a kapcsolódó URL-ben switch_types.html#start formátumot használnál. Abszolút URL esetén a teljes címet kell megadnod — például, <a href="https://www.kybz.info/switch_types.html#start" target="_blank" rel="noopener noreferrer">https://www.kybz.info/switch_types.html#start<ExternalLinkIcon/></a>.</p>
</div>
<h2 id="szoveges-tipp-megadasa-egy-hivatkozashoz" tabindex="-1"><a class="header-anchor" href="#szoveges-tipp-megadasa-egy-hivatkozashoz"><span>Szöveges tipp megadása egy hivatkozáshoz</span></a></h2>
<p>Amikor egy látogató az egérmutatót egy weboldalon egy hivatkozás fölé helyezi, a böngésző általában megjeleníti a hivatkozás célját valamilyen felhasználói felületi elemen — például az állapotsávban. Ez a megjelenítés gyakran segít a látogatónak, ha tudja, hogy keresnie kell, de néhány megjelenítés túl diszkrét ahhoz, hogy figyelmet vonzzon.</p>
<p>Ahhoz, hogy biztosítsd, hogy a látogató észrevegye a hivatkozást, további szöveget adhatsz hozzá, amely akkor jelenik meg, amikor az egérmutató a hivatkozás fölé kerül. Ehhez a hivatkozás alapjának címkejéhez hozzá kell adnod a &quot;title&quot; tulajdonságot, és ennek a tulajdonságnak a megjelenített szöveget kell hozzárendelned. Szöveges tipp megadása egy hivatkozáshoz:</p>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ban a meglévő fájlt, amelyet használni szeretnél.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Mozgasd az egérmutatót a hivatkozás fölé. <br>
<code v-pre>A)</code> A hivatkozás célja megjelenik.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a helyre, ahol be szeretnéd szúrni a megjelenítendő szöveget a hivatkozáshoz.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Helyezd az állóvonalat a meglévő attribútumok közé, ne az attribútum belsejébe vagy értékébe.</p>
</div>
<ol start="5">
<li>
<p>Írd be a &quot;title&quot; szót, egyenlőségjelet, majd a megjeleníteni kívánt szöveget, például a következő rövid példában:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>title="Click here to display information about different keyboard types."
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a Frissítés gombra ( ). A böngésző frissíti a weboldalt.</p>
</li>
<li>
<p>Mozgasd az egérmutatót a hivatkozás fölé. <br>
<code v-pre>B)</code> Megjelenik a képernyőtipp.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/98.oldal 1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/98.oldal 2.png" alt="" loading="lazy"></p>
<h2 id="iranyitsd-at-a-bongeszot-egy-masik-oldalra" tabindex="-1"><a class="header-anchor" href="#iranyitsd-at-a-bongeszot-egy-masik-oldalra"><span>Irányítsd át a böngészőt egy másik oldalra</span></a></h2>
<p>Néha szükséged lehet arra, hogy átirányítsd a látogatókat egyik weboldalról a másikra. Például, ha két domain-ed van, egy elsődleges és egy másodlagos, lehet, hogy át szeretnéd irányítani a látogatókat a másodlagos domainről az elsődleges domainre.</p>
<p>Általában ezt az átirányítást a szerver szintjén végzed, ami hatékonyabb; konzultálj a webtárhely-szolgáltatóddal az átirányítás konfigurálásával kapcsolatban. De ha a körülmények nem teszik lehetővé az átirányítást a szerveren keresztül, akkor az átirányítást megvalósíthatod a megfelelő weboldal fejlécében lévő http-equiv meta tag használatával, amint azt itt elmagyarázták. Irányítsd át a böngészőt egy másik oldalra:</p>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot, vagy hozz létre és ments el egy új fájlt, vagy nyisd meg a meglévő fájlt, amelyet használni szeretnél. <br>
<code v-pre>A)</code> Ha létrehozol egy új fájlt, írj be minden szükséges szöveget, hogy elmagyarázd, hogy az oldal át fogja irányítani a látogatókat.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a helyre, ahol az elhelyezési pontot az <code v-pre>&lt;header&gt;</code> tag-ek közé szeretnéd helyezni.</p>
</li>
<li>
<p>Az alábbi kódsor egy <code v-pre>&lt;meta /&gt;</code> tag-et tartalmaz, amelyet úgy állít be, hogy frissítse az oldalt:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>refresh<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1; URL=https://www.kybz.info<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ez a kódsor egy másodperces késleltetés után átirányítja a böngészőt az oldalra.</p>
</li>
<li>
<p>Kattints a Frissítés gombra ( ). Az oldal frissül, majd automatikusan átirányítódik a megadott URL-re egy másodperc múlva.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Megváltoztathatod a content= értékét az időzítés változatossá tétele érdekében. Például, content=0 azt jelenti, hogy nincs késleltetés.</p>
</div>
<h2 id="hivatkozas-letrehozasa-fajl-letoltesehez" tabindex="-1"><a class="header-anchor" href="#hivatkozas-letrehozasa-fajl-letoltesehez"><span>Hivatkozás létrehozása fájl letöltéséhez</span></a></h2>
<p>Az HTML lehetővé teszi, hogy létrehozzon egy hivatkozást, amely letölt egy fájlt a weboldalról a látogató számítógépére. A letöltési hivatkozást úgy hozhatja létre, hogy egy horgony (anchor) taget helyez el a megfelelő helyre az oldalon, hozzárendeli a letöltendő fájl elérési útvonalát és nevét a href attribútumhoz, és megadja a hivatkozás szövegét.Fontold meg, hogy emlékeztesd a látogatókat arra, hogy használhatják a &quot;Mentés másként&quot; parancsot a fájl mentésére.</p>
<p>A letöltési fájlok elhelyezése egy külön könyvtárban, például egy letöltési (download) könyvtárban, könnyebbé teszi azok kezelését mint ha szétszórnád őket a weboldal HTML dokumentumaiban.</p>
<ol>
<li>
<p>A Visual Studio Code-ban vagy hozz létre és ments el egy új fájlt, vagy nyiss meg egy már meglévő fájlt, amelyet használni szeretnél.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngésző ablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a beszúrási pont elhelyezéséhez a letöltési hivatkozás beszúrásához.</p>
</li>
<li>
<p>Írja be az a taget, majd kattintson az a tagre. <br>
A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;a&gt;</code> taget, a href attribútumot, és a záró <code v-pre>&lt;/a&gt;</code> taget.</p>
</li>
<li>
<p>Kezdd el gépelni az útvonalat a fájlhoz, amelyet letölti a hivatkozá.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/99.oldal 1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/99.oldal 2.png" alt="" loading="lazy"></p>
<ol start="6">
<li>
<p>Ha az előugró menüben megjelenik a fájl, kattintson rá. Ha nem, fejezze be a név beírását.</p>
</li>
<li>
<p>Nyomja meg a TAB-ot (nem látható). <br>
A beszúrási pont a nyitó <code v-pre>&lt;a&gt;</code> címke &gt; jele után mozog.</p>
</li>
<li>
<p>Írja be a hivatkozásban megjelenítendő szöveget.</p>
</li>
<li>
<p>Kattints a Frissítésre. <br>
<code v-pre>A)</code> A link megjelenik.</p>
</li>
<li>
<p>Kattintson a jobb gombbal a linkre. <br>
Megjelenik a helyi menü.</p>
</li>
<li>
<p>Adja ki a Mentés másként parancsot. Például a Chrome-ban kattintson a Link mentése másként lehetőségre. <br>
Megnyílik a Mentés másként ablak, és megadhatja hogy hová mentse el a fájlt.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/100 1-kep.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/100 2-kep.png" alt="" loading="lazy"></p>
<h2 id="hozzon-letre-egy-hivatkozast-amely-e-mail-uzenetet-indit-el" tabindex="-1"><a class="header-anchor" href="#hozzon-letre-egy-hivatkozast-amely-e-mail-uzenetet-indit-el"><span>Hozzon létre egy hivatkozást, amely e-mail üzenetet indít el</span></a></h2>
<p>A HTML lehetővé teszi egy hivatkozás létrehozását, amely elindítja az új e-mail üzenet létrehozását a látogató alapértelmezett levelezőalkalmazásában. Ez a funkció különféle célokra hasznos, például egyszerű módja annak, hogy a látogatók e-maileket küldhessenek a vállalatának vagy szervezetének. A link nem csak az üzenet e-mail címét, hanem tárgyát is megadhatja, ami különösen hasznos lehet olyan felhasználások esetén, mint például értékesítési kérdések vagy ügyfélszolgálati problémák.</p>
<p>E-mail üzenetet indító hivatkozás létrehozásához meg kell adnia a mailto protokollt, és alapértelmezés szerint meg kell adnia az üzenetbe beírni kívánt információkat.Hozzon létre egy hivatkozást, amely e-mail üzenetet indít</p>
<ol>
<li>
<p>Visual Studio Code-ban nyisd meg a fájlt amit használni szeretnél.</p>
</li>
<li>
<p>Nyisd meg a fájlt egy böngésző ablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra a pontra, ahova a hivatkozásnak kerülnie kell.</p>
</li>
<li>
<p>Írd be az 'a' betűt, majd kattints az 'a' elemre. <br>
A Visual Studio Code beilleszti az nyitó <code v-pre>&lt;a&gt;</code> taget, href attribútumot és a záró <code v-pre>&lt;/a&gt;</code> taget.</p>
</li>
<li>
<p>A dupla idézőjelek között írd be a mailto: kifejezést, amit ez az e-mail cím követ — például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mailto:help@kybz.info<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Ha hozzá szeretnéél adni egy tárgysor-t, írd be a ?subject= kifejezést, amelyet a szöveg követ – például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mailto:help@kybz.info?subject=Ügyfél érdeklődés<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Nyomd meg TAB-ot(nem látható). <br>
<code v-pre>A)</code> beszúrási pont átmozdul a nyitó <code v-pre>&lt;a&gt;</code> tag, &gt; jele után.</p>
</li>
<li>
<p>Írja be a hivatkozáshoz megjelenítendő szöveget.</p>
</li>
<li>
<p>Kattints a Frissités-re. <br>
<code v-pre>A)</code> A link megjelenik.</p>
</li>
<li>
<p>Kattints a link-re. <br>
Az alapértelmezett e-mail alkalmazásod megnyílik, és létrehoz egy üzenetet a linkben megadott részletekkel.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/101 1-kep.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/101 2-kep.png" alt="" loading="lazy"></p>
<h2 id="link-letrehozasa-egy-kepbol" tabindex="-1"><a class="header-anchor" href="#link-letrehozasa-egy-kepbol"><span>Link létrehozása egy képből</span></a></h2>
<p>A szöveges hivatkozások a webes hivatkozások alapvető típusai, de a HTML lehetővé teszi hivatkozások létrehozását képekből és más objektumokból is. Hozzáadhat például olyan miniatűr képekre mutató hivatkozásokat, amelyek a teljes méretű képeket vagy a kapcsolódó információkat jelenítik meg. Mivel előfordulhat, hogy egyes látogatók nem látják a képeket, általában jó ötlet alternatív linket biztosítani, például szöveges linket és képlinket.</p>
<p>Ebben a példában egy weblapon már egy elhelyezett képre mutató hivatkozást ad hozzá. Ha szeretné, először hozzáadhatja a hivatkozást, és majd utána beillesztheti a képet.</p>
<ol>
<li>
<p>A Visual Studio Code programban nyissa meg a használni kívánt fájlt.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban, hogy megtekinthesse az elvégzett változtatások eredményét.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattints arra, hogy beilleszted a kurzort a létező kép <code v-pre>&lt;img&gt;</code> tag-je elé, amelyet linkké alakítasz át.</p>
</li>
<li>
<p>Írja be az 'a' karaktert. <br>
Megjelenik a kiterjesztések listája.</p>
</li>
<li>
<p>Kattints az a-ra. <br>
<code v-pre>A)</code> Megjelenik a nyitó <code v-pre>&lt;a&gt;</code> címke és a záró <code v-pre>&lt;/a&gt;</code> tag a href attribútummal együtt.</p>
</li>
<li>
<p>Kezdje el gépelni az céloldal fájlnevét. <br>
Az automatikus kiegészítés lista megjelenik.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Külső oldalra mutató hivatkozás esetén írja be vagy illessze be a teljes URL-t.</p>
</div>
<ol start="7">
<li>Kattintson a megfelelő oldalra. <br>
<code v-pre>B)</code> Megjelenik az oldal neve.</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/102 1-kep.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/102 2-kep.png" alt="" loading="lazy"></p>
<ol start="8">
<li>
<p>Húzza végig az egérmutatót a záró <code v-pre>&lt;/a&gt;</code> tagen annak kijelöléséhez.</p>
</li>
<li>
<p>Húzza a kijelölt taget az <code v-pre>&lt;img&gt;</code> tag végéhez. <br>
<code v-pre>C)</code> A tag megjelenik az új helyén, mostantól az <code v-pre>&lt;img&gt;</code> tag a hyperlink(hiperhivatkozás) megjelenítési eleme.</p>
<p><code v-pre>D)</code> Opcionálisan törölje az esetleges extra szóközöket.</p>
</li>
<li>
<p>Kattints a Frissítésre. <br>
A weboldal lefrissül.</p>
</li>
<li>
<p>Vidd az egérmutatót a kép fölé (nem látható). <br>
<code v-pre>E)</code> Megjelenik a hivatkozásmutató.</p>
<p><code v-pre>F)</code> Megjelenik a hivatkozási cél.</p>
<p>A hivatkozásra kattintva megjelenítheti a céloldalt.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/103 1-kep.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/103 2-kep.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>How can I make an image link more obvious to the visitor?</strong></p>
<p>Amikor a látogató a kép fölé viszi a mutatót, a hivatkozás mutatója és a hivatkozás címe vizuális jelzéseket ad a hivatkozás jelenlétéről. A hivatkozás nyilvánvalóbbá tétele érdekében fontolja meg a title attribútum hozzáadását a hivatkozáshoz olyan szöveggel, amely akkor jelenik meg az elemleírásban, amikor a mutató a kép felett van. Egyszerűen hozzáadhat szöveget a közelben, mondván az olvasónak, hogy kattintson a képre.</p>
</div>
<h2 id="tobb-hivatkozas-letrehozasa-egy-keprol" tabindex="-1"><a class="header-anchor" href="#tobb-hivatkozas-letrehozasa-egy-keprol"><span>Több hivatkozás létrehozása egy képről</span></a></h2>
<p>A HTML nem csak arra ad lehetőséget, hogy egy képet használjon kattintható elemként egy hivatkozáshoz, de arra is, hogy ugyanazon kép különböző területeit használja különböző hivatkozásokhoz. Egy ilyen, több hivatkozást kezelő képet képtérképnek nevezünk. Téglalap alakú, kör alakú és sokszög alakú területeket is megadhat.</p>
<p>Ez a rész egy egyszerű képtérkép létrehozását mutatja be, amelynek bal és jobb fele különböző hivatkozásokat aktivál. Bármilyen képet használhat, de általában olyat választana, amelynek azonosíthatóan eltérő tartalma van az egyes területeken, amelyeket egy másik célhelyhez fog leképezni.</p>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a használni kívánt fájlt.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson arra a helyre, ahová be szeretné szúrni a képet.</p>
</li>
<li>
<p>Írja be az img parancsot. <br>
Megjelenik az img tagek bővítménylistája.</p>
</li>
<li>
<p>Kattints az img-re. <br>
Az <code v-pre>&lt;img&gt;</code> tag megjelenik az src és az alt attribútumokat tartalmazva:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>A beszúrási ponttal a src_c= utáni kettős idézőjelek között kezdje el beírni a forráspályát. <br>
A kiegészítő lista megjelenik.</p>
</li>
<li>
<p>Kattintson a megfelelő bejegyzésre. <br>
A képfálj neve megjelenik.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/104-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/104-2.png" alt="" loading="lazy"></p>
<ol start="8">
<li>
<p>Kattints a idézőjelek közötti &quot;alt=&quot; mögötti dupla idézőjelre, és írd be a kép alternatív szövegét.</p>
</li>
<li>
<p>Add hozzá a &quot;width&quot; attribútumot egy megfelelő értékkel.</p>
</li>
<li>
<p>Add hozzá a &quot;height&quot; attribútumot egy megfelelő értékkel.</p>
</li>
<li>
<p>Írd be a &quot;usemap&quot; attribútumot, és rendeld hozzá a térképnek adni kívánt nevet. Például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>usemap="#kbmap"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattints a Frissítés (C) gombra. <br>
A weboldal frissül.</p>
</li>
<li>
<p>Kattints arra a helyre, ahol el szeretnéd helyezni a térképdefiníciót, majd írd be a &quot;map&quot; parancsot. <br>
A kiegészítések listája megjelenik.</p>
</li>
<li>
<p>Kattints a &quot;map&quot; parancsra. <br>
Megjelenik a nyitó <code v-pre>&lt;map&gt;</code> címke és a záró <code v-pre>&lt;/map&gt;</code> címke:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Az idézőjelek között írd be a 11. lépésben használt térképnevet a # jel nélkül:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>map</span> <span class="token attr-name">name</span> <span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kbmap<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>map</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Nyomd le a Tab billentyűt a beszúrási pont áthelyezéséhez a <code v-pre>&lt;/map&gt;</code> címke elé, majd nyomd le az Enter billentyűt többször, hogy üres sorokat szúrj be a <code v-pre>&lt;/map&gt;</code> címke elé.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/105-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/105-2.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan készítsek elő egy képet képtérképként való használatra?</strong></p>
<p>Szükség esetén készítsen egy átméretezett verziót a képről, ahogyan azt a 4. fejezetben tárgyaltuk. Ezután nyissa meg ezt a verziót a grafikai alkalmazásában, és az alkalmazás kiválasztási eszközeivel határozza meg a hivatkozni kívánt területeket. Téglalap esetén négy értékre van szükség: a bal felső sarok és a jobb alsó sarok vízszintes és függőleges koordinátáira. Kör esetén három értékre van szükség: a középpont vízszintes és függőleges koordinátáira, majd a sugárra. Sokszög esetén annyi vízszintes és függőleges koordinátapárra van szükség, amennyi a forma körvonalazásához szükséges, egyenes vonalakat feltételezve a csúcsok között.</p>
</div>
<h2 id="tobb-hivatkozas-letrehozasa-egy-keprol-folytatas" tabindex="-1"><a class="header-anchor" href="#tobb-hivatkozas-letrehozasa-egy-keprol-folytatas"><span>Több hivatkozás létrehozása egy képről (folytatás)</span></a></h2>
<p>Amikor képtérképet hoz létre, az area taggel definiálhatja az egyes kattintható területeket. A terület alakjának megadásához használja az area tag shape attribútumát: a &quot;shape=rect&quot; téglalapot, a &quot;shape=circle&quot; kört, a &quot;shape=poly&quot; pedig sokszöget hoz létre. A terület koordinátáinak megadásához használja a coords attribútumot. Például a shape=&quot;rect&quot; coords=&quot;257,0,512,196&quot; egy téglalapot határoz meg, amelynek bal felső sarka 257 képponttal van a kép bal szélétől és 0 képponttal a tetejétől, a jobb alsó sarka pedig 512 képponttal a bal szélétől és 196 képponttal a tetejétől.</p>
<ol start="17">
<li>
<p>Az első üres sorba írja be az &quot;area&quot; szót. <br>
Megjelenik a bővítések listája.</p>
</li>
<li>
<p>Kattintson az &quot;area.r&quot; elemre. <br>
A Visual Studio Code beszúrja egy téglalap alakú terület alapcímkéjét:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>A beszúrási ponttal a &quot;coords&quot; utáni kettős idézőjelek között írja be a téglalap képpontkoordinátáit - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>coords="0,0,256,196"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Nyomja le a Tab billentyűt a beszúrási pont áthelyezéséhez a &quot;href&quot; utáni kettős idézőjelek közé, majd írja be a céloldalt gépeléssel vagy a bővítések listájának használatával.</p>
</li>
<li>
<p>Nyomja le a Tab billentyűt a beszúrási pont áthelyezéséhez az &quot;alt&quot; utáni kettős idézőjelek közé, majd írja be az alt szöveget.</p>
</li>
<li>
<p>Nyomja le a billentyűt a beszúrási pont áthelyezéséhez a záró kettős idézőjelek mögött, majd írja be a title attribútumot és a hozzárendelni kívánt szöveget.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/106-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/106-2.png" alt="" loading="lazy"></p>
<ol start="23">
<li>
<p>Ismételje meg a 17-22. lépéseket a következő üres sorban a második terület létrehozásához. <br>
Ezúttal adja meg a koordinátákat, a célt, az alternatív szöveget és a címet a második terület számára.</p>
<p>A példa a következő kódot használja:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>area</span> <span class="token attr-name">shape</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rect<span class="token punctuation">"</span></span> <span class="token attr-name">coords</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>257,0,512,196<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>maltron_right.html<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Right-handed keyboard<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Click here to display information on the right-handed model.<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés (C) gombra. <br>
A weboldal frissül.</p>
</li>
<li>
<p>Vigye az egérmutatót a kép fölé. <br>
<code v-pre>A)</code> A terület ScreenTip-je megjelenik.</p>
<p><code v-pre>B)</code> A terület cél URL-je megjelenik.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/107-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/107-2.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Létrehozhatok átfedő területeket egy képtérképen?</strong></p>
<p>Nem. Ha a területek átfedik egymást, akkor csak az átfedés előtt definiált területek fognak működni.</p>
<p><strong>Le kell képeznem a kép teljes egészét?</strong></p>
<p>Nem, nem kell leképeznie a kép teljes egészét. Csak azokat a területeket kell definiálnia, amelyeket le szeretne képezni, és a kép többi részét hagyja leképezetlenül.</p>
</div>
<h2 id="hangfajl-beagyazasa-egy-weboldalra" tabindex="-1"><a class="header-anchor" href="#hangfajl-beagyazasa-egy-weboldalra"><span>Hangfájl beágyazása egy weboldalra</span></a></h2>
<p>A HTML audio eleme lehetővé teszi hangfájlok beágyazását egy weboldalra. Beállíthatja, hogy a hangfájl automatikusan lejátszódjon, bár egyes böngészők letiltják vagy némítják az automatikus lejátszást. Általában jobb, ha olyan vezérlőket jelenít meg, amelyek lehetővé teszik a látogatók számára a lejátszás vezérlését.</p>
<p>Háromféle hangfájlt használhat: MP3 fájlokat, WAV fájlokat és Ogg Vorbis fájlokat. A Chrome, Firefox, Edge és Opera mindhárom típust támogatja; a Safari nem támogatja az Ogg Vorbis formátumot. Az MP3 fájlok általában a legjobb választást jelentik, mivel az MP3 egy tömörített formátum, míg a WAV nem.</p>
<h3 id="hangfajl-beagyazasa" tabindex="-1"><a class="header-anchor" href="#hangfajl-beagyazasa"><span>Hangfájl beágyazása</span></a></h3>
<ol>
<li>
<p>Nyissa meg a kívánt fájlt a Visual Studio Code-ban.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson arra a helyre, ahová be szeretné illeszteni a hangfájlt.</p>
</li>
<li>
<p>Írja be az &quot;au&quot; kifejezést. <br>
A kiegészítő lista megjelenik.</p>
</li>
<li>
<p>Kattintson a &quot;Hang&quot; lehetőségre. <br>
Megjelenik a nyitó <code v-pre>&lt;audio&gt;</code> címke és a záró <code v-pre>&lt;/audio&gt;</code> címke, a közöttük lévő src attribútummal.</p>
</li>
<li>
<p>A beszúrási pontnál az src utáni idézőjelek között kezdje el beírni a hangfájl elérési útját. <br>
Megjelenik a kiterjesztések listája.</p>
</li>
<li>
<p>Kattintson a fájlra. <br>
Megjelenik a fájl neve.</p>
</li>
<li>
<p>Nyomja le a jobbra nyilat a beszúrási pont áthelyezéséhez a záró idézőjelek után, majd írjon be egy szóközt (nincs mutatva).</p>
</li>
<li>
<p>Írja be a controls parancsot.</p>
</li>
<li>
<p>Kattintson a <code v-pre>&lt;/audio&gt;</code> címke elé.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/108-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/108-2.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/108-3.png" alt="" loading="lazy"></p>
<ol start="11">
<li>Írja be a szöveget, amelyet a böngésző megjeleníthet, ha nem tudja lejátszani a hangfájlt - például, A böngésző nem tudja lejátszani ezt a hangfájlt.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A nyitójelek közé beírt címke közötti szöveg <code v-pre>&lt;audio&gt;</code> címke és a záró <code v-pre>&lt;/audio&gt;</code> csak akkor jelenik meg, ha a böngésző nem tudja lejátszani a audiofájlt.</p>
</div>
<ol start="12">
<li>
<p>Kattintson a Frissítés gombra. <br>
<code v-pre>B)</code> A hangvezérlő akkor jelenik meg, ha a böngésző képes lejátszani a hanganyagot.</p>
</li>
<li>
<p>Kattintson a Lejátszás gombra. <br>
<code v-pre>A)</code> hang lejátszása megkezdődik.</p>
<p><code v-pre>C)</code> A hangerő beállításához kattintson a Hangerő gombra.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/109-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/109-2.png" alt="" loading="lazy"></p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A hangvezérlo más a
különböző böngészőkben, de az ikonjai
általában könnyen észrevehető.</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A hang automatikus lejátszásához, adja hozzá az autoplay attribútumot a megnyíló audióhoz. <code v-pre>&lt;audio&gt;</code> címkéhez - például.:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>audio</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>media.tactile.mp3<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A controls attribútum elhagyhatod ha nem kívánod megjeleníteni a vezérlőelemeket.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Használjak automatikus lejátszást a hanghoz?</strong></p>
<p>Az igények és a körülmények eltérőek, de általában csak akkor érdemes a hang automatikus lejátszását használni, ha a látogató a következőre számít. Hogy az oldalon lejátsszák a hangot - például ha egy linket követett, hogy meghallgasson egy dalt. Ellenkező esetben a váratlanul és talán indiszkréten felcsendülőhang kevésé pozitív reakciót vált ki a látogatókból. Ne feledje azt sem, hogy egyes böngészők elnyomják az automatikus lejátszást, mert az oly gyakran nemkívánatos. Ezt figyelembe véve mindig tartalmazza a controls attribútumot a lejátszás vezérlőelemeinek megjelenítéséhez, hogy a látogató lejátszhassa a hangot, szüneteltethese, és beállíthatja a hangerőt.</p>
</div>
<h2 id="videofajl-beepitese-egy-weboldalba" tabindex="-1"><a class="header-anchor" href="#videofajl-beepitese-egy-weboldalba"><span>Videofájl beépítése egy weboldalba</span></a></h2>
<p>A HTML videó eleme lehetővé teszi, hogy videófájlokat illesszen be egy weboldalba. Az audióhoz hasonlóan beállíthatja a videofájlt automatikusan lejátszani, de egyes böngészők letiltják vagy elnémítják az automatikus lejátszást. Ha az automatikus lejátszás használatát egy videó esetében, érdemes lehet elnémítani a lejátszást.</p>
<p>Azért hogy ne zavarja a felhasználókat, amikor a weboldal betöltik és ne keljen nekik kersniük némitó gombot ha a hangerő véletlenül túl magas lenne.</p>
<ol>
<li>
<p>Nyissa meg a Visual Studio Code-ban a faájlt, amelyet használni szeretne.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson oda ahova be szeretné illeszteni a videót.</p>
</li>
<li>
<p>Írja be a vi billentyűket. <br>
Megnyílik a kiterjesztések listája.</p>
</li>
<li>
<p>Kattintson a video gombra. <br>
<code v-pre>A)</code> A nyitó <code v-pre>&lt;video&gt;</code> tag és a záró <code v-pre>&lt;/video&gt;</code> címke jelenik meg, az src attribútummal közöttük.</p>
</li>
<li>
<p>A beszúrási pont a src= után lévő idézőjelek között van, kezdje el begépelni a videofájl elérési útvonalát. <br>
Megjelenik a kiterjesztések listája.</p>
</li>
<li>
<p>Kattintson a fájlra. <br>
Megjelenik a fájl neve.</p>
</li>
<li>
<p>Nyomja meg a gombot a beszúrási pont áthelyezéséhez a záró idézőjelek mögé, és írjon be egy szóközt (nem látható).</p>
</li>
<li>
<p>Írja be a vezérlőelemeket.</p>
</li>
<li>
<p>Írjon be egy szóközt, width=, és a szélességet - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>width="90%"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a <code v-pre>&lt;/video&gt;</code> tag elé.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/110-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/110-2.png" alt="" loading="lazy"></p>
<ol start="12">
<li>Írja be a böngésző által megjelenítendő szöveget ha nem tudja a felhasznaló lejátszani a videofájlt -például: A böngésző nem tudja lejátszani ezt a videót videót.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A nyitójelek közé beírt szöveg <code v-pre>&lt;video&gt;</code> címke és a záró <code v-pre>&lt;/audio&gt;</code> címke között található szöveg csak akkor jelenik meg,ha a böngésző nem tudja lejátszani a videofájlt.</p>
</div>
<ol start="13">
<li>
<p>Kattintson a Frissítés gombra. <br>
<code v-pre>B)</code> A videó akkor jelenik meg, ha a böngésző képes lejátszani a videofájlt.</p>
</li>
<li>
<p>Kattintson a Lejátszás gombra. <br>
A hang lejátszása megkezdődik.</p>
<p><code v-pre>C)</code> A hangerő  gombra kattintva beállíthatja a hangerő beállításához.</p>
<p><code v-pre>D)</code> Kattintson a Teljes képernyő a videó teljes méretűre történő kibontásához.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/111-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/111-2.png" alt="" loading="lazy"></p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A videóvezérlésnek más a megjelenése a különböző böngészőkben, de a ikonjai általában könnyen érthetőek.</p>
</div>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A videó automatikus lejátszásához, adjuk hozzá az autoplay attribútumot a nyitó <code v-pre>&lt;video&gt;</code> taghez - például.:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>video</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>intro1.mov<span class="token punctuation">"</span></span> <span class="token attr-name">autoplay</span> <span class="token attr-name">controls</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Hagyja ki a controls attribútumot, ha nem szeretné megjeleníteni a vezérlőelemeket.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Milyen filmformátumokat használhatok?</strong></p>
<p>A HTML közvetlenül támogatja az MP4 formátumot, más néven MPEG-4-et, az Ogg videóformátumot és a WebM formátumot. Az MP4 közel univerzális kompatibilitással rendelkezik, így általános használatra jó választás; ez a formátum is aa YouTube is ajánlja.</p>
</div>
<h2 id="youtube-video-beagyazasa-egy-weboldalba" tabindex="-1"><a class="header-anchor" href="#youtube-video-beagyazasa-egy-weboldalba"><span>YouTube-videó beágyazása egy weboldalba</span></a></h2>
<p>Ahelyett, hogy a saját weboldalán tárolt videofájlt helyezné el valamelyik weboldalán, a YouTube segítségével beágyazhat egy YouTube-on tárolt videofájlt a weboldalába. Egy YouTube-videó beágyazásához egy iframe elemet helyez el a weboldalon, és annak forrását a YouTube megfelelő URL-címére állítja be.</p>
<p>Ha a videó a sajátja, kezdje azzal, hogy feltölti azt a YouTube-fiókjába, beállítja a részleteit, és közzéteszi. Ha a videó valaki másé, jelenítse meg a YouTube-on. Bárhogy is legyen, szerezze be a videó YouTube-azonosítót, ahogyan azt a tippben elmagyaráztuk.</p>
<ol>
<li>
<p>Nyissa meg a Visual Studio Code-ban a fájlt, amelyet a
használni kíván.</p>
</li>
<li>
<p>Nyissa meg a fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A Visual Studio Code-ban kattintson a kívánt beszúrási pontra.</p>
</li>
<li>
<p>Kattintsa meg az i billentyűt. <br>
Megjelenik a bővítmények listája.</p>
</li>
<li>
<p>Kattintson az iframe gombra. <br>
A Visual Studio Code beilleszti a nyitó <code v-pre>&lt;iframe&gt;</code> címkét, az src attribútumot és a frameborder attribútumot, valamint a záró <code v-pre>&lt;/iframe&gt;</code> címkét.</p>
</li>
<li>
<p>A beszúrási pont az idézőjelek között az src= után, adja meg a beágyazáshoz a YouTube URL-címet. Ez a YouTube tartományból, a beágyazási mappából és a a videó YouTube azonosítójábol áll - például:</p>
</li>
</ol>
<p><em><a href="www.youtube.com/embed/9CzCDziLsro">www.youtube.com/embed/9CzCDziLsro</a></em></p>
<ol start="7">
<li>Kattintson a Frissítés gombra. <br>
A Megjelenik a beágyazott videó.</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/112-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/112-2.png" alt="" loading="lazy"></p>
<ol start="8">
<li>
<p>A beillesztési pont mozgatásához a záró dupla idézőjelek után kattintson, majd írjon be egy szóközt (nem látható).</p>
</li>
<li>
<p>Írja be a width= és a megfelelő szélességet pixelben, majd egy szóközzel a height= értéket, és egy megfelelő magasságot pixelben - például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>magasság="375"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>Kattintson a Frissítés  gombra. <br>
<code v-pre>B)</code> A videó az Ön által megadott méretben jelenik meg.</p>
</li>
<li>
<p>Kattintson a Lejátszás gombra (nem látható). <br>
A videó lejátszik.</p>
<p><code v-pre>C)</code> A Hangerő gombra kattintva beállíthatja a hangerőt.</p>
</li>
</ol>
<p><img src="@source/demo/images/5-fejezet/113-1.png" alt="" loading="lazy">
<img src="@source/demo/images/5-fejezet/113-2.png" alt="" loading="lazy"></p>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Hol találom a videó YouTube azonosítóját?</strong></p>
<p>Ha épp most tette közzé a videót, nézze meg a Videó közzététele párbeszédpanel Videókapcsolat mezőjében. Ha már régebben közzétette a videót, lépjen a YouTube-fiókjanak Csatorna oldalára, mozgassa át az egeret a videó fölé, majd kattintson a Részletek gombra a Videó részletei képernyő megjelenítéséhez; ezután nézze meg a Videókapcsolat leolvasását a jobb oldalon. Ha a videó nem az Öné, nyissa meg a videot, kattintson a cím mezőre, és olvassa el az URL v= utáni részét. Például az URL-címen: <em><a href="www.youtube.com/.watch?v=9CzCDziLsro">www.youtube.com/.watch?v=9CzCDziLsro</a></em>, a videó azonosítója <em>9CzCDziLsro</em>.</p>
</div>
</div></template>


