<template><div><h2 id="a-betutipusok-megertese-es-hasznalata" tabindex="-1"><a class="header-anchor" href="#a-betutipusok-megertese-es-hasznalata"><span>A betűtípusok megértése és használata</span></a></h2>
<p>A betűtípusokkal való munka kulcsfontosságú része a webfejlesztésnek, mivel a betűtípusok szabályozzák a megjelenést.
a szöveget a weboldalakon, és segíthetnek a weboldal üzenetének, hangvételének és stílusának közvetítésében.
A CSS ad a betűtípusok és a szöveg stílusának vezérlésére, az olyan alapvető tulajdonságoktól kezdve, mint a betűtípusok
család és a betűméret, egészen az olyan speciálisabb tulajdonságokig, mint a felső- és alulírott betűk, valamint a szövegárnyékok.
Ez a szakasz áttekintést ad a szabályozható betűtípus-tulajdonságokról. A következő szakaszok
bemutatják, hogyan végezhet változtatásokat a tulajdonságokon.</p>
<h3 id="betutipuscsaladok" tabindex="-1"><a class="header-anchor" href="#betutipuscsaladok"><span>Betűtípuscsaládok</span></a></h3>
<p>A betűtípuscsalád olyan betűtípusok halmaza, amelyeknek van egy közös
kialakításuk. Például a serif betűtípusok, kis
kiemelkedések zárják le a betűk vonalait,
míg a sans-serif betűtípusoknál nincsenek serifek. Times New Roman
és a Baskerville példák a serif betűtípusokra; az Arial és a
Helvetica a sans-serif betűtípusok példái.
A weboldalon a szöveghez használt betűtípus megadásához a következőket kell tennie
a font-family tulajdonsággal állíthatja be a betűtípuscsaládot.
A font-family több értéket is megadhat a következőhöz
tartalék betűtípusok megadása a preferencia sorrendjében.
Például,a következő kód a Helvetica, az Arial és a sans- betűtípust határozza meg.
serif betűtípuscsaládot a body elemhez:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> Helvetica<span class="token punctuation">,</span> Arial<span class="token punctuation">,</span>
sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Itt, ha a webböngésző nem rendelkezik Helvetica-val, akkor
visszaáll az Arialra; ha pedig az Arial sincs, akkor az
a sans-serif betűtípusra vált vissza. A szöveg megjelenik
valamilyen formában, mivel a böngésző mindig rendelkezik serif betűtípussal.
és egy sans-serif betűtípus áll rendelkezésre.</p>
<h3 id="betumeret" tabindex="-1"><a class="header-anchor" href="#betumeret"><span>Betűméret</span></a></h3>
<p>A font-size tulajdonság lehetővé teszi a betűtípus méretének beállítását.
méret beállítását fix vagy relatív méret segítségével.
mérést. A fix méretek különböző mértékegységeket használhatnak,
például pixel, amelyet px-nek nevezünk; tipográfiai ems,
em; root ems, a root betűtípushoz viszonyított egységek.
a dokumentum root méretéhez viszonyítva, amelyet a rem jelöl; vagy a font százalékos aránya a
az alapértelmezett mérethez képest, amelyet % jelöl. Egy relatív mérés
összehasonlító értéket használ, például x-kicsi, közepes,
large vagy xx-large.
A következő példa a nagy betűméretet adja meg a
body elemhez:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> large<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A root-ems-ben történő méretezés a betűméreteket a
a HTML body elemhez beállított betűtípushoz képest.
dokumentumhoz. A következő stílusdefiníció például a
a body elem font-size tulajdonságát 16px-re állítja be:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezáltal a dokumentum root em-je szintén 16px-es lesz. A
ezután megadhatja a többi elem betűméretét a root em-ekben.
A következő stílusdefiníció például a
font-size tulajdonságát a p elemhez 1rem-re állítja be,
így az is 16px-es lesz:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
<span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Hasonlóképpen, a font-size: 1.5rem használatával beállíthatja a
24 pixeles betűméret beállítását egy másik elemhez ugyanabban az
dokumentumban.
A root ems használatával történő méretezés lehetővé teszi a betűtípus egyszerű beállítását.
méreteket a dokumentumban: Csak a
a body betűméret tulajdonságának pixelértékét kell csak megváltoztatni.
elemet. A többi elem mérete ekkor megváltozik
automatikusan.</p>
<h3 id="betusuly" tabindex="-1"><a class="header-anchor" href="#betusuly"><span>Betűsúly</span></a></h3>
<p>A font-weight tulajdonság lehetővé teszi a betűtípus súlyának - vastagságának vagy vastagságának - szabályozását.
karaktereket. A font-súlyt beállíthatja egy kulcsszó értékére - világosabb, normál, félkövér, vagy
bolder -, vagy egy 100 (a legkönnyebb) és 900 (a legmerészebb) közötti számra. A következő
példa a h3 elemhez félkövér betűsúlyt ad meg:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="betuszin" tabindex="-1"><a class="header-anchor" href="#betuszin"><span>Betűszín</span></a></h3>
<p>A color tulajdonság segítségével megadhatja a betűtípusok és más objektumok színét. A következő példa a
a deepskyblue színt a stílushoz:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> deepskyblue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A &quot;A színek CSS-ben történő beállításának módjainak megértése&quot; című részben talál magyarázatot a különböző módokra, amelyekkel a
állíthat be színeket, például a színnév megadásával vagy az RGB-értékek megadásával.</p>
<h3 id="alahuzas-felulhuzas-es-athuzas" tabindex="-1"><a class="header-anchor" href="#alahuzas-felulhuzas-es-athuzas"><span>Aláhúzás, felülhúzás és áthúzás</span></a></h3>
<p>A CSS háromféle szövegdíszítés alkalmazását teszi lehetővé: a szöveg alatti aláhúzás, a felülhúzás
a szöveg fölött, és áthúzás a szövegen. Különböző stílusú vonalak közül választhat, például
egyszínű, szaggatott vagy hullámos; beállíthatja a vonalak színét; és megadhatja a vonalvastagságot. A következő példa 5. képpont vastagságú egyszínű, piros felülvonalat ad meg:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h4</span> <span class="token punctuation">{</span>
<span class="token property">text-decoration</span><span class="token punctuation">:</span> overline solid red 5px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="egyeni-betutipusok-hasznalata-kulso-forrasbol" tabindex="-1"><a class="header-anchor" href="#egyeni-betutipusok-hasznalata-kulso-forrasbol"><span>Egyéni betűtípusok használata külső forrásból</span></a></h3>
<p>A böngésző által biztosított beépített betűtípusok mellett a CSS lehetővé teszi külső forrásból származó egyéni betűtípusok használatát is.
forrásokból származó betűtípusokat. A betűtípusokat elhelyezheti a saját webkiszolgálóján, ha van engedélye a terjesztésükre; vagy pedig
a böngésző letöltheti a betűtípusokat egy betűtípus-könyvtárból.
Az egyéni betűtípusok weboldalakon történő használatáról a fejezet későbbi részében található &quot;Egyéni betűtípusok használata weboldalakon&quot; című szakaszban olvashat.
egyéni betűtípusok weboldalakon történő telepítéséről.</p>
<h2 id="a-betucsalad-megadasa" tabindex="-1"><a class="header-anchor" href="#a-betucsalad-megadasa"><span>A betűcsalád megadása</span></a></h2>
<p>A betűcsalád gyakran a legjobb hely a stílus betűformázásának megkezdésére. A CSS lehetővé teszi, hogy
megadhatja a kívánt betűtípust név szerint, de megadhat egy tartalék betűtípus-listát is, amelyet akkor használhat, ha a
preferált betűtípus nem áll rendelkezésre.
A betűtípuscsalád megadásához a font-family tulajdonságot a stílusdefinícióba kell felvenni, és be kell állítani a következő értéket
a megfelelő betűcsaládot vagy betűcsaládokat állítja be.</p>
<h3 id="a-betucsalad-megadasa-1" tabindex="-1"><a class="header-anchor" href="#a-betucsalad-megadasa-1"><span>A betűcsalád megadása</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/168-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>A Visual Studio Code-ban nyissa meg a külső
CSS fájlt, amelyen dolgozni szeretne.</li>
<li>Szintén a Visual Studio Code-ban nyisson meg egy
HTML fájlt, amelyhez a
külső CSS-fájlt. 3. Nyissa meg a HTML fájlt egy böngészőben
ablakban.</li>
</ol>
<p><code v-pre>A)</code> A példában a h3 elemek egy
serif betűtípust használnak.</p>
<p><code v-pre>B)</code> Opcionálisan írjon be egy megjegyzést, amely leírja
a létrehozott stílust - például
például:
/_ harmadik szintű fejléc
stílus _/</p>
<figure><img src="@source/demo/images/8-fejezet/168-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>Kezdje el a stílusdefiníciót a
stílusnév beírásával, amelyet egy szóköz és { - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h3</span> <span class="token punctuation">{</span>
A Visual Studio Code automatikusan beilleszti
a megfelelő zárójelet<span class="token punctuation">,</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>
<p>Nyomja meg az üres sor létrehozásához(nem látható).</p>
</li>
<li>
<p>Írja be a betűtípust.
Megjelenik a bővítmények listája.</p>
</li>
<li>
<p>Kattintson a font-family gombra.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/169-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>C)</code>. Visual Studio Code beilleszti a font-family tulajdonságot.A Visual Studio Code megjelenít egy listát
betűtípuscsaládok listáját.</p>
<ol start="8">
<li>Ha a kívánt betűtípuscsalád
megjelenik, kattintson rá.
Ha nem, akkor írja be a
kívánt betűtípuscsaládot. Lásd a tippet
példát.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/169-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>D)</code> A font-family tulajdonság megjeleníti
a betűtípuscsalád részleteit
választott. 9. Kattintson a Frissítés gombra.
A weboldal frissül és megjelenik
az új formázást.</p>
<p><code v-pre>E)</code> A példában a h3 elemek
sans-serif betűtípusra változnak.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p><strong>Hogyan adhatom meg egy betűcsalád adatait?</strong>
Írja be a betűtípuscsalád nevét. Ha a név szóközöket vagy speciális karaktereket tartalmaz, írja be a nevet a következő szövegbe
idézőjelbe - például: font-family: &quot;Helvetica Neue&quot;. Ha a név nem tartalmaz
nem tartalmaz szóközöket vagy speciális karaktereket, írja be a nevet díszítés nélkül - például: font-family:
Helvetica. A betűtípusok tartalékhalmazának megadásakor vesszővel válassza el őket - például,
font-family: &quot;Helvetica Neue&quot;, Helvetica, sans-serif a Helvetica Neue betűtípust adja meg;
ennek hiányában Helvetica; és ennek hiányában sans-serif betűtípus.</p>
</div>
<!---New page-->
<h2 id="allitsa-be-a-betumeretet-es-a-betuvastagsagot" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-betumeretet-es-a-betuvastagsagot"><span>Állítsa be a betűméretet és a betűvastagságot</span></a></h2>
<p>A betűméret és a betűvastagság hatalmas különbséget jelenthetnek egy weboldalon megjelenő szöveg kinézetében. A CSS lehetővé teszi számodra, hogy megadhasd a betűméretet a font-size tulajdonság segítségével, és hogy szabályozhasd a betűvastagságot a font-weight tulajdonság használatával.
A betűméretet vagy egy konkrét magasságra állíthatod be, például pixel vagy tipográfiai ems mértékegységgel, vagy relatív méretre, például nagyobbra. A betűvastagságot vagy egy kulcsszó értékre, például könnyebb vagy vastagabb, vagy egy számra állíthatod be 100 és 900 között, ahol 100 a legkönnyebb, és 900 a legvastagabb.</p>
<h3 id="allitsa-be-a-betumeretet-es-a-betuvastagsagot-1" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-betumeretet-es-a-betuvastagsagot-1"><span>Állítsa be a betűméretet és a betűvastagságot</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/170-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>A Visual Studio Code-ban nyisd meg azt a külső CSS fájlt, amelyen dolgozni szeretnél.</li>
<li>Szintén a Visual Studio Code-ban nyisd meg azt az HTML fájlt, amelyhez hivatkoztál a külső CSS fájlra.</li>
<li>Nyisd meg az HTML fájlt egy böngészőablakban.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha új stílust kezdesz, gépeld be a nevét, majd egy szóközt és a Visual Studio Code automatikusan beírja a megfelelő zárójelet.</p>
</div>
<ol start="4">
<li>Kattints arra a helyre a stílusban, ahova hozzá akarod adni a betűméretet.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/170-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>
<p>Gépeld be a &quot;font&quot; szót.Megjelenik a kibővítési lista.</p>
</li>
<li>
<p>Kattints a &quot;font-size&quot;-ra.</p>
</li>
</ol>
<p><code v-pre>A)</code> Visual Studio Code beilleszti a font-size tulajdonságot. A Visual Studio Code megjeleníti a betűméretek listáját.</p>
<ol start="7">
<li>Ha a használni kívánt betűméret szerepel a listában, kattints rá. Ha nem, gépeld be a betűméretet. Ebben a példában 24px-et használunk.</li>
</ol>
<!---170. oldal--->
<figure><img src="@source/demo/images/8-fejezet/171-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="8">
<li>
<p>Kattints a Frissítés gombra.
Az internetes oldal frissül.
A Betűméret változása megjelenik.</p>
</li>
<li>
<p>Új sorba írd be a &quot;font&quot; szót.
Megjelenik a kibővítési lista.</p>
</li>
<li>
<p>Kattints a &quot;font-weight&quot;-ra.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/171-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>C)</code>Visual Studio Code beilleszti a font-weight tulajdonságot.
A Visual Studio Code megjeleníti a betűvastagságok listáját.</p>
<ol start="11">
<li>
<p>Kattints arra a betűvastagságra, amelyet szeretnél. A példa könnyebb súlyt használ.
A Visual Studio Code beírja a betűvastagság értékét a kódodba.</p>
</li>
<li>
<p>Kattints a Frissítés gombra.
Az internetes oldal frissül.</p>
</li>
</ol>
<p><code v-pre>D)</code>A betűvastagság változása megjelenik.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>A betűvastagság numerikus értékei hogyan működnek?
A 100 a legkönnyebb súlyt jelenti, és a &quot;vékony&quot; jelentésűre képezi le; a 400 a szabványos betűvastagságot jelenti, és a &quot;normál&quot; jelentésűre képezi le; míg a 900 a legnehezebb súlyt jelenti, és a &quot;fekete&quot; jelentésűre képezi le. A többi érték, amelyeket használhatsz, a következők: 200, ami a &quot;könnyebb&quot; jelentésűre képezi le; 300, ami a &quot;világos&quot; jelentésűre képezi le; 500, ami a &quot;közepes&quot; jelentésűre képezi le; 600, ami a &quot;félvastag&quot; jelentésűre képezi le; 700, ami a &quot;vastag&quot; jelentésűre képezi le; és 800, ami a &quot;vastagabb&quot; jelentésűre képezi le.</p>
</div>
<h2 id="allitsa-be-a-sor-magassagat-es-a-betukozt" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-sor-magassagat-es-a-betukozt"><span>Állítsa be a sor magasságát és a betűközt</span></a></h2>
<p>A CSS lehetővé teszi számodra, hogy beállítsd a sor magasságát és a betűtávolságot az HTML dokumentumaidban. A sor magasságának beállításához a line-height tulajdonságot állítod be a stílusban. Használhatsz vagy egy konkrét mértéket, például 24px-et, hogy a sor magassága 24 pixel legyen, vagy a betűméret többszörösét, például 1.5-öt, hogy a sor magassága a betűméret másfélszerese legyen.
A betűtávolság beállításához be kell foglalnod a letter-spacing tulajdonságot a stílusban, és meg kell határoznod a kívánt távolságot minden betű között.</p>
<h3 id="allitsa-be-a-sor-magassagat-es-a-betukozt-1" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-sor-magassagat-es-a-betukozt-1"><span>Állítsa be a sor magasságát és a betűközt</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/172-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>A Visual Studio Code-ban nyisd meg azt a külső CSS fájlt, amelyen dolgozni szeretnél.</li>
<li>Szintén a Visual Studio Code-ban nyisd meg azt az HTML fájlt, amelyhez hivatkoztál a külső CSS fájlra.</li>
<li>Nyisd meg az HTML fájlt egy böngészőablakban.
Megjegyzés:
Ha új stílust kezdesz, gépeld be a nevét, majd egy szóközt és a Visual Studio Code automatikusan beírja a megfelelő zárójelet.</li>
<li>Kattints arra a helyre a stílusban, ahova hozzá akarod adni a sor magasságát.</li>
<li>Gépeld be a &quot;li&quot; szót. Megjelenik a kibővítési lista.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/172-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Kattints a &quot;line-height&quot;-ra.</li>
</ol>
<p><code v-pre>A)</code>A Visual Studio Code beilleszti a line-height tulajdonságot.A Visual Studio Code megjeleníti az értékek listáját.</p>
<ol start="7">
<li>Ha megjelenik az érték, amelyet szeretnél, kattints rá (nem látható). Ellenkező esetben gépeld be az értéket. Ebben a példában a gépelt érték 1.5, hogy a sor magassága legyen a betűméret másfélszerese.</li>
</ol>
<p><code v-pre>B)</code>A betűméret 16px.</p>
<ol start="8">
<li>Kattints a Frissítés gombra.Az internetes oldal frissül.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/173-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>C)</code>A bekezdéselemek (p elemek) sor magassága megváltozik.</p>
<ol start="9">
<li>Egy üres sorban a stílusban gépeld be a &quot;le&quot; szót.
Megjelenik a kibővítési lista.</li>
<li>Kattints a &quot;letter-spacing&quot;-re.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/173-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>D)</code>A Visual Studio Code beilleszti a letter-spacing tulajdonságot.A Visual Studio Code megjeleníti az értékek listáját.</p>
<ol start="11">
<li>Gépeld be azt a betűtávolságot, amelyet szeretnél. Ebben a példában a gépelt érték 2px, hogy két pixelnyi tér legyen minden betű között.</li>
<li>Kattints a Frissítés gombra. Az internetes oldal frissül.</li>
</ol>
<p><code v-pre>E)</code>A bekezdéselemek betűtávolsága megváltozik.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>Általában a sor magasságát érdemes a betűméret többszörösére állítani, mivel ez jobb eredményeket nyújt. Ez lehetővé teszi, hogy a sor magassága arányosan változzon a betűmérettel. Ennek az arányos változásnak köszönhetően könnyebb fenntartani egy összhangban lévő elrendezést különböző képernyőméretek esetén.</p>
<p>Ezt a típusú mértéket néha mértékegységek nélkülinek nevezik, mivel nem használ mértékegységeket, mint például pixelek vagy ems mértékegységeket.</p>
</div>
<!--174. oldal:--->
<h2 id="feljegyzeseket-es-also-indexeket-hozz-letre" tabindex="-1"><a class="header-anchor" href="#feljegyzeseket-es-also-indexeket-hozz-letre"><span>Feljegyzéseket és alsó indexeket hozz létre.</span></a></h2>
<h3 id="adj-hozza-feljegyzeseket-es-also-indexeket-egy-html-fajlhoz" tabindex="-1"><a class="header-anchor" href="#adj-hozza-feljegyzeseket-es-also-indexeket-egy-html-fajlhoz"><span>Adj hozzá feljegyzéseket és alsó indexeket egy HTML fájlhoz:</span></a></h3>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot, és nyisd meg azon külső CSS fájlt, amelyen dolgozni szeretnél.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyisd meg azt a HTML fájlt, amelyhez hivatkoztál a külső CSS fájlra.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
</ol>
<p><code v-pre>A)</code>. Az példa HTML fájl tartalmaz egy karaktert, amely feljegyzést igényel.</p>
<p><code v-pre>B)</code>. Tartalmaz továbbá egy karaktert, amely alsó indexet igényel.</p>
<ol start="4">
<li>
<p>Kattints a beszúrási pont elé azon karakter előtt, amely feljegyzést igényel.</p>
</li>
<li>
<p>Írd be a nyitó <code v-pre>&lt;sup&gt;</code> címkét.</p>
</li>
<li>
<p>Mozgasd a beszúrási pontot a karakter utánra, majd írd be a záró <code v-pre>&lt;sup&gt;</code> címkét.</p>
</li>
<li>
<p>Kattints a karakter elé, amely alsó indexet igényel, majd írd be a nyitó <code v-pre>&lt;sup&gt;</code> címkét.</p>
</li>
<li>
<p>Mozgasd a beszúrási pontot a karakter utánra, majd írd be a záró <code v-pre>&lt;/sup&gt;</code> címkét.</p>
</li>
<li>
<p>Kattints a Frissítés ( ) gombra.</p>
</li>
</ol>
<p><code v-pre>A)</code> weboldal frissül.</p>
<p><code v-pre>C)</code> A feljegyzés megjelenik.</p>
<p><code v-pre>D)</code> Az alsó index megjelenik.</p>
<!--175. oldal:--->
<h3 id="allitsd-be-a-feljegyzes-stilusat-es-az-also-index-stilusat" tabindex="-1"><a class="header-anchor" href="#allitsd-be-a-feljegyzes-stilusat-es-az-also-index-stilusat"><span>Állítsd be a feljegyzés stílusát és az alsó index stílusát:</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/175-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban kattints a külső CSS fájl fülére.</p>
</li>
<li>
<p>Egy új sorban írd be a sup szót, egy szóközt, és egy { karaktert. A Visual Studio Code automatikusan beilleszti a záró kapcsos zárójel karaktert, }.</p>
</li>
<li>
<p>Nyomj Entert, hogy beszúrj egy üres sort.</p>
</li>
<li>
<p>Írd be a v szót. Megjelenik a kibontási lista.</p>
</li>
<li>
<p>Kattints a vertical-align lehetőségre.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/175-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>E)</code>Ekkor a Visual Studio Code beilleszti a vertical-align tulajdonságot.</p>
<ol start="6">
<li>Kattints a super értékre.</li>
</ol>
<p><code v-pre>F)</code> A szuper érték megjelenik.</p>
<ol start="7">
<li>
<p>Írd be a font-size: következőleg a kívánt értéket. A példa 0.6em értéket használ.</p>
</li>
<li>
<p>Ismételd meg a 2-től 7-ig terjedő lépéseket az alsó index stílusának definiálásához. Rendeld hozzá a sub értéket a vertical-align
tulajdonsághoz. A font-size tulajdonsághoz rendeld hozzá ugyanazt az értéket. Például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">sub</span> <span class="token punctuation">{</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> sub<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 0.6em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li>Kattints a Frissítés ( ) gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>G)</code>Az új formázást a feljegyzések és az alsó indexek alkalmazzák.</p>
<!--176. oldal--->
<h3 id="szinek-beallitasanak-megertese-a-css-ben" tabindex="-1"><a class="header-anchor" href="#szinek-beallitasanak-megertese-a-css-ben"><span>Színek beállításának megértése a CSS-ben</span></a></h3>
<p>CSS lehetővé teszi a szín beállítását többféle módon. A legegyszerűbb mód azoknak a színeknek a használata, amelyek beépítve vannak a CSS-be, például piros, zöld és királykék. Ha szélesebb színskálára van szükséged, színkóddal, RGB vagy RGBA értékkel, vagy HSL vagy HSLA színértékkel is meghatározhatod a színt. Ez a részletesen magyarázza ezeket a különböző módszereket.</p>
<p><strong>Szín beállítása a színnév használatával</strong></p>
<p>A CSS-nek széles körű beépített színei vannak, amelyek az ábécé sorrendjében futnak az aliceblue-tól az antiquewhite-on át a yellowig és a yellowgreenig. Ezek közül az egyiket egyszerűen megadhatod a nevével. Az alábbi példa alkalmazza a saddlebrown színt:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> saddlebrown<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Szín beállítása hexadecimális színkóddal</strong></p>
<p>A CSS lehetővé teszi, hogy hexadecimális színkóddal adj meg színeket. Például a hexadecimális színkód #800080 a lila színt jelenti, a #FFA500 kód az narancsot, míg a #4169E1 kód a királykék színt jelenti. Az alábbi példa alkalmazza a királykék színt:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> #4169e1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Szín beállítása RGB vagy RGBA színérték használatával</strong></p>
<p>RGB a vörös, zöld, kék rövidítése. Az RGB egy olyan additív színmodellt használ, amely a vörös, zöld és kék fény különböző mennyiségeinek összeadásával hozza létre a színeket. Az RGB érték kifejezi a vörös fény mennyiségét, a zöld fény mennyiségét és a kék fény mennyiségét, mindegyiket egy 0–255 közötti egész számként. Például a világospiros RGB(255, 0, 0) - a legnagyobb érték a vörös számára, zöld és kék nulla. Az alábbi példa alkalmazza a feketét:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>RGBA, ahol az alfa érték beállítja a szín átlátszóságát vagy opacitását, 0-tól 1-ig terjedő skálán, ahol a 0 a teljes átlátszóságot, az 1 pedig a teljes opacitást jelenti. Az alábbi példa alkalmaz egy félig átlátszó piros színt:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Szín beállítása HSL vagy HSLA színérték használatával</strong></p>
<p>HSL a Hue (színárnyalat), Saturation (telítettség), Lightness (világosság) rövidítése. A Hue megadja a szín pozícióját a színskála szerint, 0 foktól 360 fokig terjedően. A Saturation megadja a szín intenzitását százalékban, ahol a 0% szürkét, a 100% pedig teljesen telített színt jelent. A Lightness megadja a szín fényességét százalékban, ahol a 0% fekete, a 100% fehér, és az 50% a tiszta szín. Az alábbi példa alkalmaz egy teljesen áttetsző kék színt:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span>240<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>HSLA az HSLA rövidítése, ahol az alfa érték beállítja a szín átlátszóságát vagy opacitását, 0-tól 1-ig terjedő skálán, ahol a 0 a teljes átlátszóságot, az 1 pedig a teljes opacitást jelenti. Az alábbi példa alkalmazza a korábbi kék színt 50% átlátszósággal:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>240<span class="token punctuation">,</span> 100%<span class="token punctuation">,</span> 50%<span class="token punctuation">,</span> 0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><!--177. oldal--->
<figure><img src="@source/demo/images/8-fejezet/177-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg azt a külső CSS fájlt, amelyben szeretnéd beállítani a betűszíneket.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyisd meg azt az HTML fájlt, amelyhez hivatkoztál a külső CSS fájlra.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha új stílust kezdesz, írd be a nevét, egy szóközt, majd egy { karaktert. A Visual Studio Code automatikusan beilleszti a megfelelő záró kapcsos zárójelet, }.</p>
</div>
<ol start="4">
<li>Kattints a stílusban arra a helyre, ahová hozzá akarod adni a színt.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/177-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>
<p>Írd be a co szót. Megjelenik a kibontási lista.</p>
</li>
<li>
<p>Kattints a color lehetőségre. A Visual Studio Code beilleszti a color tulajdonságot.</p>
</li>
</ol>
<p><code v-pre>A)</code>Megjelenik az értékek listája.</p>
<ol start="7">
<li>
<p>Ha szín nevével szeretnéd megadni a színt, kattints a névre. Ellenkező esetben írd be a hexadecimális kódot, az RGB vagy RGBA kódot, vagy a HSL vagy HSLA kódot a színhez.
A szín értéke megjelenik a kódban.</p>
</li>
<li>
<p>Kattints a Frissítés ( ) gombra. A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>C)</code>Az elem átveszi a szín formázását.</p>
<!--what the fuck-->
<h2 id="szovegarnyekok-alkalmazasa" tabindex="-1"><a class="header-anchor" href="#szovegarnyekok-alkalmazasa"><span>Szövegárnyékok alkalmazása</span></a></h2>
<p>A text-shadow tulajdonság a CSS-ben lehetővé teszi, hogy szövegárnyékokat alkalmazz egy stílushoz. Ez a tulajdonság négy argumentumot fogad: vízszintes árnyék, függőleges árnyék, elmosódás sugár és szín. A vízszintes árnyék.
Az &quot;argument&quot; meghatározza a vízszintes távolságot az árnyék és a szöveg között; egy negatív érték az árnyékot balra mozgatja, míg egy pozitív érték jobbra mozgatja az árnyékot. A &quot;v-shadow&quot; argumentum meghatározza a függőleges távolságot az árnyék és a szöveg között; egy negatív érték felfelé mozgatja az árnyékot, míg egy pozitív érték lefelé mozgatja azt. A &quot;blur-radius&quot; argumentum meghatározza az alkalmazott elmosódás mértékét az árnyékra. A &quot;color&quot; argumentum meghatározza a színt.</p>
<h3 id="szovegarnyekok-alkalmazasa-1" tabindex="-1"><a class="header-anchor" href="#szovegarnyekok-alkalmazasa-1"><span>Szövegárnyékok alkalmazása</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/178-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyisd meg a külső CSS fájlt a Visual Studio Code-ban, amelyben szeretnéd alkalmazni a szövegárnyékokat.</p>
</li>
<li>
<p>Szintén a Visual Studio Code alkalmazásban nyisd meg az HTML fájlt, amelyhez csatoltad a külső CSS fájlt.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha új stílust indítasz, írd be a nevet, egy szóközt, majd a {. A Visual Studio Code automatikusan beírja a záró kapcsos zárójelét, }.</p>
</div>
<ol start="4">
<li>
<p>Kattints azon a stíluson, ahol alkalmazni szeretnéd a szövegárnyékokat.</p>
</li>
<li>
<p>Ird be a TE szót.Megjelenik  az automatikus kibővítés lista.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/178-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Kattintson a Szövegárnyékokra</li>
</ol>
<p><code v-pre>A)</code>Visual Studio Code displays the values list.A Visual Studio Code megjeleníti az értékek listáját.</p>
<ol start="7">
<li>
<p>Írd be a vízszintes távolságot. Ebben a példában 3px-t használunk.</p>
</li>
<li>
<p>Írd be egy szóközt, majd a függőleges távolságot. Ebben a példában 6px-t használunk.</p>
</li>
<li>
<p>Írd be egy szóközt, majd az elmosódás sugárát. Ebben a példában 6px-t használunk.</p>
</li>
<li>
<p>Írd be egy szóközt, majd a színt. Ebben a példában feketét használunk.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra. A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>B)</code> Megjelenik a szöveg árnyéka.</p>
<h2 id="monospaced-fontot-megjelenites" tabindex="-1"><a class="header-anchor" href="#monospaced-fontot-megjelenites"><span>Monospaced fontot megjelenítés.</span></a></h2>
<p>A CSS lehetővé teszi a monospace betűtípus megjelenítését a weboldalakon. A monospace betűtípus minden karakternek azonos szélességet ad, nem engedi, hogy a karakterek szélessége változzon. A monospace betűtípus hasznos információk megjelenítésére, például programkódokra, és a technikai kifejezéseket lehet megkülönböztetni a rendes szövegtől.</p>
<p>A monospace betűtípus használatához létrehozhatsz egy osztályt a CSS fájlodban, és megadhatod a megfelelő betű családot, például Courier-t, a rendszer monospace betűtípusával biztosítva egy visszaesést. Ezután egy span elemet használhatsz, hogy minden releváns szövegrészletet megjelölj az osztályhoz tartozónak.</p>
<h3 id="monospaced-fontot-megjelenitese" tabindex="-1"><a class="header-anchor" href="#monospaced-fontot-megjelenitese"><span>Monospaced fontot megjelenítése:</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/179-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg a külső CSS fájlt, amelyben szeretnéd alkalmazni a monospace betűtípust.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyisd meg azt az HTML fájlt, amelyhez csatoltad a külső CSS fájlt.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A CSS-ben írd be az osztályválasztó nevét - például:
<code v-pre>.mono {</code></p>
</li>
<li>
<p>Add meg a &quot;font-family&quot; tulajdonságot, és rendeld hozzá a monospace betűtípusokat - például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">"Courier New"</span><span class="token punctuation">,</span>
Courier<span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/8-fejezet/179-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>
<p>Zárd le a stílusdefiníciót egy záró kapcsos zárójellel, }.</p>
</li>
<li>
<p>Kattints az HTML fájlra.
Az HTML fájl aktívvá válik.</p>
</li>
<li>
<p>Hozz létre egy span elemet, amely körülveszi minden kifejezést. Rendeld hozzá a mono osztályt minden spanhez. Például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code>&lt;span class=<span class="token string">"mono"</span>>actuation
force&lt;/span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li>Kattints a Frissítésre ( ).
A weboldal frissül.</li>
</ol>
<p><code v-pre>A)</code>A span elemekkel megjelölt kifejezések megjelennek monospace betűtípussal.</p>
<h2 id="szovegdekoracio-alkalmazasa" tabindex="-1"><a class="header-anchor" href="#szovegdekoracio-alkalmazasa"><span>Szövegdekoráció alkalmazása.</span></a></h2>
<p>A CSS biztosítja a text-decoration tulajdonságot a szöveg &quot;dekorációjának&quot; alkalmazásához. Használhatod az overline értéket egy vonal alkalmazásához a szöveg felett, az underline értéket egy vonal alkalmazásához a szöveg alatt, a linethrough értéket áthúzás alkalmazásához, egy vonal egyenesen a szöveg felett. Miután meghatározta a vonaltípust, beállíthatod annak színét, például csokoládé vagy sötétsaláta; beállíthatod a stílusát, például pontozott, szaggatott, hullámos vagy folytonos; és beállíthatod a vastagságát.</p>
<h3 id="szovegdekoracio-alkalmazasa-1" tabindex="-1"><a class="header-anchor" href="#szovegdekoracio-alkalmazasa-1"><span>Szövegdekoráció alkalmazása:</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/180-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg azt a külső CSS fájlt, amelyben definiálni szeretnéd a szöveg dekorációt.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyisd meg azt az HTML fájlt, amelyhez csatoltad a külső CSS fájlt.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ha új stílust kezdesz, írd be a nevét, egy szóközt, majd a {. A Visual Studio Code automatikusanbeírja a záró kapcsos zárójelét, }.</p>
</div>
<ol start="4">
<li>Kattints arra a stílusra, amelyre alkalmazni szeretnéd a szövegdekorációt.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/180-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>
<p>Írd be a &quot;te&quot; szót. Megjelenik az automatikus kibővítés lista.</p>
</li>
<li>
<p>Kattints a &quot;text-decoration&quot; lehetőségre.</p>
</li>
</ol>
<p><code v-pre>A)</code> Visual Studio Code beilleszti a text-decoration tulajdonságot. Megjelenik az értékek listája.</p>
<ol start="7">
<li>Kattints a line-through, overline vagy underline lehetőségre, ahogy szükséges. Ebben a példában az underline-t használjuk.</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/181-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>B)</code> A Visual Studio Code beilleszti a kattintott vonaltípus kódját.</p>
<ol start="8">
<li>Kattints a Frissítés gombra.</li>
</ol>
<p><code v-pre>C)</code> A vonal megjelenik az alapértelmezett beállításokkal - egy egyszerű fekete vonal.</p>
<ol start="9">
<li>
<p>Írj be egy szóközt, majd a vonal színét - például:
text-decoration: underline
red</p>
</li>
<li>
<p>Írj be egy további szóközt, majd a vonal stílusát - például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">text-decoration</span><span class="token punctuation">:</span> underline
red wavy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/8-fejezet/181-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="11">
<li>Írj be még egy szóközt, majd a vonal vastagságát - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">text-decoration</span><span class="token punctuation">:</span> underline
red wavy 5px
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>Kattints a Frissítés gombra.</li>
</ol>
<p><code v-pre>D)</code> A vonal megjeleníti a megadott formázást.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp:</p>
<p>A text-decoration-line tulajdonság arra szolgál, hogy megadja a szövegdekoráció vonaltípusát. CSS-ben két módon lehet meghatározni a szöveg dekorációját. Az egyszerűbb módszer a text-decoration tulajdonság használata, mint például a fő szövegben, ahol a vonaltípust az első argumentumként, a színt a második argumentumként, a vonalstílust a harmadik argumentumként, és a vastagságot a negyedik argumentumként adjuk meg; az első argumentum kötelező, a többi három pedig opcionális. A hosszabb mód az, amikor a text-decoration-line tulajdonságot használod a vonaltípus beállítására, a text-decoration-color tulajdonságot a szín beállítására, a text-decoration-style tulajdonságot a stílus beállítására, és a text-decoration-thickness tulajdonságot a vastagság beállítására.</p>
</div>
<h2 id="a-html-entitasok-ismertetese" tabindex="-1"><a class="header-anchor" href="#a-html-entitasok-ismertetese"><span>A HTML-entitások ismertetése</span></a></h2>
<p>Az HTML entitások olyan kódok vagy karakterek, amelyeket az HTML-ben használnak a fenntartott karakterek és szimbólumok megjelenítésére. Az HTML entitások általában egy különleges kódot vagy nevet tartalmaznak, amelyet egy ampersand jel (&amp;) és egy pontosvessző (😉 között adnak meg. Például beírhatsz az HTML entitást ∑, hogy az összegjel, Σ, megjelenjen egy HTML dokumentumban.</p>
<h3 id="mik-azok-a-html-entitasok" tabindex="-1"><a class="header-anchor" href="#mik-azok-a-html-entitasok"><span>Mik azok a HTML entitások?</span></a></h3>
<p>Az HTML entitások olyan kódok, amelyeket be lehet írni az HTML-be, hogy megjelenítsék azokat a karaktereket és szimbólumokat, amelyeket nem lehet közvetlenül beírni az HTML-be.</p>
<p>Néhány HTML entitás fenntartott karakterek, ami azt jelenti, hogy karaktereket használnak az HTML nyelvben. Például az HTML címkék a kisebb-értékű szimbólumot, &lt;, és a nagyobb-értékű szimbólumot, &gt;, használják elhatárolásként, ezért az HTML nem engedi meg ezeknek a karaktereknek más célokra történő használatát, de biztosítja az HTML entitásokat, például <code v-pre>&amp;lt</code>; a kisebb-értékű szimbólum beillesztésére és <code v-pre>&amp;gt</code>; a nagyobb-értékű szimbólum beillesztésére az HTML dokumentumokba. Hasonlóképpen, mivel az HTML entitások az ampersand karaktert, &amp;, használják, nem lehet közvetlenül használni az ampersand karaktert egy HTML dokumentumban. Ehelyett az HTML entitást, <code v-pre>&amp;amp;</code> kell használni.</p>
<p>Más HTML entitások olyan karakterek, amelyek nem szerepelnek a szabványos számítógép billentyűzeteken. Ezek az entitások mindent lefednek a matematikai szimbólumoktól és pénznemjelektől a jelzésekig, mint például a bekezdésjel, ¶; és más nyelvek karakterig, mint például a görög, és láthatatlan karakterekig, mint például a szóközök.</p>
<p>Minden HTML entitásnak van egy entitás száma, ami &amp;# karakterrel kezdődik, majd egy egyedi számmal folytatódik, és a pontosvesszővel, ; végződik. A szélesebb körben használt HTML entitásoknak is van egy entitás neve, ami &amp; karakterrel kezdődik, és ; karakterrel végződik, amit a legtöbb ember könnyebben megjegyez. Például a japán jen szimbólum, ¥, az entitás szám <code v-pre>&amp;#165;</code>-el rendelkezik, és az entitás nev <code v-pre>&amp;yen;</code>-el. Ha az entitásnak van neve, akkor az entitást az HTML-ben lehet beírni vagy a számot.</p>
<!--even whater the fucker-->
<h3 id="szeles-korben-hasznalt-html-entitasok" tabindex="-1"><a class="header-anchor" href="#szeles-korben-hasznalt-html-entitasok"><span>Széles körben használt HTML entitások</span></a></h3>
<p>A &quot;8-1&quot; tábla felsorolja a legszélesebb körben használt HTML-entitásokat. A táblázat az entitás számát és leírását, az entitás nevét, ha van, és az entitás megjelenését mutatja&quot; – feltételezve, hogy látható megjelenésű.</p>
<figure><img src="@source/demo/images/8-fejezet/183.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="specialis-karakterek-beszurasa-html-entitasokkal" tabindex="-1"><a class="header-anchor" href="#specialis-karakterek-beszurasa-html-entitasokkal"><span>Speciális karakterek beszúrása HTML entitásokkal</span></a></h2>
<p>Miután ismeri a beszúrni kívánt speciális karakter HTML-entitáskódját, gyorsan beillesztheti a kódot egy weboldalba, és megjelenítheti azt a karaktert. Ez a szakasz gyors példákat mutat be HTML entitások beszúrására. A széles körben használt HTML-entitáskódok listáját az előző, „HTML-entitások megértése” című részben találja. Más entitáskódokért keressen online.</p>
<h3 id="specialis-karakterek-beszurasa-html-entitasokkal-1" tabindex="-1"><a class="header-anchor" href="#specialis-karakterek-beszurasa-html-entitasokkal-1"><span>Speciális karakterek beszúrása HTML entitásokkal</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/184-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code programban nyissa meg azt a HTML-fájlt, amelyen dolgozni szeretne.</p>
</li>
<li>
<p>Nyissa meg a HTML-fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Kattintson arra a helyre, ahová be szeretné szúrni a speciális karaktert.</p>
</li>
<li>
<p>Írja be az entitás nevét vagy kódját a karakterhez. Ez a példa a <code v-pre>&amp;mdash</code>; entitásnevet használja, amely egy em kötőjelet szúr be.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/184-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>Kattintson a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>A)</code> Megjelenik az em kötőjel.</p>
<ol start="6">
<li>Kezdjen egy új bekezdést, és írja be a következő szöveget: <code v-pre>&amp;ldquo;Ready?&amp;#8221;</code></li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/184-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>Kattintson a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>B)</code> Megjelenik a bal oldali kettős idézőjel, amelyet <code v-pre>&amp;ldquo;</code> határoz meg. Használhatja helyette a &amp;#8220-at.</p>
<p><code v-pre>C)</code> Megjelenik a jobb oldali kettős idézőjel, amelyet a <code v-pre>&amp;#8221;</code> határoz meg. Használhatja az <code v-pre>&amp;rdquo;</code> helyette.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>A nem törő szóköz olyan szóköz, amely az előző és a következő szót egyben tartja, még akkor is, ha egyébként sortörés választja el őket. Például az <code v-pre>Acme&amp;nbsp;</code> Corporation biztosítja, hogy a szavak ugyanabban a sorban jelenjenek meg.</p>
</div>
<h2 id="hangulatjelek-beszurasa" tabindex="-1"><a class="header-anchor" href="#hangulatjelek-beszurasa"><span>Hangulatjelek beszúrása</span></a></h2>
<p>Az emojik, más néven hangulatjelek vagy smile-ik, az azonnali üzenetküldésben kezdõdtek, de mára az e-maileket, weboldalakat és az online élet más területeit is elfoglalták. A HTML lehetővé teszi hangulatjelek beszúrását egy HTML-dokumentumba, ha megadja a megfelelő entitásszámot az UTF!8 nevű Unicode-karakterkészletben, amely a világnyelvekben használt szabványos karakterek és szimbólumok többségét tartalmazza. A beszúrni kívánt hangulatjel entitásszámának, más néven kódpontjának megkereséséhez látogasson el egy olyan online webhelyre, mint az Emojipedia, www.emojipedia.org. Keressen vagy böngésszen a hangulatjel megkereséséhez, keresse meg a Codepoints kiolvasást, és másolja ki a számot.</p>
<h3 id="hangulatjelek-beszurasa-1" tabindex="-1"><a class="header-anchor" href="#hangulatjelek-beszurasa-1"><span>Hangulatjelek beszúrása</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/185-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code programban nyissa meg azt a HTML-fájlt, amelyen
dolgozni szeretne.</p>
</li>
<li>
<p>Nyissa meg a HTML-fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Kattintson arra a helyre, ahová be szeretné szúrni a hangulatjelet.</p>
</li>
</ol>
<figure><img src="@source/demo/images/8-fejezet/185-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>
<p>Írja be az <code v-pre>&amp;#x</code> karakterláncot, majd a hangulatjel-kód pontot és egy pontosvesszőt, ;. Például a tűz hangulatjel kódpontja 1F525, ezért a következő utasítás beszúrja ezt a hangulatjelet: <code v-pre>&amp;#x1F525;</code> 🔥</p>
</li>
<li>
<p>Kattintson a Frissítés gombra. A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>A)</code> Megjelenik az emoji.</p>
<h2 id="egyeni-betutipusok-hasznalata-weboldalakon" tabindex="-1"><a class="header-anchor" href="#egyeni-betutipusok-hasznalata-weboldalakon"><span>Egyéni betűtípusok használata weboldalakon</span></a></h2>
<p>Ha túl kell lépnie a böngészőben elérhető betűtípusokon, használhatja a CSS képességét a külső forrásokból származó egyéni betűtípusok felvételére. Ha van engedélye a betűtípusok terjesztésére, akkor tárolhatja őket a webszerverén; ha nem, akkor a böngésző letöltheti a betűtípusokat egy betűkészlet-könyvtárból. Akárhogy is, meg kell határoznia a tartalék betűtípusokat, amelyek meghatározzák, hogy mely betűtípusokat kell használni, ha az egyéni betűtípusok nem állnak rendelkezésre. Megadhat egy halom tartalék betűtípust; a böngésző lefelé halad a halomban, amíg meg nem talál egy elérhető betűtípust.</p>
<h3 id="egyeni-betutipusok-biztositasa-webszerveren" tabindex="-1"><a class="header-anchor" href="#egyeni-betutipusok-biztositasa-webszerveren"><span>Egyéni betűtípusok biztosítása webszerverén</span></a></h3>
<p>Ha saját betűtípusokat fejlesztett ki, vagy olyan betűtípusokat töltött le, amelyek terjesztésére jogosult, a betűtípusokat a webszerverén tárolhatja. A fájlok rendezettségének megőrzése érdekében hozzon létre egy mappát a betűtípusok számára, és tárolja őket ott, ahelyett, hogy ugyanabba a mappába helyezné őket, mint ahol a weboldalak vannak.</p>
<p>Ezután deklarálja a betűtípust. Ha egy külső CSS-fájlban dolgozik, amely egy olyan weboldalhoz kapcsolódik, amely a betűtípusokat használja, a deklarációt bárhová elhelyezheti; az egyszerűség kedvéért tegye a deklarációt a többi deklaráció mellé. Ha külső CSS-fájl helyett HTML-fájlban dolgozik, tegye a deklarációt a fejrészbe.</p>
<p>Deklarálja a betűtípust egy @font-face szabállyal, továbbá az src attribútum használatával a betűtípusfájl URL-útvonalának megadásához idézőjelben és zárójelben. Íme egy példa a MyFont nevű egyéni betűtípus-családra, amely a myfont.ttf nevű fájlban található a /fonts/ mappában.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>
<span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'MyFont'</span><span class="token punctuation">;</span>
<span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'/fonts/myfont.ttf'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezután szükség szerint alkalmazza a betűtípust a stílusokhoz. A következő példa a MyFont-ot használja a törzselem preferált betűtípusaként, visszatérve a Helvetica Neue-re, ha a MyFont hiányzik, majd visszatérve a rendszer sans-serif betűtípusára, ha a Helvetica Neue nem érhető el.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
<span class="token property">font-család</span><span class="token punctuation">:</span> <span class="token string">'MyFont'</span><span class="token punctuation">,</span> <span class="token string">'Helvetica Neue'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="betutipusok-hasznalata-egy-betutipuskonyvtarbol" tabindex="-1"><a class="header-anchor" href="#betutipusok-hasznalata-egy-betutipuskonyvtarbol"><span>Betűtípusok használata egy betűtípuskönyvtárból</span></a></h3>
<figure><img src="@source/demo/images/8-fejezet/187-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Ha nincs saját betűtípusa, és nincs engedélye mások betűtípusainak terjesztésére, beállíthatja weboldalait, hogy töltsenek le betűtípusokat egy betűtípuskönyvtárból. A betűtípuskönyvtárak széles választéka elérhető az interneten. Egyes betűtípuskönyvtárak ingyenesek, például a Google Fonts, a fonts.google.com; más betűkészlet-könyvtárak fizetett előfizetéssel rendelkeznek, például az Adobe Fonts, a fonts.adobe.com, amely a közeli ábrán látható.</p>
<figure><img src="@source/demo/images/8-fejezet/187-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Böngésszen a kiválasztott könyvtárban, és keresse meg a használni kívánt betűtípust, majd szerezze be a betűtípus beágyazási kódját. Például a Google Fonts szolgáltatásban kattintson egy betűtípusra az oldal eléréséhez, majd adja hozzá az egyes betűtípusokat a Kijelölt családok listájához (A). Ezután rákattinthat a <code v-pre>&lt;link&gt;</code> gombra (B), kiválaszthatja a hivatkozási kódot (C), és beillesztheti a HTML-dokumentumba.</p>
<p>Miután összekötötte a HTML-dokumentumot a betűtípus forrásával, elkezdheti használni a betűtípust a stílusdefiníciókban. Amikor egy böngésző lekéri a weboldalt, a hivatkozás hatására a böngésző letölti a betűtípust a &quot;betűtípuskönyvtárból&quot;, és ezzel jeleníti meg az oldalt.</p>
</div></template>


