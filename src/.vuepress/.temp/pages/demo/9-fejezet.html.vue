<template><div><h2 id="az-alosztalyok-megertese" tabindex="-1"><a class="header-anchor" href="#az-alosztalyok-megertese"><span>Az álosztályok megértése</span></a></h2>
<p>A 7. fejezetben megtanulta a CSS osztályok használatát, olyan szelektorokat, amelyek lehetővé teszik, hogy stílusokat alkalmazzon az elemekre.
egy adott osztályhoz tartozónak jelölsz meg.
Ha például .dramatic néven definiál egy stílust, akkor különböző
elemekre alkalmazhatja az osztály utasítások segítségével, például <code v-pre>&lt;p class=&quot;drámai&quot;&gt;</code> és <code v-pre>&lt;h3 class=&quot;drámai&quot;&gt;</code>.</p>
<p>A CSS pszeudo-osztályokat is biztosít, olyan előre definiált speciális szelektorokat,
amelyek lehetővé teszik a stílusok alkalmazását az alábbi elemekre az aktuális állapotuktól vagy más elemekkel való kapcsolatuktól függően. Ez a szakasz
bemutatja az álosztályok lényegét. A következő szakasz, &quot;Kontextuális formázás alkalmazása a
Pszeudoosztályok alkalmazása&quot;, példákat mutat be az álosztályok használatára.</p>
<h3 id="mik-azok-az-alosztalyok-es-mikor-hasznaljuk-oket" tabindex="-1"><a class="header-anchor" href="#mik-azok-az-alosztalyok-es-mikor-hasznaljuk-oket"><span>Mik azok az álosztályok, és mikor használjuk őket?</span></a></h3>
<p>Az álosztályok egy zseniális módja annak, hogy a HTML bizonyos állapotaira vagy attribútumaira formázást alkalmazzunk.
elemekre, amelyeket nem lehet a hagyományos szelektorok segítségével azonosítani. Egy pszeudo-osztály olyan elemeket választ ki, amelyek a
osztály által meghatározott állapotban vannak. Például a :hover pszeudo-osztály azt az elemet választja ki, amely felett a
mutató lebeg, míg a :only-child pszeudo-osztály azokat az elemeket választja ki, amelyek az elem egyetlen gyermeke.
az őket tartalmazó szülőelemnek.</p>
<p>A CSS specifikáció több mint 30 pszeudo-osztályt definiál. Ezeket az álosztályokat szabadon használhatja, de a
nem definiálhat saját pszeudo-osztályokat.</p>
<p>A 9-1. táblázat felsorolja a jelen írás időpontjában aktuális álosztályokat, de érdemes ellenőrizni, hogy vannak-e további
pszeudo-osztályok hozzáadására került sor, mire ezt a szöveget olvassa.</p>
<h3 id="hogyan-hasznaljuk-az-alosztalyokat" tabindex="-1"><a class="header-anchor" href="#hogyan-hasznaljuk-az-alosztalyokat"><span>Hogyan használjuk az álosztályokat</span></a></h3>
<p>Az álosztályok használatához deklaráljon egy stílust a HTML-dokumentumhoz kapcsolódó külső CSS-fájlban vagy a
belső stíluslapban, magának a HTML-dokumentumnak a fejrészében. A következő példa a
<code v-pre>:hover</code> álosztály a h1 elemhez:</p>
<figure><img src="@source/demo/images/9-fejezet/190-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h1:hover</span> <span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> blueviolet<span class="token punctuation">;</span>
<span class="token property">color</span><span class="token punctuation">:</span> antiquewhite<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ezután az elemet normál módon használhatja egy HTML-dokumentumban. A  esetében
Például létrehozhat néhány h1 elemet így:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Első címsor 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Első fő bekezdés.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Második címsor 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Második test bekezdés.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ha a mutatót az egyik h1 elem fölé mozgatja, a háttér színe kéklilára változik,
a betűtípus színe pedig antikfehérre változik, ahogyan a szomszédos ábrán látható. Figyelje meg a különbséget
a második h1 elemtől, amely megtartja az alapértelmezett háttérszínt és betűszínt.</p>
<table>
<thead>
<tr>
<th style="text-align:left">9-1.táblázat</th>
<th style="text-align:left">Álosztályok a CSS-ben</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Pszeudo-osztály</td>
<td style="text-align:left">Mit választ ki</td>
</tr>
<tr>
<td style="text-align:left">:active</td>
<td style="text-align:left">Egy elem, amelyet éppen aktiválnak, például kattintással.</td>
</tr>
<tr>
<td style="text-align:left">:any-link</td>
<td style="text-align:left">Bármilyen link elem, beleértve a látogatott és nem látogatott linkeket is.</td>
</tr>
<tr>
<td style="text-align:left">:checked</td>
<td style="text-align:left">Egy rádiógomb vagy jelölőnégyzet elem, amely be van jelölve.</td>
</tr>
<tr>
<td style="text-align:left">:default</td>
<td style="text-align:left">Az alapértelmezett opció egy legördülő listában</td>
</tr>
<tr>
<td style="text-align:left">:disabled</td>
<td style="text-align:left">Egy letiltott elem</td>
</tr>
<tr>
<td style="text-align:left">:empty</td>
<td style="text-align:left">Olyan elem, amelynek nincsenek gyermekei</td>
</tr>
<tr>
<td style="text-align:left">:enabled</td>
<td style="text-align:left">Bekapcsolt elem</td>
</tr>
<tr>
<td style="text-align:left">:first-child</td>
<td style="text-align:left">A szülő elem első gyermeke</td>
</tr>
<tr>
<td style="text-align:left">:first-of-type</td>
<td style="text-align:left">A típusának első eleme a szülő elemen belül</td>
</tr>
<tr>
<td style="text-align:left">:focus</td>
<td style="text-align:left">Olyan elem, amely fókuszban van</td>
</tr>
<tr>
<td style="text-align:left">:hover</td>
<td style="text-align:left">Egy elem, amely felett a mutató lebeg</td>
</tr>
<tr>
<td style="text-align:left">:indeterminate</td>
<td style="text-align:left">Egy olyan jelölőnégyzet elem, amely nincs bejelölve vagy kipipálva.</td>
</tr>
<tr>
<td style="text-align:left">:in-range</td>
<td style="text-align:left">Olyan beviteli elem, amelynek értéke egy megadott tartományon belül van.</td>
</tr>
<tr>
<td style="text-align:left">:invalid</td>
<td style="text-align:left">Érvénytelen értékkel rendelkező beviteli elem</td>
</tr>
<tr>
<td style="text-align:left">:last-child</td>
<td style="text-align:left">A szülő elem utolsó gyermeke</td>
</tr>
<tr>
<td style="text-align:left">:last-of-type</td>
<td style="text-align:left">A szülői elemen belül a típusának utolsó eleme</td>
</tr>
<tr>
<td style="text-align:left">:link</td>
<td style="text-align:left">Egy nem látogatott link elem</td>
</tr>
<tr>
<td style="text-align:left">:not()</td>
<td style="text-align:left">Olyan elemek, amelyek nem felelnek meg egy adott szelektornak.</td>
</tr>
<tr>
<td style="text-align:left">:nth-child()</td>
<td style="text-align:left">Azok az elemek, amelyek a szülőelem n-edik gyermekei.</td>
</tr>
<tr>
<td style="text-align:left">:nth-last-child()</td>
<td style="text-align:left">Olyan elemek, amelyek a szülőelem végétől számított n-edik gyermekük</td>
</tr>
<tr>
<td style="text-align:left">:nth-last-of-type()</td>
<td style="text-align:left">Azok az elemek, amelyek a típusuk n-edik elemei a szülő elemük végétől számítva.</td>
</tr>
<tr>
<td style="text-align:left">:nth-of-type()</td>
<td style="text-align:left">Azok az elemek, amelyek a szülő elemen belül az n-edikek a típusukból.</td>
</tr>
<tr>
<td style="text-align:left">:only-child</td>
<td style="text-align:left">Olyan elem, amely a szülőjének egyetlen gyermeke.</td>
</tr>
<tr>
<td style="text-align:left">:only-of-type</td>
<td style="text-align:left">Egy olyan elem, amely az egyetlen a típusából a szülő elemen belül.</td>
</tr>
<tr>
<td style="text-align:left">:optional</td>
<td style="text-align:left">Olyan bemeneti elem, amely nem kötelező, hanem opcionális.</td>
</tr>
<tr>
<td style="text-align:left">:out-of-range</td>
<td style="text-align:left">Olyan bemeneti elem, amelynek értéke a megadott tartományon kívül esik</td>
</tr>
<tr>
<td style="text-align:left">:read-only</td>
<td style="text-align:left">Olyan bemeneti elem, amely csak olvasható</td>
</tr>
<tr>
<td style="text-align:left">:read-write</td>
<td style="text-align:left">Olyan bemeneti elem, amely írható-olvasható</td>
</tr>
<tr>
<td style="text-align:left">:required</td>
<td style="text-align:left">Olyan bemeneti elem, amely kötelező</td>
</tr>
<tr>
<td style="text-align:left">:root</td>
<td style="text-align:left">A html elem, a dokumentum gyökéreleme</td>
</tr>
<tr>
<td style="text-align:left">:target</td>
<td style="text-align:left">Az aktuális URL céleleme</td>
</tr>
<tr>
<td style="text-align:left">:valid</td>
<td style="text-align:left">Érvényes értékkel rendelkező bemeneti elem</td>
</tr>
<tr>
<td style="text-align:left">:visited</td>
<td style="text-align:left">Egy meglátogatott link elem</td>
</tr>
</tbody>
</table>
<h2 id="kontextualis-formazas-alkalmazasa-alosztalyokkal" tabindex="-1"><a class="header-anchor" href="#kontextualis-formazas-alkalmazasa-alosztalyokkal"><span>Kontextuális formázás alkalmazása álosztályokkal</span></a></h2>
<p>Az előző, &quot;Az álosztályok megértése&quot; című részben megtanulta, hogy mik azok az álosztályok:
Intelligens szelektorok, amelyek lehetővé teszik, hogy olyan elemeket is kijelöljön, amelyeket egyébként nem tudna megcélozni.
Ez a szakasz azt mutatja be, hogyan használhatja az álosztályokat a HTML-ben a kontextuális formázás alkalmazására.
dokumentumokban. A példák a :first-child pszeudo-osztályt használják a formázás alkalmazására az első listára.
elemre, a :nth-child pszeudo-osztályt pedig arra, hogy a formázást a következő listák elemére alkalmazza.
rendezetlen listák elemeire.</p>
<figure><img src="@source/demo/images/9-fejezet/192-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>A Visual Studio Code programban nyissa meg a külső CSS
fájlt, amelyen dolgozni szeretne.</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Pszeudo-osztályokat is használhat egy belső
stíluslapban. Ez a példa egy külső CSS-fájlt használ.</p>
</div>
<ol start="2">
<li>
<p>Szintén a Visual Studio Code-ban nyisson meg egy HTML-fájlt.
amely a külső CSS-fájlhoz kapcsolódik.</p>
</li>
<li>
<p>Nyissa meg a HTML-fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Kattintson a beillesztési pont elhelyezéséhez arra a helyre, ahová a
az álosztály stílusát meg kívánja határozni.</p>
</li>
<li>
<p>Írja be a befolyásolni kívánt elem nevét,
majd az álosztály nevét és a {.
A következő példa a :first-
gyermek pszeudo-osztályt alkalmazza az ul li elemre,
egy rendezetlen lista lista eleme:
A lista a következő elemeket tartalmazza: <code v-pre>ul li:first-child {</code></p>
</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/192-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Az ul li egy összetett szelektor. Lásd a
a következő, &quot;A CSS megértése&quot; című szakaszt
Kombinátorok&quot;.</p>
</div>
<p>A Visual Studio Code beírja a megfelelő záró }.</p>
<ol start="6">
<li>
<p>Nyomja meg a gombot egy üres sor létrehozásához, majd
írja be az első attribútumot.</p>
</li>
<li>
<p>A következő sorokban adjon meg további attribútumokat, mint például
szükség szerint.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra.A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>A)</code> Minden rendezetlen listában az első gyermekelem felveszi az álosztály formázását.</p>
<figure><img src="@source/demo/images/9-fejezet/193-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>9 A CSS fájlban írja be a CSS fájl nevét.
elem nevét, majd a
pszeudo-osztály neve és {. A következő
példa a :nth-child
pszeudo-osztályt az ul li elemre,
megadja a 2 elemet, a második
gyermek:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">ul li:nth-child(2)</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code beírja a megfelelő
záró }.</p>
<ol start="10">
<li>
<p>Nyomja meg a gombot egy üres sor létrehozásához, és
majd írja be az első attribútumot.</p>
</li>
<li>
<p>A következő sorokban adjon meg más
attribútumokat szükség szerint.</p>
</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/193-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="12">
<li>Hozzon létre bármilyen más álosztály-stílust
szükséges. A következő példa a következőt mutatja
a harmadik listaelem stílusát minden egyes
rendezetlen listában:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">ul li:nth-child(3)</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span>darkgoldenrod<span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span>900<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>Kattintson a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>B)</code> A pszeudo-
osztályok által meghatározott formázást veszik fel.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Hogyan alkalmazhatok formázást egy lista minden második elemére?</strong>
Használja a :nth-child álosztály használatát, de a zárójelben 2 helyett 2n-t adjon meg. A következő példa
a chartreuse színt alkalmazza egy rendezetlen lista minden második elemére:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">ul li:nth-child(2n)</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span>chartreuse<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="a-css-kombinatorok-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-kombinatorok-megertese"><span>A CSS kombinátorok megértése</span></a></h2>
<p>Ahogyan azt már láthattad ebben a könyvben, a CSS lehetővé teszi, hogy egy elemre egy stílust alkalmazzunk egy
egyszerű szelektor segítségével. Például a h1 szelektor segítségével az összes h1 elemre alkalmazhatunk stílust
egy HTML-dokumentumban. A CSS azonban azt is lehetővé teszi, hogy stílusokat alkalmazzon több egyszerű szelektor segítségével, amelyekhez a következő linkek kapcsolódnak
kombinátoroknak nevezett négy speciális karakterrel összekapcsolva.</p>
<p>Ebben a részben megismerkedhet a négy kombinátorral, és megtudhatja, hogyan működnek. A következő részben, a &quot;Cél
Elements Using CSS Combinators&quot; című fejezetben a kombinátorok segítségével összetett szelektorokat hozhat létre.</p>
<h3 id="a-negy-kombinator-megertese" tabindex="-1"><a class="header-anchor" href="#a-negy-kombinator-megertese"><span>A négy kombinátor megértése</span></a></h3>
<p>A CSS négy kombinátort biztosít, speciális karaktereket, amelyeket egyszerű szelektorok összekapcsolására használhat, hogy létrehozza a következőket
összetett szelektorok létrehozásához. A 9-2. táblázat ismerteti a kombinátorokat. A következő alfejezetek példákat mutatnak a
a kombinátorok használatára.</p>
<table>
<thead>
<tr>
<th style="text-align:left">9-2. táblázat:</th>
<th style="text-align:left">CSS kombinátor karakterek</th>
<th style="text-align:left"></th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Kombinátor Karakter</td>
<td style="text-align:left">Név</td>
<td style="text-align:left">Példa</td>
</tr>
<tr>
<td style="text-align:left">[egy szóköz]</td>
<td style="text-align:left">Leszármazott szelektor</td>
<td style="text-align:left">Az ul li kiválasztja az ul leszármazott li elemek utódai.</td>
</tr>
<tr>
<td style="text-align:left">&gt;</td>
<td style="text-align:left">Gyermek selector</td>
<td style="text-align:left"><code v-pre>div</code> &gt; <code v-pre>h2</code> kiválasztja azokat a h2 elemeket, amelyek a div gyermekei.</td>
</tr>
<tr>
<td style="text-align:left">+</td>
<td style="text-align:left">Adjacent sibling szelektor</td>
<td style="text-align:left"><code v-pre>h1</code> + <code v-pre>p</code> minden olyan p elemet kiválaszt, amely közvetlenül egy h1 elemet követ.elemet követi.</td>
</tr>
<tr>
<td style="text-align:left">~</td>
<td style="text-align:left">Általános testvér szelektor</td>
<td style="text-align:left"><code v-pre>h2</code> + <code v-pre>p</code> kiválaszt minden olyan p elemet, amely egy h2 elemet követ, függetlenül attól, hogy a p elem közvetlenül a h2 elem után van-e vagy sem.</td>
</tr>
</tbody>
</table>
<h3 id="a-leszarmazott-valaszto-hasznalata" tabindex="-1"><a class="header-anchor" href="#a-leszarmazott-valaszto-hasznalata"><span>A Leszármazott Választó használata</span></a></h3>
<p>Amikor egy elemet kell kiválasztanod, ami egy másik elem leszármazottja,
használd a leszármazott választót, vagyis egy szóközt. Például, ha egy rendezett listád van,
ami tartalmaz egy ágyazott rendezetlen listát, akkor így néz ki:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Szerezd be a billentyűsapka eltávolítót.
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Sok online áruházban kaphatóak billentyűsapka eltávolítók.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Vagy használj két kis csavarhúzót alternatívaként.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Helyezd be az eltávolítót a billentyűsapka alá.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span>Húzd felfelé óvatosan.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Itt a rendezetlen lista a rendezett lista leszármazottja,
így a leszármazott választóval célozhatod meg a rendezetlen listát az ol és ul elemek közötti kapcsolat felhasználásával, például így:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">ol ul</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="a-gyermekvalaszto-hasznalata" tabindex="-1"><a class="header-anchor" href="#a-gyermekvalaszto-hasznalata"><span>A Gyermekválasztó használata</span></a></h3>
<p>Amikor ki kell jelölnie az összes olyan elemet
egy szülő elem közvetlen gyermekei, használja a
gyermekválasztó, &gt;. Tegyük fel például, hogy van egy
div elem, amely h2 elemeket tartalmaz, például:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Működtető erő<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Az a távolság, ahol a
billentyűleütés regisztrálva.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Csevegés<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Ha egy gombnyomás regisztrál
többszöri gombnyomásként.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A gyermek szelektorral megcélozhatja a h2
elemeket a következőképpen:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div > h2</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Van némi átfedés a child szelektor
és a leszármazott szelektor között. A különbség a
a kettő között az, hogy a gyermek szelektor csak a
elem közvetlen gyermekeit, míg a
descendant szelektor az összes leszármazottat kiválasztja.
gyermekek, unokák, dédunokák,
és így tovább.</p>
<h3 id="a-szomszedos-testvervalaszto-hasznalata" tabindex="-1"><a class="header-anchor" href="#a-szomszedos-testvervalaszto-hasznalata"><span>A szomszédos testvérválasztó használata</span></a></h3>
<p>Amikor egy
típusra, amely közvetlenül követ egy másik
meghatározott elemet követ, használja a szomszédos testvér
választót, a +-t. Például tegyük fel, hogy a HTML
dokumentum h2 elemeket tartalmaz, amelyeket p
elemek követik, például így:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Chattering<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Amikor egy billentyű lenyomása regisztrálódik, mint
több billentyű lenyomása.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A csattogás általában
problémás.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Kattintás<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A billentyű lenyomásakor keletkező zaj.
kapcsoló aktiválásakor.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span><span class="token punctuation">></span></span>Kattogás<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>A zaj, amely akkor keletkezik, amikor a kapcsoló
a kapcsoló lecsapódik.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A szomszédos testvérválasztó segítségével megcélozhatja a
minden egyes h2 elem után az első p elemet, így:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h2 + p</span> <span class="token punctuation">{</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Itt csak az egyes h2 elemek utáni első p elemet jelöli ki.
kapja meg a dőlt betűs formázást. Az ezt követő p
elemek nem kapnak.</p>
<h3 id="az-altalanos-testvervalaszto-hasznalata" tabindex="-1"><a class="header-anchor" href="#az-altalanos-testvervalaszto-hasznalata"><span>Az Általános testvérválasztó használata</span></a></h3>
<p>Ha egy adott típusú elemet kell megcéloznia, amely egy másik adott elemet követ, használja a
általános testvérválasztót, ~. Például, ha a HTML-dokumentum tartalmazza az előző példában bemutatott
alfejezetben látható, akkor a következőképpen alkalmazhat dőlt betűs formázást minden olyan p elemre, amely egy h2 elem után következik:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token punctuation">{</span> <span class="token selector">h2 ~ p</span> <span class="token punctuation">{</span>
<span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="celelemek-css-kombinatorok-hasznalataval" tabindex="-1"><a class="header-anchor" href="#celelemek-css-kombinatorok-hasznalataval"><span>Célelemek CSS kombinátorok használatával</span></a></h2>
<p>Az előző, &quot;A CSS kombinátorok megértése&quot; című részben megismerkedtünk a négy CSS kombinátorral:
a leszármazott szelektor, a gyermek szelektor, a szomszédos testvér szelektor és az általános testvér szelektor.
szelektor. Ezek a kombinátorok lehetővé teszik, hogy az elemeket más elemekkel való kapcsolatuk alapján célozza meg.
elemekhez való viszonyuk alapján - például minden olyan h2 elemet megcélozhatunk, amely egy div elem közvetlen gyermeke.
Ebben a szakaszban a CSS kombinátorokat bizonyos elemek megcélzására alkalmazza.</p>
<p><strong>Nyissa meg a CSS fájlt és a HTML fájlt</strong></p>
<figure><img src="@source/demo/images/9-fejezet/196-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban nyissa meg a
külső CSS-fájlt, amelyen dolgozni szeretne.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyisson meg egy
HTML-fájlt, amelyhez a
külső CSS-fájlt.</p>
</li>
<li>
<p>Nyissa meg a HTML fájlt egy böngészőben
ablakban.</p>
</li>
<li>
<p>A Visual Studio Code programban kattintson a CSS
fájlra, hogy a beszúrási pontot oda helyezze, ahol
az első stílust szeretné definiálni.</p>
</li>
</ol>
<p><strong>Egy elem megcélzása egy gyermek elemmel szelektor</strong></p>
<figure><img src="@source/demo/images/9-fejezet/196-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>Írja be a szülőelem nevét, egy szóközt,
a gyermek elem nevét, majd egy újabb szóközt,
és { - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">Ol ul</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>A)</code> Visual Studio kód beszúrja a megfelelő
záró zárójelet, }.</p>
<ol start="2">
<li>
<p>Nyomja meg a gombot egy üres sor létrehozásához (nem
nem látható).</p>
</li>
<li>
<p>Az üres sorba írja be a stílust
formázást.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra.A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>B)</code> Az ol ul gyermekelem ul
elem átveszi a formázást.</p>
<p><strong>Egy szomszédos elem megcélzása, Testvérválasztó</strong></p>
<figure><img src="@source/demo/images/9-fejezet/197-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>Írja be az első elem nevét, a
szomszédos testvér szelektor, +; a második
elem nevét; egy szóközt; és { - a következőhöz
például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h2 + p</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code v-pre>C)</code> A Visual Studio Code beszúrja a megfelelő
záró zárójelet, }.</p>
<ol start="2">
<li>
<p>Nyomja meg a gombot egy üres sor létrehozásához (nem
nem látható).</p>
</li>
<li>
<p>Az üres sorba írja be a stílust
formázást.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra.
<code v-pre>A)</code> weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>D)</code> Az első p elem minden h2
elem után veszi fel a formázást.</p>
<p><code v-pre>E)</code> Az ezt követő p elemek nem
nem érinti.</p>
<p>Egy elem megcélzása általános Testvérválasztó</p>
<figure><img src="@source/demo/images/9-fejezet/197-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Térjünk vissza az előző alfejezet
példához, jelölje ki a + elemet, és írja be fölé a ~ karaktert:
h2 ~ p {</p>
</li>
<li>
<p>Kattintson a Frissítés gombra. A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>F)</code> Minden p elem minden h2 elem után
átveszi a formázást.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p>Kombinátorokat kombinálhatok összetett kiválasztásokhoz?
Igen, több kombinátor kombinálható egyetlen szelektorba. Például, ha ki akarja választani az összes
li elemet, amelyek egy ol elem leszármazottai, és amelyek egy h2 elemet követnek, akkor használhatja a
a következő szelektorral, a stílus megadásával a szokásos módon a zárójelek között, {}:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h3 ~ ol li</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div>
<h2 id="pseudo-elemek-megertese" tabindex="-1"><a class="header-anchor" href="#pseudo-elemek-megertese"><span>Pseudo-elemek megértése</span></a></h2>
<p>Ahogy azokkal az elemekkel is, amelyekkel most már kiterjedten dolgoztál, a CSS pseudo-elemeket is biztosít, olyan kiválasztókat, amelyek lehetővé teszik az HTML elemek specifikus részeinek formázását. Például használhatod a <code v-pre>::first-letter</code> pseudo-elemet az első betű kiválasztására egy blokk elemen belül, például egy címsor vagy egy bekezdés esetén.</p>
<p>Jelenleg 14 standard pseudo-elemet határoz meg a CSS. Nem minden böngésző valósítja meg teljesen az összes ilyen pseudo-elemet, ezért amikor pseudo-elemeket használsz HTML dokumentumaidban, teszteld azokat az összes olyan böngészőn, amelyet a weboldalad támogatni szeretnél.</p>
<p>A pseudo-elemek lehetővé teszik számodra, hogy olyan részeket célozz meg egy HTML dokumentumban, amelyeket másként nem tudnál elérni, és formázást alkalmazz ezekre a részekre.</p>
<p>A pseudo-elemek előre definiáltak a CSS specifikációkban. Nem hozhatsz létre saját pseudo-elemeket. Egy hasonló hatást érhetsz el egyedi attribútum létrehozásával egy HTML elem számára, majd a CSS attribútum kiválasztó használatával ennek az attribútumnak a célozására. Ez a téma túlmutat a könyv keretein.</p>
<p>Az alábbiakban a jelenleg elérhető 14 pseudo-elemet magyarázza a 9-3-as táblázat.</p>
<table>
<thead>
<tr>
<th style="text-align:left">Pseudo-elem</th>
<th style="text-align:left">Mit csinál</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">::after</td>
<td style="text-align:left">Beszúr tartalmat egy elem után.</td>
</tr>
<tr>
<td style="text-align:left">::backdrop</td>
<td style="text-align:left">Stílust alkalmaz a háttérre egy modális vagy párbeszédablak mögött.</td>
</tr>
<tr>
<td style="text-align:left">::before</td>
<td style="text-align:left">Tartalmat szúr be egy elem elé.</td>
</tr>
<tr>
<td style="text-align:left">::cue</td>
<td style="text-align:left">Stílust alkalmaz a szöveges tartalomra egy jelzés elemen belül egy videóban vagy hangfájlban.</td>
</tr>
<tr>
<td style="text-align:left">::file‐selector‐button</td>
<td style="text-align:left">Stílust alkalmaz a fájlkiválasztó gombra, azon gombra, amely megnyitja a fájlkiválasztási párbeszédablakot a fájl feltöltéséhez.</td>
</tr>
<tr>
<td style="text-align:left">::first‐letter</td>
<td style="text-align:left">Kiválasztja az első betűt az elem első sorában lévő szövegben.</td>
</tr>
<tr>
<td style="text-align:left">::first‐line</td>
<td style="text-align:left">Kiválasztja az elem szövegének első sorát.</td>
</tr>
<tr>
<td style="text-align:left">::grammar‐error</td>
<td style="text-align:left">Stílust alkalmaz a szövegre, amelyet helyesírási hiba miatt az értékeléskor az &quot;spellcheck&quot; attribútum azonosít.</td>
</tr>
<tr>
<td style="text-align:left">::marker</td>
<td style="text-align:left">Stílust alkalmaz a lista tételjelére a listában.</td>
</tr>
<tr>
<td style="text-align:left">::part</td>
<td style="text-align:left">Kiválaszt egy konkrét részt egy árnyék DOM elemen belül.</td>
</tr>
<tr>
<td style="text-align:left">::placeholder</td>
<td style="text-align:left">Stílust alkalmaz a beviteli vagy szövegterület (textarea) elem helykitöltő (placeholder) szövegére.</td>
</tr>
<tr>
<td style="text-align:left">::selection</td>
<td style="text-align:left">Kiválasztja azt a részt egy elemen belül, amelyet a felhasználó kijelöl.</td>
</tr>
<tr>
<td style="text-align:left">::spelling‐error</td>
<td style="text-align:left">Stílust alkalmaz a szövegre, amelyet helyesírási hiba miatt az &quot;spellcheck&quot; attribútum azonosít.</td>
</tr>
<tr>
<td style="text-align:left">::target‐text</td>
<td style="text-align:left">Stílust alkalmaz a szövegre, amelyre az ablak görgetett.</td>
</tr>
</tbody>
</table>
<p>Példák a Pseudo-elemek használatára
A <code v-pre>::after</code> pseudo-elem lehetővé teszi egy meghatározott elem megjelenítését egy adott elem után. Az alábbi példa a ::after elemet használja egy vízszintes fekete vonal megjelenítésére minden h2 elem után. A fekete vonalnak nincs tartalma, 3 pixel széles, 75 százalékát teszi ki az ablak szélességének, és 10 pixellel van középre igazítva a h2 elem alatt.</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">h2::after</span> <span class="token punctuation">{</span>
<span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">;</span>
<span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token property">height</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
<span class="token property">width</span><span class="token punctuation">:</span> 75%<span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> black<span class="token punctuation">;</span>
<span class="token property">margin</span><span class="token punctuation">:</span> 10px auto 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A kijelölés pseudo-elem lehetővé teszi, hogy stílust alkalmazz a felhasználó által kijelölt elem részére. Például, ha a felhasználó kijelöl valamennyi szöveget egy p elemen belül, az alábbi CSS formázást alkalmazza a kijelölésre:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">::selection</span> <span class="token punctuation">{</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> aquamarine<span class="token punctuation">;</span>
<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ellenőrizd, hogy a neked fontos böngészőkön működnek-e a pseudo-elemek.
Általánosságban elmondható, hogy az összes jelenlegi böngésző támogatja ezeket az öt pseudo-elemet: <code v-pre>::after</code>, <code v-pre>::before</code>, <code v-pre>::first‐letter</code>, <code v-pre>::first‐line</code>, and <code v-pre>::selection</code>.</p>
<p>Nem minden böngésző támogatja a maradék kilenc pseudo-elemet. A támogatás változik nemcsak a böngésző verziójától függően, hanem attól is, hogy milyen platformon fut. Például a Google Chrome egyáltalán nem támogatja a ::cue pseudo-elemet, és nem teljes körűen támogatja a <code v-pre>::marker</code> pseudo-elemet, míg a Mozilla Firefox nem támogatja a ::backdrop pseudo-elemet.</p>
<p>Ennek korlátozott támogatása miatt mindenképpen teszteld azokat az HTML dokumentumokat, amelyek pseudo-elemeket használnak, az összes olyan böngészőben, amelyben szeretnéd, hogy a weboldalad működjön. Ha lehetséges, teszteld ezeket a dokumentumokat képernyőolvasókkal is, mert a pseudo-elemek problémákat okozhatnak néhány képernyőolvasó számára.</p>
<h2 id="alkalmazz-css-t-pszeudo-elemekre" tabindex="-1"><a class="header-anchor" href="#alkalmazz-css-t-pszeudo-elemekre"><span>Alkalmazz CSS-t pszeudo-elemekre.</span></a></h2>
<p>Az előző részben, a „Pszzeudo-elemek megértése” című részben megtudtad, mi a CSS-ben a pszeudo-elemek és hogyan működnek. Ebben a részben két pszeudo-elemet használsz fel. A ::first-letter pszeudo-elem lehetővé teszi, hogy stílusokat alkalmazz az adott elem első karakterére, míg a ::first-line pszeudo-elem lehetővé teszi, hogy stílusokat alkalmazz az elem első sorára.</p>
<p>A pszeudo-elemek és a pszeudo-osztályok közötti kulcsfontosságú különbség az, hogy a pszeudo-elemek egy elem konkrét részét célozzák, míg a pszeudo-osztályok egy elemet céloznak egy adott állapotban, például amikor az egérkurzor fölötte lebeg.</p>
<h3 id="alkalmazz-css-t-pszeudo-elemekre-1" tabindex="-1"><a class="header-anchor" href="#alkalmazz-css-t-pszeudo-elemekre-1"><span>Alkalmazz CSS-t pszeudo-elemekre.</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/200-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyisd meg a külső CSS fájlt a Visual Studio Code-ban, amelyen dolgozni szeretnél.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban, nyisd meg azt az HTML fájlt, amelyhez csatoltad a külső CSS fájlt.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A stíluslapban kattints oda, hogy az illesztési pontot a pszeudo-elem hozzáadásának helyére tegye.
Add meg a <code v-pre>::first-letter</code> pszeudo-elemet.</p>
</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/200-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>Írd be az elemet, amelyre hatni szeretnél, utána ::first-letter, egy szóköz, és { — például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">p::first-letter</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code beszúrja a megfelelő záró kapcsos zárójelet, }.</p>
<ol start="2">
<li>
<p>Nyomj Entert egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Az üres sorban írd be az első tulajdonságot, amit alkalmazni szeretnél a formázáshoz.</p>
</li>
<li>
<p>A további sorokban add meg a szükséges egyéb formázásokat.</p>
</li>
<li>
<p>Kattints az Oldal frissítése gombra. Az internetes oldal frissül.</p>
</li>
</ol>
<p><code v-pre>A)</code>Az elem minden példánya első karaktere felveszi a formázást.</p>
<h3 id="meretezes-es-elhelyezes-css-segitsegevel" tabindex="-1"><a class="header-anchor" href="#meretezes-es-elhelyezes-css-segitsegevel"><span>Méretezés és elhelyezés CSS segítségével</span></a></h3>
<p><strong>Add meg a ::first-line pszeudo-elemet.</strong></p>
<figure><img src="@source/demo/images/9-fejezet/201-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>A CSS fájlban írd be az elemet, amelyre hatni szeretnél, utána ::first-line, egy szóköz, és { — például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">p::first-line</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code beszúrja a megfelelő záró kapcsos zárójelet, }.</p>
<ol start="2">
<li>
<p>Nyomj Entert egy üres sor létrehozásához (nem látható).</p>
</li>
<li>
<p>Az üres sorban írd be az első tulajdonságot, amit alkalmazni szeretnél a formázáshoz.</p>
</li>
<li>
<p>A további sorokban add meg a szükséges egyéb formázásokat.</p>
</li>
<li>
<p>Kattints az Oldal frissítése gombra. Az internetes oldal frissül.</p>
</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/201-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>B)</code>Az elem minden példányának első sora felveszi a formázást.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Mi a legjobb módszer a pszeudo-elemek használatára az HTML dokumentumaimban?</strong></p>
<p>Használd a pszeudo-elemeket díszítés hozzáadására, inkább, mint tartalomhoz az HTML dokumentumaidban. Például használhatsz pszeudo-elemeket díszítő formák alkalmazásához olyan elemek után, mint például a címsorok. Habár pszeudo-elemeket használhatsz tartalom hozzáadásához a dokumentumokhoz, általában jobb, ha tényleges HTML elemeket használsz a tartalom hozzáadásához, majd szükség szerint alkalmazol stílusokat ezekre az elemekre. Kerüld a lap túlzott terhelését pszeudo-elemekkel, mert ezek lassabbá tehetik az oldal megjelenését a látogatók számítógépein.</p>
</div>
<h2 id="felulbiralhatod-a-css-t-a-fontos-nyilatkozattal" tabindex="-1"><a class="header-anchor" href="#felulbiralhatod-a-css-t-a-fontos-nyilatkozattal"><span>Felülbírálhatod a CSS-t a !fontos nyilatkozattal.</span></a></h2>
<p>Amikor több CSS tulajdonságot alkalmazol ugyanarra az elemre, néhány tulajdonság felülírhatja a másikat. Azoknak a tulajdonságoknak az irányításához, amelyeket alkalmazni szeretnél, a CSS nyújt egy nyilatkozatot, ami !fontos néven ismert, és amelyet használhatsz ahhoz, hogy megad egy CSS tulajdonságot, amelyet magasabb prioritással szeretnél hozzárendelni. Amikor egy tulajdonságot !fontosnak jelölsz, az felülírja bármely más stílus szabályokat, amelyek ugyanarra a tulajdonságra vonatkoznak.</p>
<p>Ez a szakasz egy egyszerű példát használ fel a !fontos nyilatkozat használatának szemléltetésére. A webfejlesztés során valószínűleg találkozni fogsz finomabb CSS problémákkal, amelyeket a !fontos nyilatkozat megoldhat.</p>
<h3 id="felulbiralhatod-a-css-t-a-fontos-nyilatkozattal-1" tabindex="-1"><a class="header-anchor" href="#felulbiralhatod-a-css-t-a-fontos-nyilatkozattal-1"><span>Felülbírálhatod a CSS-t a !fontos nyilatkozattal.</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/202-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ban azt a külső CSS fájlt, amelyen dolgozni szeretnél.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban, nyisd meg azt az HTML fájlt, amelyhez hivatkoztad a külső CSS fájlt.</p>
</li>
</ol>
<p><code v-pre>A)</code>A minta HTML fájl tartalmaz egy dl elemet, egy meghatározás listát.</p>
<p><code v-pre>B)</code>Minden dt elem tartalmaz egy meghatározó kifejezést.</p>
<p><code v-pre>C)</code>Minden dd elem tartalmaz egy meghatározás leírást.</p>
<ol start="3">
<li>Nyisd meg az HTML fájlt egy böngészőablakban.</li>
</ol>
<p><code v-pre>D)</code>Megjelenik a meghatározás lista.</p>
<figure><img src="@source/demo/images/9-fejezet/202-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="4">
<li>Kattints a CSS fájl fülére.</li>
</ol>
<p>Megjelenik a CSS fájl.</p>
<ol start="5">
<li>Írj egy stílusdefiníciót az elemhez, amelyre több stílust fogsz alkalmazni. Ebben az példában a dt elemre és alkalmazd a piros színt és a 900 súlyt:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">dt</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span>900<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>Kattints az Oldal frissítése ( ) gombra. Az internetes oldal frissül.</li>
</ol>
<p><code v-pre>E)</code>A meghatározó kifejezések piros félkövéren jelennek meg.</p>
<p>202</p>
<figure><img src="@source/demo/images/9-fejezet/203-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="7">
<li>
<p>Kattints újra a CSS fájlban. A CSS fájl aktívvá válik.</p>
</li>
<li>
<p>Írj be egy második stílusdefiníciót ugyanarra az elemre, különböző formázással. Ebben a példában a dt elemre kék színt és 400 súlyt alkalmaz:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">dt</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span>400<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="9">
<li>Kattints az Oldal frissítése gombra.  Az internetes oldal frissül.</li>
</ol>
<p><code v-pre>F)</code> A meghatározó kifejezések kék formázást és vékonyabb kiemelést.</p>
<figure><img src="@source/demo/images/9-fejezet/203-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>
<p>Kattints arra a helyre, ahol az illesztési pontot a kívánt tulajdonság végénél, ahol a fontos tulajdonság végénél szeretnéd elhelyezni (nem látható). Ebben a példában a vörös és a ; között kattints.</p>
</li>
<li>
<p>Írd be a !fontos kifejezést, például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">dt</span> <span class="token punctuation">{</span>
<span class="token property">color</span><span class="token punctuation">:</span> red <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token property">font-weight</span><span class="token punctuation">:</span>900<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>Kattints az Oldal frissítése gombra. Az internetes oldal frissül.</li>
</ol>
<p><code v-pre>G)</code>A meghatározó kifejezések piros színt kapnak, mert azt !fontosnak jelöltük, azonban a vastagságuk 400 marad.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Ha egy stíluslap kétszer definiálja ugyanazt a stílust, melyik definíciót használja a böngésző?</strong></p>
<p>Amikor több azonos stílusdefiníció van ugyanabban a stíluslap fájlban, a böngésző azt a stílust alkalmazza, amelyiket utoljára találta a stíluslap fájl fentről lefelé történő olvasása során. Ebben a szakasz példájában az első dt stílus pirosat és 900 súlyt alkalmaz, míg a második dt stílus kéket és 400 súlyt alkalmaz; így a böngésző kék és 400 súlyt használ.</p>
<p>Amikor több stílusforrás van, a stílus kaskádja ugyanúgy működik: A beágyazott stílusok felülbírálják a belső stílusokat, amelyek pedig felülbírálják a külső stílusokat.</p>
</div>
<h2 id="a-css-dobozmodell-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-dobozmodell-megertese"><span>A CSS dobozmodell megértése</span></a></h2>
<p>A CSS egy dobozmodell nevű koncepciót használ az HTML elemek megjelenítésének leírására egy weboldalon. A CSS dobozmodell négy részből áll: a belső tartalomból, a körülötte lévő paddingből, a padding körüli keretből és a keret kívüli marginból.</p>
<p>Ez a szakasz rövid példákkal magyarázza el a CSS dobozmodellt. A következő három szakasz bemutatja, hogyan lehet használni a dobozmodellt, konkrét példákkal.</p>
<h3 id="abrazold-a-css-dobozmodellt" tabindex="-1"><a class="header-anchor" href="#abrazold-a-css-dobozmodellt"><span>Ábrázold a CSS dobozmodellt.</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/204-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A CSS dobozmodell négy fő részből áll, ahogy azt a közelben látható ábrázolás is mutatja:</p>
<p>• Margin (A). A margin a doboz szélének és a szomszédos elemek közötti távolságot jelenti, fent vagy lent, illetve balra vagy jobbra.</p>
<p>• Border (B). A keret a doboz körüli vonal. Formázhatod a keretet szükség szerint - például beállíthatod a vonal vastagságát és színét. A keretet eltüntetheted a border tulajdonság none értékével.</p>
<p>• Padding (C). A padding a keret belső oldala és a tartalom külső oldala közötti tér.</p>
<p>• Content (D). A tartalom megjelenik a padding belső részén. A tartalom lehet szöveg, kép vagy más objektum.</p>
<h3 id="a-margok-keretek-es-padding-beallitasanak-harom-modjanak-megertese" tabindex="-1"><a class="header-anchor" href="#a-margok-keretek-es-padding-beallitasanak-harom-modjanak-megertese"><span>A margók, keretek és padding beállításának három módjának megértése</span></a></h3>
<p>A CSS lehetővé teszi, hogy mind a három külső elemet - a margót, a kereteket és a paddinget - három különböző módon állítsd be:</p>
<p>• Állíts be egyetlen méretet minden oldalra a margó, a keret vagy a padding tulajdonság használatával.</p>
<p>• Állítsd be minden oldalt külön-külön az egyéni tulajdonságok használatával. Például a margót beállítani a <code v-pre>margin-top</code> tulajdonsággal, a <code v-pre>margin-right</code> tulajdonsággal, a <code v-pre>margin-bottom</code> tulajdonsággal és a <code v-pre>margin-left</code> tulajdonsággal tudod.</p>
<p>• Állítsd be minden oldalt egyetlen állítással rövidített tulajdonságok használatával.</p>
<p>A következő részben bemutatom neked, hogyan használhatod ezeket a módszereket.</p>
<h3 id="allits-be-egyetlen-meretet-minden-oldalra" tabindex="-1"><a class="header-anchor" href="#allits-be-egyetlen-meretet-minden-oldalra"><span>Állíts be egyetlen méretet minden oldalra.</span></a></h3>
<p>Amikor minden oldal margójának, keretének vagy paddingjének ugyanazt a mértéket szeretnéd használni, használhatod a margin tulajdonságot, a border tulajdonságot vagy a padding tulajdonságot. Például az alábbi stílus beállít egy három pixel vastag, szilárd kék keretet minden oldalra a doboz körül:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
<span class="token property">border</span><span class="token punctuation">:</span> 3px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="meret-es-pozicionalas-css-sel" tabindex="-1"><a class="header-anchor" href="#meret-es-pozicionalas-css-sel"><span>Méret és Pozícionálás CSS-sel</span></a></h3>
<h3 id="meres-beallitasa-minden-oldalra-kulon-kulon" tabindex="-1"><a class="header-anchor" href="#meres-beallitasa-minden-oldalra-kulon-kulon"><span>Mérés beállítása minden oldalra külön-külön</span></a></h3>
<p>Amikor különböző beállításokat szeretnél használni egy CSS doboz különböző oldalaihoz, használhatod az egyes oldalakra vonatkozó tulajdonságokat. A tulajdonságok magukért magyaráznak, ahogy a közeli ábrán láthatod.
• Margó tulajdonságok: margin-top, margin-right, margin-bottom, margin-left
• Keret tulajdonságok: border-top, border-right, border-bottom, border-left
• Töltés tulajdonságok: padding-top, padding-right, padding-bottom, padding-left
A következő példa a négy margó tulajdonságot használja, hogy beállítsa a felső és alsó margókat 20 képponttal, valamint a bal és jobb margókat 10 képponttal:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">margin-left</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="margok-keretek-es-toltesek-beallitasa-roviditett-tulajdonsagok-segitsegevel" tabindex="-1"><a class="header-anchor" href="#margok-keretek-es-toltesek-beallitasa-roviditett-tulajdonsagok-segitsegevel"><span>Margók, Keretek és Töltések Beállítása Rövidített Tulajdonságok Segítségével</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/205-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A margók, keretek és töltések beállításának harmadik módja a rövidített tulajdonságok használata. Ezek a tulajdonságok lehetővé teszik, hogy minden oldalra egyesével meghatározhass egy konkrét méretet, mindössze egy tulajdonság segítségével — a margó tulajdonság, a keret tulajdonság vagy a töltés tulajdonság.</p>
<p>Ezen tulajdonságok legegyszerűbb használati módja az, ha az értéket mindegyik oldalra szóközzel elválasztva megadod. Felülről kezdve óramutató járásával haladsz körbe a dobozon: először felül, másodszor jobbra, harmadszor lent, és negyedszer balra.</p>
<p>A következő példa 20 képpontos töltést állít be felül, 10 képpontot jobbra, 20 képpontot lent, és 10 képpontot balra:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">padding</span><span class="token punctuation">:</span> 20px 10px 20px 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ha azt szeretnéd, hogy a felül és a lent azonos értéket kapjon, és a bal azonos értéket kapjon a jobbal, akkor két értéket használhatsz. A következő példa 20 képpontos töltést állít be felül és lent, valamint 10 képpontos töltést balra és jobbra:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">padding</span><span class="token punctuation">:</span> 20px 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Ha azt szeretnéd, hogy a felül és a lent különböző értékeket kapjon, de a bal és a jobb azonos értéket kapjon, akkor három értéket használhatsz. A következő példa 20 képpontos töltést állít be felül, 5 képpontos töltést balra és jobbra, valamint 10 képpontos töltést lent:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">padding</span><span class="token punctuation">:</span> 20px 5px 10px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Bár érthetőek a két- és három-értékű használatok, a kódod a legkönnyebben olvasható lesz, ha mindig négy értéket adsz meg.</p>
<h2 id="az-elemek-meretezesenek-modjainak-megertese" tabindex="-1"><a class="header-anchor" href="#az-elemek-meretezesenek-modjainak-megertese"><span>Az elemek méretezésének módjainak megértése</span></a></h2>
<p>Az elemek megfelelő megjelenítéséhez gyakran szükséges meghatároznod azok méreteit a weboldalakon. A CSS lehetővé teszi a méret megadását a width tulajdonság használatával a szélesség beállításához és a height tulajdonság használatával a magasság beállításához. Megadhatod a szélességet és a magasságot konkrét értékekkel, például a képpontok számával, vagy relatív értékekkel, például a konténer szélességének százalékával. Ez a szakasz magyarázza el az elemek méretezésével kapcsolatos alapokat. A következő szakasz, &quot;Az Elem Méretének Megadása,&quot; példákon keresztül bemutatja a méretek beállításának gyakorlati példáit.</p>
<h3 id="elemek-meretezesi-modjainak-megertese" tabindex="-1"><a class="header-anchor" href="#elemek-meretezesi-modjainak-megertese"><span>Elemek Méretezési Módjainak Megértése</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/206-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Az egyik legegyszerűbb módja egy elem méretének meghatározásának a width tulajdonság és a height tulajdonság beállítása megfelelő értékekre, például pixel vagy a böngésző tartalmának megjelenítéséhez elérhető nézet területének arányára. Ezeket a tulajdonságokat különböző mértékegységekre állíthatod, amelyeket a 9-4. táblázat magyaráz.</p>
<figure><img src="@source/demo/images/9-fejezet/206-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>Ha szeretnéd a paddingot, a kereteket és a margót is figyelembe venni egy elem méretezésekor, használhatod a box-sizing tulajdonságot, amely lehetővé teszi a doboz méretének megadását. Használd a <code v-pre>box-sizing: border-box</code> értéket a keretdoboz méretének beállításához, beleértve a keretet és a paddingot, de kivéve a margót; vagy használd a <code v-pre>box-sizing: content-box</code> értéket a tartalomdoboz méretének beállításához, de legyél világos ebben. A közeli ábra szemlélteti a <code v-pre>box-sizing: content-box</code> és a <code v-pre>box-sizing: border-box</code> értékeket.</p>
<h3 id="allits-be-egy-fix-meretet-vagy-a-szulokontener-szazalekat" tabindex="-1"><a class="header-anchor" href="#allits-be-egy-fix-meretet-vagy-a-szulokontener-szazalekat"><span>Állíts Be Egy Fix Méretet Vagy A Szülőkonténer Százalékát</span></a></h3>
<p>Az elemek megfelelő méretének kulcsa az, hogy tisztában legyél azzal, mit mérsz. Általában ez a tartalomterület, melynek magasságát a height tulajdonsággal, és a szélességét a width tulajdonsággal állíthatod be. Ezek a tulajdonságok nem tartalmazzák a tartalomterületen kívüli paddingot, a paddingon kívüli kereteket vagy a kereteken kívüli margókat.</p>
<figure><img src="@source/demo/images/9-fejezet/207-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h3 id="valaszd-meg-hogy-a-tartalomdobozt-vagy-a-keretdobozt-meretezed" tabindex="-1"><a class="header-anchor" href="#valaszd-meg-hogy-a-tartalomdobozt-vagy-a-keretdobozt-meretezed"><span>Válaszd Meg, Hogy A Tartalomdobozt Vagy A Keretdobozt Méretezed</span></a></h3>
<p>Mondja Meg az Elem Maximum vagy Minimum Szélességét vagy Magasságát
Amikor biztosítani szeretnéd, hogy egy elem elrendezése következetes maradjon különböző méretű nézetek esetén, megadhatod az elem maximális szélességét és minimális szélességét a max-width tulajdonság és a min-width tulajdonság beállításával. Hasonlóképpen, megadhatod a maximális magasságot és minimális magasságot a max-height tulajdonság és a min-height tulajdonság beállításával.
A következő példa pixelben megadja a maximális és minimális szélességet egy div elemhez:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ennek a div elemnek a minimális szélessége 250 képpont, a maximális szélessége pedig 600 képpont lesz.
Lehetséges, hogy a maximális és minimális szélességet a szülőelem szélességének százalékában is meg szeretnéd adni, mint a következő példában:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Ennek a div elemnek a szélessége legalább a szülőelem szélességének 40 százaléka lesz, és legfeljebb 90 százaléka.</p>
<h2 id="elem-meretenek-megadasa" tabindex="-1"><a class="header-anchor" href="#elem-meretenek-megadasa"><span>Elem Méretének Megadása</span></a></h2>
<p>Az előző szakaszban, &quot;Az Elemek Méretezési Módjainak Megértése,&quot; megtanultad az elemek méretezési módjait. Ebben a szakaszban alkalmazod néhány ezek közül.
A CSS lehetővé teszi számodra, hogy megadhasd az elemek fix méreteit, például a szélességet és a magasságot pixel vagy más abszolút mértékegységekben. Általában azonban jobb, ha relatív mértékegységeket használsz, mint például emek, remek vagy százalékok, hogy a weboldalaid alkalmazkodjanak a különböző képernyőméretekhez.</p>
<h3 id="elem-meretenek-megadasa-1" tabindex="-1"><a class="header-anchor" href="#elem-meretenek-megadasa-1"><span>Elem Méretének Megadása</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/208-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>A Visual Studio Code-ban nyisd meg azon külső CSS fájlt, amelyen dolgozni szeretnél.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyiss meg egy olyan HTML fájlt, amelyhez hozzárendelted a külső CSS fájlt.
Megjegyzés: Ebben a példában egy dobozolt div elemet használunk a keretpozíciók világosabb megjelenítéséhez.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Kattints a CSS fájlban, majd gépeld be a box-sizing: content-box; kódot.</p>
</li>
<li>
<p>A következő sorban ad meg egy méretet, például width: 90%;.</p>
</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/208-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>Kattints a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>A)</code> A tartalomdoboz elfoglalja az elérhető szélesség 90%-át. A padding és a keret további helyet foglal el.</p>
<ol start="7">
<li>
<p>Változtasd meg a box-sizing tulajdonság állítását box-sizing: border-box; -ra.</p>
</li>
<li>
<p>Kattints a Frissítés  gombra. A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>B.</code> A keretdoboz elfoglalja az elérhető szélesség 90%-át, több helyet hagyva.</p>
<h2 id="meretezes-es-pozicionalas-css-sel" tabindex="-1"><a class="header-anchor" href="#meretezes-es-pozicionalas-css-sel"><span>Méretezés és pozícionálás CSS-sel</span></a></h2>
<figure><img src="@source/demo/images/9-fejezet/209-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>Válaszd ki a width tulajdonságot, majd gépeld be a max-width tulajdonságot felette, egy értéket megadva pixelben - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="10">
<li>Nyomj Enter-t, majd gépeld be a min-width tulajdonságot, ismét egy értéket megadva pixelben - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">min-width</span><span class="token punctuation">:</span> 250px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="11">
<li>Kattints a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p>C. A keretdoboz elfoglalja a legtöbb szélességet.</p>
<ol start="12">
<li>Kattints a Maximalizálás gombra. Az ablak kitágul, hogy betöltse a teljes képernyőt.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/209-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>D. A keretdoboz csak a maximális szélességéig terjed ki, 600 pixelig, és nem tölti ki a képernyő teljes szélességét.</p>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Húzd az ablakot egy keskeny szélességűre. Figyeld meg, hogyan csökken a keretdoboz szélessége, amíg el nem éri a minimális szélességét, 250 pixel, majd ott marad.</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Jó ötlet-e a box-sizing:border használata?</strong></p>
<p>Sokan hasznosnak találják a border box méretarányosítását, mert csökkenti a számításokba bevonandó tényezők számát - box-sizing: border; használatakor csak a margót kell hozzáadnod, ha van, és nem kell a paddingot, a keretvastagságot és a margót is hozzáadnod a tartalomterület szélességéhez és magasságához. De ha inkább a tartalomterület méreteivel szeretnél dolgozni, bátran tedd meg.</p>
<p><strong>Hogyan lehet az elem méretét és elrendezését a képernyő szélességéhez igazítani?</strong>
Használj médialekérdezéseket. Lásd a részt &quot;Médialekérdezések hozzáadása az oldalhoz&quot; a 10. fejezetben részletekért.</p>
</div>
<h2 id="hatarozd-meg-egy-elem-tolteset-es-kereteit" tabindex="-1"><a class="header-anchor" href="#hatarozd-meg-egy-elem-tolteset-es-kereteit"><span>Határozd meg egy elem töltését és kereteit</span></a></h2>
<p>Ahogyan azt a &quot;CSS Box modell megértése&quot; szakaszban korábban, ebben a fejezetben megtanultad, a padding a tartalom külső része és a doboz körüli keret közötti tér — ha van ilyen. Sok elemnek előnyére válik legalább egy kis padding, hogy elkülönítse a keretet a tartalomtól. Beállíthatod ugyanazt a paddingot a tartalomdoboz minden oldalára, vagy külön értékeket állíthatsz be a felső, jobb, alsó és bal paddinghoz. Hasonlóképpen konfigurálhatsz egyetlen keretértéket minden oldalra, vagy külön kereteket állíthatsz be a négy oldalra.</p>
<h3 id="hatarozd-meg-egy-elem-tolteset-es-kereteit-1" tabindex="-1"><a class="header-anchor" href="#hatarozd-meg-egy-elem-tolteset-es-kereteit-1"><span>Határozd meg egy elem töltését és kereteit</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/210-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyisd meg a Visual Studio Code-ot, és válaszd ki a külső CSS fájlt, amelyen dolgozni szeretnél.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban, nyisd meg azt az HTML fájlt, amelyhez kapcsolódik a külső CSS fájl.</p>
</li>
<li>
<p>Nyisd meg az HTML fájlt egy böngészőablakban.</p>
</li>
</ol>
<p><code v-pre>A)</code> Ezek a lépések bemutatják a &quot;75 százalékos billentyűzetek&quot; szakasz formázását.</p>
<p><code v-pre>B)</code> Az HTML fájlban ez a szakasz egy div elem, amelynek a box2 osztály van hozzárendelve.</p>
<ol start="4">
<li>Kattints a CSS fájl fülére.
A CSS fájl megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/210-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>Gépeld be az elemre vonatkozó nevet, egy szóköz után pedig egy nyitó kapcsos zárójel, {. A példában így nézne ki:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div.box2</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code beírja a megfelelő záró kapcsos zárójelét, }.</p>
<ol start="6">
<li>
<p>Nyomj Entert, hogy létrehozz egy üres sort (nem látható).</p>
</li>
<li>
<p>Az üres sorba gépeld be a border: és a kívánt keret részleteit. A példa egy három pixel széles szilárd kék keretet hoz létre.</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div.box2</span> <span class="token punctuation">{</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 3px solid blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>Kattints a Frissítés gombra.A weboldal frissül.</li>
</ol>
<p><code v-pre>C)</code> A keret megjelenik.</p>
<figure><img src="@source/demo/images/9-fejezet/211-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>A keret túl közel van a tartalomhoz a bal oldalon és lent.</p>
<ol start="9">
<li>A CSS fájlban nyomj Enter-t egy új sor létrehozásához, gépeld be a <code v-pre>padding:</code> kódot, majd állítsd be a paddingot. Ebben a példában 10 képpontot használunk felül és alul, valamint 20 képpontot balra és jobbra:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">padding</span><span class="token punctuation">:</span> 10px 20px 10px 20px<span class="token punctuation">;</span>`
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="10">
<li>Kattints a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>D)</code> A padding megjelenik, tér hozzáadása. Ez különösen észrevehető a bal és alsó keretek és a tartalom között.</p>
<figure><img src="@source/demo/images/9-fejezet/211-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="11">
<li>Próbáld meg beállítani a kereteket. Például az egyes keret tulajdonságokat használhatod különböző szélességű és színű keretek beállításához:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">border-top</span><span class="token punctuation">:</span> 4px solid black<span class="token punctuation">;</span>
<span class="token property">border-right</span><span class="token punctuation">:</span> 2px solid red<span class="token punctuation">;</span>
<span class="token property">border-bottom</span><span class="token punctuation">:</span> 4px solid green<span class="token punctuation">;</span>
<span class="token property">border-left</span><span class="token punctuation">:</span> 2px solid blue<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="12">
<li>Kattints a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>E)</code> A testre szabott keretek megjelennek.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIPP</p>
<p><strong>Hogyan készíthetek kereteket lekerekített sarkokkal?</strong></p>
<p>Adj hozzá a <code v-pre>border-radius</code> tulajdonságot a stílusdefinícióhoz. Például használd <code v-pre>border-radius: 20px;</code>-et, hogy lekerekített sarkú kereteket állíts be egy 20 képpontos sugárral.</p>
</div>
<h2 id="allitsa-be-a-margokat-az-elemkozok-szabalyozasahoz" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-margokat-az-elemkozok-szabalyozasahoz"><span>Állítsa be a margókat az elemközök szabályozásához.</span></a></h2>
<p>Ahogy a &quot;CSS Dobozmodell értelmezése&quot; szakaszban, ebben a fejezetben korábban is magyaráztuk, a margó a CSS doboz kívüli terület, a keret és a következő elem közötti tér. Beállíthatja a margókat annak érdekében, hogy ellenőrzés alatt tartsa az egyes elemek körüli tér mennyiségét, és biztosítsa, hogy az elemek ne érintkezzenek egymással - hacsak nem akarja ezt.</p>
<p>A CSS lehetővé teszi az elemek egymásra való átlapolását, ha negatív margókat állít be. Ez a képesség segíthet különböző design hatások létrehozásában. Ha negatív margókat állít be, győződjön meg arról, hogy az eredmények megfelelnek az Ön szándékainak.</p>
<h3 id="allitsa-be-a-margokat-az-elemek-terkozenek-iranyitasahoz" tabindex="-1"><a class="header-anchor" href="#allitsa-be-a-margokat-az-elemek-terkozenek-iranyitasahoz"><span>Állítsa be a margókat az elemek térközének irányításához.</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/212-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Visual Studio Code-ban nyissa meg azt a külső CSS fájlt amelyiken dolgozni szeretne.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyissa meg azon HTML fájlt, amelyhez a külső CSS fájlt csatolta.</p>
</li>
<li>
<p>Nyissa meg a HTML fájlt egy böngésző ablakban.</p>
</li>
</ol>
<p><code v-pre>A)</code> Ezek a lépések bemutatják az oldal dobozolt szekcióinak formázását.</p>
<p><code v-pre>B)</code> Az HTML fájlban minden szakasz egy &quot;div&quot; elem, amelyhez a &quot;box2&quot; osztály van hozzárendelve.</p>
<ol start="4">
<li>Kattintson a CSS fájl fülére. A CSS fájl megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/212-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>
<p>Kattintson a beszúrási pont elhelyezéséhez a formázandó elem stílusában. A példában ez a div. box2 stílus.</p>
</li>
<li>
<p>Nyomja meg az ENTER-t egy üres sor létrehozásához(nem látható).</p>
</li>
<li>
<p>Írja be a margin-t: utána a négy margó értékét - például:
margin: 10px 20px 10px 20px;</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ne felejtse el megadni a beállításokat a felső-jobb-alul-bal sorrendben, ha egyetlen tulajdonságot használ.</p>
</div>
<ol start="8">
<li>Nyomjon rá a Frissítésre. A weboldal lefrissül.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/213-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p><code v-pre>C)</code> Több hely jelenik meg a dobozok bal és jobb oldalán.</p>
<p><code v-pre>D)</code> Tér kerül a két doboz közé.</p>
<ol start="9">
<li>Válassza ki a 7. lépésben létrehozott margó utasítást.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/213-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>Írja felül a margó utasítást, és írjon be négy utasítást, amelyek specifikus tulajdonságokat használnak az egyes margók beállításához:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">margin-top</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property">margin-bottom</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token property">margin-left</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
<span class="token property">margin-right</span><span class="token punctuation">:</span> 25px<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Kísérletezzen különböző margómérésekkel, szükség szerint.</p>
</div>
<ol start="11">
<li>Nyomjon rá a Frissítés-re. A weboldal lefrissül. A margók felveszik a megadott értékeket.</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Hogyan használhatok negatív margót az elemek átfedésének létrehozásához?</strong></p>
<p>Állítsa be a margó negatív értékét azon az oldalon az elemnek, amelyet a másik elem felé szeretne mozgatni. Például, ha azt szeretné, hogy a két doboz ebben a szakaszban átfedjen, és ne válassza el őket egymástól, negatív margó-felső értéket állíthat be az alsó dobozhoz. Ez azt eredményezné, hogy az alsó doboz feljebb kerül, azaz az alsó doboz az alsó dobozra kerülne, vagy az alsó doboz felett.</p>
</div>
<h2 id="a-css-pozicionalas-alapjainak-megertese" tabindex="-1"><a class="header-anchor" href="#a-css-pozicionalas-alapjainak-megertese"><span>A CSS pozicionálás alapjainak megértése</span></a></h2>
<p>Ahhoz, hogy a weboldalak olyan módon jelenjenek meg, ahogy szeretné, meg kell határoznia a tárgyak elhelyezkedését és elrendezését, amelyeket tartalmaznak. A CSS lehetővé teszi az elemek elhelyezkedésének és elrendezésének irányítását a weboldalon négy különböző módon. Elsőként, egyszerűen hagyhatja, hogy a böngésző az elemeket azon sorrendben jelenítse meg, ahogyan azok megjelennek az HTML dokumentumban. Másodszor, elhelyezheti az elemeket a dokumentumfolyamban normál helyzetükhöz viszonyítva. Harmadikként, megadhatja az abszolút elhelyezkedést egy szülőelemhez viszonyítva. Negyedikként, megadhatja a rögzített pozíciót a nézetablakhoz viszonyítva.</p>
<h3 id="statikus-elhelyezes-engedni-a-bongeszonek-hogy-elhelyezze-az-elemeket" tabindex="-1"><a class="header-anchor" href="#statikus-elhelyezes-engedni-a-bongeszonek-hogy-elhelyezze-az-elemeket"><span>Statikus elhelyezés: Engedni a böngészőnek, hogy elhelyezze az Elemeket</span></a></h3>
<p>A statikus pozícionálás a CSS-ben az alapértelmezett pozícionálási típus. A statikus pozícionálás azt eredményezi, hogy az elemek azon a sorrendben jelennek meg, ahogy azok megjelennek az HTML dokumentumban. Általában statikus pozícionálást használ az elemekhez, amelyeknek nincs szükségük különleges pozícionálásra az oldalon. Például, a címek, szöveges bekezdések és listák általában statikus pozícionálást használnak, mert azt szeretné, hogy azok megjelenjenek a weboldalon abban a sorrendben, ahogy azok megjelennek az HTML dokumentumban.</p>
<p>A statikus pozícionálást megadhatja az elemhez úgy, hogy hozzáadja a position tulajdonságot, és beállítja azt statikusra. Azonban mivel a position: static az alapértelmezett beállítás, nem szükséges a tulajdonságot tartalmazza a kódjába, hacsak nem kell felülírnia egy már deklarált position tulajdonságot, amelynek más értéket adott meg.
Például statikus pozícionálást használhat egy div elemhez így:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> static<span class="token punctuation">;</span>
 <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
 <span class="token property">width</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Itt a position: static; állítás valószínűleg szükségtelen, de a kódját határozottabbá teszi. A div elem magassága 200 pixel, és szélessége 300 pixel.</p>
<h3 id="relativ-elhelyezes" tabindex="-1"><a class="header-anchor" href="#relativ-elhelyezes"><span>Relatív elhelyezés</span></a></h3>
<p>A relatív pozícionálással elhelyezhet egy elemet az alapértelmezett pozíciójához viszonyítva az HTML dokumentumban. A relatív pozícionálás áthelyezi az elemet a normál pozíciójából, de a böngésző továbbra is fenntartja a helyet az elem számára a normál pozíciójában, így más elemek nem mozognak bele abba a térbe.</p>
<p>Általában a relatív pozícionálást arra használják, hogy viszonylag kis korrekciókat végezzenek egy elem pozícióján - például, hogy vizuálisan könnyebben érthetővé tegyék kapcsolatát más elemekkel. Habár használhatja a relatív pozícionálást nagyobb korrekciók elvégzésére is egy elem pozíciójának tekintetében, az ilyen módon történő elmozdítások hagyhatnak hézagokat a weboldalakon.</p>
<p>A relatív pozícionálás alkalmazásához állítsa be az elem position tulajdonságát relativ-re. Ezután beállíthatja az elem top, right, bottom és left tulajdonságait annak meghatározására, hogy mennyire kell elmozdítani az objektumot a normális pozíciójától. Az alábbi példa például a .box elemet 30 pixellel lefelé és 20 pixellel balra mozgatja el a normális pozíciójától:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.box</span> <span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
 <span class="token property">top</span><span class="token punctuation">:</span> 30px<span class="token punctuation">;</span>
 <span class="token property">left</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="abszolut-elhelyezes" tabindex="-1"><a class="header-anchor" href="#abszolut-elhelyezes"><span>Abszolút elhelyezés</span></a></h3>
<p>Az abszolút pozícionálás lehetővé teszi egy HTML elem pozícionálását annak legközelebbi pozícionált őséhez viszonyítva, vagy - ha nincs ilyen ős - az ún. kezdeti tartalmazó blokkhoz. A kezdeti tartalmazó blokk az a doboz, amely az összes weboldal tartalmát tartalmazza.</p>
<p>Az abszolút pozícionálás alkalmazásához állítsa be az elem position tulajdonságát abszolútra. Ezt követően beállíthatja az elem top, right, bottom és left tulajdonságait annak meghatározására, hogy milyen távolság legyen az elem és annak legközelebbi pozícionált őse vagy - ha nincs ilyen - az kezdeti tartalmazó blokk között.</p>
<p>Például, feltéve, hogy nincs legközelebbi pozícionált ős, az alábbi kód pozícionálja az upright osztállyal rendelkező div elemet az inicializált tartalmazó blokk jobb felső sarkában:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.upright</span> <span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
 <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rogzitett-elhelyezes" tabindex="-1"><a class="header-anchor" href="#rogzitett-elhelyezes"><span>Rögzített elhelyezés</span></a></h3>
<p>Az CSS-nél a negyedik választási lehetőség a rögzített pozícionálás a nézetablakhoz viszonyítva, nem pedig a dokumentumhoz. A rögzített pozícionálás a nézetablakhoz viszonyítva azt jelenti, hogy az elem ugyanabban a pozícióban marad a nézetablakban, még akkor is, ha a felhasználó görgeti az oldalt. Ez a viselkedés hasznos olyan elemek esetében, amelyeket állandóan meg kell jeleníteni az ablakban.</p>
<p>A rögzített pozícionálás alkalmazásához az elem position tulajdonságát állítsa be fixed értékre. Ezt követően beállíthatja az elem top, right, bottom és left tulajdonságait annak meghatározására, hogy milyen távolság legyen az elem és a nézetablak szélei között.
Az alábbi példa a keep osztállyal rendelkező div elemet a képernyő bal alsó sarkába pozícionálja, 10 pixeles paddinggel:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.keep</span> <span class="token punctuation">{</span>
 <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
 <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="blokk-idezetek-letrehozasa" tabindex="-1"><a class="header-anchor" href="#blokk-idezetek-letrehozasa"><span>Blokk idézetek létrehozása</span></a></h2>
<p>Ha a weboldalak szövegei más forrásokból származnak, lehet, hogy szeretne néhány szövegrészt blokkidézetként formázni, hogy vizuálisan megkülönböztesse őket a rendes szövegtől. Ezt megteheti az HTML blockquote elemének használatával, hogy létrehozzon egy alapvető blokkidézetet, majd alkalmazza a stílusokat CSS segítségével annak érdekében, hogy elérje azt a megjelenést, amelyet szeretne.</p>
<p>A legtöbb webböngésző behúzást használ a blockquote elem vizuális kiemeléséhez. Néhányan más stílusokat is alkalmaznak, például más háttérszínt jelenítenek meg a blokkidézetnél, vagy keretet adnak neki.</p>
<h3 id="blokkidezetek-letrehozasa" tabindex="-1"><a class="header-anchor" href="#blokkidezetek-letrehozasa"><span>Blokkidézetek létrehozása</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/216-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Visual Studio Code-ban nyissa meg a külső CSS fájlt amellyel dolgozni szeretne.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyissa meg azon HTML fájlt, amelyhez csatolt egy külső CSS fájlt.</p>
</li>
<li>
<p>Nyissa meg a HTML fájlt egy böngésző ablakban.</p>
</li>
</ol>
<p><code v-pre>A)</code> A példa idézet bekezdésként van formázva.</p>
<p><code v-pre>B)</code> Az idézet egy szabványos bekezdésként jelenik meg az weboldalon.</p>
<ol start="4">
<li>Cserélje ki az <code v-pre>&lt;p&gt;</code> nyitó tagot a <code v-pre>&lt;blockquote&gt;</code> nyitó taggal.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/216-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>
<p>Cserélje le a <code v-pre>&lt;/p&gt;</code> záró tagot a <code v-pre>&lt;/blockquote&gt;</code> záró taggal.</p>
</li>
<li>
<p>Cserélje le az idézeti sorban lévő <code v-pre>&lt;p&gt;</code> nyitó tagot a <code v-pre>&lt;cite&gt;</code> nyitó taggal.</p>
</li>
<li>
<p>Cserélje le a <code v-pre>&lt;/p&gt;</code> záró tagot a <code v-pre>&lt;/cite&gt;</code> záró taggal.</p>
</li>
<li>
<p>Kattintson rá a Frissítésre. A weboldal lefrissül.</p>
</li>
</ol>
<p><code v-pre>C)</code> A blockquote elem behúzottan jelenik meg, de más formázás nélkül.</p>
<p><code v-pre>D)</code> A hivatkozás dőlt betűvel jelenik meg, de behúzás nélkül.</p>
<ol start="9">
<li>Kattintson a CSS fájl fülére. A CSS fájl megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/217-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="10">
<li>
<p>Írja be a blockquote szót, egy szóközt és a nyitó kapcsos zárójel { jelét. A Visual Studio Code automatikusan beírja a záró kapcsos zárójelet, }.</p>
</li>
<li>
<p>Nyomja meg az ENTERT, hogy létrehozzon egy üres sort(nem látható).</p>
</li>
<li>
<p>Írja be az idézet formázását. Az alábbi példa alkalmaz egy világosszürke háttérszínt, egy világosszürke sávot a bal oldalon, valamint margót és paddingot:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">blockquote</span> <span class="token punctuation">{</span>
 <span class="token property">background-color</span><span class="token punctuation">:</span> #f9f9f9<span class="token punctuation">;</span>
 <span class="token property">border-left</span><span class="token punctuation">:</span> 10px solid #ccc<span class="token punctuation">;</span>
 <span class="token property">margin</span><span class="token punctuation">:</span> 1.5em 10px<span class="token punctuation">;</span>
 <span class="token property">padding</span><span class="token punctuation">:</span> 0.5em 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>Kattintson rá a Frissítésre. A weboldal lefrissül. A formázás megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/217-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="14">
<li>
<p>Az új sorban a CSS fájlban írja be a <code v-pre>cite</code>, egy szóközt, és a nyitó kapcsos zárójel <code v-pre>{</code> karaktert. A Visual Studio Code automatikusan beírja a záró kapcsos zárójelet, <code v-pre>}</code>.</p>
</li>
<li>
<p>Nyomja meg az ENTERT, hogy létrehozzon egy üres sort(nem látható).</p>
</li>
<li>
<p>Írja be a hivatkozás formázását. Ebben az egyszerű példában egyszerűen behúzást adunk hozzá:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">cite</span> <span class="token punctuation">{</span>
 <span class="token property">margin-left</span><span class="token punctuation">:</span> 3em<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="17">
<li>Kattintson rá a Frissítésre. A weboldal lefrissül.</li>
</ol>
<p><code v-pre>E)</code>A hivatkozás megkapja a formázást.</p>
<p>::: ti Tipp
<strong>Van e előnye annak, ha a blockquote elemet használja, ahelyett hogy csak behúzást alkalmazna egy idézet elkülönítéséhez?</strong></p>
<p>Igen - a blockquote elem használatának van szemantikai célja is, nemcsak vizuális célja, mivel az elem közli a keresőmotorokkal és segédtechnológiákkal, hogy a tartalom egy idézet. Ez az extra információ növelheti az elérhetőséget, és javíthatja az SEO pontszámokat.
:::</p>
<h2 id="rogzitsen-egy-elemet-a-helyere-a-nezetablakban" tabindex="-1"><a class="header-anchor" href="#rogzitsen-egy-elemet-a-helyere-a-nezetablakban"><span>Rögzítsen egy elemet a helyére a nézetablakban</span></a></h2>
<p>Ahogyan megtanulta a &quot;CSS pozícionálás alapjainak megértése&quot; szakaszban, amely korábban ebben a fejezetben szerepelt, egy elemet rögzíthet az elrendezésben - a böngésző területén, amely megjeleníti a weboldalt -, ha az elem position tulajdonságát fixed-re állítja. Egy rögzített elem látható marad a böngészőablakban, még akkor is, ha a felhasználó görgeti az weboldalt.</p>
<p>Lehet, hogy szeretne rögzíteni egy elemet a helyén annak érdekében, hogy lényeges információkat jelenítsen meg, például figyelmeztetést vagy felhasználási feltételeket; hogy navigációs menük jelenjenek meg, hogy a látogatók könnyen tájékozódhassanak; vagy hogy kiemelten jelenítse meg a hirdetéseket.</p>
<h3 id="rogzitse-az-elemet-a-nezetablakban" tabindex="-1"><a class="header-anchor" href="#rogzitse-az-elemet-a-nezetablakban"><span>Rögzítse az elemet a nézetablakban</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/218-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Visual Studio Code-ban nyissa meg a külső CSS fájlt amivel dolgozni szeretne.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyissa meg azon HTML fájlt, amelyhez csatolt egy külső CSS fájlt.</p>
</li>
</ol>
<p>Megjegyzés: Nyisson meg egy olyan HTML fájlt, amely elég hosszú ahhoz, hogy fel és le tudjon görgetni bármilyen ablakméret esetén is.</p>
<ol start="3">
<li>
<p>Nyissa meg a HTML fájlt egy böngésző ablakban.</p>
</li>
<li>
<p>A HTML fájlban kattints oda ahova szeretnéd a fix elemet behelyezni.</p>
</li>
<li>
<p>Írja be a <code v-pre>&lt;div class=&quot;</code>, a megadni kívánt osztály nevét, majd a <code v-pre>&quot;&gt;</code> kifejezést - például:</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>disclaimer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="@source/demo/images/9-fejezet/218-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>
<p>Nyomjon ENTERT kétszer az üres sor létrehozásához, majd írja be a záró <code v-pre>&lt;/div&gt;</code> címkét.</p>
</li>
<li>
<p>Közéjük írja be azokat az információkat, amelyeket meg szeretne jeleníteni - például:</p>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>DISCLAIMER: This information
is provided as-is and
without guarantee.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>Kattintson a CSS fájl fülére. A CSS fájl megjelenik.</li>
</ol>
<figure><img src="@source/demo/images/9-fejezet/219-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>Egy üres soron írja be az osztálystílus nevét, egy szóközt, majd egy nyitó kapcsos zárójel { karaktert - például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>div.disclaimer { 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code automatikusan beszúrja a záró kapcsos zárójelet, <code v-pre>}</code>.</p>
<ol start="10">
<li>
<p>Nyomjon ENTERT, hogy létrehozzon egy üres sort(nem látható).</p>
</li>
<li>
<p>Az üres soron írja be a <code v-pre>position: fixed;</code> kifejezést.</p>
</li>
<li>
<p>A következő sorokban adja meg a stílusformázást - például:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">div.disclaimer</span> <span class="token punctuation">{</span>
<span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
<span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token property">padding</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token property">background-color</span><span class="token punctuation">:</span> navy<span class="token punctuation">;</span>
<span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="13">
<li>Kattintson rá a Frissítésre.A weboldal lefrissül.</li>
</ol>
<p><code v-pre>A)</code> A rögzített elem megjelenik.</p>
<figure><img src="@source/demo/images/9-fejezet/219-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="14">
<li>Görgessen le.</li>
</ol>
<p><code v-pre>B)</code> A rögzített elem a nézetablakban marad, még akkor is, ha az oldal görgetése történik.</p>
<div class="hint-container tip">
<p class="hint-container-title">Tipp</p>
<p><strong>Mire kell figyelni az elemek rögzítésekor?</strong></p>
<p>A legfontosabb szempont az, hogy az elemek megjelenjenek a nézetablakban, és úgy jelenjenek meg, ahogyan szeretné. Készüljön fel arra, hogy tesztelni kell az oldalakat különféle eszközökön és böngészőkön annak érdekében, hogy meggyőződjön arról, hogy az elemek láthatóak és megfelelően jelennek meg, anélkül hogy egymásra lennének tolva.</p>
<p>A rögzített elemek esetén relatív mértékegységeket - például emeket, remeket vagy százalékokat - használjon, és ne pixelértékeket, hogy biztosítsa, hogy az elemek helyesen legyenek pozícionálva különböző eszközökön és kijelzőméreteken.</p>
</div>
<h2 id="egy-elem-lebegtetese-egy-masik-elem-mellett" tabindex="-1"><a class="header-anchor" href="#egy-elem-lebegtetese-egy-masik-elem-mellett"><span>Egy elem lebegtetése egy másik elem mellett</span></a></h2>
<p>A CSS lehetővé teszi, hogy egy elemet egy másik elemtől jobbra vagy balra lebegtesse. Például, egy képet a képhez kapcsolódó szöveges bekezdés jobb oldalán lebegtetni.</p>
<p>Ahhoz, hogy egy elemet lebegővé tegyen, a float tulajdonságát balra vagy jobbra állítja; a float: inherit; beállítást, hogy az elem örökölje a lebegtetést a szülőjétől. Amikor egy elemet lebegővé teszi, beállíthatja a clear tulajdonságot a következő elemeken, hogy azok ne legyenek a lebegő elem egyik vagy mindkét oldalán.</p>
<h3 id="egy-elem-balra-usztatasahoz-szukseges-osztalystilus-letrehozasa" tabindex="-1"><a class="header-anchor" href="#egy-elem-balra-usztatasahoz-szukseges-osztalystilus-letrehozasa"><span>Egy elem balra úsztatásához szükséges osztálystílus létrehozása</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/220-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyissa meg a Visual Studio Code-ban a külső CSS-fájlt, amellyel dolgozni szeretne.</p>
</li>
<li>
<p>Szintén a Visual Studio Code-ban nyissa meg az a HTML-fájlt, amelyhez hozzárendelte a külső CSS-fájlt.</p>
</li>
<li>
<p>Nyissa meg a HTML-fájlt egy böngészőablakban.</p>
</li>
<li>
<p>A CSS-fájlban kattintson a beszúrási pont elhelyezéséhez egy üres sorra.</p>
</li>
</ol>
<div class="hint-container note">
<p class="hint-container-title">Megjegyzés:</p>
<p>Ez a példa osztálystílusokat hoz létre az úszó elemekhez, így szükség szerint alkalmazhatja az osztályokat a különböző elemekre.</p>
</div>
<figure><img src="@source/demo/images/9-fejezet/220-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="5">
<li>Írja be az osztály nevét, amelyet egy elem balra úsztatásához fog használni, egy szóközt és egy nyitó kapcsot, { - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.float-left</span> <span class="token punctuation">{</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>A Visual Studio Code beírja a megfelelő zárójelet, }.</p>
<ol start="6">
<li>Nyomja meg az Enter billentyűt egy üres sor létrehozásához, majd írja be a következőt:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="7">
<li>Nyomja meg az Enter billentyűt, és adjon hozzá további tulajdonságokat, szükség szerint -
például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token property">padding-right</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8">
<li>Ismételje meg az 5-7. lépéseket egy osztálystílus létrehozásához egy elem jobbra úsztatásához - például:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.float-right</span> <span class="token punctuation">{</span>
    <span class="token property">float</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">padding-left</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/9-fejezet/221-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="9">
<li>
<p>lépés: Kattintson a HTML-fájl fülre. Megjelenik a HTML-fájl.</p>
</li>
<li>
<p>Keresse meg a lebegtetési tartalmat.</p>
</li>
</ol>
<p>::: noteMegjegyzés: Ha a lebegtetési tartalom még nem létezik, hozza létre.</p>
<ol start="11">
<li>
<p>Kattintson a balra lebegni kívánt elem nyitó címkéjére, és írja be az osztály=&quot; parancsot, az osztálynevet és a &quot; -t, például:
class=&quot;balraUsztatott&quot;</p>
</li>
<li>
<p>Kattintson a Frissítés gombra.A weboldal frissül.</p>
</li>
</ol>
<p><code v-pre>A)</code> kép a címsor és a bekezdés bal oldalára úszik.</p>
<figure><img src="@source/demo/images/9-fejezet/221-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="13">
<li>A HTML-fájlban kattintson a jobbra lebegni kívánt elem nyitó címkéjére, és írja be az class=&quot; parancsot, az osztálynevet és a &quot; -t, például:</li>
</ol>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code>class="jobbraUsztatott"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="14">
<li>Kattintson a Frissítés gombra. A weboldal frissül.</li>
</ol>
<p><code v-pre>B)</code> A kép a címsor és a bekezdés jobb oldalára úszik.</p>
<div class="hint-container tip">
<p class="hint-container-title">TIP</p>
<p><strong>Hogyan használjuk a clear tulajdonságot?</strong></p>
<p>A clear tulajdonság használatával megadhatja a böngészőnek, hogy egy elemet helyezzen el az előtte lévő úszó elemek alá. A clear tulajdonság értékei a következők:
left: Az elemet az előtte lévő balra úszó elemek alá helyezi.
right: Az elemet az előtte lévő jobbra úszó elemek alá helyezi.
both: Az elemet az előtte lévő balra és jobbra úszó elemek alá helyezi.
inherit: Az elemet örökli a szülőelemtől.
none: Az elemet nem helyezi el az úszó elemek alá.</p>
</div>
<h2 id="a-display-tulajdonsag-megertese" tabindex="-1"><a class="header-anchor" href="#a-display-tulajdonsag-megertese"><span>A &quot;display&quot; tulajdonság megértése</span></a></h2>
<p>A CSS egy &quot;display&quot; nevű tulajdonságot biztosít, amellyel vezérelheted, hogyan jelenik meg egy elem a böngészőablakban. Például a &quot;display&quot; tulajdonsággal elérheted, hogy a böngésző egy elemet blokként jelenítsen meg, amely kitölti az ablak teljes szélességét, vagy rácsos konténerként, amelyben elrendezheted a gyerekelemeket. A &quot;display&quot; tulajdonsággal egy elemet teljesen el is rejthetsz.</p>
<p>Ez a fejezet a &quot;display&quot; tulajdonság áttekintését adja. A következő fejezet gyors példákat mutat be a &quot;display&quot; tulajdonság használatára.</p>
<h3 id="a-display-tulajdonsag-hasznalatanak-megismerese" tabindex="-1"><a class="header-anchor" href="#a-display-tulajdonsag-hasznalatanak-megismerese"><span>A &quot;display&quot; tulajdonság használatának megismerése</span></a></h3>
<p>A &quot;display&quot; tulajdonsággal utasíthatod a böngészőt, hogyan jelenítsen meg egy adott elemet. A &quot;display&quot; tulajdonságot az elem stílusához kell hozzáadni, és a megfelelő értéket kell hozzárendelni, amint az a 9-5. táblázatban látható.</p>
<h2 id="_9-5-tablazat-a-display-tulajdonsag-ertekei" tabindex="-1"><a class="header-anchor" href="#_9-5-tablazat-a-display-tulajdonsag-ertekei"><span>9-5. táblázat: A &quot;display&quot; tulajdonság értékei</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Érték</th>
<th style="text-align:left">Hogyan jelenik meg az elem</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">none</td>
<td style="text-align:left">Egyáltalán nem</td>
</tr>
<tr>
<td style="text-align:left">block</td>
<td style="text-align:left">Blokk szintű elemként, amely a konténerben elérhető teljes szélességet elfoglalja, és a következő elemeket új sorba helyezi</td>
</tr>
<tr>
<td style="text-align:left">inline</td>
<td style="text-align:left">Beágyazottan, így más elemek is megjelenhetnek ugyanazon a soron</td>
</tr>
<tr>
<td style="text-align:left">inline-block</td>
<td style="text-align:left">Beágyazott blokkként, amelynek a magasságát és szélességét beállíthatod</td>
</tr>
<tr>
<td style="text-align:left">flex</td>
<td style="text-align:left">Rugalmas konténerként, amelyben a gyerekelemeket igény szerint elrendezheted</td>
</tr>
<tr>
<td style="text-align:left">grid</td>
<td style="text-align:left">Rácsos konténerként, amelyben a gyerekelemeket rácsra rendezheted</td>
</tr>
<tr>
<td style="text-align:left">table</td>
<td style="text-align:left">Táblázatként</td>
</tr>
<tr>
<td style="text-align:left">table-row</td>
<td style="text-align:left">Táblázatsorként</td>
</tr>
<tr>
<td style="text-align:left">table-cell</td>
<td style="text-align:left">Táblázatcsekként</td>
</tr>
<tr>
<td style="text-align:left">list-item</td>
<td style="text-align:left">Listaelemként</td>
</tr>
<tr>
<td style="text-align:left">inherit</td>
<td style="text-align:left">A szülőobjektummal azonos &quot;display&quot; értéket használja</td>
</tr>
<tr>
<td style="text-align:left">initial</td>
<td style="text-align:left">Az elemhez a böngésző alapértelmezett stílusát használja</td>
</tr>
<tr>
<td style="text-align:left">unset</td>
<td style="text-align:left">A szülőobjektummal azonos &quot;display&quot; értéket használja; ha nincs szülő, az elemhez az alapértelmezett stílust használja</td>
</tr>
</tbody>
</table>
<h2 id="egy-elem-megjelenesenek-vezerlese" tabindex="-1"><a class="header-anchor" href="#egy-elem-megjelenesenek-vezerlese"><span>Egy elem megjelenésének vezérlése</span></a></h2>
<p>Az előző fejezetben, a &quot;display tulajdonság megismerése&quot; címűben megismerte a display tulajdonságot és azokat a beállításokat, amelyeket kínál az elemek weboldalon történő megjelenésének vezérléséhez. Ebben a fejezetben kettőt fogunk használni ezek közül a beállítások közül, hogy láthassa az általuk létrehozott effektusokat. Először beállítja egy elem display tulajdonságát &quot;none&quot; értékre, hogy a böngésző elrejtse az objektumot. Másodszor beállítja egy nem blokk elem display tulajdonságát &quot;block&quot; értékre, hogy kényszerítse a böngészőt az elem blokkként történő megjelenítésére, kiemelve az elemet.</p>
<h3 id="egy-elem-megjelenitesenek-vezerlese" tabindex="-1"><a class="header-anchor" href="#egy-elem-megjelenitesenek-vezerlese"><span>Egy elem megjelenítésének vezérlése</span></a></h3>
<figure><img src="@source/demo/images/9-fejezet/223-1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol>
<li>
<p>Nyissa meg a külső CSS fájlt a Visual Studio Code-ban.</p>
</li>
<li>
<p>A Visual Studio Code-ban nyissa meg azt a HTML fájlt is, amelyhez hozzárendelte a külső CSS fájlt.</p>
</li>
<li>
<p>Nyissa meg a HTML fájlt egy böngészőablakban.</p>
</li>
<li>
<p>Írjon be egy osztálystílust az elemek elrejtéséhez a display: none megadásával:</p>
</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.hide</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>Írjon be egy osztálystílust egy elem blokk formátumú megjelenítésének kényszerítéséhez a display: block megadásával:</li>
</ol>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.force-block</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="@source/demo/images/9-fejezet/223-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ol start="6">
<li>
<p>Kattintson a HTML fájl fülre.</p>
</li>
<li>
<p>Az elrejteni kívánt elem nyitó tagjében írja be a class=&quot;hide&quot; kifejezést.</p>
</li>
<li>
<p>A blokk formátumban megjeleníteni kívánt elem nyitó tagjében írja be a class=&quot;force-block&quot; kifejezést.</p>
</li>
<li>
<p>Kattintson a Frissítés gombra. Ez a lépés frissíti a weboldalt, és megjeleníti az elvégzett módosításokat.</p>
</li>
</ol>
<p><code v-pre>C)</code> A hivatkozás blokk elemként, saját sorában jelenik meg.</p>
<h2 id="flexbox-elrendezes-letrehozasa" tabindex="-1"><a class="header-anchor" href="#flexbox-elrendezes-letrehozasa"><span>Flexbox elrendezés létrehozása</span></a></h2>
<p>A CSS egy Flexbox nevű elrendezési modellt biztosít rugalmas és reszponzív elrendezések létrehozásához weboldalakon. A Flexbox használatával elrendezheted az elemeket egy konténerben anélkül, hogy tudnád, mekkora a konténer mérete, ami segít dinamikus elrendezések létrehozásában, amelyek különböző képernyőméretekhez és eszköztípusokhoz alkalmazkodnak.</p>
<p>Jelenleg a legtöbb modern webböngésző teljes mértékben támogatja a Flexboxot, így nagy magabiztossággal használhatod, hogy az elrendezéseid működni fognak. Mindazonáltal továbbra is bölcs dolog tesztelni a különböző böngészőkön és eszközökön.</p>
<h3 id="flexbox-kontener-elem-letrehozasa" tabindex="-1"><a class="header-anchor" href="#flexbox-kontener-elem-letrehozasa"><span>Flexbox konténer elem létrehozása</span></a></h3>
<p>A Flexbox elrendezés létrehozásához először nyisd meg azt az HTML dokumentumot, amelyben az elrendezést létre szeretnéd hozni, vagy szükség esetén hozz létre egy új HTML dokumentumot. A HTML dokumentumban azon a ponton, ahol az elrendezést létre szeretnéd hozni, adj hozzá egy elemet, amely konténerként fog működni.</p>
<p>Például létrehozhatsz egy div elemet, és hozzárendelhetsz hozzá egy my_flex nevű osztályt, amely lehetővé tenné az egyes konténerek formázását egy külső CSS fájlból. A div elemed a következőhöz hasonlóan nézhet ki:</p>
<div class="my_flex">
</div>
<h3 id="allitsd-be-az-osztaly-stilusanak-display-tulajdonsagat-flex-ertekre" tabindex="-1"><a class="header-anchor" href="#allitsd-be-az-osztaly-stilusanak-display-tulajdonsagat-flex-ertekre"><span>Állítsd be az osztály stílusának display tulajdonságát flex értékre</span></a></h3>
<p>Ezután a HTML dokumentumhoz csatolt külső CSS fájlban hozz létre egy stílust az osztályhoz, amelyben megadod a display: flex; értéket a konténer rugalmassá tételéhez. A stílusdefiníciód a következőhöz hasonlóan nézhet ki:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.my_flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tartalom-hozzaadasa-a-kontener-elemhez" tabindex="-1"><a class="header-anchor" href="#tartalom-hozzaadasa-a-kontener-elemhez"><span>Tartalom hozzáadása a konténer elemhez</span></a></h3>
<p>Ezután térj vissza a HTML dokumentumhoz, és add hozzá a konténer elemedhez azokat a tartalomelemeket, amelyeket a Flexboxban szeretnél megjeleníteni. Ezek az elemek a szokásos módon működnek, annak ellenére, hogy a Flexbox átrendezi az elrendezésüket a különböző böngészők és eszközök számára szükség szerint.</p>
<p>Például hozzáadhatsz hat div elemet a konténer elemedhez, így a következőhöz hasonlóan fog kinézni, amely nem jeleníti meg az egyes hat div elemben lévő elemeket:</p>
<div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>my_flex<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>4. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>5. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>6. szekció<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="a-flexbox-tulajdonsagok-beallitasa" tabindex="-1"><a class="header-anchor" href="#a-flexbox-tulajdonsagok-beallitasa"><span>A flexbox tulajdonságok beállítása</span></a></h2>
<p>Miután tartalmat adtál hozzá a konténer elemedhez, térj vissza a külső CSS fájlhoz, és állítsd be a Flexbox tulajdonságokat a kívánt elrendezés eléréséhez.</p>
<p>A Flexbox számos tulajdonsággal rendelkezik, amelyekkel testreszabhatod az elrendezést. A 9-6. táblázat a Flexbox beállítható tulajdonságait foglalja össze.</p>
<h3 id="_9-6-tablazat-flexbox-tulajdonsagok" tabindex="-1"><a class="header-anchor" href="#_9-6-tablazat-flexbox-tulajdonsagok"><span>9-6. táblázat: Flexbox tulajdonságok</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">Tulajdonság</th>
<th style="text-align:left">Leírás</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">display</td>
<td style="text-align:left">Megadja a megjelenítési doboz típusát. Állítsd flex értékre a flex konténer engedélyezéséhez.</td>
</tr>
<tr>
<td style="text-align:left">flex-direction</td>
<td style="text-align:left">Megadja a flex konténer fő tengelyének irányát. Beállíthatod row, row-reverse, column vagy column-reverse értékre.</td>
</tr>
<tr>
<td style="text-align:left">flex-wrap</td>
<td style="text-align:left">Megadja, hogy a flex elemek áthajthatók-e több sorba. Beállíthatod wrap, wrap-reverse vagy nowrap értékre.</td>
</tr>
<tr>
<td style="text-align:left">flex-flow</td>
<td style="text-align:left">Rövidítési tulajdonság, amely a flex-direction tulajdonságot és a flex-wrap tulajdonságot kombinálja.</td>
</tr>
<tr>
<td style="text-align:left">justify-content</td>
<td style="text-align:left">Megadja, hogyan kell igazítani a flex elemeket a flex konténer fő tengelye mentén. Beállíthatod flex-start, flex-end, center, space-between, space-around vagy space-evenly értékre.</td>
</tr>
<tr>
<td style="text-align:left">align-items</td>
<td style="text-align:left">Megadja, hogyan kell igazítani a flex elemeket a flex konténer kereszttengelye mentén. Beállíthatod flex-start, flex-end, center, baseline vagy stretch értékre.</td>
</tr>
<tr>
<td style="text-align:left">align-content</td>
<td style="text-align:left">Megadja, hogyan kell igazítani a flex elemek többsoros sorait a flex konténer kereszttengelye mentén. Beállíthatod flex-start, flex-end, center, space-between, space-around vagy stretch értékre.</td>
</tr>
<tr>
<td style="text-align:left">order</td>
<td style="text-align:left">Megadja a flex elemek megjelenítési sorrendjét. Az alapértelmezett érték 0. Pozitív vagy negatív értékeket adhatsz meg a sorrend megváltoztatásához.</td>
</tr>
<tr>
<td style="text-align:left">flex-grow</td>
<td style="text-align:left">Megadja, hogy egy flex elem mennyire növekedjen a flex konténerben lévő többi flex elemhez képest. Az alapértelmezett érték 0, ami megakadályozza az elem növekedését.</td>
</tr>
<tr>
<td style="text-align:left">flex-shrink</td>
<td style="text-align:left">Megadja, hogy egy flex elem mennyire zsugorodjon a flex konténerben lévő többi flex elemhez képest. Az alapértelmezett érték 1, ami lehetővé teszi az elem zsugorodását szükség esetén.</td>
</tr>
<tr>
<td style="text-align:left">flex-basis</td>
<td style="text-align:left">Megadja egy flex elem kezdeti méretét, mielőtt a böngésző elosztaná a fennmaradó helyet. Az alapértelmezett érték, az auto, az elem méretét a tartalma alapján határozza meg.</td>
</tr>
<tr>
<td style="text-align:left">flex</td>
<td style="text-align:left">Rövidítési tulajdonság, amely a flex-grow tulajdonságot, a flex-shrink tulajdonságot és a flex-basis tulajdonságot kombinálja.</td>
</tr>
<tr>
<td style="text-align:left">align-self</td>
<td style="text-align:left">Egyetlen flex elemet igazít a flex konténer kereszttengelye mentén, felülírva az align-items tulajdonságot. Beállíthatod auto, flex-start, flex-end, center, baseline vagy stretch értékre.</td>
</tr>
</tbody>
</table>
<p>Például az alábbi stílus használatával megadhatsz egy flex elrendezést, vízszintesen középre igazíthatod az elemeket, függőlegesen középre igazíthatod az elemeket, sorba rendezheted az elemeket, és szükség esetén áthajthatod az elemeket a következő sorba:</p>
<div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre v-pre class="language-css"><code><span class="token selector">.my_flex</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


